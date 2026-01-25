

// 'use client';

// import Link from "next/link";
// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import Image from "next/image";
// import Checkout from './Checkout'; // Adjust path as needed

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const { 
//     cartItems, 
//     getTotalItems, 
//     updateQuantity, 
//     removeFromCart,
//     clearCart 
//   } = useCart();
  
//   const cartItemsCount = getTotalItems();
//   const totalAmount = cartItems.reduce((total, item) => {
//     const price = parseFloat(item.price.replace('£', ''));
//     return total + (price * item.quantity);
//   }, 0);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   // Fixed: Handle increment with size/color variations
//   const handleIncrement = (itemId: number, size?: string, color?: string) => {
//     const item = cartItems.find(item => 
//       item.id === itemId && 
//       item.size === size && 
//       item.color === color
//     );
//     if (item) {
//       updateQuantity(itemId, item.quantity + 1, size, color);
//     }
//   };

//   // Fixed: Handle decrement with size/color variations
//   const handleDecrement = (itemId: number, size?: string, color?: string) => {
//     const item = cartItems.find(item => 
//       item.id === itemId && 
//       item.size === size && 
//       item.color === color
//     );
//     if (item) {
//       if (item.quantity > 1) {
//         updateQuantity(itemId, item.quantity - 1, size, color);
//       } else {
//         removeFromCart(itemId, size, color);
//       }
//     }
//   };

//   // Fixed: Handle remove with size/color variations
//   const handleRemove = (itemId: number, size?: string, color?: string) => {
//     removeFromCart(itemId, size, color);
//   };

//   const handleCheckout = () => {
//     // Handle checkout logic here
//     console.log('Proceeding to checkout with items:', cartItems);
//     // You can redirect to checkout page or show checkout modal
//     closeCart();
//   };

//   // Generate unique key for each cart item considering variations
//   const getCartItemKey = (item: any) => {
//     return `${item.id}-${item.size || 'no-size'}-${item.color || 'no-color'}`;
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-yellow-500/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo on the left - Yoruba Healer Logo */}
//             <div className="flex-shrink-0">
//               <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
//                 <div className="relative w-10 h-10 sm:w-12 sm:h-12">
//                   <Image
//                     src="/yhimg.png"
//                     alt="Yoruba Healer"
//                     fill
//                     className="object-contain"
//                     priority
//                   />
//                 </div>
//               </Link>
//             </div>

//             {/* Navigation links - centered - Hidden on tablet and mobile */}
//             <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
//               <div className="flex items-baseline space-x-8">
//                 <Link
//                   href="/"
//                   className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/"
//                   className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   Merch
//                 </Link>
//                 <Link
//                   href="/music"
//                   className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   Music
//                 </Link>
//                 <Link
//                   href="/shows"
//                   className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   Shows
//                 </Link>
//               </div>
//             </div>

//             {/* Right side - Auth buttons and Cart */}
//             <div className="hidden lg:flex flex-shrink-0 items-center space-x-4">
//               {/* Cart Icon with Badge */}
//               <button 
//                 onClick={toggleCart}
//                 className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
//                 </svg>
//                 {cartItemsCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
//                     {cartItemsCount}
//                   </span>
//                 )}
//               </button>

//               {/* <Link
//                 href="/login"
//                 className="text-gray-300 hover:text-yellow-400 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/signup"
//                 className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
//               >
//                 Sign Up
//               </Link> */}
//             </div>

//             {/* Mobile menu button - Show on tablet and mobile (lg:hidden) */}
//             <div className="lg:hidden flex items-center space-x-2">
//               {/* Mobile Cart Icon */}
//               <button 
//                 onClick={toggleCart}
//                 className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
//                 </svg>
//                 {cartItemsCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
//                     {cartItemsCount}
//                   </span>
//                 )}
//               </button>

//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 transition-colors duration-200"
//                 onClick={toggleMobileMenu}
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {/* Menu icon that changes to X when open */}
//                 {!isMobileMenuOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu - Show on tablet and mobile */}
//         <div className={`lg:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
//         }`}>
//           <div className="px-2 pt-2 pb-4 space-y-1 bg-black border-t border-yellow-500/30">
//             <Link
//               href="/"
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Home
//             </Link>
//             <Link
//               href="/"
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Merch
//             </Link>
//             <Link
//               href="/music"
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Music
//             </Link>
//             <Link
//               href="/shows"
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Shows
//             </Link>
            
//             {/* Auth buttons in mobile dropdown */}
//             {/* <div className="space-y-2 px-3 py-3 border-b border-yellow-500/10">
//               <Link
//                 href="/login"
//                 className="w-full text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium text-center transition-colors duration-200"
//                 onClick={closeMobileMenu}
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/signup"
//                 className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black block px-4 py-3 rounded-full text-base font-medium text-center hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </div> */}
//           </div>
//         </div>
//       </nav>

//       {/* Cart Dropdown/Sidebar */}
//       {isCartOpen && (
//         <div className="fixed inset-0 z-50 overflow-hidden">
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//             onClick={closeCart}
//           />
          
