module.exports = {
  // Use jsdom to simulate a browser environment
  testEnvironment: 'jsdom',

  // A map from regular expressions to module names
  // that allow to stub out resources with a single module.
  moduleNameMapper: {
    // Mock CSS imports to return an empty object
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    // Mock other static assets to return a string
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};