import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.sectionContainer}>
        <View>
          <Text style={styles.container}>All Football</Text>
        </View>
        <View>
          <Text style={styles.marginBottom}>Today's match</Text>
          <View style={styles.mainDisplay}>
            <View>
              <Image
                style={{width: 60, height: 60, resizeMode: 'contain'}}
                source={require('./assets/images/liverpool.webp')}
              />
              <Text>Liverpool</Text>
            </View>
            <View style={styles.centered}>
              <Text style={styles.counter}>2</Text>
            </View>
            <View style={styles.centered}>
              <Text>-</Text>
            </View>

            <View style={styles.centered}>
              <Text style={styles.counter}>3</Text>
            </View>
            <View>
              <Image
                style={{width: 60, height: 60, resizeMode: 'contain'}}
                source={require('./assets/images/man.webp')}
              />
              <Text>Man Utd</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexGrow: 1,
  },
  container: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 4,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 10,
    marginTop: 10,
  },
  mainDisplay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  counter: {
    fontSize: 30,
  },
});

export default App;
