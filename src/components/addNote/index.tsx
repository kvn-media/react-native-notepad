import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {CounterContex} from '../../../contexApi';
import {TextInput} from 'react-native-paper';
const AddNoteText = () => {
  const {count, setCount} = useContext(CounterContex);
  const [isSave, setIsSave] = useState(false);
  const [isTitle, setIsTitle] = useState('');
  const [isDescription, setIsDescription] = useState('');
  const navigation: any = useNavigation();

  const handleGoBack = () => {
    navigation.navigate('home');
  };

  const handleSave = () => {
    console.log('handlesave.............');
    const newData = {title: isTitle, description: isDescription};
    setCount([...count, newData]);
    setIsSave(false);
  };

  return (
    <View style={style.MainDiv}>
      <View style={style.header}>
        <View style={style.backRoute}>
          <AntDesign
            name="arrowleft"
            onPress={handleGoBack}
            color={'green'}
            size={30}
          />
          <Text style={style.title}>Note</Text>
        </View>
        {isSave && (
          <AntDesign
            onPress={handleSave}
            name="check"
            size={25}
            color={'green'}
          />
        )}
      </View>

      <Text style={style.timeStamp}>April 16,2024 3:20 PM</Text>

      <TextInput
        placeholder="Title"
        activeUnderlineColor="transparent"
        underlineColor="transparent"
        value={isTitle}
        onChangeText={(text: string) => {
          if (text.trim() === '' && !isTitle) {
            return false;
          }
          setIsTitle(text);
          if (text || isDescription) {
            setIsSave(true);
          } else {
            setIsSave(false);
          }
        }}
        style={{
          backgroundColor: 'transparent',
          fontSize: 20,
          fontWeight: '800',
          paddingLeft: 0,
          height: 40,
          marginTop: 14,
        }}
      />

      <TextInput
        placeholder="Note something down"
        activeUnderlineColor="transparent"
        underlineColor="transparent"
        value={isDescription}
        multiline={true}
        numberOfLines={20}
        onChangeText={(text: string) => {
          if (text.trim() === '' && !isDescription) {
            return false;
          }
          setIsDescription(text);

          if (text || isTitle) {
            setIsSave(true);
          } else {
            setIsSave(false);
          }
        }}
        style={{
          backgroundColor: 'transparent',
          color: 'gray',
        }}
      />
    </View>
  );
};

export default AddNoteText;

const style = StyleSheet.create({
  MainDiv: {paddingLeft: 16, paddingRight: 16},
  header: {
    flexDirection: 'row', // Default is 'column', change to 'row' for horizontal layout
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 24,
  },
  backRoute: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  timeStamp: {
    marginTop: 20,
  },
});
