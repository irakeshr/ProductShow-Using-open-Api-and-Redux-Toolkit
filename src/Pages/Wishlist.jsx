import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slicers/cartSlicer";
import { removeFromWishlist } from "../redux/slicers/wishlistSlicer";

const Wishlist = () => {
  const dispatch = useDispatch();

   const wishlistItems = useSelector(
    (state) => state.wishlist?.wishlistItems || []
  );

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
          Your Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="text-lg">Your wishlist is empty.</p>
            <Link
              to="/products"
              className="mt-4 inline-block text-primary hover:underline"
            >
              Start shopping now!
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <Link to={`/products/${item.id}`}>
                  <img
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    src={item.thumbnail || item.images?.[0]}
                    alt={item.title}
                  />
                </Link>

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    {item.title}
                  </h2>

                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    ₹{Number(item.price).toFixed(2)}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600 transition-colors text-sm"
                      type="button"
                    >
                      Remove
                    </button>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-primary text-white text-sm px-3 py-1 rounded-md hover:bg-primary/90 transition-colors"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
