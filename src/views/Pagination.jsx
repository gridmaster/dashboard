import React from 'react';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import { GiStopSign } from "react-icons/gi";

import '../assets/css/Pagination.css'


const Pagination = ({pageNumber,setPageNumber,totalItem,perPage,showItem}) => {

    let totalPage = Math.ceil(totalItem / perPage)
    let startPage = pageNumber

    let dif = totalPage - pageNumber
    if (dif <= showItem) {
        startPage = totalPage - showItem
    }

    let endPage = startPage < 0 ? showItem : showItem + startPage

    let mod = (pageNumber%perPage)
    let startBtn = pageNumber
    let endBtn = startBtn-1 + perPage
    if( endBtn > totalItem ) {
        endBtn = totalItem
    }

    // console.log("<======================")
    // console.log("       dif = " + dif)
    // console.log(" totalPage = " + totalPage)
    // console.log("  showItem = " + showItem)
    // console.log(" startPage = " + startPage)
    // console.log("   endPage = " + endPage)
    // console.log("pageNumber = " + pageNumber)
    // console.log(" totalItem = " + totalItem)
    // console.log("   perPage = " + perPage)
    // console.log("       mod = " + mod)
    // console.log("======================>")
     
    if (startPage <= 0) {
        startPage = 1
    } else
    {

    }

    console.log("   startBtn = " + startBtn)
    console.log("     endBtn = " + endBtn)

    const createBtn = () => {

        let showCount = startPage + 4;
        console.log("showCount  = " + showCount)
        const btns = []
        for (let i = startBtn; i <= endBtn; i++) {
            btns.push(
                <li key={i} onClick={()=>setPageNumber(i)} className={` ${pageNumber === i ? 'page-btn-1' : 'page-btn-2'} page-btn`}>
                    {i}                    
                </li>
            )
        }
        return btns
    }
   
    // console.log("ep = " + endPage)
    // console.log("tp = " + totalPage)
    // console.log("pn = " + pageNumber)
    // console.log("si = " + showItem)

    return (
        <ul className='page-btn-ul'>
            {                                           
                <li onClick={()=>setPageNumber(pageNumber - 1)} className={` ${pageNumber === 1 ? 'inactive' : '' } page-btn-2 page-btn`}>
                    <MdOutlineKeyboardDoubleArrowLeft />
                </li>
            }
            {
                createBtn()
            }
            {
                <li onClick={() => setPageNumber(pageNumber + 1)} className={` ${pageNumber === totalItem ? 'inactive' : '' } page-btn-2 page-btn`}>
                    <MdOutlineKeyboardDoubleArrowRight  />
                </li>
            }
        </ul>
    )
};

export default Pagination;