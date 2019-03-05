module.exports = (api) => {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        'targets': {
          'node': 'current',
        },
      },
    ],
  ]

  return {
    'env': {
      'test': {
        presets,
      },
    },
  }
}