//           {/* Cart Panel */}
//           <div className="absolute right-0 top-0 h-full w-full max-w-md bg-black border-l border-yellow-500/30 shadow-2xl transform transition-transform duration-300">
//             <div className="flex flex-col h-full">
//               {/* Header */}
//               <div className="flex items-center justify-between p-6 border-b border-yellow-500/20">
//                 <h2 className="text-xl font-bold text-white">Your Cart ({cartItemsCount})</h2>
//                 <button
//                   onClick={closeCart}
//                   className="text-gray-400 hover:text-yellow-400 transition-colors"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//                   </svg>
//                 </button>
//               </div>

//               {/* Cart Items */}
//               <div className="flex-1 overflow-y-auto p-6">
//                 {cartItems.length === 0 ? (
//                   // Empty Cart State
//                   <div className="text-center py-12">
//                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
//                     </svg>
//                     <h3 className="text-lg font-medium text-white mb-2">Your cart is empty</h3>
//                     <p className="text-gray-400 mb-6">Add some products to get started!</p>
//                     <button
//                       onClick={closeCart}
//                       className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
//                     >
//                       Continue Shopping
//                     </button>
//                   </div>
//                 ) : (
//                   // Cart Items List
//                   <div className="space-y-4">
//                     {cartItems.map((item) => (
//                       <div key={getCartItemKey(item)} className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg border border-yellow-500/20">
//                         {/* Product Image Placeholder */}
//                         <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-lg flex items-center justify-center border border-yellow-500/20">
//                           <svg className="w-6 h-6 text-yellow-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//                           </svg>
//                         </div>

//                         {/* Product Details */}
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-white font-medium text-sm truncate">{item.name}</h4>
//                           {(item.size || item.color) && (
//                             <p className="text-gray-400 text-xs">
//                               {item.size && `Size: ${item.size}`}
//                               {item.size && item.color && ' • '}
//                               {item.color && `Color: ${item.color}`}
//                             </p>
//                           )}
//                           <p className="text-yellow-400 font-bold text-sm">{item.price}</p>
//                         </div>

//                         {/* Quantity Controls */}
//                         <div className="flex items-center space-x-2">
//                           <button
//                             onClick={() => handleDecrement(item.id, item.size, item.color)}
//                             className="w-8 h-8 rounded border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors flex items-center justify-center"
//                           >
//                             -
//                           </button>
//                           <span className="text-white font-medium w-6 text-center text-sm">
//                             {item.quantity}
//                           </span>
//                           <button
//                             onClick={() => handleIncrement(item.id, item.size, item.color)}
//                             className="w-8 h-8 rounded border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors flex items-center justify-center"
//                           >
//                             +
//                           </button>
//                         </div>

//                         {/* Remove Button */}
//                         <button
//                           onClick={() => handleRemove(item.id, item.size, item.color)}
//                           className="text-gray-400 hover:text-red-400 transition-colors p-1"
//                         >
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
//                           </svg>
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Footer - Total and Checkout */}
//               {cartItems.length > 0 && (
//                 <div className="border-t border-yellow-500/20 p-6 space-y-4">
//                   {/* Total */}
//                   <div className="flex justify-between items-center text-white">
//                     <span className="text-lg font-semibold">Total:</span>
//                     <span className="text-2xl font-bold text-yellow-400">
//                       £{totalAmount.toFixed(2)}
//                     </span>
//                   </div>

//                   {/* Checkout Button */}
//                   {/* <button
//                     onClick={handleCheckout}
//                     className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                   >
//                     Proceed to Checkout
//                   </button> */}

//                   <Checkout />

//                   {/* Continue Shopping */}
//                   <button
//                     onClick={closeCart}
//                     className="w-full border-2 border-yellow-500 text-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
//                   >
//                     Continue Shopping
//                   </button>

//                   {/* Clear Cart */}
//                   <button
//                     onClick={clearCart}
//                     className="w-full text-gray-400 hover:text-red-400 transition-colors text-sm py-2"
//                   >
//                     Clear Cart
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



// 'use client';

