import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/styles';

interface TopNavbarProps {
  onTabChange: (tab: string) => void;
}

const TopNavbar: React.FC<TopNavbarProps> = ({onTabChange}) => {
  const [selectedTab, setSelectedTab] = useState<string>('All');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    onTabChange(tab);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => handleTabClick('All')}>
        <Text
          style={[styles.navTab, selectedTab === 'All' && styles.navTabActive]}>
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabClick('Romance')}>
        <Text
          style={[
            styles.navTab,
            selectedTab === 'Romance' && styles.navTabActive,
          ]}>
          Romance
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabClick('Sport')}>
        <Text
          style={[
            styles.navTab,
            selectedTab === 'Sport' && styles.navTabActive,
          ]}>
          Sport
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabClick('Kids')}>
        <Text
          style={[
            styles.navTab,
            selectedTab === 'Kids' && styles.navTabActive,
          ]}>
          Kids
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabClick('Horror')}>
        <Text
          style={[
            styles.navTab,
            selectedTab === 'Horror' && styles.navTabActive,
          ]}>
          Horror
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopNavbar;
