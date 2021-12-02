import React from 'react';
import './FeaturedInfo.css';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,230</span>
                    <span className="featuredMoneyRate">-12.2<ArrowDownward className="featuredIcon negative" /> </span>
                </div>
                <span className="featuredSub">Compared to Previous Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,230</span>
                    <span className="featuredMoneyRate">-9.2<ArrowDownward className="featuredIcon negative" /> </span>
                </div>
                <span className="featuredSub">Compared to Previous Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,230</span>
                    <span className="featuredMoneyRate">+15.2<ArrowUpward className="featuredIcon" /> </span>
                </div>
                <span className="featuredSub">Compared to Previous Month</span>
                
            </div>
            
        </div>
    )
}

export default FeaturedInfo
