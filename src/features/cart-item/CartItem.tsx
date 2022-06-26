import { ICartItem } from "app/types/ICartItem"
import React from "react"

interface IProps {
  item?: ICartItem
  children?: React.ReactNode
}

/**
 * Shopping Cart Item
 */
export class CartItem extends React.Component<IProps> {
  render() {
    return (
      <div id="cart-item" className="CartItem">
        <div>{this.props.children}</div>
      </div>
    )
  }
}
