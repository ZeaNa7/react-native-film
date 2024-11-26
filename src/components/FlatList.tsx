import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Movie} from '../api/api';
import {COLORS, styles} from '../styles/styles';

type FlatListProps = {
  title: string;
  data: Movie[] | undefined;
};

const FlatListExample: React.FC<FlatListProps> = ({title, data}) => {
  const slicedData = data?.slice(0, 4);

  return (
    <>
      <View style={styles.flatListHeader}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={{color: COLORS.primary.yellow}}>See More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={slicedData}
          keyExtractor={item => item.id.toString()}
          horizontal
          renderItem={({item}) => (
            <View style={styles.flatListText}>
              {item.poster_path === null ? (
                <Image
                  source={require('../../assets/film.png')}
                  style={styles.flatListImage}
                />
              ) : (
                <Image
                  source={{
                    uri: item.poster_path,
                  }}
                  style={styles.flatListImage}
                />
              )}
              <Text
                style={{fontWeight: 'semibold', color: 'black', paddingTop: 5}}>
                {item.title.length > 15
                  ? `${item.title.slice(0, 15)}...`
                  : item.title}
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default FlatListExample;
