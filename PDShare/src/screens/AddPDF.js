
import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import styles from '../styles/BasicStyles.js';

import storage from "@react-native-firebase/storage";
import DocumentPicker from "react-native-document-picker";

const AddPDF = () => {
  
  // State Definations
  const [loading, setLoading] = useState(false);
  const [filePath, setFilePath] = useState({});
  const [process, setProcess] = useState("");

  const _chooseFile = async () => {

    // Opening Document Picker to select one file
    try {
      const fileDetails = await DocumentPicker.pickSingle({

        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.pdf],
      });
      console.log(
        "fileDetails : " + JSON.stringify(fileDetails)
      );
      // Setting the state for selected File
      setFilePath(fileDetails);
    } catch (error) {
      setFilePath({});   
    }
  };

  const _uploadFile = async () => {
    try {
      // Check if file selected
      if (Object.keys(filePath).length == 0)
        return alert("Please Select any File");
      setLoading(true);

      // Create Reference
      console.log(filePath.uri.replace("file://", ""));
      console.log(filePath.name);
      const reference = storage().ref(
        `/myfiles/${filePath.name}`
      );

      // Put File
      const task = reference.putFile(
        filePath.uri.replace("file://", "")
      );

      task.on("state_changed", (taskSnapshot) => {
        setProcess(
          `${taskSnapshot.bytesTransferred} transferred 
           out of ${taskSnapshot.totalBytes}`
        );
        console.log(
          `${taskSnapshot.bytesTransferred} transferred 
           out of ${taskSnapshot.totalBytes}`
        );
      });
      task.then(() => {
        alert("File Loaded!");
        setProcess("");
      });
      setFilePath({});
    } catch (error) {
      console.log("Error->", error);
      alert(`Error-> ${error}`);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.container}>
              <Text>{process}</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonStyle}
                onPress={_chooseFile}
              >
                <Text style={styles.buttonTextStyle}>
                  Choose PDF
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={_uploadFile}
              >
                <Text style={styles.buttonTextStyle}>
                  Upload to Server
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default AddPDF;

