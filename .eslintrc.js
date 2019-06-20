module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true,
        "react-native/react-native": true
    },
    "parser": "typescript-eslint-parser",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native",
        "typescript",
        "graphql",
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "react/prop-types": ["error", { "ignore": ["navigation"] }],
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-raw-text": 2,
        "no-console": "off",
        "no-unused-vars": ["off"],
    }
};