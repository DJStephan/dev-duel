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
      // $('.username').text(data.username)
      // $('.full-name').text(data.fullName)
      // $('.email').text(data.email)
      // $('.bio').text(data.bio)
      // $('.avatar').attr('src', data.avatar)
      // $('.titles').text(data.titles)
      // $('.favorite-language').text(data.favoriteLanguage)
      // $('.total-stars').text(data.totalStars)
      // $('.most-starred').text(data.highestStarCount)
      // $('.public-repos').text(data.publicRepos)
      // $('.perfect-repos').text(data.perfectRepos)
      // $('.followers').text(data.followers)
      // $('.following').text(data.following)
      // $('.location').text(data.location)
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
