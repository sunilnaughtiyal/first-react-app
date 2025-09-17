// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  transformIgnorePatterns: [
    '/node_modules/(?!(react-router-dom|react-icons|@testing-library)/)'
  ],
  collectCoverage: true,
  coverageReporters: ['lcov'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'coverage',
      outputName: 'test-report.xml'
    }]
  ]
};
