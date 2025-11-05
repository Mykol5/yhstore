// 'use client';

// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-yellow-500/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo on the left - YH */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
//               <div className="text-yellow-400 text-2xl font-bold tracking-wider">
//                 YH
//               </div>
//             </Link>
//           </div>

//           {/* Navigation links - centered - Hidden on tablet and mobile */}
//           <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
//             <div className="flex items-baseline space-x-8">
//               <Link
//                 href="/"
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/merch"
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Merch
//               </Link>
//               <Link
//                 href="/music"
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Music
//               </Link>
//               <Link
//                 href="/shows"
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Shows
//               </Link>
//             </div>
//           </div>

//           {/* Auth buttons on the right - Hidden on tablet and mobile */}
//           <div className="hidden lg:flex flex-shrink-0 items-center space-x-4">
//             <Link
//               href="/login"
//               className="text-gray-300 hover:text-yellow-400 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//             >
//               Login
//             </Link>
//             <Link
//               href="/signup"
//               className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* Mobile menu button - Show on tablet and mobile (lg:hidden) */}
//           <div className="lg:hidden flex items-center">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 transition-colors duration-200"
//               onClick={toggleMobileMenu}
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Menu icon that changes to X when open */}
//               {!isMobileMenuOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu - Show on tablet and mobile */}
//       <div className={`lg:hidden transition-all duration-300 ease-in-out ${
//         isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
//       }`}>
//         <div className="px-2 pt-2 pb-4 space-y-1 bg-black border-t border-yellow-500/30">
//           <Link
//             href="/"
//             className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//             onClick={closeMobileMenu}
//           >
//             Home
//           </Link>
//           <Link
//             href="/merch"
//             className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//             onClick={closeMobileMenu}
//           >
//             Merch
//           </Link>
//           <Link
//             href="/music"
//             className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//             onClick={closeMobileMenu}
//           >
//             Music
//           </Link>
//           <Link
//             href="/shows"
//             className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//             onClick={closeMobileMenu}
//           >
//             Shows
//           </Link>
          
//           {/* Auth buttons in mobile dropdown */}
//           <div className="space-y-2 px-3 py-3 border-b border-yellow-500/10">
//             <Link
//               href="/login"
//               className="w-full text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium text-center transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Login
//             </Link>
//             <Link
//               href="/signup"
//               className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black block px-4 py-3 rounded-full text-base font-medium text-center hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
//               onClick={closeMobileMenu}
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }






// 'use client';

// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [cartItemsCount, setCartItemsCount] = useState(0); // This would come from context/state management

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-yellow-500/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo on the left - YH */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
//               <div className="text-yellow-400 text-2xl font-bold tracking-wider">
//                 YH
//               </div>
//             </Link>
//           </div>

//           {/* Navigation links - centered - Hidden on tablet and mobile */}
//           <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
//             <div className="flex items-baseline space-x-8">
//               <Link
//                 href="/"
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/merch"
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Merch
//               </Link>
//               <Link
//                 href="/music"
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Music
//               </Link>
//               <Link
//                 href="/shows"
//                 className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 Shows
//               </Link>
//             </div>
//           </div>

//           {/* Right side - Auth buttons and Cart */}
//           <div className="hidden lg:flex flex-shrink-0 items-center space-x-4">
//             {/* Cart Icon with Badge */}
//             <button className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
//               </svg>
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </button>

//             <Link
//               href="/login"
//               className="text-gray-300 hover:text-yellow-400 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//             >
//               Login
//             </Link>
//             <Link
//               href="/signup"
//               className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full text-sm font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* Mobile menu button - Show on tablet and mobile (lg:hidden) */}
//           <div className="lg:hidden flex items-center space-x-2">
//             {/* Mobile Cart Icon */}
//             <button className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
//               </svg>
//               {cartItemsCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
//                   {cartItemsCount}
//                 </span>
//               )}
//             </button>

//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 transition-colors duration-200"
//               onClick={toggleMobileMenu}
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Menu icon that changes to X when open */}
//               {!isMobileMenuOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu - Show on tablet and mobile */}
//       <div className={`lg:hidden transition-all duration-300 ease-in-out ${
//         isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
//       }`}>
//         <div className="px-2 pt-2 pb-4 space-y-1 bg-black border-t border-yellow-500/30">
//           <Link
//             href="/"
//             className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//             onClick={closeMobileMenu}
//           >
//             Home
//           </Link>
//           <Link
//             href="/merch"
//             className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//             onClick={closeMobileMenu}
//           >
//             Merch
//           </Link>
//           <Link
//             href="/music"
//             className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//             onClick={closeMobileMenu}
//           >
//             Music
//           </Link>
//           <Link
//             href="/shows"
//             className="text-gray-300 hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium border-b border-yellow-500/10 transition-colors duration-200"
//             onClick={closeMobileMenu}
//           >
//             Shows
//           </Link>
          
//           {/* Auth buttons in mobile dropdown */}
//           <div className="space-y-2 px-3 py-3 border-b border-yellow-500/10">
//             <Link
//               href="/login"
//               className="w-full text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium text-center transition-colors duration-200"
//               onClick={closeMobileMenu}
//             >
//               Login
//             </Link>
//             <Link
//               href="/signup"
//               className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black block px-4 py-3 rounded-full text-base font-medium text-center hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
//               onClick={closeMobileMenu}
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }





'use client';

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const cartItemsCount = getTotalItems();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left - YH */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <div className="text-yellow-400 text-2xl font-bold tracking-wider">
                YH
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
            <button className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21m-7.5-2.5h9"/>
              </svg>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <Link
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
            </Link>
          </div>

          {/* Mobile menu button - Show on tablet and mobile (lg:hidden) */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Cart Icon */}
            <button className="relative p-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200">
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
          <div className="space-y-2 px-3 py-3 border-b border-yellow-500/10">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
























// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo on the left */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/next.svg" // Replace with your logo path
//                 alt="Logo"
//                 width={100}
//                 height={40}
//                 className="dark:invert"
//               />
//             </Link>
//           </div>

//           {/* Navigation links - centered */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <Link
//                 href="/"
//                 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/mood-board"
//                 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Mood Board
//               </Link>
//               <Link
//                 href="/merchandise"
//                 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Merchandise
//               </Link>
//               <Link
//                 href="/music"
//                 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Music
//               </Link>
//               <Link
//                 href="/contact"
//                 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>

//           {/* Listen Now button on the right */}
//           <div className="flex-shrink-0">
//             <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
//               Listen Now
//             </button>
//           </div>

//           {/* Mobile menu button (optional) */}
//           <div className="md:hidden">
//             <button
//               type="button"
//               className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Menu icon */}
//               <svg
//                 className="block h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu (optional) */}
//       <div className="md:hidden" id="mobile-menu">
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
//           <Link
//             href="/"
//             className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Home
//           </Link>
//           <Link
//             href="/mood-board"
//             className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Mood Board
//           </Link>
//           <Link
//             href="/merchandise"
//             className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Merchandise
//           </Link>
//           <Link
//             href="/music"
//             className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Music
//           </Link>
//           <Link
//             href="/contact"
//             className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
