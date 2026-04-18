import React from 'react';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import '../assets/css/Pagination.css'


    const Pagination = ({pageNumber, setPageNumber, totalItem, parPage, showItem}) => {

        // pageNumber = {currentPage}
        // setPageNumber = {setSearchValue}
        // totalItem = {50}
        // parPage = {parPage}
        // showItem = {3}

        let totalPage = Math.ceil(totalItem / parPage)
        let startPage = pageNumber

        let dif = totalPage - pageNumber
        
        if(dif <= showItem) {
            startPage = totalPage - showItem
        }

        let endPage = startPage < 0 ? showItem : showItem + startPage

        if( startPage <= 0) {
            startPage = 1
        }

        console.log("pageNumber = " + pageNumber)
        console.log("setPageNumber = " + setPageNumber)
        console.log("totalItem = " + totalItem)
        console.log("parPage = " + parPage)
        console.log("showItem = " + showItem)
        console.log("startPage = " + startPage)
        console.log("endPage = " + endPage)
        console.log("parPage = " + parPage)

        const createBtn = () => {

            const btns = []

            for(let i = startPage; i<endPage; i++) {
                btns.push(
                    <li key={i} onClick={()=>setPageNumber(i)} className={` ${pageNumber === i ? '' : '' } ` }>
                        {i}
                    </li>
                )
                // console.log("i = " + i )
                // console.log("pgnum = " + pageNumber)
                // console.log(btns)
            }
            return btns
        }

        return (
            <div className='page-nav-group'>
                <ul className='page-ul-return page-pagination-btns'>
                    <li className={totalItem <= parPage ? 'page-nav-btn inactive' : 'page-nav-btn'}><MdOutlineKeyboardDoubleArrowLeft /></li> 
                    <li className={1 <= totalItem ? 'page-nav-btn' : 'page-nav-btn inactive'}>1</li> 
                    <li className={2 <= totalItem ? 'page-nav-btn' : 'page-nav-btn inactive'}>2</li> 
                    <li className={3 <= totalItem ? 'page-nav-btn' : 'page-nav-btn inactive'}>3</li>   
                    <li className={4 <= totalItem ? 'page-nav-btn' : 'page-nav-btn inactive'}>4</li>
                    <li className={5 <= totalItem ? 'page-nav-btn' : 'page-nav-btn inactive'}>5</li>
                    <li className={6 <= totalItem ? 'page-nav-btn' : 'page-nav-btn inactive'}><MdOutlineKeyboardDoubleArrowRight /></li>
                </ul>
            </div>
        )
};

export default Pagination;