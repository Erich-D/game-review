import React from 'react';
import {StyleSheet, Text} from 'react-native';

type TextSize = {
    size:number
    txt:string
}

export default function Heading(props:TextSize){
    const styles = StyleSheet.create({
        heading: {
          backgroundColor: '#98FB98',
          fontSize: props.size,
          color:"white",
          padding:4,
          margin:4,
          marginTop:15
        },
      });

    return <>
        <Text adjustsFontSizeToFit={true} style={styles.heading}>{props.txt}</Text>
    </>
}

