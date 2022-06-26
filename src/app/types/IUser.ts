/**
 * Shop User
 */

export interface IUser {
  id: string
  role: string
  avatar: string
}

export class User implements IUser {
  id: string
  role: string
  avatar: string

  constructor(id: string) {
    this.id = id
    this.role = ""
    this.avatar = ""
    console.log("new", this)
  }

  asGuest(): IUser {
    return {
      id: this.id,
      role: "guest",
      avatar: "guest avatar",
    }
  }

  asUser(): IUser {
    return {
      id: this.id,
      role: "user role",
      avatar: "user avatar",
    }
  }
}
