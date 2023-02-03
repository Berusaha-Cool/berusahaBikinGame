import { createContext, useEffect, useState } from 'react'
import { logoutFirebase, onAuthStateHasChanged, singInWithGoogle } from '../firebase/providers'

export interface AuthStateContext {
  userId: string | null
  status: 'checking' | 'authenticated' | 'no-authenticated'
  displayName: string
  photoURL: string
  email: string
  handleLoginWithGoogle: () => Promise<void>
  handleLoginWithCredentials: (password: string, email: string) => Promise<void>
  handleRegisterWithCredentials: (password: string, email: string) => Promise<void>
  handleLogOut: () => Promise<void>
}

const initialState: Pick<
  AuthStateContext,
  'status' | 'userId' | 'displayName' | 'photoURL' | 'email'
> = {
  userId: null,
  status: 'checking',
  displayName: '',
  photoURL: '',
  email: '',
}

export const AuthContext = createContext({} as AuthStateContext)

interface IElement {
  children: JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: IElement) => {
  const [session, setSession] = useState(initialState)

  useEffect(() => {
    onAuthStateHasChanged(setSession)
  }, [])

  const handleLogOut = async () => {
    logoutFirebase()
    setSession({
      userId: null,
      status: 'no-authenticated',
      displayName: 'null',
      photoURL: '',
      email: '',
    })
    try {
      window.location.reload()
      console.log('succes logout')
    } catch (error) {
      console.log('fail')
    }
  }

  const validateAuth = (userId: any, displayName: any, email: any, photoURL: any) => {
    if (userId)
      return setSession({
        userId,
        status: 'authenticated',
        displayName,
        email,
        photoURL,
      })
    handleLogOut()
  }

  const checking = () => setSession((prev) => ({ ...prev, status: 'checking' }))

  const handleLoginWithGoogle = async () => {
    checking()
    const { uid, displayName, email, photoURL } = await singInWithGoogle()
    const userId = uid
    validateAuth(userId, displayName, email, photoURL)
  }

  return (
    <AuthContext.Provider
      value={{
        ...session,
        handleLoginWithGoogle,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