// import Link from "next/link";
// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import Image from "next/image";
// import Checkout from './Checkout'; // Adjust path as needed

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const { 
//     cart, // CHANGED: cart instead of cartItems
//     getTotalItems, 
//     updateQuantity, 
//     removeFromCart,
//     clearCart,
//     getGrandTotal // ADDED: Use this for total calculation
//   } = useCart();
  
//   const cartItemsCount = getTotalItems();
  
//   // FIXED: Use cart instead of cartItems
//   // Option 1: Use getGrandTotal if available
//   const totalAmount = getGrandTotal ? getGrandTotal() : 
//     // Option 2: Calculate manually if getGrandTotal not available
//     cart.reduce((total, item) => {
//       const price = parseFloat(item.price.replace('£', ''));
//       return total + (price * item.quantity);
//     }, 0);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   // Fixed: Handle increment with size/color variations
//   const handleIncrement = (itemId: number, size?: string, color?: string) => {
//     const item = cart.find(item => 
//       item.id === itemId && 
//       item.size === size && 
//       item.color === color
//     );
//     if (item) {
//       updateQuantity(itemId, item.quantity + 1);
//     }
//   };

//   // Fixed: Handle decrement with size/color variations
//   const handleDecrement = (itemId: number, size?: string, color?: string) => {
//     const item = cart.find(item => 
//       item.id === itemId && 
//       item.size === size && 
//       item.color === color
//     );
//     if (item) {
//       if (item.quantity > 1) {
//         updateQuantity(itemId, item.quantity - 1);
//       } else {
//         removeFromCart(itemId);
//       }
//     }
//   };

//   // Fixed: Handle remove with size/color variations
//   const handleRemove = (itemId: number, size?: string, color?: string) => {
//     removeFromCart(itemId);
//   };

//   const handleCheckout = () => {
//     // Handle checkout logic here
//     console.log('Proceeding to checkout with items:', cart);
//     // You can redirect to checkout page or show checkout modal
//     closeCart();
//   };

//   // Generate unique key for each cart item considering variations
//   const getCartItemKey = (item: any) => {
//     return `${item.id}-${item.size || 'no-size'}-${item.color || 'no-color'}`;
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-yellow-500/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo on the left - Yoruba Healer Logo */}
//             <div className="flex-shrink-0">
//               <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
//                 <div className="relative w-10 h-10 sm:w-12 sm:h-12">
//                   <Image
//                     src="/yhimg.png"
//                     alt="Yoruba Healer"
//                     fill
//                     className="object-contain"
//                     priority
//                   />
//                 </div>
//               </Link>
//             </div>

//             {/* Navigation links - centered - Hidden on tablet and mobile */}
//             <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
//               <div className="flex items-baseline space-x-8">
//                 <Link
//                   href="/"
//                   className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/"
//                   className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   Merch
//                 </Link>
//                 <Link
//                   href="/music"
//                   className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   Music
//                 </Link>
//                 <Link
//                   href="/shows"
//                   className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//                 >
//                   Shows
//                 </Link>
//               </div>
//             </div>

//             {/* Right side - Auth buttons and Cart */}
//             <div className="hidden lg:flex flex-shrink-0 items-center space-x-4">
//               {/* Cart Icon with Badge */}
//               <button 
//                 onClick={toggleCart}
//                 className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
//                 </svg>
//                 {cartItemsCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
//                     {cartItemsCount}
//                   </span>
//                 )}
//               </button>
//             </div>

//             {/* Mobile menu button - Show on tablet and mobile (lg:hidden) */}
//             <div className="lg:hidden flex items-center space-x-2">
//               {/* Mobile Cart Icon */}
//               <button 
//                 onClick={toggleCart}
//                 className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
//                 </svg>
//                 {cartItemsCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
//                     {cartItemsCount}
//                   </span>
//                 )}
//               </button>

//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 transition-colors duration-200"
//                 onClick={toggleMobileMenu}
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {/* Menu icon that changes to X when open */}
//                 {!isMobileMenuOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu - Show on tablet and mobile */}
//         <div className={`lg:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
//         }`}>
//           <div className="px-2 pt-2 pb-4 space-y-1 bg-black border-t border-yellow-500/30">
//             <Link
//               href="/"
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Home
//             </Link>
//             <Link
//               href="/"
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Merch
//             </Link>
//             <Link
//               href="/music"
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Music
//             </Link>
//             <Link
//               href="/shows"
//               className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Shows
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Cart Dropdown/Sidebar */}
//       {isCartOpen && (
//         <div className="fixed inset-0 z-50 overflow-hidden">
//           {/* Backdrop */}
//           <div 
//             className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//             onClick={closeCart}
//           />
          
//           {/* Cart Panel */}
//           <div className="absolute right-0 top-0 h-full w-full max-w-md bg-black border-l border-yellow-500/30 shadow-2xl transform transition-transform duration-300">
//             <div className="flex flex-col h-full">
//               {/* Header */}
//               <div className="flex items-center justify-between p-6 border-b border-yellow-500/20">
//                 <h2 className="text-xl font-bold text-white">Your Cart ({cartItemsCount})</h2>
//                 <button
//                   onClick={closeCart}
//                   className="text-gray-400 hover:text-yellow-400 transition-colors"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//                   </svg>
//                 </button>
//               </div>

//               {/* Cart Items */}
//               <div className="flex-1 overflow-y-auto p-6">
//                 {cart.length === 0 ? ( // CHANGED: cart.length instead of cartItems.length
//                   // Empty Cart State
//                   <div className="text-center py-12">
//                     <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
//                     </svg>
//                     <h3 className="text-lg font-medium text-white mb-2">Your cart is empty</h3>
//                     <p className="text-gray-400 mb-6">Add some products to get started!</p>
//                     <button
//                       onClick={closeCart}
//                       className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
//                     >
//                       Continue Shopping
//                     </button>
//                   </div>
//                 ) : (
//                   // Cart Items List - UPDATED: Show actual product images
//                   <div className="space-y-4">
//                     {cart.map((item) => ( // CHANGED: cart.map instead of cartItems.map
//                       <div key={getCartItemKey(item)} className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg border border-yellow-500/20">
//                         {/* Product Image - UPDATED: Use actual product image */}
//                         <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-lg flex items-center justify-center border border-yellow-500/20 overflow-hidden">
//                           {item.image ? (
//                             <div className="relative w-full h-full">
//                               <Image
//                                 src={item.image}
//                                 alt={item.name}
//                                 fill
//                                 className="object-contain p-1"
//                               />
//                             </div>
//                           ) : (
//                             <svg className="w-6 h-6 text-yellow-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//                             </svg>
//                           )}
//                         </div>

