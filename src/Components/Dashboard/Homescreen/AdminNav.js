import React from "react";

const AdminNav = ({onLogout}) => {
    return (
        <div className="admin-nav">
            <h3 className="admin-nav-link">TÁBORY</h3>
            <h3 className="admin-nav-link">KLIENTI</h3>
            <h3 className="admin-nav-link link-right" onClick={onLogout}>ODHLÁSIT</h3>
        </div>
    )
}

export default AdminNav