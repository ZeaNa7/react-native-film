import {Dimensions, StyleSheet} from 'react-native';

export const COLORS = {
  primary: {
    gray: '#333333',
    yellow: '#F2C94C',
  },
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

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
    marginTop: 20,
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
  navbar: {
    margin: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
  },
  navTab: {
    fontSize: 16,
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  navTabActive: {
    backgroundColor: COLORS.primary.yellow,
    color: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: screenHeight * 0.6,
  },
  topOverlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomImageContainer: {
    position: 'absolute',
    flexDirection: 'column',
    top: screenHeight * 0.5,
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
});
