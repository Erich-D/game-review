import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Image, ScrollView, TextInput, Linking } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ContactButton from "../components/ContactButton";
import Heading from "../components/Heading";
import TouchButton from "../components/TouchButton";
import { GameReviewActions, GameReviewState } from "../reducer/game-review-reducer";
import { Props } from "../types";



export default function ReviewScreen({navigation, route}:Props["review"]){

    const dispatch = useDispatch()<GameReviewActions>;
    const reviews = useSelector((store:GameReviewState) => store.review);
    const [email, setEmail] = useState<string>('');


    useEffect(()=>{
        dispatch({type:"GET_REVIEW_REQUEST",payload:route.params.reviews})
    },[])

    console.log(reviews)
    return <View style={styles.container}>
        <Heading txt={`Reviews for ${reviews.name}`} size={24}/>
        <Image style={{width:50,height:50}} source={{uri:reviews.image}}/>
            <Heading size={18} txt={averageRating()}/>
                <FlatList contentContainerStyle={styles.list} data = {reviews.reviews} renderItem = {
                    ({item, index}) => (
                        <View style={styles.listItem} key={index}>
                            {/* <ContactButton id={item.rating} name={item.author} handler={sendMail}/> */}
                            <Heading size={20} txt={item.author}/>
                            <Heading size={18} txt={item.title}/>
                            <Heading size={18} txt={item.description}/>
                            <Heading size={18} txt={String(item.rating)}/>
                        </View>
                    )
                }/>
        <TextInput style={styles.input} placeholder={'Tell a Friend by email'} keyboardType='email-address' value = {email} onChangeText = {(e)=>setEmail(e)}/>
        <TouchButton title={"Tell a Friend"} handler={()=>{sendMail(email,reviews.name,averageRating())}} size={18}/>
    </View>

    function averageRating(){
        const average = (reviews.reviews.map((e)=>{return e.rating}).reduce(getSum,0)/reviews.reviews.length).toFixed(2)
        const result = Number.isNaN(Number(average)) ? `No ratings for ${reviews.name}`:`Average rating is: ${average}`
        return result
    }
}

function sendMail(email:string, title:string, rating:string){
    Linking.openURL(`mailto: ${email}?subject=${title}&body=Hi ${title} has an ${rating.toLowerCase().replace("is","of")} you should check it out`)
}

function getSum(total:number,num:number){
    return total + num
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
        //width:'80%',
        alignItems:'center',
        flex:1
    },
    listItem:{
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        width:'90%',
        margin:10
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
  });