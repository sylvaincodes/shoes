import React from 'react'
import { BannerTopItem } from '../../components/banner/BannerTopItem'
import bannerTopData from '../../data/banner/banner-top.json'
import './style.css';

export const BannerTop = () => {

    return (
        <div className="banner-top">
            <div className="container">
                <div className="wrapper">

                    {
                        bannerTopData && 
                        bannerTopData.map((item,key) =>{
                                return(
                                    <BannerTopItem
                                    data={item} 
                                    key={key} 
                                    />
                                );
                            }
                        )
                    }

                </div>
            </div>
        </div>
    )
}
