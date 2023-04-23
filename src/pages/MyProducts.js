import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import SellerProductCard from '../components/SellerProductCard';
import { Link } from 'react-router-dom';
import {db} from "./firebase";
import React, { useState } from 'react'
import  Meta  from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import SellerProductCard from '../components/SellerProductCard'
import { Link } from 'react-router-dom'
import AddProductModal from '../components/AddProductModal'
import UpdateProductModal from '../components/UpdateProductModal'


export const MyProducts = () => {
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)
    const grid = 12;

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDocs(collection(db, 'Products'));
            setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        fetchData();
    }, []);

    console.log(products)

    return (
        <>
            <Meta title={'My Products'} />
            <BreadCrumb title="My Products" />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{ width: '100px' }}>
                                        Sort By:
                                    </p>
                                    <select name="" className="form-control form-select" id="">
                                        <option value="manual">Featured</option>
                                        <option value="best-selling" selected="selected">
                                            Best Selling
                                        </option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-descending">Alphabetically, Z-A</option>
                                        <option value="price-ascending">Price, low to high</option>
                                        <option value="price-descending">Price, high to low</option>
                                        <option value="created-ascending">Date, old to new</option>
                                        <option value="created-descending">Date, new to old</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-5">
                                    <Link className="button">Add Product</Link>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="totalproducts">21 products</p>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                {products.map((product) => (
                                    <SellerProductCard
                                        key={product.id}
                                        grid={grid}
                                        productImage={product.image}
                                        brand={product.brand}
                                        productName={product.name}
                                        productDescription={product.description}
                                        productPrice={product.price}
                                        productStock={product.stock || 'Not available'}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

  return (
    <>
        <Meta title={"My Products"}/>
        <BreadCrumb title="My Products" />    
        <div className="store-wrapper home-wrapper-2 py-5">
            <div className='row'>
                <div className='col-9'>
                    <div className='filter-sort-grid mb-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap -10'>
                                <p className='mb-0 d-block' style={{"width":"100px"}}>Sort By:</p>
                                <select name='' className='form-control form-select' id=''>
                                    <option value="manual">Featured</option>
                                    <option value="best-selling" selected="selected">Best Selling</option>
                                    <option value="title-ascending">Alaphabetically, A-Z</option>
                                    <option value="title-descending">Alaphabetically, Z-A</option>
                                    <option value="price-ascending">Price, low to high</option>
                                    <option value="price-descending">Price, high to low</option>
                                    <option value="created-ascending">Date, old to new</option>
                                    <option value="created-descending">Date, new to old</option>
                                </select>
                            </div>
                            <div className='d-flex align-items-center gap-5'>
                                <Link className="button" onClick={() => setIsAddOpen(true)}>Add Product</Link>
                            </div>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='totalproducts'>21 products</p>
                            </div>
                        </div>
                    </div>
                    <div className='products-list pb-5'>       
                        <div className='d-flex gap-10 flex-wrap'>
                            <SellerProductCard grid={grid} editOnClick={() => setIsUpdateOpen(true)} />
                            <AddProductModal open={isAddOpen} onClose={() => setIsAddOpen(false)}></AddProductModal>
                            <UpdateProductModal open={isUpdateOpen} onClose={() => setIsUpdateOpen(false)}></UpdateProductModal>
                        </div>          
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProducts;
