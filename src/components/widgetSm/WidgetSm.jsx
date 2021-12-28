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
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/9894727/pexels-photo-9894727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Michelle Star</span>
                        <span className="widgetSmUserTitle">Data Analyst</span>
                    </div>
                    <button className="widgetSmButton">
                         Display
                         <Visibility className="widgetSmIcon" />
                    </button>
                </li>
                 <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jon Snow</span>
                        <span className="widgetSmUserTitle">Network Admin</span>
                    </div>
                    <button className="widgetSmButton">
                         Display
                         <Visibility className="widgetSmIcon" />
                    </button>
                </li>
                 <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jon Snow</span>
                        <span className="widgetSmUserTitle">Network Admin</span>
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
