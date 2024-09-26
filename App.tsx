import {GluestackUIProvider} from '@/components/ui/gluestack-ui-provider';
import React from 'react';
import './global.css';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomePage} from './page/Home';
import {ProfilPage} from './page/Profil';
import {TestPage} from './page/Test';
import CounterProvider from './providers/CounterProvider';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <GluestackUIProvider mode="light">
        <NavigationContainer>
          <CounterProvider>
            <Tab.Navigator
              screenOptions={({route}) => ({
                tabBarStyle: {
                  backgroundColor: '#C4DD8EFD3D2',
                },
                tabBarIcon: ({focused, size, color}) => {
                  let iconName: string = '';

                  if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home';
                  } else if (route.name === 'Test') {
                    iconName = focused ? 'road' : 'road';
                  } else if (route.name === 'Profil') {
                    iconName = focused ? 'account' : 'account';
                  }

                  return (
                    <Ionicons name={iconName || ''} size={size} color={color} />
                  );
                },
                tabBarActiveTintColor: '#16423C',
                tabBarInactiveTintColor: 'gray',
              })}>
              <Tab.Screen name="Home" component={HomePage} />
              <Tab.Screen name="Test" component={TestPage} />
              <Tab.Screen name="Profil" component={ProfilPage} />
            </Tab.Navigator>
          </CounterProvider>
        </NavigationContainer>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
}

export default App;
