import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

interface Props {
  type: string
  participants: number
  price: number
}

export default function AdditionalInfo(props: Props) {
  const { type, participants, price } = props

  function colorOfLabel(type: string) {
    switch (type) {
      case 'education':
        return '#8BC34A'
      case 'recreational':
        return '#03A9F4'
      case 'social':
        return '#F48FB1'
      case 'diy':
        return '#FFC107'
      case 'charity':
        return '#CDDC39'
      case 'cooking':
        return '#FF5252'
      case 'relaxation':
        return '#7986CB'
      case 'music':
        return '#90CAF9'
      case 'busywork':
        return '#7C4DFF'
      default:
        return '#808080'
    }
  }

  function getNumberMoneyIcons() {
    if (price <= 0.25) {
      return ['0']
    } else if (price <= 0.5) {
      return ['0', '1']
    } else if (price < 0.75) {
      return ['0', '1', '2']
    } else if (price <= 1) {
      return ['0', '1', '2', '3']
    }
  }

  return (
    <View style={styles.row}>
      <View style={styles.typeParticipantsRow}>
        <Text
          style={{
            padding: 5,
            borderRadius: 6,
            textTransform: 'uppercase',
            backgroundColor: `${colorOfLabel(type)}`,
          }}
        >
          {type}
        </Text>
        <View style={styles.row}>
          <Icon
            style={styles.usersIcon}
            name='users'
            type='feather'
            tvParallaxProperties={undefined}
          ></Icon>
          <Text style={styles.participantNumber}>{participants}</Text>
        </View>
      </View>
      <View style={styles.row}>
        {getNumberMoneyIcons()!.map((data) => (
          <Icon
            key={data}
            name='dollar-sign'
            type='feather'
            color='#0C966B'
            tvParallaxProperties={undefined}
          ></Icon>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  typeParticipantsRow: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
  },

  participantNumber: {
    fontSize: 18,
  },
  usersIcon: {
    padding: 5,
  },
})
