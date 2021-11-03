import React from "react";
import AdminNav from "./AdminNav";
import CampEdit from "./Camps/CampEdit";
import './Homescreen.css'

const HomeScreen = ({token}) => {
    return (
        <div className="admin-home-screen">
            <AdminNav/>
            <div className="admin-container">
                <h1 className="tc">Tábory</h1>
                <CampEdit token={token}/>
                <h1 className="tc">Turnusy</h1>
            </div>
        </div>
    )
}

export default HomeScreen