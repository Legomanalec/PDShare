import React from 'react';
import { Button, View, Text } from 'react-native';

export default function Home ({navigation}) {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Add an Item"
          onPress={() => navigation.navigate('AddItem')}
        />
        <Button
          title="List of Items"
          color="green"
          onPress={() => navigation.navigate('List')}
        />
        <Button
          title="Add a PDF"
          color="red"
          onPress={() => navigation.navigate('AddPDF')}
        />
        <Button
          title="View PDFs"
          color="yellow"
          onPress={() => navigation.navigate('ListPDF')}
        />
      </View>
    );
  }