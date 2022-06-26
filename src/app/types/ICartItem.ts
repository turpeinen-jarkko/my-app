import { ICart } from "./ICart"

/**
 * Cart Item can increase amount to infinite or decrease to 1
 */
export interface ICartItem {
  /**
   * Internal item identifier
   */
  id: string

  /**
   * Ordering amount 1 to infinite
   */
  amount: number

  /**
   * Got greedy!
   */
  increase(): ICart

  /**
   * Remembered climate!
   */
  decrease(): ICart
}

export class CartItem implements ICartItem {
  id: string
  amount: number

  private _cart: ICart

  constructor(cart: ICart, id: string, amount: number) {
    this._cart = cart
    this.id = id
    this.amount = amount ?? 0
    console.log("new", this)
  }

  increase(): ICart {
    this._cart.add(this.id, ++this.amount)
    return this._cart
  }

  decrease(): ICart {
    if (this.amount > 1) this._cart.add(this.id, --this.amount)
    return this._cart
  }
}
