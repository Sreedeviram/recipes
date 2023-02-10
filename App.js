import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native'; 

export default function App() {
  var username = '';
  var token = '';
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}


