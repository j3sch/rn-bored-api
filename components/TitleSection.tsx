import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

interface Props {
  activity: string
}

export default function TitleSection({ activity }: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
          width: '75%',
        }}
      >
        {activity}
      </Text>
      <Icon
        style={{ alignSelf: 'flex-end' }}
        name='star'
        type='feather'
        color='#3C3C89'
        tvParallaxProperties={undefined}
      ></Icon>
    </View>
  )
}

const styles = StyleSheet.create({
  upperRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    width: '75%',
  },
})
