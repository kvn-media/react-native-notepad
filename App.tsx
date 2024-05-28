import Signin from './src/auth/loginPage';
import SignUp from './src/auth/signUpPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/home';
import AddNoteText from './src/components/addNote';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signin">
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addnotetext"
          options={{
            headerShown: false,
          }}
          component={AddNoteText}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
