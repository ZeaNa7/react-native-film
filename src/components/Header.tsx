import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from '../page/Home';
import WishListPage from '../page/WishList';

const Tab = createBottomTabNavigator();

export default function Header() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={HomePage} />
      <Tab.Screen name="Settings" component={WishListPage} />
    </Tab.Navigator>
  );
}
