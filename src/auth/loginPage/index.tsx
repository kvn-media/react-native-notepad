import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
const Signin = () => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Text style={style.signInText}>Sign In</Text>
      <View style={{width: '80%'}}>
        <TextInput mode="outlined" label="email" />
      </View>
      <View style={{width: '80%'}}>
        <TextInput mode="outlined" label="password" />
      </View>
      <Button
        style={style.button}
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('home')}>
        Sign In
      </Button>
    </View>
  );
};

export default Signin;

const style = StyleSheet.create({
  button: {marginTop: 20},
  signInText: {
    fontSize: 24,
    marginBottom: 16,
  },
});
