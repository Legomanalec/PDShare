import React from 'react';
import { Button, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from '../styles/BasicStyles';


export default function HomePageScreen ({navigation}) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('ServerSelectScreen')}
          >
            <Text style={styles.buttonTextStyle}>
              Join Server: SERVER 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('UploadToServerScreen')}
          >
            <Text style={styles.buttonTextStyle}>
              Upload to Server
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('ViewFilesScreen')}
          >
            <Text style={styles.buttonTextStyle}>
              View Files
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
    );
  }