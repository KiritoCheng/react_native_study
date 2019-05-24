module.exports = {
  "passPerPreset": true,
  "plugins": [
    ["relay", { "artifactDirectory": "./src/__generated__" }],
    "transform-runtime"
  ],
  "presets": [
    "module:metro-react-native-babel-preset",
    "react",
    "es2015",
  ],
}
