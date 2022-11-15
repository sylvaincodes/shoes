import React from "react";
import { multilanguage } from 'redux-multilanguage'
import newarrivalsData from '../../data/product/new-arrivals.json' 
import 'animate.css'
import NewArrivalItem from "../../components/product/NewArrivalItem";

function NewArrivals({strings}) {

  
  return (
    <div className="new-arrivals">
      <div className="container">

        <h5 className="title-inline">{strings['new_arrival']}</h5>
        <div className="wrapper-inline">

          {
                newarrivalsData && newarrivalsData.map(  (item,key) => {

                      return <NewArrivalItem key={key} data={item} />;

                })
          }

        </div>
      </div>
    </div>
  );
}

export default multilanguage(NewArrivals);
