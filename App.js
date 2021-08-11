import React ,{useEffect} from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import RNBootSplash from "react-native-bootsplash";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboard from './components/Onboard/Onboard';
import DetailsScreen from './components/Details/DetailsScreen';
import Cart from './components/Cart/Cart';
import Tabs from './navigation/Tabs';

const Stack = createStackNavigator();
const App = () => {

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1500);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Onboard'}>
        <Stack.Screen name="Onboard" component={Onboard} options={{
          headerShown: false
        }} />

        <Stack.Screen name="Home" component={Tabs} options={{
          headerShown: false
        }} />        
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          headerShown: false
        }} />        
        
        <Stack.Screen name="Cart" component={Cart} options={{
          headerShown: false
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
