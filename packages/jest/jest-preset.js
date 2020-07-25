const preset = require("ts-jest/jest-preset");

module.exports = {
  ...preset,
  moduleNameMapper: {
    "^@package-name/(.*)$": "<rootDir>/../$1/src",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$":
      "@package-name/jest/mock-asset-file"
  },
  testPathIgnorePatterns: [
    ...(preset.testPathIgnorePatterns || []),
    "<rootDir>/dist/",
    "<rootDir>/\\..*"
  ]
};
