// import UpcomingSong from './components/UpcomingSong';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black font-sans">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div 
//           className="absolute inset-0 bg-black bg-opacity-70 z-0"
//           style={{
//             backgroundImage: 'url("/hero-bg.png")', // Replace with actual image path
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat'
//           }}
//         />
        
//         {/* Gold Overlay Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-black to-yellow-600/5 z-10" />
        
//         {/* Content */}
//         <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//           {/* Logo/Brand */}
//           <div className="mb-8">
//             {/* <div className="text-yellow-400 text-4xl font-bold tracking-wider mb-2">
//               YH
//             </div> */}
//             <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
//           </div>

//           {/* Main Heading */}
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
//             Experience{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
//               Unique
//             </span>{' '}
//             Music Artistry
//           </h1>

//           {/* Sub Text */}
//           <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
//             Where soulful melodies meet contemporary vibes. Immerse yourself in a world of 
//             authentic sound and creative expression that transcends boundaries.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//               </svg>
//               Explore Music
//             </button>
            
//             <button className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500/10 hover:shadow-2xl">
//               View Story
//             </button>
//           </div>

//           {/* Stats/Highlights */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
//             <div className="text-center">
//               <div className="text-yellow-400 text-2xl font-bold mb-1">15K+</div>
//               <div className="text-gray-400 text-sm">Streams</div>
//             </div>
//             <div className="text-center">
//               <div className="text-yellow-400 text-2xl font-bold mb-1">50+</div>
//               <div className="text-gray-400 text-sm">Shows</div>
//             </div>
//             <div className="text-center">
//               <div className="text-yellow-400 text-2xl font-bold mb-1">2024</div>
//               <div className="text-gray-400 text-sm">New Era</div>
//             </div>
//           </div>

//           {/* Scroll Indicator */}
//           {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//             <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2" />
//             </div>
//           </div> */}
//         </div>
//       </section>

//       {/* Upcoming Song Section */}
//       <UpcomingSong />
//     </div>
//   );
// }





'use client';

import UpcomingSong from './components/UpcomingSong';
import { useRef } from 'react';

export default function Home() {
  const merchSectionRef = useRef<HTMLDivElement>(null);

  const scrollToMerch = () => {
    merchSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const merchProducts = [
    {
      id: 1,
      name: "Signature Hoodie",
      price: "$65.00",
      image: "/merch/hoodie.png",
      description: "Premium black hoodie with gold YH embroidery",
      status: "Pre-order"
    },
    {
      id: 2,
      name: "Limited Tee",
      price: "$35.00",
      image: "/merch/tee.png",
      description: "Classic cotton tee with exclusive artwork",
      status: "Pre-order"
    },
    {
      id: 3,
      name: "Collector's Cap",
      price: "$30.00",
      image: "/merch/cap.png",
      description: "Structured cap with metallic logo",
      status: "Pre-order"
    },
    {
      id: 4,
      name: "Vinyl Package",
      price: "$45.00",
      image: "/merch/vinyl.png",
      description: "Limited edition vinyl + digital download",
      status: "Pre-order"
    },
    {
      id: 5,
      name: "Tour Bundle",
      price: "$120.00",
      image: "/merch/bundle.png",
      description: "Complete merch collection + early access",
      status: "Exclusive"
    }
  ];

  const handlePreOrder = (productId: number) => {
    // Handle pre-order logic here
    console.log(`Pre-ordering product ${productId}`);
    // You can add form opening logic or redirect to product page
  };

  const handleViewMore = () => {
    // Handle view more logic
    console.log("View more products");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Merch Pre-order Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-80 z-0"
          style={{
            backgroundImage: 'url("/merch-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Gold Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-black to-yellow-600/10 z-10" />
        
        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Pre-order Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-6 py-2 mb-6">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-yellow-400 text-sm font-medium">Limited Pre-order Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Exclusive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Merch
            </span>{' '}
            Collection
          </h1>

          {/* Sub Text */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Be the first to own limited edition merchandise. Pre-order now and secure your piece of music history.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <button 
              onClick={scrollToMerch}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              View Collection
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-yellow-400 text-2xl font-bold mb-1">Limited</div>
              <div className="text-gray-400 text-sm">Edition</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-2xl font-bold mb-1">Worldwide</div>
              <div className="text-gray-400 text-sm">Shipping</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-2xl font-bold mb-1">Secure</div>
              <div className="text-gray-400 text-sm">Checkout</div>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Products Section */}
      <section ref={merchSectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pre-order Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Limited quantities available. Orders ship in 2-3 weeks.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {merchProducts.map((product) => (
              <div key={product.id} className="bg-black/50 rounded-2xl p-6 border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300 group">
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-xl mb-4 flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 transition-colors">
                  <div className="text-center text-yellow-400/60">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                    <p className="text-sm">Product Image</p>
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
                    product.status === 'Exclusive' 
                      ? 'bg-yellow-500 text-black' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {product.status}
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                  <div className="text-yellow-400 text-2xl font-bold mb-4">{product.price}</div>
                  
                  <button 
                    onClick={() => handlePreOrder(product.id)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Pre-order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mb-16">
            <button 
              onClick={handleViewMore}
              className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:bg-yellow-500/10 hover:shadow-2xl"
            >
              View Full Collection
            </button>
          </div>

          {/* Customer Information Form */}
          <div className="max-w-2xl mx-auto bg-black/50 rounded-2xl p-8 border border-yellow-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white text-center mb-6">Pre-order Information</h3>
            <p className="text-gray-400 text-center mb-8">Fill in your details to complete your pre-order</p>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              {/* Shipping Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
                  Shipping Address *
                </label>
                <input
                  type="text"
                  id="address"
                  required
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="City"
                  />
                </div>

                {/* State/Region */}
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-2">
                    State/Region *
                  </label>
                  <input
                    type="text"
                    id="state"
                    required
                    className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="State/Region"
                  />
                </div>

                {/* ZIP/Postal Code */}
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-300 mb-2">
                    ZIP/Postal Code *
                  </label>
                  <input
                    type="text"
                    id="zip"
                    required
                    className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="ZIP/Postal Code"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                  Country *
                </label>
                <select
                  id="country"
                  required
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Complete Pre-order
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Upcoming Song Section */}
      <UpcomingSong />
    </div>
  );
}





// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
// }