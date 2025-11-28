

'use client';

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Checkout from './Checkout'; // Adjust path as needed

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { 
    cartItems, 
    getTotalItems, 
    updateQuantity, 
    removeFromCart,
    clearCart 
  } = useCart();
  
  const cartItemsCount = getTotalItems();
  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('£', ''));
    return total + (price * item.quantity);
  }, 0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Fixed: Handle increment with size/color variations
  const handleIncrement = (itemId: number, size?: string, color?: string) => {
    const item = cartItems.find(item => 
      item.id === itemId && 
      item.size === size && 
      item.color === color
    );
    if (item) {
      updateQuantity(itemId, item.quantity + 1, size, color);
    }
  };

  // Fixed: Handle decrement with size/color variations
  const handleDecrement = (itemId: number, size?: string, color?: string) => {
    const item = cartItems.find(item => 
      item.id === itemId && 
      item.size === size && 
      item.color === color
    );
    if (item) {
      if (item.quantity > 1) {
        updateQuantity(itemId, item.quantity - 1, size, color);
      } else {
        removeFromCart(itemId, size, color);
      }
    }
  };

  // Fixed: Handle remove with size/color variations
  const handleRemove = (itemId: number, size?: string, color?: string) => {
    removeFromCart(itemId, size, color);
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log('Proceeding to checkout with items:', cartItems);
    // You can redirect to checkout page or show checkout modal
    closeCart();
  };

  // Generate unique key for each cart item considering variations
  const getCartItemKey = (item: any) => {
    return `${item.id}-${item.size || 'no-size'}-${item.color || 'no-color'}`;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo on the left - Yoruba Healer Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                  <Image
                    src="/yhimg.png"
                    alt="Yoruba Healer"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Navigation links - centered - Hidden on tablet and mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/merch"
                  className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Merch
                </Link>
                <Link
                  href="/music"
                  className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Music
                </Link>
                <Link
                  href="/shows"
                  className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Shows
                </Link>
              </div>
            </div>

            {/* Right side - Auth buttons and Cart */}
            <div className="hidden lg:flex flex-shrink-0 items-center space-x-4">
              {/* Cart Icon with Badge */}
              <button 
                onClick={toggleCart}
                className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* <Link
                href="/login"
                className="text-gray-300 hover:text-yellow-400 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
              >
                Sign Up
              </Link> */}
            </div>

            {/* Mobile menu button - Show on tablet and mobile (lg:hidden) */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Cart Icon */}
              <button 
                onClick={toggleCart}
                className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 transition-colors duration-200"
                onClick={toggleMobileMenu}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu icon that changes to X when open */}
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - Show on tablet and mobile */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-4 space-y-1 bg-black border-t border-yellow-500/30">
            <Link
              href="/"
              className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/merch"
              className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Merch
            </Link>
            <Link
              href="/music"
              className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Music
            </Link>
            <Link
              href="/shows"
              className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Shows
            </Link>
            
            {/* Auth buttons in mobile dropdown */}
            {/* <div className="space-y-2 px-3 py-3 border-b border-yellow-500/10">
              <Link
                href="/login"
                className="w-full text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium text-center transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black block px-4 py-3 rounded-full text-base font-medium text-center hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </div> */}
          </div>
        </div>
      </nav>

      {/* Cart Dropdown/Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeCart}
          />
          
          {/* Cart Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-black border-l border-yellow-500/30 shadow-2xl transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-yellow-500/20">
                <h2 className="text-xl font-bold text-white">Your Cart ({cartItemsCount})</h2>
                <button
                  onClick={closeCart}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  // Empty Cart State
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
                    </svg>
                    <h3 className="text-lg font-medium text-white mb-2">Your cart is empty</h3>
                    <p className="text-gray-400 mb-6">Add some products to get started!</p>
                    <button
                      onClick={closeCart}
                      className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  // Cart Items List
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={getCartItemKey(item)} className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg border border-yellow-500/20">
                        {/* Product Image Placeholder */}
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-lg flex items-center justify-center border border-yellow-500/20">
                          <svg className="w-6 h-6 text-yellow-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                          </svg>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-sm truncate">{item.name}</h4>
                          {(item.size || item.color) && (
                            <p className="text-gray-400 text-xs">
                              {item.size && `Size: ${item.size}`}
                              {item.size && item.color && ' • '}
                              {item.color && `Color: ${item.color}`}
                            </p>
                          )}
                          <p className="text-yellow-400 font-bold text-sm">{item.price}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleDecrement(item.id, item.size, item.color)}
                            className="w-8 h-8 rounded border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="text-white font-medium w-6 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrement(item.id, item.size, item.color)}
                            className="w-8 h-8 rounded border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemove(item.id, item.size, item.color)}
                          className="text-gray-400 hover:text-red-400 transition-colors p-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer - Total and Checkout */}
              {cartItems.length > 0 && (
                <div className="border-t border-yellow-500/20 p-6 space-y-4">
                  {/* Total */}
                  <div className="flex justify-between items-center text-white">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-yellow-400">
                      £{totalAmount.toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  {/* <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    Proceed to Checkout
                  </button> */}

                  <Checkout />

                  {/* Continue Shopping */}
                  <button
                    onClick={closeCart}
                    className="w-full border-2 border-yellow-500 text-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
                  >
                    Continue Shopping
                  </button>

                  {/* Clear Cart */}
                  <button
                    onClick={clearCart}
                    className="w-full text-gray-400 hover:text-red-400 transition-colors text-sm py-2"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}