import { Command } from '@colyseus/command'
import { Client } from 'colyseus'
import { IOfficeState } from '../../../types/IOfficeState'

type Payload = {
  client: Client
  calenderId: string
}

export class CalenderAddUserCommand extends Command<IOfficeState, Payload> {
  execute(data: Payload) {
    const { client, calenderId } = data
    const calender = this.room.state.calenders.get(calenderId)
    const clientId = client.sessionId

    if (!calender || calender.connectedUser.has(clientId)) return
    calender.connectedUser.add(clientId)
  }
}

export class CalenderRemoveUserCommand extends Command<IOfficeState, Payload> {
  execute(data: Payload) {
    const { client, calenderId } = data
    const calender = this.room.state.calenders.get(calenderId)

    if (calender.connectedUser.has(client.sessionId)) {
      calender.connectedUser.delete(client.sessionId)
    }
  }
}
