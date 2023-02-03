import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const detailListItem = ({ item }) => (
<View style={styles.detail_list_item}>
<Image
    style={styles.topic_icon}
    source={{uri: item.topic_icon}}
   />
<Text style={styles.topic}>{item.topic}</Text>
<Image
    style={styles.right_arrow}
    source={{uri: item.right_arrow}}
   />
</View>
  );

const DetailList = ({ item }) => (
<FlatList
    style={styles.detail_list}
    data={item}
    renderItem={detailListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default DetailList;

const styles = StyleSheet.create({
topic_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
topic: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
right_arrow: {
    width: '10vw',
    height: '10vw',
    margin: 5
  }
});