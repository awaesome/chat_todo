import * as TYPE from './types'
import uuidv4 from 'uuid/v4'
import socket from './initSocket'

export const initUser = name => ({
  type: TYPE.INIT_USER,
  payload: {name, id: uuidv4(), socket}
})

export const updateUsers = users => ({
  type: TYPE.UPDATE_USERS,
  payload: users
})
