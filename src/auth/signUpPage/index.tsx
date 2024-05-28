import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <Text style={style.signInText}>Sign Up</Text>
      <View style={{width: '80%'}}>
        <TextInput mode="outlined" label="Name" />
      </View>
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
        onPress={() => navigation.navigate('signin')}>
        Sign Up
      </Button>
    </View>
  );
};

export default SignUp;

const style = StyleSheet.create({
  button: {marginTop: 20},
  signInText: {
    fontSize: 24,
    marginBottom: 16,
  },
});
