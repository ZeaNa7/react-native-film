import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 5,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 155,
    height: 50,
    zIndex: 2,
    marginRight: 10,
  },
  image: {
    width: screenWidth,
    height: 450,
    resizeMode: 'cover',
    zIndex: 1,
  },
  pub: {
    height: 165,
    resizeMode: 'cover',
  },
  buttonContainer: {
    position: 'absolute',
    width: screenWidth,
    top: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flatListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'semibold',
  },
  flatList: {
    height: 193,
    marginLeft: 20,
    zIndex: 2,
  },
  flatListImage: {
    width: 120,
    height: 160,
    marginRight: 10,
    borderRadius: 8,
  },
  flatListText: {
    flexDirection: 'column',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const COLORS = {
  primary: {
    gray: '#333333',
    yellow: '#F2C94C',
  },
};
