import { CreateGameRequest, GetGamesRequest, GetReviewByNameRequest } from "../reducer/game-review-reducer";
import { takeEvery, put, all, select } from "@redux-saga/core/effects";
import { addNewGame, getAllItems, getReviewsByName, Item } from "../api/request";


//workers
export function* getGames(action:GetGamesRequest){
    try{
        const games:Item[] = yield getAllItems();
        yield put({type:"GET_GAMES_ACTION", payload: games})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

export function* getGameReviews(action:GetReviewByNameRequest){
    try{
        const game:Item = yield getReviewsByName(action.payload);
        yield put({type:"GET_REVIEW_BY_NMAE", payload: game})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

export function* createGame(action:CreateGameRequest){
    try{
        const game:Item = yield addNewGame(action.payload);
        yield put({type:"CREATE_GAME_ACTION", payload: game})
    }catch(e){
        yield put({type:"ERROR", payload: e, error:true
        });
    }
}

//watchers
export function* watchGetGames(){
    yield takeEvery("GET_GAMES_REQUEST",getGames)
}

export function* watchGetGameReviews(){
    yield takeEvery("GET_REVIEW_REQUEST",getGameReviews)
}

export function* watchCreateGame(){
    yield takeEvery("CREATE_GAME_REQUEST",createGame)
}

//root
export function* rootSaga(){
    yield all([watchGetGames(),watchGetGameReviews(), watchCreateGame()])
}