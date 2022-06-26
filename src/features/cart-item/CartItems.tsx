import { BaseCartItems } from "./BaseCartItems"
import { CartItem } from "./CartItem"

/**
 * Shopping Cart Items
 */
export class CartItems extends BaseCartItems {
  render() {
    return (
      <div id="cart-items" className="BaseItems">
        Current Cart Items {this.props.items.length}
        {this.props.items.map((item) => (
          <CartItem key={item.id}>
            <li>
              {item.id}-{item.amount}
              <button onClick={() => this.setState(item.increase())}>+</button>
              <button onClick={() => this.setState(item.decrease())}>-</button>
            </li>
          </CartItem>
        ))}
        <div>{this.props.children}</div>
      </div>
    )
  }
}
