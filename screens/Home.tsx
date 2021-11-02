import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Card from '../components/Card'

interface BoredData {
    activity: string
    type: string
    id: number
    participants: number
    price: number
}

export default function Home() {
  const [boredData, setBoredData] = useState([{}])
  const [isDataLoading, setDataLoading] = useState(true)

  function getBoringData() {
    for (let i = 0; i < 20; i++) {
      fetch(`https://www.boredapi.com/api/activity/`)
        .then((response) => response.json())
        .then((json) => {
          json.id = i
          setBoredData((boredData) => [...boredData, json])
        })
        .catch((error) => {
          console.error(error)
        })
      if (i === 5) {
        setDataLoading(false)
      }
    }
  }

  useEffect(() => {
    setBoredData([])
    getBoringData()
  }, [])

  function renderItemCard({ item }: { item: BoredData }) {
    return (
      <Card
        activity={item.activity}
        type={item.type}
        participants={item.participants}
        price={item.price}
      ></Card>
    )
  }

  return (
    <View style={styles.container}>
      {!isDataLoading && (
        <FlatList
          data={boredData}
          keyExtractor={item => item.id}
          renderItem={renderItemCard}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})
