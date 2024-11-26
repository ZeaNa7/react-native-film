import {useContext} from 'react';
import {Button, View} from 'react-native';
import {AuthContext} from '../../providers/AuthProvider';
import {styles} from '../styles/styles';

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
