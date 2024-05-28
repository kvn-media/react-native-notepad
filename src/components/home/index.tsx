import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {CounterContex} from '../../../contexApi';
const Home = () => {
  const {count} = useContext(CounterContex);

  const navigation: any = useNavigation();
  const handleAddNotePress = () => {
    navigation.navigate('addnotetext');
  };
  return (
    <View style={style.mainView}>
      <View>
        <Text style={style.title}>Notepad</Text>
        <TextInput
          activeUnderlineColor="transparent"
          underlineColor="transparent"
          style={style.searchBar}
          placeholder="Search notes"
          left={
            <TextInput.Icon
              icon={() => <AntDesign name="search1" size={20} />}
              size={28}
              color={'blue'}
            />
          }
        />
        <View style={{height: '80%', marginTop: 10}}>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}>
            {count?.length > 0 &&
              count?.map(item => (
                <View style={style.record}>
                  <Text style={style.UserTitle}>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={style.addNote}>
          <AntDesign
            name="plus"
            onPress={handleAddNotePress}
            color={'white'}
            size={20}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 14,
  },
  searchBar: {
    height: 45,
    borderRadius: 40,
    borderTopEndRadius: 40, // Overall border radius
    borderTopStartRadius: 40,
  },
  addNote: {
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 50,
  },
  record: {
    backgroundColor: '#40e0d0',
    padding: 10,
    borderRadius: 10,
  },
  UserTitle: {
    fontSize: 17,
    fontWeight: '900',
  },
});

export default Home;
