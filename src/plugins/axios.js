export default ({ $axios }) => {
  $axios.onRequest((config) => {
    config.headers['x-functions-key'] = process.env.FUNCTION_KEY
    return config
  })
}
