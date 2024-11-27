import {NavigationProp} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {
  MovieResponse,
  fetchHorrorMovies,
  fetchKidsMovies,
  fetchPopularMovies,
  fetchRomanceMovies,
  fetchSportMovies,
  fetchTopRatedMovies,
} from '../api/api';
import ButtonComponent from '../components/Button';
import FlatList from '../components/FlatList';
import TopNavbar from '../composables/TopNavbar';
import {COLORS, styles} from '../styles/styles';

export function HomePage({navigation}: {navigation: NavigationProp<any>}) {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [popularMovies, setPopularMovies] = useState<MovieResponse>();
  const [bestMovies, setBestMovies] = useState<MovieResponse>();
  const [selectedTab, setSelectedTab] = useState<string>('All');
  const [romanceMovies, setRomanceMovies] = useState<MovieResponse>();
  const [sportMovies, setSportMovies] = useState<MovieResponse>();
  const [kidsMovies, setKidsMovies] = useState<MovieResponse>();
  const [horrorMovies, setHorrorMovies] = useState<MovieResponse>();

  const handleTabChange = async (tab: string) => {
    setSelectedTab(tab);

    try {
      if (tab === 'All') {
        const popularMovies = await fetchPopularMovies();
        const topRatedMovies = await fetchTopRatedMovies();

        if (popularMovies.results && popularMovies.results.length > 0) {
          setBackgroundImage(
            `https://image.tmdb.org/t/p/original${
              popularMovies.results[0].poster_path ?? ''
            }`,
          );
        } else {
          setBackgroundImage(null);
        }

        setPopularMovies(popularMovies);
        setBestMovies(topRatedMovies);
      } else if (tab === 'Romance') {
        const romanceMovies = await fetchRomanceMovies();
        setBackgroundImage(
          `https://image.tmdb.org/t/p/original${
            romanceMovies.results[0].poster_path ?? ''
          }`,
        );
        setRomanceMovies(romanceMovies);
      } else if (tab === 'Sport') {
        const sportMovies = await fetchSportMovies();
        console.log('🚀 ~ handleTabChange ~ sportMovies:', sportMovies);
        setBackgroundImage(
          `https://image.tmdb.org/t/p/original${
            sportMovies.results[0].poster_path ?? ''
          }`,
        );
        setSportMovies(sportMovies);
      } else if ('Kids') {
        const kidsMovies = await fetchKidsMovies();
        console.log('🚀 ~ handleTabChange ~ kidsMovies:', kidsMovies);
        setBackgroundImage(
          `https://image.tmdb.org/t/p/original${
            kidsMovies.results[0].poster_path ?? ''
          }`,
        );
        setKidsMovies(kidsMovies);
      } else if ('Horror') {
        const horrorMovies = await fetchHorrorMovies();
        console.log('🚀 ~ handleTabChange ~ horrorMovies:', horrorMovies);
        setBackgroundImage(
          `https://image.tmdb.org/t/p/original${
            horrorMovies.results[0].poster_path ?? ''
          }`,
        );
        setHorrorMovies(horrorMovies);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    handleTabChange('All');
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={{uri: backgroundImage ?? ''}}
        />
        <View style={styles.topOverlay}>
          <TopNavbar onTabChange={handleTabChange} />
        </View>
        {selectedTab === 'All' && (
          <>
            <View style={styles.bottomImageContainer}>
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
          </>
        )}
        {selectedTab === 'All' && (
          <>
            <Text style={{fontSize: 40, fontWeight: 900, color: 'grey'}}>
              . . . . .
            </Text>
            <FlatList title="Popular movies" data={popularMovies?.results} />
            <FlatList title="Best movies" data={bestMovies?.results} />
            <View style={{flex: 1}}>
              <Image
                style={styles.pub}
                source={require('../../assets/pub.png')}
              />
            </View>
            <Text>Black friday is here!</Text>
            <ButtonComponent
              style={{width: '85%', bottom: 0, marginTop: 20}}
              label="Check details"
              onClick={() => console.log('Details')}
              color={COLORS.primary.yellow}
            />
          </>
        )}
        {selectedTab === 'Romance' && (
          <>
            <FlatList title="Romance movies" data={romanceMovies?.results} />
          </>
        )}
        {selectedTab === 'Sport' && (
          <>
            <FlatList title="Sports movies" data={sportMovies?.results} />
          </>
        )}
        {selectedTab === 'Kids' && (
          <>
            <FlatList title="Kids movies" data={kidsMovies?.results} />
          </>
        )}
        {selectedTab === 'Horror' && (
          <>
            <FlatList title="Horror movies" data={horrorMovies?.results} />
          </>
        )}
      </View>
    </ScrollView>
  );
}
