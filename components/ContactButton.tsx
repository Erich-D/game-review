import {View, Text, StyleSheet, Button, TouchableHighlight, 
    TouchableOpacity, TouchableWithoutFeedback, Vibration} from 'react-native';

type contactButtonProps = {
    id: number
    name: string
    handler:any
}

export default function ContactButton(props:contactButtonProps){


    return <View style={{width:"100%"}}>
        <TouchableOpacity onPress = {()=>{props.handler(props.name)}}>
            <View style = {styles.touchableView}>
                <Text style = {styles.touchableText}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    touchableView : {
        backgroundColor: '#00FF7F',
        margin: 10,
        borderRadius:15,
    },
    touchableText : {
        fontSize: 20,
        alignSelf: "center",
        color:"white",
        padding:8
    },
})