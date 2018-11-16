
/* eslint-disable no-undef */
/*
  TODO
  Fetch 2 user's github data and display their profiles side by side
  If there is an error in finding user or both users, display appropriate error
  message stating which user(s) doesn't exist

  It is up to the student to choose how to determine a 'winner'
  and displaying their profile/stats comparison in a way that signifies who won.
 */
/* eslint-disable no-undef */
$('form').submit(() => {
  const usernameLeft = $('[name=username-left]').val()
  const usernameRight = $('[name = username-right]').val()
  console.log(`examining ${usernameLeft} and ${usernameRight}`)

  // Fetch data for given user
  // (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  fetch(`${USERS_URL}?username=${usernameLeft}&username=${usernameRight}`)
    .then(response => response.json()) // Returns parsed json data from response body as promise
    .then(data => {
      console.log(`Got data for ${usernameLeft} and ${usernameRight}`)
      console.log(data)
      const userLeft = data[0]
      const userRight = data[1]
      $('.duel-container').removeClass('hide')
      $('.left > .username').text(userLeft.username)
      $('.left > .full-name').text(userLeft.fullName)
      $('.left > .email').text(userLeft.email)
      $('.left > .bio').text(userLeft.bio)
      $('.left > .avatar').attr('src', userLeft.avatar)
      $('.left > .stats > .stat > .titles').text(userLeft.titles)
      $('.left > .stats > .stat > .favorite-language').text(userLeft.favoriteLanguage)
      $('.left > .stats > .stat > .total-stars').text(userLeft.totalStars)
      $('.left > .stats > .stat > .highest-starred').text(userLeft.highestStarCount)
      $('.left > .stats > .stat > .public-repos').text(userLeft.publicRepos)
      $('.left > .stats > .stat > .perfect-repos').text(userLeft.perfectRepos)
      $('.left > .stats > .stat > .followers').text(userLeft.followers)
      $('.left > .stats > .stat > .following').text(userLeft.following)
      $('.left > .stats > .stat > .location').text(userLeft.location)

      $('.right > .username').text(userRight.username)
      $('.right > .full-name').text(userRight.fullName)
      $('.right > .email').text(userRight.email)
      $('.right > .bio').text(userRight.bio)
      $('.right > .avatar').attr('src', userRight.avatar)
      $('.right > .stats > .stat > .titles').text(userRight.titles)
      $('.right > .stats > .stat > .favorite-language').text(userRight.favoriteLanguage)
      $('.right > .stats > .stat > .total-stars').text(userRight.totalStars)
      $('.right > .stats > .stat > .highest-starred').text(userRight.highestStarCount)
      $('.right > .stats > .stat > .public-repos').text(userRight.publicRepos)
      $('.right > .stats > .stat > .perfect-repos').text(userRight.perfectRepos)
      $('.right > .stats > .stat > .followers').text(userRight.followers)
      $('.right > .stats > .stat > .following').text(userRight.following)
      $('.right > .stats > .stat > .location').text(userRight.location)
      /*
        TODO
        Attach the data returned to the DOM
        The data currently hard-coded into the DOM is placeholder data
       */

    //   $('.user-results').removeClass('hide') // Display '.user-results' element
    // })
    // .catch(err => {
    //   console.log(`Error getting data for ${username}`)
    //   console.log(err)
      /*
        TODO
        If there is an error finding the user, instead toggle the display of the '.user-error' element
        and populate it's inner span '.error' element with an appropriate error message
      */
    })

  return false // return false to prevent default form submission
})
