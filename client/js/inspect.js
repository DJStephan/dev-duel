/* eslint-disable no-undef */
$('form').submit(() => {
  const username = $('form input').val()

  console.log(`examining ${username}`)

  // Fetch data for given user
  // (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  if(username){
    fetch(`${USER_URL}/${username}`)
    .then(response =>{
      if(response.status === 200){
        
      }else if (response.status === 400){
        throw new Error('User doesn\'t exist')
      }
      return response.json()
    } ) // Returns parsed json data from response body as promise
    .then(data => {
      console.log(`Got data for ${username}`)
      console.log(data)
      
      $('.user-not-valid').addClass('hide')
      $('.no-user').addClass('hide')
      $('.username').text(data.username)
      $('.full-name').text(data.fullName)
      $('.email').text(data.email)
      $('.bio').text(data.bio)
      $('.avatar').attr('src', data.avatar)
      $('.titles').text(data.titles)
      $('.favorite-language').text(data.favoriteLanguage)
      $('.total-stars').text(data.totalStars)
      $('.most-starred').text(data.highestStarCount)
      $('.public-repos').text(data.publicRepos)
      $('.perfect-repos').text(data.perfectRepos)
      $('.followers').text(data.followers)
      $('.following').text(data.following)
      $('.location').text(data.location)      
      $('.user-results').removeClass('hide') // Display '.user-results' element
    })
    .catch(err => {
      console.log(`Error getting data for ${username}`)
      console.log(err)
      $('.user-results').addClass('hide')
      $('.user-error').removeClass('hide')
      $('.user-error').text(`${username} doesn't exist!`)
      /*
        TODO
        If there is an error finding the user, instead toggle the display of the '.user-error' element
        and populate it's inner span '.error' element with an appropriate error message
      */
    })
  }else{
    $('.user-results').addClass('hide')
    $('.no-user').removeClass('hide')
  }
  // fetch(`${USER_URL}/${username}`)
  //   .then(response => response.json()) // Returns parsed json data from response body as promise
  //   .then(data => {
  //     console.log(`Got data for ${username}`)
  //     console.log(data)
  //     $('.username').text(data.username)
  //     $('.full-name').text(data.fullName)
  //     $('.email').text(data.email)
  //     $('.bio').text(data.bio)
  //     $('.avatar').attr('src', data.avatar)
  //     $('.titles').text(data.titles)
  //     $('.favorite-language').text(data.favoriteLanguage)
  //     $('.total-stars').text(data.totalStars)
  //     $('.most-starred').text(data.highestStarCount)
  //     $('.public-repos').text(data.publicRepos)
  //     $('.perfect-repos').text(data.perfectRepos)
  //     $('.followers').text(data.followers)
  //     $('.following').text(data.following)
  //     $('.location').text(data.location)
  //     /*
  //       TODO
  //       Attach the data returned to the DOM
  //       The data currently hard-coded into the DOM is placeholder data
  //      */

  //     $('.user-results').removeClass('hide') // Display '.user-results' element
  //   })
  //   .catch(err => {
  //     console.log(`Error getting data for ${username}`)
  //     console.log(err)
  //     /*
  //       TODO
  //       If there is an error finding the user, instead toggle the display of the '.user-error' element
  //       and populate it's inner span '.error' element with an appropriate error message
  //     */
  //   })

  return false // return false to prevent default form submission
})
