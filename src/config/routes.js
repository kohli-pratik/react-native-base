import { createStackNavigator, createAppContainer } from 'react-navigation';
import SampleScreen from '../screens/SampleScreen/index';
import SampleScreen2 from '../screens/SampleScreen2/index';

const AppStackNavigator = createStackNavigator({
    Sample: SampleScreen,
    Sample2: SampleScreen2,
});

const Routes = createAppContainer(AppStackNavigator);

export default Routes;