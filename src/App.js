import React from "react";

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="body">
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>

                            <Route exact path="/" element={
                                <Profile profilePage={props.state.profilePage}
                                         dispatch={props.dispatch}
                                         />}/>

                            <Route path="profile" element={
                                <Profile profilePage={props.state.profilePage}
                                         dispatch={props.dispatch}/>}/>
                            <Route path="dialog"
                                   element={
                                       <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                messages={props.state.dialogsPage.messages}/>}/>

                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
