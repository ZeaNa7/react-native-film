import {NavigationProp} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {fetchPopularMovies, fetchTopRatedMovies} from '../api/api';
import ButtonComponent from '../components/Button';
import FlatList from '../components/FlatList';
import {COLORS, styles} from '../styles/styles';

export function HomePage({navigation}: {navigation: NavigationProp<any>}) {
  const [data, setData] = useState<any[]>([]);
  const [bestMovies, setBestMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPopularMovies();
        const bestMovies = await fetchTopRatedMovies();
        setBestMovies(bestMovies);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Image
            style={styles.image}
            source={require('../../assets/film.png')}
          />
          <View style={styles.buttonContainer}>
            <ButtonComponent
              label="WishList"
              onClick={() => navigation.navigate('WishList')}
              hasIcon
              color={COLORS.primary.gray}
              icon="add"
            />
            <ButtonComponent
              label="Details"
              onClick={() => console.log('Details')}
              color={COLORS.primary.yellow}
            />
          </View>
        </View>
        <FlatList title="Popular movies" data={data.results} />
        <FlatList title="Best movies" data={bestMovies.results} />
        <View style={{flex: 1}}>
          <Image style={styles.pub} source={require('../../assets/pub.png')} />
        </View>
        <Text>Black friday is here !</Text>
        <ButtonComponent
          style={{width: '87%', bottom: 0, marginTop: 20}}
          label="Check details"
          onClick={() => console.log('Details')}
          color={COLORS.primary.yellow}
        />
      </View>
    </ScrollView>
  );
}
