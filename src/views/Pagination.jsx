import React from 'react';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import '../assets/css/Pagination.css'


const Pagination = ({pageNumber,setPageNumber,totalItem,parPage,showItem}) => {

        // pageNumber = {currentPage}
        // setPageNumber = {setSearchValue}
        // totalItem = {50}
        // parPage = {parPage}
        // showItem = {3}

    let totalPage = Math.ceil(totalItem / parPage)
    let startPage = pageNumber

    let dif = totalPage - pageNumber
    if (dif <= showItem) {
        startPage = totalPage - showItem
    }
    let endPage = startPage < 0 ? showItem : showItem + startPage
     
    if (startPage <= 0) {
        startPage = 1
    }

    const createBtn = () => {

        const btns = []
        for (let i = startPage; i < endPage; i++) {
            btns.push(
                <li key={i} onClick={()=>setPageNumber(i)} className={` ${pageNumber === i ? 'page-btn-1' : 'page-btn-2'} page-btn`}>
                    {i}                    
                </li>
            )
            console.log(pageNumber)
            console.log(i)
            console.log(pageNumber > 1)
            console.log(pageNumber > i) 
        }
        return btns
    }

    return (
        <ul className='page-btn-ul'>
            {
                pageNumber > 1 && <li className='page-btn-2 page-btn '>
                    <MdOutlineKeyboardDoubleArrowLeft />
                </li>
            }{
                createBtn()
            }

        </ul>
    )
};

export default Pagination;