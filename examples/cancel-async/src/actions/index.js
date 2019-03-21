export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD'

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const CANCEL_INCREMENT_ASYNC = 'CANCEL_INCREMENT_ASYNC'
export const COUNTDOWN_TERMINATED = 'COUNTDOWN_TERMINATED'

export const INCREMENT_FETCH = 'INCREMENT_FETCH'
export const CANCEL_INCREMENT_FETCH = 'CANCEL_INCREMENT_FETCH'
export const COUNTDOWN_FETCH_TERMINATED = 'COUNTDOWN_FETCH_TERMINATED'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export function selectReddit(reddit) {
  return {
    type: SELECT_REDDIT,
    reddit,
  }
}

export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit,
  }
}

export function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit,
  }
}

export function receivePosts(reddit, posts) {
  return {
    type: RECEIVE_POSTS,
    reddit,
    posts,
    receivedAt: new Date().setMilliseconds(0),
  }
}
