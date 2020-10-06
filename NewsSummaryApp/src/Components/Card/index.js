import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Card = ({id, title, image}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.cardContainer}>
      <Image source={image} style={styles.cardImage} resizeMode="cover" />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: (Dimensions.get('window').width * 3) / 5,
    margin: 20,
    backgroundColor: '#dee2e6',
    borderRadius: 20,
  },
  cardImage: {
    width: (Dimensions.get('window').width * 3) / 5,
    height: 150,
    borderRadius: 20,
  },
  cardTitle: {
    fontSize: 14,
    color: '#343a40',
    padding: 15,
  },
});

export default Card;
