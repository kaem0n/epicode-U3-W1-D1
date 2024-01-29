import { Component } from 'react'

class ImageComponent extends Component {
  render() {
    return (
      <img
        src={this.props.url}
        alt={this.props.alt}
        height="200px"
        className="rounded"
      />
    )
  }
}

export default ImageComponent
