// #3 Uploading Files and Images to Firebase Cloud Storage in React Native
// https://aboutreact.com/react-native-firebase-cloud-storage/

// Import React in our code
import React, { useState, useEffect } from "react";

// Import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Linking,
  Dimensions
} from "react-native";

import storage from "@react-native-firebase/storage";

import Pdf from 'react-native-pdf';

const ListPDF = () => {
  // State Defination
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  let url = "https://www.soundczech.cz/temp/lorem-ipsum.pdf"

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
      //getItem();
      //console.log(url);
      //setLoading(false);
    });
  };

  const ItemView = ({ item }) => {
      url = getItem(item.fullPath);
      console.log(url);
    return (
      // FlatList Item
        <View style={{ padding: 10 }}>
            <Pdf
                source={{uri: url, cache: true}}
                style={styles.pdf}/>
        </View>
    );
  };

  
  const getItem = async (fullPath) => {
    const url = await storage()
      .ref(fullPath)
      .getDownloadURL()
      .catch((e) => {
        console.error(e);
      });
      return await url
      
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>
        Listing of Files from Cloud Storage
      </Text>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={listData}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <Text style={styles.footerHeading}>
        React Native Firebase Cloud Storage
      </Text>
      <Text style={styles.footerText}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

export default ListPDF;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  footerHeading: {
    fontSize: 18,
    textAlign: "center",
    color: "grey",
  },
  footerText: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
    pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  }
});