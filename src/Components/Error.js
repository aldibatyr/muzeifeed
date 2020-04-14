import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Error = () => {
  return (
    <View style={styles.errorScreen}>
      <Text>We encountered error</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  errorScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
