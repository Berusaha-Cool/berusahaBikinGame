import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { AuthStateContext } from '../context/authContext'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)

    const { uid, displayName, email, photoURL } = result.user
    return { uid, displayName, email, photoURL }
  } catch (e) {
    alert((e as Error).message)
  }
}

type StateDispatch = React.Dispatch<
  React.SetStateAction<
    Pick<AuthStateContext, 'status' | 'userId' | 'displayName' | 'photoURL' | 'email'>
  >
>

export const onAuthStateHasChanged = (setSession: StateDispatch) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user)
      return setSession({
        status: 'no-authenticated',
        userId: null,
        displayName: 'anonymous',
        photoURL: 'anonymous',
        email: 'anonymous',
      })

    setSession({
      status: 'authenticated',
      userId: user!.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
    })
  })
}

export const logoutFirebase = async () => await FirebaseAuth.signOut()
