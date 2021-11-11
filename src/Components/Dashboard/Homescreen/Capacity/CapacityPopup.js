import React, {useLayoutEffect} from "react";
import moment from "moment";

const CapacityPopup = ({ data, onChange, onClose, onSave }) => {
    
    useLayoutEffect(() => {
          // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;
          // Prevent scrolling on mount
        document.body.style.overflow = "hidden";
          // Re-enable scrolling when component unmounts
        return () => (document.body.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
    
    return (
        <div className="camp-popup-outer" onClick={onClose}>
            <div className="camp-popup-inner" onClick={(e) => e.stopPropagation()}>
                                
                    <h2 className="mt10 mb10">Turnus</h2>
                        <h4 className="mt10 mb0">Od</h4>
                        <input className="mt10" type="date" defaultValue={moment(data.start).format('YYYY-MM-DD')} onChange={(e) => {onChange({start: moment(e.target.value).utc().format()})}}/>
                        <h4 className="mt10 mb0">Do</h4>
                        <input className="mt10" type="date" defaultValue={moment(data.end).format('YYYY-MM-DD')} onChange={(e) => {onChange({end: moment(e.target.value).utc().format()})}}/>
                        <h4 className="mt10 mb0">Kapacita</h4>
                        <input className="mt10" type="number" defaultValue={data.capacity} onChange={(e) => {onChange({capacity: e.target.value})}}/>
              
                <div className="admin-save-button" onClick={onSave}>ULOŽIT</div>
            </div>
        </div>
    )
}

export default CapacityPopup