//                         {/* Product Details */}
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-white font-medium text-sm truncate">{item.name}</h4>
//                           {(item.size || item.color) && (
//                             <p className="text-gray-400 text-xs">
//                               {item.size && `Size: ${item.size}`}
//                               {item.size && item.color && ' • '}
//                               {item.color && `Color: ${item.color}`}
//                             </p>
//                           )}
//                           <p className="text-yellow-400 font-bold text-sm">{item.price}</p>
//                           {/* Show item subtotal if quantity > 1 */}
//                           {item.quantity > 1 && (
//                             <p className="text-gray-500 text-xs">
//                               £{(parseFloat(item.price.replace('£', '')) / item.quantity).toFixed(2)} each
//                             </p>
//                           )}
//                         </div>

//                         {/* Quantity Controls */}
//                         <div className="flex items-center space-x-2">
//                           <button
//                             onClick={() => handleDecrement(item.id, item.size, item.color)}
//                             className="w-8 h-8 rounded border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors flex items-center justify-center"
//                           >
//                             -
//                           </button>
//                           <span className="text-white font-medium w-6 text-center text-sm">
//                             {item.quantity}
//                           </span>
//                           <button
//                             onClick={() => handleIncrement(item.id, item.size, item.color)}
//                             className="w-8 h-8 rounded border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors flex items-center justify-center"
//                           >
//                             +
//                           </button>
//                         </div>

//                         {/* Remove Button */}
//                         <button
//                           onClick={() => handleRemove(item.id, item.size, item.color)}
//                           className="text-gray-400 hover:text-red-400 transition-colors p-1"
//                         >
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
//                           </svg>
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Footer - Total and Checkout */}
//               {cart.length > 0 && ( // CHANGED: cart.length instead of cartItems.length
//                 <div className="border-t border-yellow-500/20 p-6 space-y-4">
//                   {/* Calculate subtotal, shipping, and total */}
//                   {(() => {
//                     const subtotal = cart.reduce((total, item) => {
//                       const price = parseFloat(item.price.replace('£', '')) / item.quantity;
//                       return total + (price * item.quantity);
//                     }, 0);
                    
//                     const shippingTotal = cart.reduce((total, item) => {
//                       return total + (item.shipping || 0);
//                     }, 0);
                    
//                     return (
//                       <>
//                         {/* Subtotal */}
//                         <div className="flex justify-between items-center text-sm">
//                           <span className="text-gray-400">Subtotal:</span>
//                           <span className="text-white">£{subtotal.toFixed(2)}</span>
//                         </div>
                        
//                         {/* Shipping */}
//                         <div className="flex justify-between items-center text-sm">
//                           <span className="text-gray-400">Shipping:</span>
//                           <span className="text-yellow-400">£{shippingTotal.toFixed(2)}</span>
//                         </div>
                        
//                         {/* Total */}
//                         <div className="flex justify-between items-center text-white pt-3 border-t border-yellow-500/20">
//                           <span className="text-lg font-semibold">Total:</span>
//                           <span className="text-2xl font-bold text-yellow-400">
//                             £{totalAmount.toFixed(2)}
//                           </span>
//                         </div>
//                       </>
//                     );
//                   })()}

//                   {/* Checkout Button */}
//                   <Checkout />

//                   {/* Continue Shopping */}
//                   <button
//                     onClick={closeCart}
//                     className="w-full border-2 border-yellow-500 text-yellow-400 py-3 rounded-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300"
//                   >
//                     Continue Shopping
//                   </button>

//                   {/* Clear Cart */}
//                   <button
//                     onClick={clearCart}
//                     className="w-full text-gray-400 hover:text-red-400 transition-colors text-sm py-2"
//                   >
//                     Clear Cart
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }





// 'use client';

