import React from "react"
import "App.css"
import { User } from "app/types/IUser"
import { Cart, ICart } from "app/types/ICart"
import { GuestCart } from "features/cart/GuestCart"
import { Shop } from "features/shop/Shop"
import { CartItems } from "features/cart-item/CartItems"

const cart = new Cart(new User("jarkko"))

interface IProps {
  children?: React.ReactNode
}

export default class App extends React.Component<IProps, ICart> {
  state: ICart = new Cart(new User("jarkko"))

  render() {
    return (
      <div id="app" className="App">
        <Shop>
          <GuestCart>
            <CartItems state={this.state} items={cart.items}>
              <button onClick={() => this.setState(cart.add("Tuote B", 1))}>
                Lisää tuote koriin
              </button>
              <button onClick={() => this.setState(cart.remove("Tuote B"))}>
                Poista tuote korista
              </button>
            </CartItems>
          </GuestCart>
        </Shop>
      </div>
    )
  }
}
