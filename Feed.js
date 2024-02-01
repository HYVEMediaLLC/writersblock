import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import { loremIpsum } from 'lorem-ipsum';
import React, {useState, useEffect} from 'react';

const { height } = Dimensions.get('window');

export default function Feed() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    if (loading) return;

    setLoading(true);
    const newData = generateLoremIpsumData(5);
    setData([...data, ...newData]);
    setLoading(false);
  };

  const generateLoremIpsumData = (count) => {
    return Array.from({ length: count }, () => {
      return {
        id: Math.random().toString(36).substr(2, 9),
        text: loremIpsum({ count: 2, units: 'sentences' }),
      };
    });
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={{marginBottom: 25}}>PROMPT: A man walks into a gas station...</Text>
            <Text>{item.text}</Text>
            <View style={styles.actions}>
              <EvilIcons name='heart' style={styles.icon} size={60} />
              <EvilIcons name='comment' style={styles.icon} size={60} />
              <Entypo name='dots-three-horizontal' style={styles.icon} size={35} />
            </View>
            <View style={styles.bottom}>
              <Text style={{marginBottom: 5}}>@danyil_c</Text>
              <Text>this is a comment in order to show what it would look like</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        onEndReached={loadData}
        onEndReachedThreshold={0.5}
        pagingEnabled
        snapToInterval={height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        showsVerticalScrollIndicator={false}
        disableIntervalMomentum={true}
      />
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '55%',
    paddingHorizontal: '10%',
    height: height,
  },
  actions: {
    position: 'absolute',
    bottom: 150,
    right: 5,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  bottom: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    height: 50,
    margin: 10,
    width: '75%',
  },
});
