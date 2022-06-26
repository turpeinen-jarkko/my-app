import React from "react"

interface IProps {
  children?: React.ReactNode
}

export class User extends React.Component<IProps> {
  render() {
    return (
      <div id="user" className="User">
        {this.props.children}
      </div>
    )
  }
}
