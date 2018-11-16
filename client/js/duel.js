

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
  if(usernameLeft && usernameRight){
    fetch(`${USERS_URL}?username=${usernameLeft}&username=${usernameRight}`)
    .then(response => {
      if(response.status === 404){
        throw new Error('User doesn\'t exist')
      }
      return response.json()
    }) 
    .then(data => {
      console.log(`Got data for ${usernameLeft} and ${usernameRight}`)
      console.log(data)
      const userLeft = data[0]
      const userRight = data[1]
      let userLeftPoints
      let userRightPoints
      let winner
      [userLeftPoints, userRightPoints, winner] = findWinner(userLeft, userRight)
      console.log(`left user has ${userLeftPoints} points, right user has ${userRightPoints} points`)
      $('.no-user').addClass('hide')
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

      $('.winner-container').removeClass('hide')
      $('.winner-username').text(`By a score of ${userLeftPoints} to ${userRightPoints} the winner is ${winner}!`)
    })
    .catch(err => {
      console.log(err)
      $('.duel-container').addClass('hide')
      $('.duel-error').removeClass('hide')
      $('.duel-error').text(`One of the users doesn\'t exist doesn't exist!`)

    })

  }else{
    $('.no-user').removeClass('hide')
    $('.duel-container').addClass('hide')
  }
  return false // return false to prevent default form submission
})
