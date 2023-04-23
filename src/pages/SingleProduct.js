import React, { useState, useEffect } from 'react';
import ProductCard from "../components/ProductCard";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { collection, getDocs } from "firebase/firestore";
import ReactStars from "react-rating-stars-component";
import { db } from "./firebase";
import ReactImageZoom from "react-image-zoom";
import { AiOutlineHeart} from "react-icons/ai";

import { Link, useLocation,  } from "react-router-dom";
const SingleProduct = ({
  grid,
  productImage,
  brand,
  productName,
  productDescription,
  productPrice,
  productStock,
  editOnClick,
  removeOnClick,
  viewOnClick,
}) => {
 
  const [products, setProducts] = useState([]);
  const [orderedProduct, setorderedProduct] = useState(true);
  
  let location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
        const data = await getDocs(collection(db, 'Products'));
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
}, []);

console.log(products);
  // const history = useHistory();
  return (
    <>
      <Meta title={"Product Name"}/>
      <BreadCrumb title={productName}/>
      <div className = "main-product-wrapper py-5 home-wrapper-2">
        <div className = "container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div >
                  <img src={productImage} alt={productName}/>
                </div>
              </div>
               {/* removed additional images to avoid issues for now  */}
                {/* <div className="other-product-images d-flex flex-wrap gap-15"> */}
                  {/* <div><img src="/images/watch.jpg" alt="watch"/></div> */}
                  {/* <div><img src="/images/watch.jpg" alt="watch"/></div>  */}
                {/* </div>  */}
             </div>
              
            <div className="col-6"> 
              <div className="main-product-details">
               <div className="border-bottom">
               <h3 className="title">{productName}</h3>
               </div>
               <div className="border-bottom py-3">
                  <p className="price">R {productPrice}</p>
                  <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    value="3"
                    edit = {false}
                    size={24}
                    activeColor="#ffd700"
                />
                <p className="mb-0 t-review">2 reviews</p>
                  </div>
                  <a className="review-btn" href="#review" >Write a Review</a>
               </div>
                <div className="border-bottom py-3">
                  {/* removed for convenience */}
                  {/* <div className="d-flex gap-10 align-items-center my-2"> */}
                    {/* <h3 className="product-heading">Type :</h3><p className="product-data">Watch</p> */}
                  {/* </div> */}
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3><p className="product-data">Havels</p>
                  </div>
                  
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3><p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                      <div className="d-felx flex-wrap gap-15">
                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                      </div>
                  </div>
                  
                  <div className="d-flex gap-10 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input type="number" name="" min={1} max={10}
                      className="form-control"
                      style={{width:"70px"}} 
                      id=""/>
                    </div>
                    <div className="d-flex align-items-center gap-30">
                    <button className="button border-0" style={{blockSize:"45px", width:"200px", backgroundColor:"#232f3e",}} type="submit"> Add to Cart </button>
                    <button className="button border-0" style={{blockSize:"45px", width:"200px", backgroundColor:"gold",}} type="submit"> Buy Now </button>

                    </div>
                    <div className="d-flex align-items-center gap-15">
                      
                    </div>
                    
                  </div>
                  <div><a href=""><AiOutlineHeart className="fs-5 me-2"/>Add to Wishlist</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                
                <p >
                  Random description of product appears here! Testing Layout.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="review" className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"> 
            <h3>Reviews</h3>
              <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div> 
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    value="3"
                    edit = {false}
                    size={24}
                    activeColor="#ffd700"
                />
                <p className="mb-0">Based on 2 reviews</p>
                  </div>
                </div>
                {
                  orderedProduct && <div>
                  <a className ="text-dark text-decoration-underline" href=""> Write a Review</a>
                </div>
                }
              </div>

              <div  className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="">
                  <div>
                  <ReactStars
                    count={5}
                    value="3"
                    edit = {true}
                    size={24}
                    activeColor="#ffd700"
                  />
                  </div>
                  <div>
                    <textarea
                    name=""
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                    >
                    </textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                <div className="d-flex gap-10 align-items-center">
                  <h6 className="mb-0">Customer 1</h6>
                  <ReactStars
                    count={5}
                    value="3"
                    edit = {false}
                    size={24}
                    activeColor="#ffd700"
                />
                </div>
                <p className="mt-3">Review 1 meaningful review about a product purchased</p>
                  
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <section className = "popular-wrapper py-5 home-wrapper-2">  
        <div className="container-xxl"> 
          <div className="row">
            <div className="col-12"> 
              <h3 className="section-heading"> Our Popular Products </h3>
            </div>
          </div>
          <div className="row"> 
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </div>
        </div>
      </section>
    </>
  ) ;
};

export default SingleProduct;