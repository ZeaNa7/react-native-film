import {CounterContext} from '@/providers/CounterProvider';
import {NavigationProp} from '@react-navigation/native';
import {useContext} from 'react';
import {Button, Text, View} from 'react-native';

export function HomePage({navigation}: {navigation: NavigationProp<any>}) {
  const {counter} = useContext(CounterContext);
  return (
    <View>
      <Button
        title="Go to Test Page"
        onPress={() => navigation.navigate('Test')}
        color={'grey'}
      />
      <Text>{counter}</Text>
    </View>
  );
}
