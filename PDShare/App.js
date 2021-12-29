/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import Pdf from 'react-native-pdf';
 
 import { StyleSheet, Dimensions, View } from 'react-native';
 
 
 
 const App: () => Node = () => {
   const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
   return (
     <View style={styles.container}>
       <Pdf
         source={source}
         onLoadComplete={(numberOfPages,filePath) => {
             console.log(`Number of pages: ${numberOfPages}`);
         }}
         onPageChanged={(page,numberOfPages) => {
             console.log(`Current page: ${page}`);
         }}
         onError={(error) => {
             console.log(error);
         }}
         onPressLink={(uri) => {
             console.log(`Link pressed: ${uri}`);
         }}
         style={styles.pdf}/>
     </View>
   );
 };
 
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
 
 export default App;
 
