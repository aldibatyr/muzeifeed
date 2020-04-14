import React from 'react';
import {StyleSheet, Text} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import Post from './Post';

const Feed = ({posts}) => {
  return (
    <CardStack
      style={styles.stack}
      loop
      renderNoMoreCards={() => (
        <Text style={styles.emptyStackText}>No more cards :(</Text>
      )}
      ref={(swiper) => {
        this.swiper = swiper;
      }}>
      {posts.map((post) => {
        return (
          <Card key={post.id}>
            <Post post={post} />
          </Card>
        );
      })}
    </CardStack>
  );
};

export default Feed;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStackText: {
    fontWeight: '700',
    fontSize: 18,
    color: 'gray',
  },
});
