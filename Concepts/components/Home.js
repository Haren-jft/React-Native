import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  SectionList,
} from 'react-native';
import React, {useState} from 'react';

const Home = () => {
  const [data, setData] = useState([1]);
  const [nestedData, setNestedData] = useState([
    {
      title: 'User1',
      data: ['Java', 'JavaScript'],
    },
    {
      title: 'User2',
      data: ['React', 'React-Native', 'Redux'],
    },
  ]);
  const [refresh, setRefresh] = useState(false);
  const onRefreshing = () => {
    setRefresh(true);
    setTimeout(() => {
      setData(data => [
        ...data,
        data.length === 0 ? 1 : data[data.length - 1] + 1,
      ]);
      setRefresh(false);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        }}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefreshing} />
        }
      />
      {/* <SectionList
        //in section list you have follow the structure of data i.e object with title and data fields
        keyExtractor={(item, index) => index.toString()}
        sections={nestedData}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({section}) => {
          return (
            <View style={[styles.item, {backgroundColor: '#FF6000'}]}>
              <Text style={styles.text}>{section.title}</Text>
            </View>
          );
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: '#6DA9E4',
    padding: 20,
    alignItems: 'center',
    fontWeight: '400',
  },
  text: {
    color: '#FDF4F5',
  },
});

export default Home;
