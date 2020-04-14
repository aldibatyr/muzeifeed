import React from 'react';
import {StyleSheet, Image, View, useWindowDimensions} from 'react-native';
import ActionButton from './ActionButton';

const Post = ({post}) => {
  const window = useWindowDimensions();
  console.log(window);
  return (
    <View style={styles.post}>
      <Image
        style={{
          ...styles.image,
          width: window.width - 40,
          height: window.height * 0.5,
        }}
        source={{uri: post.urls.small}}
      />
      <ActionButton />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    flex: 1,
    // padding: 50,
  },
  image: {
    borderRadius: 20,
  },
});
