export default {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/app/**/*.js"],
  coverageDirectory: "__tests__/coverage",
  coverageReporters: ["text", "lcov"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.js?(x)"],
  transform: {
    ".(js|jsx|ts|tsx)": "@sucrase/jest-plugin",
  },
};