// import Link from "next/link";
// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import Image from "next/image";
// import Checkout from './Checkout'; // Adjust path as needed
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ShoppingBag, Trash2, Plus, Minus, Sparkles, Truck, Shield, Zap } from "lucide-react";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const { 
//     cart, // CHANGED: cart instead of cartItems
//     getTotalItems, 
//     updateQuantity, 
//     removeFromCart,
//     clearCart,
//     getGrandTotal // ADDED: Use this for total calculation
//   } = useCart();
  
//   const cartItemsCount = getTotalItems();
  
//   // FIXED: Use cart instead of cartItems
//   const totalAmount = getGrandTotal ? getGrandTotal() : 
//     cart.reduce((total, item) => {
//       const price = parseFloat(item.price.replace('£', ''));
//       return total + (price * item.quantity);
//     }, 0);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   const handleIncrement = (itemId: number, size?: string, color?: string) => {
//     const item = cart.find(item => 
//       item.id === itemId && 
//       item.size === size && 
//       item.color === color
//     );
//     if (item) {
//       updateQuantity(itemId, item.quantity + 1);
//     }
//   };

//   const handleDecrement = (itemId: number, size?: string, color?: string) => {
//     const item = cart.find(item => 
//       item.id === itemId && 
//       item.size === size && 
//       item.color === color
//     );
//     if (item) {
//       if (item.quantity > 1) {
//         updateQuantity(itemId, item.quantity - 1);
//       } else {
//         removeFromCart(itemId);
//       }
//     }
//   };

//   const handleRemove = (itemId: number, size?: string, color?: string) => {
//     removeFromCart(itemId);
//   };

//   // Generate unique key for each cart item considering variations
//   const getCartItemKey = (item: any) => {
//     return `${item.id}-${item.size || 'no-size'}-${item.color || 'no-color'}`;
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo on the left - Yoruba Healer Logo */}
//             <div className="flex-shrink-0">
//               <Link href="/" className="flex items-center group" onClick={closeMobileMenu}>
//                 <div className="relative w-10 h-10 sm:w-12 sm:h-12">
//                   <Image
//                     src="/yhimg.png"
//                     alt="Yoruba Healer"
//                     fill
//                     className="object-contain group-hover:scale-105 transition-transform duration-300"
//                     priority
//                   />
//                 </div>
//                 <span className="ml-2 text-white font-bold text-lg hidden sm:block">
//                   YORUBA HEALER
//                 </span>
//               </Link>
//             </div>

//             {/* Navigation links - centered - Hidden on tablet and mobile */}
//             <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
//               <div className="flex items-baseline space-x-8">
//                 {['Home', 'Merch', 'Music', 'Shows'].map((item) => (
//                   <Link
//                     key={item}
//                     href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//                     className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
//                   >
//                     {item}
//                     <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Right side - Cart */}
//             <div className="hidden lg:flex flex-shrink-0 items-center space-x-4">
//               {/* Cart Icon with Badge */}
//               <motion.button 
//                 onClick={toggleCart}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="relative p-2 group"
//               >
//                 <div className="relative p-2 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20 group-hover:border-yellow-500/50 transition-all duration-300">
//                   <ShoppingBag className="w-6 h-6 text-yellow-400" />
//                   {cartItemsCount > 0 && (
//                     <motion.span 
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg"
//                     >
//                       {cartItemsCount}
//                     </motion.span>
//                   )}
//                 </div>
//               </motion.button>
//             </div>

//             {/* Mobile menu button - Show on tablet and mobile (lg:hidden) */}
//             <div className="lg:hidden flex items-center space-x-3">
//               {/* Mobile Cart Icon */}
//               <motion.button 
//                 onClick={toggleCart}
//                 whileTap={{ scale: 0.9 }}
//                 className="relative p-2"
//               >
//                 <div className="relative">
//                   <ShoppingBag className="w-6 h-6 text-yellow-400" />
//                   {cartItemsCount > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
//                       {cartItemsCount}
//                     </span>
//                   )}
//                 </div>
//               </motion.button>

//               <motion.button
//                 whileTap={{ scale: 0.9 }}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 focus:outline-none transition-colors duration-200"
//                 onClick={toggleMobileMenu}
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isMobileMenuOpen ? (
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 ) : (
//                   <X className="w-6 h-6" />
//                 )}
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu - Show on tablet and mobile */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: 'auto', opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-md border-t border-yellow-500/20"
//             >
//               <div className="px-4 pt-2 pb-4 space-y-1">
//                 {['Home', 'Merch', 'Music', 'Shows'].map((item, index) => (
//                   <motion.div
//                     key={item}
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Link
//                       href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//                       className="flex items-center text-gray-300 hover:text-yellow-400 px-4 py-4 rounded-lg text-base font-medium border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-all duration-200 group"
//                       onClick={closeMobileMenu}
//                     >
//                       <span className="flex-1">{item}</span>
//                       <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Premium Cart Sidebar */}
//       <AnimatePresence>
//         {isCartOpen && (
//           <div className="fixed inset-0 z-50 overflow-hidden">
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="absolute inset-0 bg-black/90 backdrop-blur-lg"
//               onClick={closeCart}
//             />
            
//             {/* Cart Panel */}
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: "spring", damping: 30, stiffness: 300 }}
//               className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-gray-900 to-black shadow-2xl overflow-hidden"
//             >
//               {/* Luxury Border Effect */}
//               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-yellow-500"></div>

//               <div className="flex flex-col h-full">
//                 {/* Header */}
//                 <div className="relative p-6 border-b border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 to-transparent">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
//                         <ShoppingBag className="w-5 h-5 text-black" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl font-bold text-white">
//                           Your Shopping Bag
//                           <span className="text-yellow-400 ml-2">({cartItemsCount})</span>
//                         </h2>
//                         <p className="text-gray-400 text-sm">Premium Collection</p>
//                       </div>
//                     </div>
                    
