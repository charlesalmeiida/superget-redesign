import React from "react"

export class ItemNav extends React.Component {
  render() {
    return (
      <li>
        <a href="/">{this.props.menu}</a>
      </li>
    )
  }
}
