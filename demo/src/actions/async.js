export function loadPosts(userId) {
  // Interpreted by the thunk middleware:
  return function(dispatch, getState) {
    const { posts } = getState()
    if (posts[userId]) {
      // There is cached data! Don't do anything.
      return
    }

    dispatch({
      type: 'LOAD_POSTS_REQUEST',
      userId
    })

    // Dispatch vanilla actions asynchronously
    fetch(`http://myapi.com/users/${userId}/posts`).then(
      response =>
        dispatch({
          type: 'LOAD_POSTS_SUCCESS',
          userId,
          response
        }),
      error =>
        dispatch({
          type: 'LOAD_POSTS_FAILURE',
          userId,
          error
        })
    )
  }
}
