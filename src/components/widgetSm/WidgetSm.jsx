import React from 'react';
import './WidgetSm.css';
import {Visibility} from '@mui/icons-material';

const WidgetSm = ({title}) => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Lee Wong</span>
                        <span className="widgetSmUserTitle">Software Analyst</span>
                    </div>
                    <button className="widgetSmButton">
                         Display
                         <Visibility className="widgetSmIcon" />
                        
                    
                    </button>
                </li>
            </ul>
            
        </div>
    )
}

export default WidgetSm
