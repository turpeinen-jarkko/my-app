import React from "react"
import { ICartItem } from "app/types/ICartItem"
import { ICart } from "app/types/ICart"

interface IProps {
  state: ICart
  items: ICartItem[]
  children?: React.ReactNode
}

/**
 * Base Shopping Cart Items
 */
export class BaseCartItems extends React.Component<IProps> {
  render() {
    return (
      <div id="cart-items" className="BaseItems">
        Base Cart Items {this.props.items.length}
        <div>{this.props.children}</div>
      </div>
    )
  }
}
