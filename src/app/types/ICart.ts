/**
 * Manage user shopping cart
 */
import { CartItem, ICartItem } from "./ICartItem"
import { IUser } from "./IUser"

export type ICart = {
  /**
   * Shopping cart user.
   */
  user: IUser

  /**
   * Shopping cart items with id and amount > 0.
   */
  items: ICartItem[]

  // TODO Items deleted, visited, etc...

  /**
   * Add item permanently to shopping cart.
   * Additional requests only affect the amount for item.
   * @param id item identifier
   * @param amount value greater than zero is accepted
   */
  add(id: string, amount: number): ICart

  /**
   * Remove item "softly" from shopping Cart.
   * Sets amount to zero so that item
   * remain in cart but not in public items
   * during shopping prosess.
   * @param id
   */
  remove(id: string): ICart
}

export class Cart implements ICart {
  user: IUser
  items: ICartItem[]

  // unique items id and amount
  private _items: Map<string, number>

  constructor(user: IUser) {
    this.user = user
    this.items = new Array<ICartItem>()
    this._items = new Map<string, number>()
    console.log("new", this)
  }

  private setItems(): void {
    // unique items
    const keys = Array.from(this._items.keys())
    // with amount > 0
    const items = keys.filter((id) => (this._items.get(id) ?? 0) > 0)
    // into current items
    this.items = items.map((id) => {
      const amount = this._items.get(id) ?? 0
      return new CartItem(this, id, amount)
    })
  }

  add(id: string, amount: number): ICart {
    if (amount > 0) this._items.set(id, amount)
    this.setItems()
    return this
  }

  remove(id: string): ICart {
    this._items.set(id, 0)
    this.setItems()
    return this
  }
}
