import config from '../config'


const LeaderboardService = {
  getScores() {
  return fetch(`${config.API_ENDPOINT}/leaderboard`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}

export default LeaderboardService