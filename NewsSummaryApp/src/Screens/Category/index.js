import React, {useLayoutEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';

import NewsItem from '../../Components/NewsItem';

const Category = ({route, navigation}) => {
  const {category} = route.params;

  const data = [
    {
      title: 'C형간염 종식에 희망"…미·영 학자 3명에 노벨의학상',
      image: require('../../Assets/Sample/sample1.jpg'),
      content: `비야레알로 임대된 수비수 후안 포이스(22)가 토트넘과의 이별을 암시했다. 포이스는 5일(한국시간) 자신의 인스타그램에 "나는 어제(4일) 스페인에서 새 축구 경력을 시작했다. 비야레알에서 하루 빨리 뛰고 싶지만 그 전에 토트넘에게 감사 인사를 하고 싶다"고 말문을 열었다.`,
    },
    {
      title: 'SON에 농락당한 솔샤르 "맨유 몸 담은 이후 가장 끔찍했다"',
      image: require('../../Assets/Sample/sample2.jpg'),
      content: `토트넘은 전날 포이스의 재계약 소식과 함께 스페인 라리가 비야레알로 임대 이적한 사실을 공식 발표했다. 2023년까지 토트넘과 재계약한 포이스는 2020~2021시즌 한 시즌 동안 스페인 프리메라리가 비야레알에서 뛰게 됐다.`,
    },
    {
      title:
        "'살인일정'을 6승1무1패로 마친 무리뉴, 토트넘팬들은 그의 '2년차 매직'을 믿는다",
      image: require('../../Assets/Sample/sample3.jpg'),
      content: `포이스는 지난 2017년 8월 아르헨티나 에스투디안테스에서 토트넘으로 이적했다. 센터백 혹은 라이트백 등에서 출전 기회를 부여받았으나 잠재력을 터트리지 못했다. 부상도 있었다. 토트넘에서 32경기 출전해 1골을 기록 중이다.`,
    },
    {
      title: 'C형간염 종식에 희망"…미·영 학자 3명에 노벨의학상',
      image: require('../../Assets/Sample/sample1.jpg'),
      content: `포이스는 "언제 우리가 다시 만날지는 모르겠지만 3년간의 런던 생활에 대해 감사함을 전하고 싶다"면서 "첫날부터 정말 편안함을 느꼈고, 경기장 안팎에서 성장할 수 있었다. `,
    },
    {
      title: 'SON에 농락당한 솔샤르 "맨유 몸 담은 이후 가장 끔찍했다"',
      image: require('../../Assets/Sample/sample2.jpg'),
      content: `세계에서 가장 뛰어난 리그에서 뛸 수 있는 기회를 얻었다. 팀 동료, 코치, 클럽 스태프, 직원들 그리고 팬들 덕분이다. 이번 시즌 모두에게 행운을 빈다"고 적었다.`,
    },
    {
      title:
        "'살인일정'을 6승1무1패로 마친 무리뉴, 토트넘팬들은 그의 '2년차 매직'을 믿는다",
      image: require('../../Assets/Sample/sample3.jpg'),
      content: `경험을 위해 임대 이적이 결정됐다. 그런데 포이스는 임대가 종료되면 완전 이적을 추진하려는 모양이다.`,
    },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `N-Summary ${category}`,
    });
  }, [navigation, category]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => {
          return `todo-${index}`;
        }}
        // ListEmptyComponent={<EmptyItem />}
        renderItem={({item, index}) => (
          <NewsItem
            id={item.id}
            title={item.title}
            image={item.image}
            content={item.content}
            onPress={(id) => navigation.navigate('Details', {id})}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
});

export default Category;
