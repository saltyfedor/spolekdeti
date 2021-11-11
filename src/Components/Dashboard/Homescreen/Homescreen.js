import React from "react";
import AdminNav from "./AdminNav";
import CampEdit from "./Camps/CampEdit";
import CapacityEdit from "./Capacity/CapacityEdit";
import CustomersEdit from "./Customers/CustomersEdit";
import './Homescreen.css'

const HomeScreen = ({token, onLogout}) => {
    return (
        <div className="admin-home-screen">
            <AdminNav onLogout={onLogout}/>
            <div className="admin-container">
                <h1 className="tc">Tábory</h1>
                <CampEdit token={token}/>
                <h1 className="tc">Turnusy</h1>
                <CapacityEdit token={token} />
                <h1 className="tc">Klienti</h1>
                <CustomersEdit token={token}/>
            </div>
        </div>
    )
}

export default HomeScreen