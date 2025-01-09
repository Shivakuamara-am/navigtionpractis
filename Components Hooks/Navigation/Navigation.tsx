import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screeens/Home';
import SevenSetaresr from './SevenSetaresr';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SevenSetaresr" component={SevenSetaresr} />  {/* Make sure the name matches */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
