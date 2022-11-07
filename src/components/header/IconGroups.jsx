import React from 'react'
import { IoIosGitCompare } from 'react-icons/io'
import { AiOutlineShoppingCart,AiOutlineHeart,AiOutlineMenu }  from 'react-icons/ai'
import { TbUserCircle } from 'react-icons/tb'
import { BiSearchAlt } from 'react-icons/bi'

export const IconGroups = () => {
    return (
        <div className="icon-group">
            <div className="icon search hide">
                <TbUserCircle />
            </div>  
            
            <div className="icon user hide">
                <BiSearchAlt />
            </div>
            
            <div className="icon compare">
                <IoIosGitCompare />
                <span className='fly-number'>0</span>
            </div>

            <div className="icon whistle">
                <AiOutlineHeart/>
                <span className='fly-number'>0</span>
            </div>

            <div className="icon cart">
                <AiOutlineShoppingCart/>
                <span className='fly-number'>0</span>
            </div>

            <div className="icon mobile-menu">
                <AiOutlineMenu/>
            </div>

        </div>
    )
}
