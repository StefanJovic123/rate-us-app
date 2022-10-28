import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, TestingScreen, ContactUs } from '../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='TestingScreen' component={TestingScreen} />
        <Stack.Screen name='ContactUs' component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
