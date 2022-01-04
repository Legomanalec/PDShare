
//<ListPDF refParentToChild={'myfiles/SamplePDF.pdf'}/>


import React, { Component } from "react";

import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from "react-native";

import storage from "@react-native-firebase/storage";

import Pdf from 'react-native-pdf';

class ViewPDF extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
        loading: true,
        mounted: true,
        url: "",
        ref: this.props.refParentToChild
    }
    this.state.inurl = props.url;
  }

  async getAndLoadHttpUrl(ref) {

    if (this.state.mounted == true) {
      storage()
      .ref(ref)
      .getDownloadURL()
      .then(data => {
         this.setState({ url: data })
         this.setState({ loading: false })
      })
    }
  }

  componentDidMount() {
  this.setState({ isMounted: true })
  this.getAndLoadHttpUrl(this.state.ref)

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

export default ViewPDF;

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