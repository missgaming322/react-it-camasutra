import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className="body">
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route exact path="/" element={
                            <Profile/>}/>
                        <Route path="profile" element={
                            <Profile/>}/>
                        <Route path="dialog"
                               element={
                                   <DialogsContainer/>}/>

                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
