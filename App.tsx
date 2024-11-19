import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import './global.css';
import { AuthContext, AuthProvider } from './providers/AuthProvider';
import { HomePage } from './src/page/Home';
import LoginPage from './src/page/Login';
import ProfilPage from './src/page/Profil';
import { SearchPage } from './src/page/Search';
import WishListPage from './src/page/WishList';
import { styles } from './src/styles/styles';

function App(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  const SplashScreen = () => (
    <View style={styles.splashContainer}>
      <ActivityIndicator size="large" />
    </View>
  );

  return (
    <SafeAreaProvider>
        <AuthProvider>
          <NavigationContainer>
            <AuthContext.Consumer>
              {({state}) => (
                <>
                  {state.isLoading ? (
                    <SplashScreen />
                  ) : state.userToken == null ? (
                    <LoginPage />
                  ) : (
                    <Tab.Navigator
                      screenOptions={({route}) => ({
                        headerShown: false,
                        tabBarIcon: ({focused, size, color}) => {
                          let iconName: string = '';

                          if (route.name === 'Home') {
                            iconName = focused ? 'home-sharp' : 'home';
                          } else if (route.name === 'Search') {
                            iconName = focused
                              ? 'search-sharp'
                              : 'search-outline';
                          } else if (route.name === 'WishList') {
                            iconName = focused
                              ? 'bookmark-sharp'
                              : 'bookmark-outline';
                          } else if (route.name === 'Profile') {
                            iconName = focused
                              ? 'person-sharp'
                              : 'person-outline';
                          }

                          return (
                            <Ionicons
                              name={iconName || ''}
                              size={size}
                              color={color}
                            />
                          );
                        },
                        tabBarActiveTintColor: '#16423C',
                        tabBarInactiveTintColor: 'gray',
                      })}>
                      <Tab.Screen name="Home" component={HomePage} />
                      <Tab.Screen name="Search" component={SearchPage} />
                      <Tab.Screen name="WishList" component={WishListPage} />
                      <Tab.Screen name="Profile" component={ProfilPage} />
                    </Tab.Navigator>
                  )}
                </>
              )}
            </AuthContext.Consumer>
          </NavigationContainer>
        </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
