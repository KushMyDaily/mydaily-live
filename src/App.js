import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
  Image,
  Card
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className='App-logo' alt="logo"/>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign out</Button>
    </View>
  );
}

export default withAuthenticator(App);
