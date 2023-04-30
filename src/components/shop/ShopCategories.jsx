import React from 'react'
import { multilanguage } from 'redux-multilanguage'
import { useSelector } from 'react-redux'

const ShopCategories = ({strings}) => {

  const categories = useSelector( state => state.categorieData.categories ) 

  return (
    <div className='sidebar-widget'>
        <h6>Categories</h6>
        <div className='sidebar-widget-list'>
            <ul>
                <li>
                    <div>
                        <button className='d-flex align-item-center' for="">                       
                            <span className='checkmark m-l-10 fs-7'/>
                            {strings['all_categories']}
                        </button>


                    </div>                  
                </li>

                {
                    categories && categories.map((category) =>{
                         
                        return <li>
                                <div>
                                    <button className='d-flex align-item-center' for="">                       
                                        <span className='checkmark m-l-10 fs-7'/>
                                        {strings['all_categories']}
                                    </button>
                                </div>                  
                            </li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default multilanguage(ShopCategories)