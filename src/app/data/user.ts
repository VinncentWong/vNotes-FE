export type Registration = {
  email: string,
  password: string,
  username: string
}

export type Login = {
  email: string,
  password: string
}

export class User{
  id?: number
  username?: string
  email?: string
  password?: string
  role?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date

  constructor(){}
}
