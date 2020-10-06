import React, {useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Card from '../../Components/Card';

const Home = ({navigation}) => {
  const data = [
    {
      title: 'C형간염 종식에 희망"…미·영 학자 3명에 노벨의학상',
      image: require('../../Assets/Sample/sample1.jpg'),
    },
    {
      title: 'SON에 농락당한 솔샤르 "맨유 몸 담은 이후 가장 끔찍했다"',
      image: require('../../Assets/Sample/sample2.jpg'),
    },
    {
      title:
        "'살인일정'을 6승1무1패로 마친 무리뉴, 토트넘팬들은 그의 '2년차 매직'을 믿는다",
      image: require('../../Assets/Sample/sample3.jpg'),
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{paddingLeft: 10}}>
          <Image source={require('../../Assets/Images/ic_menu.png')} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{paddingRight: 10}}>
          <Image source={require('../../Assets/Images/ic_search.png')} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bestNewContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Today's best news</Text>
          <Text style={{color: '#f03e3e'}}>Show ALL</Text>
        </View>
        <FlatList
          horizontal={true}
          //   pagingEnabled={true}
          data={data}
          keyExtractor={(item, index) => {
            return `news-${index}`;
          }}
          renderItem={({item, index}) => (
            <Card id={item.id} title={item.title} image={item.image} />
          )}
        />
      </View>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Choose by Category</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Assets/Images/ic_policy.png')}
              style={{
                backgroundColor: '#087f5b',
                borderRadius: 10,
              }}
            />
            <Text style={{color: '#FFF'}}>정치</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Assets/Images/ic_economy.png')}
              style={{
                backgroundColor: '#e67700',
                borderRadius: 10,
              }}
            />
            <Text style={{color: '#FFF'}}>경제</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Assets/Images/ic_society.png')}
              style={{
                backgroundColor: '#c92a2a',
                borderRadius: 10,
              }}
            />
            <Text style={{color: '#FFF'}}>사회</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Assets/Images/ic_life.png')}
              style={{
                backgroundColor: '#862e9c',
                borderRadius: 10,
              }}
            />
            <Text style={{color: '#FFF'}}>생활</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Assets/Images/ic_it.png')}
              style={{
                backgroundColor: '#364fc7',
                borderRadius: 10,
              }}
            />
            <Text style={{color: '#FFF'}}>IT</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Assets/Images/ic_global.png')}
              style={{
                backgroundColor: '#0b7285',
                borderRadius: 10,
              }}
            />
            <Text style={{color: '#FFF'}}>세계</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Assets/Images/ic_entertainments.png')}
              style={{
                backgroundColor: '#5c940d',
                borderRadius: 10,
              }}
            />
            <Text style={{color: '#FFF'}}>연예</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Assets/Images/ic_sport.png')}
              style={{
                backgroundColor: '#d9480f',
                borderRadius: 10,
              }}
            />
            <Text style={{color: '#FFF'}}>스포츠</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  bestNewContainer: {
    height: 300,
    marginBottom: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#343a40',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 17,
    color: '#FFF',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
});

export default Home;
