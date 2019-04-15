import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import ToDoPage from "./components/ToDoPage/ToDoPage";
import AuthPage from "./components/AuthPage/AuthPage";



class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact
                       path='/'
                       render={() => <AuthPage/>}/>
                <Route exact
                       path='/todo'
                       render={() => <ToDoPage/>}/>
            </div>
        )
    }
}

export default App;