//                     <motion.button
//                       whileHover={{ scale: 1.1, rotate: 90 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={closeCart}
//                       className="p-2 bg-black/50 border border-gray-800 rounded-lg hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300"
//                     >
//                       <X className="w-5 h-5 text-gray-400 hover:text-yellow-400" />
//                     </motion.button>
//                   </div>
                  
//                   {/* Trust Badges */}
//                   <div className="flex items-center gap-3 mt-4">
//                     <div className="flex items-center gap-1 text-xs text-gray-400">
//                       <Shield className="w-3 h-3 text-yellow-500" />
//                       <span>Secure</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-xs text-gray-400">
//                       <Truck className="w-3 h-3 text-yellow-500" />
//                       <span>Global Shipping</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-xs text-gray-400">
//                       <Sparkles className="w-3 h-3 text-yellow-500" />
//                       <span>Authentic</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Cart Items - Scrollable Area */}
//                 <div className="flex-1 overflow-y-auto p-4 md:p-6">
//                   {cart.length === 0 ? (
//                     // Empty Cart State - Premium
//                     <div className="h-full flex flex-col items-center justify-center py-12">
//                       <div className="relative mb-6">
//                         <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-xl opacity-20"></div>
//                         <ShoppingBag className="relative w-20 h-20 text-yellow-400/60" />
//                       </div>
//                       <h3 className="text-xl font-bold text-white mb-2">Your bag is empty</h3>
//                       <p className="text-gray-400 text-center mb-8 max-w-sm">
//                         Add premium merchandise to experience the Yoruba Healer collection
//                       </p>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={closeCart}
//                         className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-full font-bold hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
//                       >
//                         <Zap className="w-4 h-4 inline mr-2" />
//                         Explore Collection
//                       </motion.button>
//                     </div>
//                   ) : (
//                     // Premium Cart Items List
//                     <div className="space-y-4">
//                       {cart.map((item) => (
//                         <motion.div
//                           key={getCartItemKey(item)}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           exit={{ opacity: 0, x: -20 }}
//                           className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl p-4 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300"
//                         >
//                           {/* Delete Button - Top Right */}
//                           <motion.button
//                             whileHover={{ scale: 1.2 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => handleRemove(item.id, item.size, item.color)}
//                             className="absolute -top-2 -right-2 z-10 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-red-600"
//                           >
//                             <Trash2 className="w-3 h-3" />
//                           </motion.button>

//                           <div className="flex items-center gap-4">
//                             {/* Product Image - Enhanced */}
//                             <div className="relative w-20 h-20 flex-shrink-0">
//                               <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg"></div>
//                               {item.image ? (
//                                 <div className="relative w-full h-full">
//                                   <Image
//                                     src={item.image}
//                                     alt={item.name}
//                                     fill
//                                     className="object-contain p-2 rounded-lg"
//                                   />
//                                 </div>
//                               ) : (
//                                 <div className="w-full h-full flex items-center justify-center">
//                                   <ShoppingBag className="w-8 h-8 text-yellow-400/40" />
//                                 </div>
//                               )}
//                               {/* Quantity Badge */}
//                               <div className="absolute -top-2 -left-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg">
//                                 {item.quantity}
//                               </div>
//                             </div>

//                             {/* Product Details - Optimized for Mobile */}
//                             <div className="flex-1 min-w-0 space-y-2">
//                               <div>
//                                 <h4 className="text-white font-bold text-sm md:text-base truncate pr-8">
//                                   {item.name}
//                                 </h4>
//                                 {(item.size || item.color) && (
//                                   <div className="flex flex-wrap gap-1 mt-1">
//                                     {item.size && (
//                                       <span className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700">
//                                         {item.size}
//                                       </span>
//                                     )}
//                                     {item.color && (
//                                       <span className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700">
//                                         {item.color}
//                                       </span>
//                                     )}
//                                   </div>
//                                 )}
//                               </div>

//                               {/* Price and Controls Row */}
//                               <div className="flex items-center justify-between">
//                                 {/* Price */}
//                                 <div className="space-y-0.5">
//                                   <p className="text-yellow-400 font-bold text-lg">
//                                     {item.price}
//                                   </p>
//                                   {item.quantity > 1 && (
//                                     <p className="text-gray-500 text-xs">
//                                       £{(parseFloat(item.price.replace('£', '')) / item.quantity).toFixed(2)} each
//                                     </p>
//                                   )}
//                                 </div>

//                                 {/* Quantity Controls - Enhanced */}
//                                 <div className="flex items-center gap-1 bg-black/50 border border-gray-800 rounded-lg p-1">
//                                   <motion.button
//                                     whileTap={{ scale: 0.8 }}
//                                     onClick={() => handleDecrement(item.id, item.size, item.color)}
//                                     className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 transition-colors"
//                                   >
//                                     <Minus className="w-3 h-3" />
//                                   </motion.button>
                                  
//                                   <span className="text-white font-medium text-sm w-6 text-center">
//                                     {item.quantity}
//                                   </span>
                                  
