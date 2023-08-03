import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onUserSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchResults)
    const isNoResults = searchResults.length === 0
    console.log(isNoResults)

    return (
      <div className="main">
        <div className="app-card">
          <h1 className="main-heading">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              className="search-bar"
              value={searchInput}
              placeholder="Search"
              onChange={this.onUserSearch}
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          {isNoResults ? (
            <h1 className="no-results">No Results Found</h1>
          ) : (
            <ul className="list-container">
              {searchResults.map(eachItem => (
                <DestinationItem item={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
