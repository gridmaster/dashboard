import React from 'react';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import { GiStopSign } from "react-icons/gi";

import '../assets/css/Pagination.css'

const Pagination = ({pageNumber, setPageNumber, totalItem, parPage, showItem}) => {

    // console.log("pageNumber = " + pageNumber)
    // console.log("setPageNumber = " + setPageNumber)
    // console.log("totalItem = " + totalItem)  
    // console.log("parPage = " + parPage)
    // console.log("showItem = " + showItem)  

    let totalPage = Math.ceil(totalItem / parPage)
    let startPage = pageNumber

    let dif = totalPage - pageNumber
    if (dif <= showItem) {
        startPage = totalPage - showItem
    }

    // let startBtn = pageNumber
    // let endBtn = startBtn-1 + parPage
    // if( endBtn >= totalItem ) {
    //     startBtn = endBtn - 4
    //     endBtn = totalItem
    // }

    // if (startPage <= 0) {
    //     startPage = 1
    // }

    let startBtn = 1
    let endBtn = 5

    const createBtn = () => {

        startBtn = pageNumber
        if(startBtn === 1) {
            endBtn = 5
        } else if( startBtn >= totalItem - 4 ) {
            startBtn = totalItem - 4
            endBtn = totalItem
        } else {
            startBtn = pageNumber
            endBtn = pageNumber + 4
        }

        const btns = []
        for (let i = startBtn; i <= endBtn; i++) {
            console.log("i = " + i)

            btns.push(
                <li key={i} onClick={()=>setPageNumber(i)} className={` ${pageNumber === i ? 'page-btn-1' : 'page-btn-2'} page-btn`}>
                    {i}                    
                </li>
            )
        }
        return btns
    }
    
    return (
        <ul className='page-btn-ul'>
            {                                           
                <li onClick={()=>setPageNumber(pageNumber - 1)} className={` ${pageNumber === 1 ? 'btn-inactive' : '' } page-btn-2 page-btn`}>
                    <MdOutlineKeyboardDoubleArrowLeft />
                </li>
            }
            {
                createBtn()
            }
            {
                <li onClick={() => setPageNumber(pageNumber + 1)} className={` ${pageNumber === totalItem ? 'btn-inactive' : 'btn-active' } page-btn-2 page-btn`}>
                    <MdOutlineKeyboardDoubleArrowRight  />
                </li>
            }
        </ul>
    )
};

export default Pagination;