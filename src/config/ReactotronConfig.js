import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({ host: 'localhost' })
    .use(reactotronRedux())
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