//                                   <motion.button
//                                     whileTap={{ scale: 0.8 }}
//                                     onClick={() => handleIncrement(item.id, item.size, item.color)}
//                                     className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 transition-colors"
//                                   >
//                                     <Plus className="w-3 h-3" />
//                                   </motion.button>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Footer - Checkout Section */}
//                 {cart.length > 0 && (
//                   <div className="border-t border-yellow-500/20 bg-gradient-to-t from-black to-transparent">
//                     {/* Summary */}
//                     <div className="p-4 md:p-6 space-y-3">
//                       {(() => {
//                         const subtotal = cart.reduce((total, item) => {
//                           const price = parseFloat(item.price.replace('£', '')) / item.quantity;
//                           return total + (price * item.quantity);
//                         }, 0);
                        
//                         const shippingTotal = cart.reduce((total, item) => {
//                           return total + (item.shipping || 0);
//                         }, 0);
                        
//                         return (
//                           <>
//                             <div className="flex justify-between items-center text-sm">
//                               <span className="text-gray-400">Subtotal</span>
//                               <span className="text-white">£{subtotal.toFixed(2)}</span>
//                             </div>
                            
//                             <div className="flex justify-between items-center text-sm">
//                               <span className="text-gray-400">Shipping</span>
//                               <span className="text-yellow-400">£{shippingTotal.toFixed(2)}</span>
//                             </div>
                            
//                             <div className="pt-3 border-t border-yellow-500/20">
//                               <div className="flex justify-between items-center">
//                                 <span className="text-lg font-bold text-white">Total</span>
//                                 <div className="text-right">
//                                   <div className="text-2xl font-bold text-yellow-400">
//                                     £{totalAmount.toFixed(2)}
//                                   </div>
//                                   <p className="text-gray-500 text-xs">Including VAT</p>
//                                 </div>
//                               </div>
//                             </div>
//                           </>
//                         );
//                       })()}
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="p-4 md:p-6 pt-0 space-y-3">
//                       <Checkout />
                      
//                       <motion.button
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                         onClick={closeCart}
//                         className="w-full border-2 border-gray-800 text-gray-300 py-3.5 rounded-xl font-semibold hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
//                       >
//                         Continue Shopping
//                       </motion.button>
                      
//                       <button
//                         onClick={clearCart}
//                         className="w-full text-gray-500 hover:text-red-400 transition-colors text-sm py-2 flex items-center justify-center gap-2"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                         Clear Entire Bag
//                       </button>
//                     </div>

//                     {/* Security Badge */}
//                     <div className="p-4 border-t border-yellow-500/20">
//                       <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
//                         <Shield className="w-4 h-4" />
//                         <span>Secure checkout • 256-bit encryption</span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



// 'use client';

// import Link from "next/link";
// import { useState } from "react";
// import { useCart } from "../context/CartContext";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ShoppingBag, Search, ScanFace } from "lucide-react";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const { cart, getTotalItems } = useCart();
  
