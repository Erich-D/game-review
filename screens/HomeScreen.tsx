import { useEffect } from 'react';
import {View, StyleSheet, FlatList, Text, Image, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ContactButton from '../components/ContactButton';
import Heading from '../components/Heading';
import TouchButton from '../components/TouchButton';
import { GameReviewActions, GameReviewState } from '../reducer/game-review-reducer';
import { Props } from "../types";


export default function HomeScreen({navigation}:Props["home"]) {

    const dispatch = useDispatch()<GameReviewActions>;
    const currentGameReviewState = useSelector((store:GameReviewState) => store.games);

    useEffect(()=>{
        dispatch({type:"GET_GAMES_REQUEST"})
    },[])

    return (
        <View style={styles.container}>
            <Heading txt='Best Nintendo 64 Games' size={24}/>
            <Text style={{width:'100%', borderBottomWidth:1}}></Text>
            {/* <TouchButton title='Add New Game' size={15} handler={addGame}/>  */}
            {/* <View style={{alignItems:'center'}}> */}
                <FlatList contentContainerStyle={styles.list} data = {currentGameReviewState} renderItem = {
                    ({item, index}) => (
                        <View style={{alignItems:'center'}} key={index}>
                            <Heading txt={item.name} size={24}/>
                            <Heading txt={item.description} size={18}/>
                            <Image style={{width:100,height:100}} source={{uri:item.image}}/>
                            <ContactButton id={item.itemId} name={'Get Reviews'} handler={getReviews}/>
                            <Text>{item.name}</Text>
                        </View>
                    )
                }/>
            {/* </View> */}
            <TouchButton title='Add New Game' size={15} handler={addGame}/>
        </View>
    )
    function getReviews(name:string){
         navigation.navigate("Review", {reviews: name})
    }
    function addGame(){
        navigation.navigate("CreateGame")
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#98FB98',
      alignItems: 'center',
      //justifyContent: 'center',
      height:"100%"
    },
    list:{
        //borderWidth:1,
        alignItems:'center'
    }
  });