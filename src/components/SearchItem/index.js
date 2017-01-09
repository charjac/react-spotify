import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'

class SearchItem extends PureComponent {
  static propTypes = {
    item: PropTypes.object
  }

  render() {
    console.log(this.props.item)
    return (
      <div className="media">
        <div className="media-left">
          <a href="#">
            {
              !!this.props.item.images[2] &&
              <img src={this.props.item.images[2].url} width="63" className="media-object img-circle" alt={this.props.item.name} />
            }
          </a>
        </div>
        <div className="media-body">
          <Link className="media-heading" to={`/artist/${this.props.item.id}`}>{this.props.item.name}</Link>
        </div>
      </div>
    )
  }
}

export default SearchItem
