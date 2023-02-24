import {View, Text, StyleSheet, Button, TouchableHighlight, 
    TouchableOpacity, TouchableWithoutFeedback, Vibration} from 'react-native';

type touchButtonProps = {
    title: string
    handler:any
    size:number
}

export default function TouchButton(props:touchButtonProps){

    const styles = StyleSheet.create({
        touchableText : {
            fontSize: props.size,
            alignSelf: "center",
            color:"white"
        },
        button:{
            width:"100%",
            borderRadius:5,
            borderWidth: 1,
            fontSize: 4,
            backgroundColor:"#00FF7F",
            padding:8,
            margin:8
        },
    
    })

    return <View>
        <TouchableOpacity onPress = {props.handler} style={styles.button}>
            <Text style = {styles.touchableText}>{props.title}</Text>
        </TouchableOpacity>
    </View>
}

