import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from 'react-icons/fa'
import Pagination from '../Pagination';

// import '../../assets/css/Main.css'
import '../../assets/css/Category.css'

const Category = () => {

    const [parPage, setParPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className='category-content-first'>

            <div className='category-add-popup mobile-only' >
                <span className='category-text-style swap-text off-white-text'>{show ? 'Add Category' : 'Show Detail'}</span>
                <span >
                    <button onClick={handleClick} className='category-btn-popup off-white-text'>{show ? 'Add' : 'Show'}</button>
                </span>
            </div>

            <div className='category-chart-outer'>
                <div className="category-grid-container">

                    <div className={`${show === true ? 'show-graph' : 'hide-graph'} category-item1`}>
                        <div className='category-div-outer'>
                            <select onChange={(e) => setParPage(parseInt(e.target.value))} className='category-select'>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                            <input className='category-search' type="text" placeholder='search' />
                        </div>

                        <div className='category-bottom-outer'>
                            <div className='category-table-wrap'>
                                <table className='category-bottom-table'>
                                    <thead className='category-bottom-table'>
                                        <tr>
                                            <th scope='row' className='category-table-column'>No</th>
                                            <th scope='row' className='category-table-column'>Image</th>
                                            <th scope='row' className='category-table-column'>Name</th>
                                            <th scope='row' className='category-table-column'>Action</th>                               
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {                                
                                            [1,2,3,4,5].map((d, i) => <tr key={i}>
                                            <td className='category-table-tr'>{d}</td>
                                            <td className='category-table-tr'>
                                                <img className='category-msg-icon' src={`http://localhost:3000/images/category/${d}.jpg`} alt="BFD as Ralph would say..."/>
                                            </td>
                                            <td className='category-table-tr'>Sports</td>
                                            <td className='category-table-tr category-cell'><FaEdit className='category-edit-icon category-color-yellow '/><FaTrash className='category-edit-icon category-color-red'/>
                                            </td>
                                        </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
            
                        {/*<div className={ show ? 'category-order-detail' : 'hidden' }>
                            <div className='category-div-detail'>
                                <div className='category-detail-column text-color'>#9032</div>
                                <div className='category-detail-column text-color'>$22</div>
                                <div className='category-detail-column text-color'>Received</div>
                                <div className='category-detail-column text-color'>Pending</div>
                            </div>

                            <div className='category-div-detail'>
                                <div className='category-detail-column text-color'>#9032</div>
                                <div className='category-detail-column text-color'>$22</div>
                                <div className='category-detail-column text-color'>Received</div>
                                <div className='category-detail-column text-color'>Pending</div>
                            </div>
                        </div> */}

                        <Pagination 
                            pageNumber = {currentPage}
                            setPageNumber = {setCurrentPage}
                            totalItem = {27}
                            parPage = {parPage}
                            showItem = {27}
                        />
                    </div>

                    <div className="category-item2">
                        <div>
                            <h1 className="category-add-title off-white-text">Add Category</h1>
                        </div>
                        <form>
                            <div className='off-white-text'>
                                <label htmlFor='name' className='category-name-label off-white-text'>Category Name </label>
                                <input type='text' id='name' name='category_name' placeholder='Category Name' />
                            </div>

                            <div className='category-form-div'>
                                <label className='category-form-box off-white-text'>
                                    <img className='category-img-lg' src='' alt='Select Image' />
                                </label>
                                <input className='hidden' type="file" name="image" id="image" />
                            </div>
                            <div className='category-button-div'>
                                <button className='category-button-add off-white-text'>Add Category</button>
                            </div>

                        </form>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Category;