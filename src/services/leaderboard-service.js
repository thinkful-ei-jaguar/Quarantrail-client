import config from '../config'


const LeaderboardService = {
  getScores() {
  return fetch(`${config.API_ENDPOINT}/leaderboard`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  postScore(nameandscore){
    return fetch(`${config.API_ENDPOINT}/leaderboard`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(nameandscore),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default LeaderboardService