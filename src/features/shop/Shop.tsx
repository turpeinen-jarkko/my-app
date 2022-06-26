import React from "react"

interface IProps {
  children?: React.ReactNode
}

export class Shop extends React.Component<IProps> {
  render() {
    return (
      <div id="shop" className="Shop">
        {this.props.children}
      </div>
    )
  }
}
