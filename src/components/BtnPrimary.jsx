import React from "react"

export class BtnPrimary extends React.Component {
  render() {
    return <button className="btn-primary">{this.props.textBtn}</button>
  }
}
