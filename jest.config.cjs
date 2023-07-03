module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [], // don't load "browser" field
  },

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/file-mock.js',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
