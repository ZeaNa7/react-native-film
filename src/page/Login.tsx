import {AuthContext} from '@/providers/AuthProvider';
import React, {useContext, useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import Button from '../components/Button';
import {styles} from '../styles/styles';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const authContext = useContext(AuthContext);
  const {signIn} = authContext || {};

  const onLoginPressed = async () => {
    if (!username || !password) {
      setErrorMessage('Please fill out both fields.');
      return;
    }

    if (signIn) {
      try {
        await signIn({username, password});
        setErrorMessage('');
      } catch (error) {
        console.error('Login failed:', error);
        setErrorMessage('Invalid username or password.');
      }
    } else {
      setErrorMessage('Authentication service is unavailable.');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: '35%'}}>
          Login
        </Text>
        <View style={{marginTop: '40%'}}>
          <Text>Username :</Text>
          <TextInput
            value={username}
            onChangeText={text => setUsername(text)}
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: 200,
              marginBottom: 20,
            }}
          />
          <Text>Password :</Text>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              width: 200,
              marginBottom: 20,
            }}
          />
        </View>

        {errorMessage ? (
          <Text style={{color: 'red', marginTop: 10}}>{errorMessage}</Text>
        ) : null}

        <Button
          onClick={onLoginPressed}
          label="Login"
          color="yellow"
          style={{marginTop: '10%', width: '80%'}}
        />
      </View>
    </ScrollView>
  );
}
