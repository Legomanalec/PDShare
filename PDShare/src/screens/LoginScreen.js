import React from 'react';
import { Button, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from '../styles/BasicStyles';


export default function LoginScreen ({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('HomePageScreen')}
          >
            <Text style={styles.buttonTextStyle}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('CreateAccountScreen')}
          >
            <Text style={styles.buttonTextStyle}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
    );
  }