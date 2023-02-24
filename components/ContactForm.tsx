import { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button, NativeModules} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CreateGameRequest, GameReviewActions, GameReviewState } from '../reducer/game-review-reducer';
import TouchButton from './TouchButton';


type FormProp = {
    returnHome:any
}

export default function ContactForm(props:FormProp) {
    const dispatch = useDispatch()<GameReviewActions>;
    const form = useSelector((store:GameReviewState) => store.form);
    
    return <View style={styles.container}>
        <Text style={styles.label}>Game Name</Text>
        <TextInput style={styles.input} value = {form.name} onChangeText = {(e)=>dispatch({type:"SET_NAME_ACTION",payload:e})}/> 
        <Text style={styles.label}>Game Description</Text>
        <TextInput style={styles.input} value = {form.description} onChangeText = {(e)=>dispatch({type:"SET_DESCRIPTION_ACTION",payload:e})}/>
        <Text style={styles.label}>Game Image Url</Text>
        <TextInput style={styles.input} value = {form.image} onChangeText = {(e)=>dispatch({type:"SET_IMAGE_ACTION",payload:e})}/>
        <TouchButton title='Add New Game' handler={addContact} size={14}/>
        
    </View> 
    
    function addContact(){
        const newGame = {name:form.name, description:form.description, image:form.image}
        dispatch({type:"CREATE_GAME_REQUEST", payload:newGame})
        props.returnHome()
    }
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        borderWidth: 1,
        width:"80%",
        marginTop: 2,
        backgroundColor:"#00FF7F",
        borderRadius:15,
        height:'auto',
    },

    label:{
        fontWeight:'bold',
        margin:3,
        color: 'white',
        padding:2,
        fontSize:19,
    },

    input:{
        fontWeight:'bold',
        margin:3,
        color: 'white',
        borderWidth: 1,
        padding:2,
        fontSize:15,
        width:"80%"
    }
})