import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const NewsItem = ({id, title, image, content, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => onPress(id)}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f4f0',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  image: {
    width: '40%',
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 6,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 14,
  },
  content: {
    fontSize: 12,
  },
});

export default NewsItem;
