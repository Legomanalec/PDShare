import React from 'react';
import { Button, View, Text } from 'react-native';


export default function Home ({navigation}) {
    return (
      <View>
        <Text>Home Screen</Text>

        <Button
          title="Add a PDF"
          color="red"
          onPress={() => navigation.navigate('AddPDF')}
        />
        <Button
          title="View PDF"
          color="blue"
          onPress={() => navigation.navigate('ListPDF')}
        />
        <Button
        title="List All PDFs"
        color="green"
        onPress={() => navigation.navigate('ListAllPDF')}
        />
      </View>
    );
  }