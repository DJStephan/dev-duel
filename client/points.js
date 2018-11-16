const findWinner = (userLeft, userRight) => {
    let userLeftPoints = getPoints(userLeft)
    let userRightPoints = getPoints(userRight)
    let winner
    if(userLeftPoints > userRightPoints){
        winner = userLeft.username
      }else if(userRightPoints > userLeftPoints){
        winner = userRight.username
      }else {
          winner = 'The duel has resulted in a tie, Fight to the death!'
      }
      
    return [userLeftPoints, userRightPoints, winner]
}

const getPoints = (user) =>{
    let points = 0
    userInfo = ['username', 'fullName', 'location', 'email', 'bio']
    userStats = {
        followers: number => number*2,
        following: number => number,
        publicRepos: number => number,
        titles: array => array.length,
        totalStars: number => number,
        highestStarCount: number =>{
            if(number > 1 && number < 50){
                return 1
            }else if(number < 100){
                return 2
            }else if(number < 250){
                return 5
            }else return 10
        },
        perfectRepos: number => number,
        
    }
    for(let property of userInfo){
        if(user[property]){
            points++
        }
    }
    for(let property in userStats){
        fn = userStats[property]
        points += fn(user[property])
    }
    return points
}