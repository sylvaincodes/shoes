import React from 'react'
import  BannerTopItem  from '../../components/banner/BannerTopItem'
import { useSelector } from 'react-redux';
import './style.css';

function BannerTop() {

    const BannerTopData = useSelector((state) => state.slidesitemData.slidesitems.slidesitems.filter( item  => item.key == "banner-top" ));
    return (
        <div className="banner-top">
            <div className="container">
                <div className="wrapper">

                    {
                        BannerTopData && BannerTopData.map((item) =>
                        {
                            return  <BannerTopItem
                            data={item} 
                            key={item.id} 
                            />
                        })
    
                    }

                </div>
            </div>
        </div>
    )
}

export default BannerTop;