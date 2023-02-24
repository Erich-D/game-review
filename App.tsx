import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from './types';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { gamereviewReducer } from './reducer/game-review-reducer';
import { rootSaga } from './sagas/game-review-saga';
import HomeScreen from './screens/HomeScreen';
import ReviewScreen from './screens/ReviewScreen';
import CreateGameScreen from './screens/CreateGameScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const sagaMiddleware = createSagaMiddleware()
const gameReviewStore = createStore(gamereviewReducer, applyMiddleware(sagaMiddleware));// now the sagas will watch over the dispatch actions
sagaMiddleware.run(rootSaga)

export default function App() {
  return (
    <Provider store={gameReviewStore}>
      <NavigationContainer>
          {/* Within this navigator, we set up our screens: */}
          <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen 
                name = "Home"
                component={HomeScreen}
              />
              <Stack.Screen
                name = "Review"
                component={ReviewScreen}
              />
              <Stack.Screen
                name = "CreateGame"
                component={CreateGameScreen}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//npm i @reduxjs/toolkit
//npm i react-redux
//npm react-saga