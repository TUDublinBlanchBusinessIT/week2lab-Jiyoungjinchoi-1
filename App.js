import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  paragraph: {
    margin: 60,
    fontSize: 40,
    fontweight: 'bold',
    textAlign: 'center'
  },
});

export default function App(){

  return(
    <View>
      <Text style={styles.paragraph}>Hello, World</Text>
    </View>
  )
};