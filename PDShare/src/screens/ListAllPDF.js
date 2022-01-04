//Need to find a way to render a returned JSX component once onPress is used



import React, { TouchableOpacity } from "react";
import ViewPDF from './ViewPDF';
import storage from '@react-native-firebase/storage';

import { useState, useEffect } from "react";

import styles from '../styles/BasicStyles.js';

// Import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Linking,
} from "react-native";


const ListAllPDF = () => {
  // State Defination
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listFilesAndDirectories("");
  }, []);

  const listFilesAndDirectories = (pageToken) => {
    const reference = storage().ref("myfiles");
    reference.list({ pageToken }).then((result) => {
      if (result.nextPageToken) {
        return listFilesAndDirectories(
          reference,
          result.nextPageToken
        );
      }
      setListData(result.items);
      setLoading(false);
    });
  };

  const ItemView = ({ item }) => {
    return (

        <View
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => RenderPDF(item.fullPath)}
          >
            <Text style={styles.buttonTextStyle}>
            {item.name}
            </Text>
          </View>
    );
  };

  const StartPDF = (ref) => {
    return(
      <ViewPDF refParentToChild={ref}/>
    )
  }

  const RenderPDF = (ref) => {
    StartPDF(ref);
    console.log(ref);
    setLoading(true);
    setLoading(false);
  }



  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.container}>  
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={listData}
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default ListAllPDF;


