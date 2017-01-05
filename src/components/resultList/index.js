import React, { PureComponent } from 'react'
import styles from './index.css'

class ResultList extends PureComponent {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="well">
              <h4>
                <a href="#">Ace of base</a>
                    </h4>
                    <div>
                        <strong>Genres: </strong>
                        <span>Dance</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default ResultList
