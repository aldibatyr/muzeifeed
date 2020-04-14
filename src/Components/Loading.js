import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.loadingScreen}>
      <Text>This is Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
