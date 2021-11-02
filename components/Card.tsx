import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import TitleSection from './TitleSection'
import AdditionalInfo from './AdditionalInfo'

interface Props {
  activity: string
  type: string
  participants: number
  price: number
}

export default function Card(props: Props) {
  const { activity, type, participants, price } = props

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <TitleSection activity={activity} />
        <AdditionalInfo type={type} participants={participants} price={price} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 1,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 3,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
})
