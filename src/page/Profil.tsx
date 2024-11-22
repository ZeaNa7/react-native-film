import {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {AuthContext} from '../../providers/AuthProvider';

export default function ProfilPage() {
  const {signOut} = useContext(AuthContext);

  const handleLogout = async () => {
    if (signOut) {
      try {
        await signOut();
      } catch (error) {
        console.error('Error during logout:', error);
      }
    } else {
      console.error('signOut function is missing.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Log Out" onPress={handleLogout} color="#FF6347" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
