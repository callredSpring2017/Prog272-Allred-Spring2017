import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chad's Expo App!</Text>
        <Text>Changes I made did automatically load.</Text>
        <Text>Shake your phone to open the developer menu WORKS!</Text>
          <Button
              onPress={this.fetchAddress}
              title="Get Data"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
          />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
