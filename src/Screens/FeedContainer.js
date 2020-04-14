import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Feed from '../Components/Feed';
import Unsplash, {toJson} from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: 'kmFIroj2ELqXJPtC0XUoyww-Tr_lDU8Ho8uxjptIrCo',
});

const FeedContainer = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    unsplash.photos
      .listPhotos()
      .then(toJson)
      .then((json) => {
        setPosts(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Feed posts={posts} />
      )}
    </View>
  );
};

export default FeedContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
