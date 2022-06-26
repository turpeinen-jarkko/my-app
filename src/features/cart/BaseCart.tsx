import { ICart } from "app/types/ICart"
import React from "react"

interface IProps {
  cart?: ICart
  children?: React.ReactNode
}

/**
 * Base Shopping Cart
 */
export class BaseCart extends React.Component<IProps> {
  render() {
    return (
      <div id="shop" className="Cart">
        Base Cart
        <div>{this.props.children}</div>
      </div>
    )
  }
}
