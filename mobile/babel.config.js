// const path = require('path');
// const pak = require('./package.json');
//
// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     [
//       'module-resolver',
//       {
//         extensions: ['.tsx', '.ts', '.js', '.json'],
//         alias: {
//           [pak.name]: path.join(__dirname, '..', pak.main),
//         },
//       },
//     ],
//     'react-native-reanimated/plugin'
//   ]
// };

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
