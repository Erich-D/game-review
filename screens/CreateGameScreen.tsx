import { View, Text, StyleSheet } from "react-native";
import ContactForm from "../components/ContactForm";
import { Props } from "../types";

export default function CreateGameScreen({navigation, route}:Props["createGame"]){

    function returnHome(){navigation.navigate("Home")}

    return <View style={styles.container}>
        <ContactForm returnHome={returnHome}/>
    </View>
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        flex: 1,
        width:"100%",
        marginTop: 2,
        backgroundColor:"#00FF7F",
        Height:'100%',
        height:'auto',
    },
})
