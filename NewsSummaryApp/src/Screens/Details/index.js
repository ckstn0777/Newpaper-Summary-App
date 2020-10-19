import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Details = () => {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <View style={{padding: 15, borderBottomWidth: 1}}>
          <Text style={styles.title}>
            호수 밑바닥에 괴물 사나…"네스호서 10m 괴생명체 포착"
          </Text>
          <Text style={styles.dateLabel}>기사입력 2020.10.06. 오후 9:31</Text>
        </View>
        <View>
          <Text style={styles.content}>
            {`영국 스코틀랜드 네스호를 둘러싼 오래 된 설화인 네스호의 괴물이 과학적으로 증명된 것일까. 5일(현지시간) 영국 더선, 데일리메일 등은 네스호의 괴물 '네시'가 수중 초음파 장비에 포착됐다는 주장이 나왔다고 보도했다. 

현지 매체에 따르면 이번에 수중 초음파 장비를 통해 호수 밑바닥에서 10m 크기에 달하는 생명체를 탐지한 인물은 로널드 매켄지 선장이다. 그는 지난달 30일 오후 관광객을 태우고 네스호에 나갔다가 이 괴생명체의 모습을 포착했다고 주장했다.

그가 제공한 수중 초음파 장비 화면에는 희색 점이 뚜렷하게 찍혀 있다. 매킨지 선장에 따르면 큰 흰색 점 주변의 작은 점들은 송어나 연어 무리다. 만약, 생명체가 맞는다면 10m가 넘는 거대한 생명체로, 이는 '네시'(Nessie)일 가능성이 있다는 게 매켄지 선장의 주장이다.`}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    backgroundColor: '#141414',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f4f0',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  dateLabel: {
    fontSize: 12,
  },
  content: {
    fontSize: 14,
    lineHeight: 25,
    padding: 15,
  },
});

export default Details;
