import React, { Component } from "react";
import ListPDF from './ListPDF';
import storage from '@react-native-firebase/storage';


class ListAllPDF extends Component {

  constructor(props){
    super(props);
    this.state = {
        ref: 'myfiles/information-technology-project-management-9thnbsped_compress.pdf'
    }
  }


  render() {

    function listFilesAndDirectories(reference, pageToken) {
      return reference.list({ pageToken }).then(result => {
        // Loop over each item
        result.items.forEach(ref => {
          console.log(ref.fullPath);
        });
    
        if (result.nextPageToken) {
          return listFilesAndDirectories(reference, result.nextPageToken);
        }
    
        return Promise.resolve();
      });
    }

    const reference = storage().ref('myfiles');

    listFilesAndDirectories(reference).then(() => {
      console.log('Finished listing');
    });

    const {ref} = this.state;
      return(
        <ListPDF refParentToChild={'myfiles/information-technology-project-management-9thnbsped_compress.pdf'}/>
      )
  }
}

export default ListAllPDF;

