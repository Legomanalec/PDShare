
import React, { useState, useEffect, Component } from "react";

// Import all the components we are going to use
import {
  Text,
  View,
} from "react-native";

import { StyleSheet, Dimensions } from 'react-native';


import storage from "@react-native-firebase/storage";

import Pdf from 'react-native-pdf';

class ListPDF extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
        loading: true,
        mounted: true,
        url: "",
        inurl: "",
    }
 }

  async getAndLoadHttpUrl() {

    if (this.state.mounted == true) {

      console.log(this.props.url);
      storage()
      .ref("myfiles/information-technology-project-management-9thnbsped_compress.pdf")
      .getDownloadURL()
      .then(data => {
         this.setState({ url: data })
         this.setState({ loading: false })
      })
   }
 }


  componentDidMount() {
  this.setState({ isMounted: true })
   this.getAndLoadHttpUrl()

  }

  componentWillUnmount() {
    this.setState({ isMounted: false })
 }


  render() {
    if (this.state.mounted == true) {
      if (this.state.loading == true) {
        
        return (
             <Text>LOADING</Text>

        )
      }

      else {
        return (
          <View style={styles.container}>
          <Pdf source={ {uri: this.state.url, cache: true}} style={styles.pdf}/>
          </View>
        )
        }

    }
  else {
      return null
  }  
  }
}

export default ListPDF;

const styles = StyleSheet.create({
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