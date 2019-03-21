import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC,
  CANCEL_INCREMENT_ASYNC, selectReddit, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }
  handleChange(nextReddit) {
    this.props.dispatch(selectReddit(nextReddit))
  }
  handleRefreshClick(e) {
    e.preventDefault()
    const { dispatch, selectedReddit } = this.props
    dispatch(invalidateReddit(selectedReddit))
  }
  render() {
    const { selectedReddit, posts, isFetching,
      lastUpdated, dispatch, counter, countdown } = this.props
    const action = (type, value) => () => dispatch({ type, value })
    return (
      <div>
        Clicked: {counter} times <button onClick={action(INCREMENT)}>+</button>{' '}
        <button onClick={action(DECREMENT)}>-</button>{' '}
        <button onClick={action(INCREMENT_IF_ODD)}>Increment if odd</button>{' '}
        <button
          onClick={countdown ? action(CANCEL_INCREMENT_ASYNC) : action(INCREMENT_ASYNC, 5)}
          style={{ color: countdown ? 'red' : 'black' }}
        >
          {countdown ? `Cancel increment (${countdown})` : 'increment after 5s'}
        </button>
        <div>
          <Picker value={selectedReddit} onChange={this.handleChange} options={['reactjs', 'frontend']} />
          <p>
            {lastUpdated && <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}. </span>}
            {!isFetching && (
              <a href="#" onClick={this.handleRefreshClick}>
                Refresh
              </a>
            )}
          </p>
          {isFetching && posts.length === 0 && <h2>Loading...</h2>}
          {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
          {posts.length > 0 && (
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Posts posts={posts} />
            </div>
          )}
        </div>
      </div>
    )
  }
}
App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  countdown: PropTypes.number.isRequired,
  selectedReddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
}
function mapStateToProps(state) {
  const { selectedReddit, postsByReddit, counter, countdown } = state
  const { isFetching, lastUpdated, items: posts } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: [],
  }
  return {
    selectedReddit, posts, isFetching, lastUpdated, counter, countdown
  }
}
export default connect(mapStateToProps)(App)
