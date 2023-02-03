import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import DetailList from './DetailList'

const OmioProfile = () => (
<ScrollView style={styles.omio_profile} showsVerticalScrollIndicator={false}>
<Image
    style={styles.profile_background}
    source={{uri: item.profile_background}}
    />
<Text style={styles.profile_title}>{item.profile_title}</Text>
<Text style={styles.about_profile}>{item.about_profile}</Text>
<DetailList item={item.detail_list}/>
</ScrollView>
)

export default OmioProfile;

const styles = StyleSheet.create({
profile_background: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  },
profile_title: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
about_profile: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});