import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Review } from "./api/request"

export type RootStackParamList = {
    // use undefined to not take in any props
    Home: undefined,
    CreateGame: undefined
    // the profile screen takes in a userId which is a number
    Review: {reviews: string}

}

export type Props = {
    // one sub-type for screens with no props
    home: NativeStackScreenProps<RootStackParamList, 'Home'>// one sub-type for profile page with user id:
    review: NativeStackScreenProps<RootStackParamList, 'Review'>;
    createGame: NativeStackScreenProps<RootStackParamList, 'CreateGame'>;

}