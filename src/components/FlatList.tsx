import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, styles} from '../styles/styles';

type Film = {
  id: number;
  poster_path: any;
  title: string;
};

type FlatListExampleProps = {
  title: string;
  data: Film[];
};

const FlatListExample: React.FC<FlatListExampleProps> = ({title, data}) => {
  return (
    <>
      <View style={styles.flatListHeader}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{title}</Text>
        <TouchableOpacity>
          <Text style={{color: COLORS.primary.yellow}}>See More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={data}
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
              <Text style={{fontWeight: 'semibold'}}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default FlatListExample;
