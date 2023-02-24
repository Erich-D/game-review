import { Item, ItemInput, Review } from "../api/request"


export type GameReviewState = {
    review:Item
    games: Item[]
    form: ItemInput
}

const initialState = {
    review:{
        itemId:0,
        name: '',
        description: '',
        image: '',
        reviews: [],
    },
    games:[],
    form:{
        name: '',
        description:'',
        image:''
    }

}

//reducer actions
export type GetGamesAction = {type:"GET_GAMES_ACTION", payload:Item[]}
export type GetReviewByNameAction = {type:"GET_REVIEW_BY_NMAE", payload:Item}
export type CreateGameAction = {type:"CREATE_GAME_ACTION",payload:Item}
export type SetNameAction = {type:"SET_NAME_ACTION",payload:string}
export type SetDescriptionAction = {type:"SET_DESCRIPTION_ACTION",payload:string}
export type SetImageAction = {type:"SET_IMAGE_ACTION",payload:string}

//saga actions
export type GetGamesRequest = {type:"GET_GAMES_REQUEST"}
export type GetReviewByNameRequest = {type:"GET_REVIEW_REQUEST", payload:string}
export type CreateGameRequest = {type:"CREATE_GAME_REQUEST",payload:ItemInput}
//action types
export type GameReviewActions = GetGamesAction | GetGamesRequest | GetReviewByNameAction | GetReviewByNameRequest | CreateGameAction | CreateGameRequest 
        | SetNameAction | SetDescriptionAction | SetImageAction

export function gamereviewReducer(state:GameReviewState = initialState, action:GameReviewActions):GameReviewState{
    const nextState: GameReviewState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "SET_NAME_ACTION":{
            nextState.form.name = action.payload
            return nextState
        }

        case "SET_DESCRIPTION_ACTION":{
            nextState.form.description = action.payload
            return nextState
        }

        case "SET_IMAGE_ACTION":{
            nextState.form.image = action.payload
            return nextState
        }

        case "GET_GAMES_ACTION":{
            nextState.games = action.payload
            return nextState
        }

        case "GET_REVIEW_BY_NMAE":{
            nextState.review = action.payload
            return nextState
        }

        case "CREATE_GAME_ACTION":{
            nextState.games.push(action.payload)
            nextState.form.name = ''
            nextState.form.image = ''
            nextState.form.image = ''
            return nextState
        }

        default:
            return nextState
        
    }
}