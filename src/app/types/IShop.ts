import { ICart } from "./ICart"

/**
 * Shop
 */
export interface IShop {
  cart: ICart
}

export class Shop implements IShop {
  cart: ICart

  constructor(cart: ICart) {
    this.cart = cart
    console.log("new", this)
  }
}
