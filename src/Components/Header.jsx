import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Header = () => {

    const count = useSelector((state) => state.wishlist.wishlistItems).length;
    const cartCount =useSelector((state) => state.cart.cartItems).length;
    console.log(count)
 return (
 <header className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-16">
 <div className="flex items-center">
 <div className="flex-shrink-0 flex items-center gap-2 text-gray-900 dark:text-white">

 <h2 className="text-xl font-bold tracking-tight">
 BentoShop
 </h2>
 </div>
 <div className="hidden md:block">
 <div className="ml-10 flex items-baseline space-x-4">
 <Link to='/' className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
 <Link to='/products' className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Products</Link>
 <Link to='/wishlist' className="text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Wishlist
 {useSelector((state) => state.wishlist.wishlistItems).length > 0 && (
 <span className="relative -top-6 -right-[50px] bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
  {count}
 </span>
 )}
 </Link>

 </div>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <div className="flex-1 max-w-xs">
 <label className="sr-only" htmlFor="search">
 Search
 </label>
 <div className="relative">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
 <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">
 search
 </span>
 </div>
 <input
 className="block w-full border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
 placeholder="Search..."
 type="search"
 name="search"
 id="search"
 />
 </div>
 </div>
 <div className="relative">
 <Link to={"/viewCart"}>
 <button className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary">
 <span className="material-symbols-outlined scale-[2]">
 shopping_cart
 </span>
 </button>
 </Link>
 {useSelector((state) => state.cart.cartItems).length > 0 && (
 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
 {cartCount}
 </span>
 )}
 </div>
 <button className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary">
 <span className="material-symbols-outlined  scale-[2]">
 account_circle
 </span>
 </button>
 </div>
 </div>
 </div>
 </header>
 );
};

export default Header;
                      