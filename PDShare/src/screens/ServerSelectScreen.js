import React from 'react';
import { Button, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from '../styles/BasicStyles';


export default function ServerSelectScreen ({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('SelectFileScreen')}
          >
            <Text style={styles.buttonTextStyle}>
              Select a File
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('ViewSessionScreen')}
          >
            <Text style={styles.buttonTextStyle}>
              View Current Session
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
    );
  }