//   const cartItemsCount = getTotalItems();
  
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   return (
//     <>
//       <nav className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//           <div className="flex items-center space-x-8">
//             <Link href="/" className="text-2xl font-bold tracking-tighter uppercase italic">
//               Yoruba Healer
//             </Link>
            
//             <nav className="hidden lg:flex space-x-6 text-xs font-semibold uppercase tracking-widest">
//               <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
//                 New Arrivals
//               </Link>
//               <Link href="/men" className="hover:text-black dark:hover:text-white transition-colors">
//                 Men
//               </Link>
//               <Link href="/women" className="hover:text-black dark:hover:text-white transition-colors">
//                 Women
//               </Link>
//               <Link href="/collections" className="hover:text-black dark:hover:text-white transition-colors">
//                 Collections
//               </Link>
//               <Link href="/lookbook" className="hover:text-black dark:hover:text-white transition-colors">
//                 Lookbook
//               </Link>
//             </nav>
//           </div>
          
//           <div className="flex items-center space-x-6">
//             <div className="hidden md:flex items-center bg-gray-50 dark:bg-gray-900 px-3 py-1.5 rounded-sm">
//               <Search className="w-4 h-4 text-gray-400" />
//               <input 
//                 className="bg-transparent border-none text-xs focus:ring-0 w-40 ml-2 outline-none" 
//                 placeholder="Search..." 
//                 type="text"
//               />
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
//                 <ScanFace className="w-5 h-5" />
//               </button>
              
//               <button 
//                 onClick={toggleCart}
//                 className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative"
//               >
//                 <ShoppingBag className="w-5 h-5" />
//                 {cartItemsCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
//                     {cartItemsCount}
//                   </span>
//                 )}
//               </button>
              
//               {/* Mobile menu button */}
//               <button
//                 className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
//                 onClick={toggleMobileMenu}
//               >
//                 {!isMobileMenuOpen ? (
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 ) : (
//                   <X className="w-5 h-5" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: 'auto', opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               className="lg:hidden overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800"
//             >
//               <div className="px-4 pt-2 pb-4 space-y-1">
//                 {['New Arrivals', 'Men', 'Women', 'Collections', 'Lookbook'].map((item) => (
//                   <Link
//                     key={item}
//                     href={`/${item.toLowerCase().replace(' ', '-')}`}
//                     className="block px-3 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
//                     onClick={closeMobileMenu}
//                   >
//                     {item}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Cart Sidebar */}
//       <AnimatePresence>
//         {isCartOpen && (
//           <div className="fixed inset-0 z-50 overflow-hidden">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//               onClick={closeCart}
//             />
            
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-black shadow-xl"
//             >
//               <div className="flex flex-col h-full">
//                 {/* Header */}
//                 <div className="p-6 border-b border-gray-200 dark:border-gray-800">
//                   <div className="flex items-center justify-between">
//                     <h2 className="text-lg font-bold">Your Cart ({cartItemsCount})</h2>
//                     <button 
//                       onClick={closeCart}
//                       className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
//                     >
//                       <X className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Cart Items */}
//                 <div className="flex-1 overflow-y-auto p-6">
//                   {cart.length === 0 ? (
//                     <div className="h-full flex flex-col items-center justify-center py-12">
//                       <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" />
//                       <h3 className="text-lg font-bold mb-2">Your cart is empty</h3>
//                       <p className="text-gray-500 text-center mb-8">
//                         Add items to get started
//                       </p>
//                       <button
//                         onClick={closeCart}
//                         className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
//                       >
//                         Continue Shopping
//                       </button>
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       {cart.map((item) => (
//                         <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-100 dark:border-gray-800 rounded-lg">
//                           <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
//                             <ShoppingBag className="w-8 h-8 text-gray-400" />
//                           </div>
//                           <div className="flex-1">
//                             <h4 className="font-medium text-sm">{item.name}</h4>
//                             <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
//                             <p className="font-bold mt-1">{item.price}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Checkout Section */}
//                 {cart.length > 0 && (
//                   <div className="border-t border-gray-200 dark:border-gray-800 p-6">
//                     <div className="space-y-4">
//                       <div className="flex justify-between items-center">
//                         <span className="font-medium">Subtotal</span>
//                         <span className="font-bold">
//                           ₦{cart.reduce((total, item) => {
//                             const price = parseFloat(item.price.replace('₦', '').replace(',', ''));
//                             return total + (price * item.quantity);
//                           }, 0).toLocaleString()}.00
//                         </span>
//                       </div>
                      
//                       <button className="w-full bg-black dark:bg-white text-white dark:text-black py-3 text-sm font-bold uppercase hover:opacity-90 transition-opacity">
//                         Checkout
//                       </button>
                      
//                       <button
//                         onClick={closeCart}
//                         className="w-full border border-gray-300 dark:border-gray-700 py-3 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
//                       >
//                         Continue Shopping
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



'use client';

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Search, User, Menu } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, getTotalItems, getSubtotal } = useCart();
  
  const cartItemsCount = getTotalItems();
  const subtotal = getSubtotal();
  
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

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold tracking-tighter uppercase italic">
              Yoruba Healer
            </Link>
            
            <nav className="hidden lg:flex space-x-6 text-xs font-semibold uppercase tracking-widest">
              <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
                New Arrivals
              </Link>
              <Link href="/men" className="hover:text-black dark:hover:text-white transition-colors">
                Men
              </Link>
              <Link href="/women" className="hover:text-black dark:hover:text-white transition-colors">
                Women
              </Link>
              <Link href="/collections" className="hover:text-black dark:hover:text-white transition-colors">
                Collections
              </Link>
              <Link href="/lookbook" className="hover:text-black dark:hover:text-white transition-colors">
                Lookbook
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center bg-gray-50 dark:bg-gray-900 px-3 py-1.5 rounded-sm">
              <Search className="w-4 h-4 text-gray-400" />
              <input 
                className="bg-transparent border-none text-xs focus:ring-0 w-40 ml-2 outline-none" 
                placeholder="Search..." 
                type="text"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>
              
              <button 
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                {!isMobileMenuOpen ? (
                  <Menu className="w-5 h-5" />
                ) : (
                  <X className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {['New Arrivals', 'Men', 'Women', 'Collections', 'Lookbook'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-3 py-3 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeCart}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-black shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">Your Cart ({cartItemsCount})</h2>
                    <button 
                      onClick={closeCart}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                      aria-label="Close Cart"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center py-12">
                      <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-700 mb-4" />
                      <h3 className="text-lg font-bold mb-2">Your cart is empty</h3>
                      <p className="text-gray-500 text-center mb-8">
                        Add items to get started
                      </p>
                      <button
                        onClick={closeCart}
                        className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item, index) => (
                        <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="flex items-center gap-4 p-4 border border-gray-100 dark:border-gray-800 rounded-lg">
                          <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                            <ShoppingBag className="w-8 h-8 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                            <p className="font-bold mt-1">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Checkout Section */}
                {cart.length > 0 && (
                  <div className="border-t border-gray-200 dark:border-gray-800 p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Subtotal</span>
                        <span className="font-bold">
                          £{subtotal.toFixed(2)}
                        </span>
                      </div>
                      
                      <button className="w-full bg-black dark:bg-white text-white dark:text-black py-3 text-sm font-bold uppercase hover:opacity-90 transition-opacity">
                        Proceed to Checkout
                      </button>
                      
                      <button
                        onClick={closeCart}
                        className="w-full border border-gray-300 dark:border-gray-700 py-3 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}