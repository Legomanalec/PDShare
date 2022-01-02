import React, { useState, useEffect, Component } from "react";
import ListPDF from './ListPDF';
// Import all the components we are going to use
import {
  Text,
  View,
} from "react-native";
  


class ListAllPDF extends Component {
  render() {
      const url = 'myfiles/information-technology-project-management-9thnbsped_compress.pdf'
      return(
        <ListPDF url={url}/>
      )
  }
}

export default ListPDF;

