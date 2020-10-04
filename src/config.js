require('dotenv').config()


const getEnvVairables = () => {
  console.log('GETTING ENV VARIABLES')
  let config = {}

  if (typeof (process.env.PAYTOK_URL) == 'undefined') {
    console.log("default PAYTOK_URL")
    config['PAYTOK_URL'] = 'https://paytok.herokuapp.com'
  } else {
    config['PAYTOK_URL'] = process.env.PAYTOK_URL
  }

  if (typeof (process.env.PAYTOK_WS_URL) == 'undefined') {
    console.log("default PAYTOK_WS_URL")
    config['PAYTOK_WS_URL'] = 'wss://paytok.herokuapp.com'
  } else {
    config['PAYTOK_WS_URL'] = process.env.PAYTOK_WS_URL
  }

  console.log(config)

  return config
}


const config = {
  ...getEnvVairables(),
  API_KEY: '46531532',
  // SESSION_ID: '',
  // TOKEN: ''
  SESSION_ID: '2_MX40NjUzMTUzMn5-MTU4NjYwNjUzNzcwOH5UZ0szUk9LMUNCbWx4OVBvRS83dWFwSW9-fg',
  TOKEN: 'T1==cGFydG5lcl9pZD00NjUzMTUzMiZzaWc9ZjBiYmJkODJjMzYzODhlZWI2YWQyMmU5N2RiZDgzM2E4OWNlM2ZlZDpzZXNzaW9uX2lkPTJfTVg0ME5qVXpNVFV6TW41LU1UVTROall3TmpVek56Y3dPSDVVWjBzelVrOUxNVU5DYld4NE9WQnZSUzgzZFdGd1NXOS1mZyZjcmVhdGVfdGltZT0xNTg2NjA2NTQ1Jm5vbmNlPTAuNDg5ODg2MDI2MzA4MDI3MTMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU4NjYxMDE0NSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=='
};
console.log(config)
console.log(process.env)

export default config
