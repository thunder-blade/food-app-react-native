import { createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator({
    Search : SearchScreen,
    ResultsShow : ResultsShowScreen
}, {
  initialRouteName:'Search',
  defaultNavigationOption : {
    title : 'Business Search'
  }
}

);

export default createAppContainer(navigator);