export default ({ $axios }) => {
  $axios.onRequest((config) => {
    config.headers['x-functions-key'] = process.env.functionKey
    return config
  })
}
