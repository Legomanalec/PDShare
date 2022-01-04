import React from 'react';
import { Button, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from '../styles/BasicStyles';


export default function Home ({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('AddPDF')}
          >
            <Text style={styles.buttonTextStyle}>
              Add a PDF
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('ListAllPDF')}
          >
            <Text style={styles.buttonTextStyle}>
              View All PDFs
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
    );
  }