import React from 'react'
import { multilanguage } from 'redux-multilanguage';
import SearchInput from '../../components/header/SearchInput';
import { RiCloseCircleFill } from 'react-icons/ri';
import ShopCategories from '../../components/shop/ShopCategories';

const ShopSidebar = ({strings,openSidebar}) => {
  return (
    <div  className={`${openSidebar==true ? 'sidebar-style active' : 'sidebar-style' }`}>
        <div className='sidebar-widget'>
            <div className='row'>
              <h6 className='sidebar-widget-title'>{strings['search']}</h6>
              <button className='btn btn-outline'> <RiCloseCircleFill className='icon' /> </button>
            </div>
            <SearchInput/>
        </div>

        <ShopCategories/>
    </div>
  )
}

export default multilanguage(ShopSidebar);