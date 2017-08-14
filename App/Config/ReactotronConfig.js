const Reactotron = require('reactotron-react-native').default;
const errorPlugin = require('reactotron-react-native').trackGlobalErrors;

Reactotron
  .configure({
    name: 'Cari Jakarta Sehat'
  })
  .use(errorPlugin({
    veto: (frame) =>
      frame.fileName.indexOf('/node_modules/react-native/') >= 0
  }))
  .connect();


console.tron = Reactotron;