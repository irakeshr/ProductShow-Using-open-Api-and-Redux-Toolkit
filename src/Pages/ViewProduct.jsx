import React, { useEffect, useMemo, useState } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../redux/slicers/cartSlicer";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/slicers/wishlistSlicer";

const ViewProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const baseUrl = useMemo(() => `https://dummyjson.com/products/${id}`, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProduct(null); // reset when id changes
        const res = await fetch(baseUrl);
        if (!res.ok) throw new Error("Problem to fetch data");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
        setProduct(null);
      }
    };

    fetchData();
  }, [baseUrl]);

 const wishlistItems = useSelector(
    (state) => state.wishlist?.wishlistItems || []
  );

  const cartItem = useSelector((state) =>
    (state.cart?.cartItems || []).find((item) => String(item.id) === String(id))
  );

  const quantity = cartItem?.quantity || 0;
  const addedToCart = quantity > 0;

  const isProductInWishlist = wishlistItems.some(
    (item) => String(item.id) === String(id)
  );

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(addToCart(product));
  };

  const handleIncrement = () => {
    if (!product) return;
    dispatch(incrementQuantity(product));
  };

  const handleDecrement = () => {
    if (!product) return;
    dispatch(decrementQuantity(product));
  };

   
  const handleToggleWishlist = () => {
    if (!product) return;

    if (isProductInWishlist) {
      dispatch(removeFromWishlist(product.id)); // remove by id
    } else {
      dispatch(addToWishlist(product));
    }
  };

  if (!product) {
    return (
      <div className="product-page">
        <p style={{ padding: "20px" }}>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="product-image">
        {product?.images?.length ? (
          <img src={product.images[0]} alt={product.title || "Product"} />
        ) : (
          <div style={{ padding: 20 }}>No image</div>
        )}
      </div>

      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>

        <p className="product-description">{product.description}</p>

        <div className="buttons">
          {addedToCart ? (
            <div className="quantity-controls">
              <button onClick={handleDecrement} className="btn quantity-btn">
                -
              </button>

              <span className="quantity-display">{quantity}</span>

              <button onClick={handleIncrement} className="btn quantity-btn">
                +
              </button>
            </div>
          ) : (
            <button className="btn add" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}

          <button className="btn buy">Buy Now</button>

          <button
            onClick={handleToggleWishlist}
            className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary wishlist-btn"
            aria-label={isProductInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            type="button"
          >
            <span className="sr-only">
              {isProductInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </span>

            {isProductInWishlist ? (
              // filled heart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#EA3323"
              >
                <path d="m479-87-58-52Q312-239 241.5-311.5T129-441.5q-42-57.5-58.5-105T54-643q0-101 67.5-169T289-880q56 0 104 24t86 71q44-50 90-72.5T669-880q101 0 169 68t68 169q0 49-16.5 96T831-442.5Q789-385 718-312T538-139l-59 52Z" />
              </svg>
            ) : (
              // outline heart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#EA3323"
              >
                <path d="m479-87-58-52Q312.23-239.12 241.62-311.56 171-384 129-441.5t-58.5-105Q54-594 54-643.1q0-101.22 67.66-169.06T289-880q56.29 0 104.14 24Q441-832 479-785q44-50 90.03-72.5Q615.07-880 669-880q101.38 0 169.19 67.87T906-643q0 48.97-16.5 95.99Q873-500 831-442.5 789-385 718.02-311.95 647.03-238.9 538-139l-59 52Zm-.5-124q100.74-93 165.12-158Q708-434 745.5-482.5t52-86.28q14.5-37.79 14.5-74.05 0-62.17-39.86-102.67T669.71-786q-49.01 0-91.36 32T509-666h-60q-25.75-56-68.93-88-43.18-32-91.13-32-61.21 0-100.58 39.86Q149-706.29 149-642.68q0 37.77 14.94 76.34t52.5 87.46Q254-430 317.5-365.5t161 154.5Zm2.5-288Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
