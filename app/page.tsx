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

import { useState, useEffect } from 'react';
import { useCart } from './context/CartContext';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  status: string;
  fullDescription: string;
  sizes?: string[];
  colors?: string[];
}


export default function Home() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    location: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', formData);
    setIsSignedUp(true);
  };

  // If user has signed up, show the merch section
  if (isSignedUp) {
    return <MerchSection />;
  }

  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-black to-yellow-600/5" />
        
        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Yoruba Healer Logo */}
          <div className="mb-8">
            <div className="text-yellow-400 text-5xl md:text-6xl font-bold tracking-wider mb-4">
              YÒRÙBÁ HEALER
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Experience the transformative power of spiritual healing through ancient Yoruba traditions. 
              Our music and merchandise carry the essence of ancestral wisdom and contemporary artistry.
            </p>
          </div>

          {/* Newsletter Signup Section */}
          <div className="bg-black/50 rounded-2xl p-8 border border-yellow-500/30 backdrop-blur-sm max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-2">
              Stay Connected
            </h2>
            <p className="text-gray-300 mb-6">
              Sign up to receive newsletters about Yoruba Healer Albums And Pre-order Yoruba Healer Merch.
            </p>

            <form onSubmit={handleSignUp} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Age */}
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your age"
                    min="1"
                    max="120"
                  />
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your city/country"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Sign Up & View Merch
              </button>

              <p className="text-gray-400 text-sm">
                By signing up, you agree to receive updates about new music releases, merchandise drops, and special offers.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Merch Section Component (moved from original page.tsx)
function MerchSection() {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const merchProducts: Product[] = [
    {
      id: 1,
      name: "Signature Hoodie",
      price: "£80.00",
      image: "/merch/hoodie.png",
      description: "Premium black hoodie with gold YH embroidery",
      status: "Pre-order",
      fullDescription: "Crafted from premium heavyweight cotton, this black hoodie features intricate gold embroidery of the Yoruba Healer logo. Perfect for everyday comfort with a touch of spiritual elegance.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Charcoal"]
    },
    {
      id: 2,
      name: "Limited Tee",
      price: "£80.00",
      image: "/merch/tee.png",
      description: "Classic cotton tee with exclusive artwork",
      status: "Pre-order",
      fullDescription: "100% premium cotton tee featuring exclusive Yoruba Healer artwork on the front. Soft, breathable, and perfect for showing your spiritual connection.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Ash"]
    },
    {
      id: 3,
      name: "Collector's Cap",
      price: "£80.00",
      image: "/merch/cap.png",
      description: "Structured cap with metallic logo",
      status: "Pre-order",
      fullDescription: "Structured six-panel cap with a curved visor and metallic Yoruba Healer logo patch. Adjustable strap for perfect fit.",
      sizes: ["One Size"],
      colors: ["Black", "Navy", "Olive"]
    },
    {
      id: 4,
      name: "Vinyl Package",
      price: "£80.00",
      image: "/merch/vinyl.png",
      description: "Limited edition vinyl + digital download",
      status: "Pre-order",
      fullDescription: "Limited edition 180g vinyl featuring exclusive Yoruba Healer artwork. Includes digital download code and spiritual guidance booklet.",
      sizes: ["12-inch"],
      colors: ["Clear", "Black", "Gold Swirl"]
    },
    {
      id: 5,
      name: "Healing Bundle",
      price: "£80.00",
      image: "/merch/bundle.png",
      description: "Complete merch collection + spiritual access",
      status: "Exclusive",
      fullDescription: "The ultimate spiritual bundle including hoodie, tee, cap, and vinyl. Plus access to exclusive healing content and early releases.",
      sizes: ["Bundle"],
      colors: ["Complete Set"]
    },
    {
      id: 6,
      name: "Spiritual Beanie",
      price: "£80.00",
      image: "/merch/beanie.png",
      description: "Acrylic blend beanie with woven logo",
      status: "New",
      fullDescription: "Warm and comfortable acrylic blend beanie with woven Yoruba Healer logo. One size fits all for spiritual comfort.",
      sizes: ["One Size"],
      colors: ["Black", "Charcoal", "Navy"]
    },
    {
      id: 7,
      name: "Ancestral Jacket",
      price: "£80.00",
      image: "/merch/jacket.png",
      description: "Premium track jacket with detailed embroidery",
      status: "Limited",
      fullDescription: "Lightweight track jacket with detailed ancestral embroidery on chest and sleeves. Perfect for spiritual layering and protection.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Burgundy"]
    },
    {
      id: 8,
      name: "Sacred Sticker Pack",
      price: "£80.00",
      image: "/merch/stickers.png",
      description: "Set of 5 premium vinyl stickers",
      status: "In Stock",
      fullDescription: "Set of 5 high-quality vinyl stickers featuring Yoruba Healer sacred symbols and artwork. Weather-resistant and perfect for spiritual tools.",
      sizes: ["Pack of 5"],
      colors: ["Mixed Colors"]
    },
    {
      id: 9,
      name: "Ritual Tote",
      price: "£80.00",
      image: "/merch/tote.png",
      description: "Eco-friendly canvas tote bag",
      status: "Eco",
      fullDescription: "Durable canvas tote bag made from eco-friendly materials with sacred Yoruba Healer print. Perfect for carrying spiritual items.",
      sizes: ["One Size"],
      colors: ["Natural", "Black", "Olive"]
    },
    {
      id: 10,
      name: "Protection Phone Case",
      price: "£80.00",
      image: "/merch/case.png",
      description: "Protective case with sacred artwork",
      status: "New",
      fullDescription: "Durable protective phone case featuring exclusive Yoruba Healer sacred artwork. Carries spiritual protection with you.",
      sizes: ["Universal"],
      colors: ["Clear", "Black", "Smoke"]
    }
  ];

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setSelectedSize(product.sizes?.[0] || '');
    setSelectedColor(product.colors?.[0] || '');
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        size: selectedSize,
        color: selectedColor
      });

      console.log('Added to cart:', {
        product: selectedProduct,
        quantity,
        size: selectedSize,
        color: selectedColor
      });

      closeProductModal();
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Merch Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-yellow-400 text-4xl font-bold tracking-wider mb-4">
              YÒRÙBÁ HEALER
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sacred Merchandise Collection
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              All items priced at £80. Limited quantities available for spiritual connection.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
            {merchProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-black/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300 group cursor-pointer"
                onClick={() => openProductModal(product)}
              >
                {/* Product Image */}
                <div className="relative h-32 sm:h-36 md:h-48 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 transition-colors">
                  <div className="text-center text-yellow-400/60">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                    <p className="text-xs sm:text-sm">Sacred Item</p>
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-2 right-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium ${
                    product.status === 'Exclusive' 
                      ? 'bg-yellow-500 text-black' 
                      : product.status === 'Limited'
                      ? 'bg-red-500 text-white'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {product.status}
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-400 text-xs mb-2 sm:mb-3 line-clamp-2">{product.description}</p>
                  <div className="text-yellow-400 text-base sm:text-lg md:text-xl font-bold">{product.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Modal */}
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-black border border-yellow-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
                    <button 
                      onClick={closeProductModal}
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Product Image */}
                    <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-xl h-64 flex items-center justify-center border border-yellow-500/20">
                      <div className="text-center text-yellow-400/60">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                        </svg>
                        <p className="text-sm">Sacred Item</p>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-yellow-400 text-xl font-bold mb-2">{selectedProduct.price}</h4>
                        <p className="text-gray-300 text-sm">{selectedProduct.fullDescription}</p>
                      </div>

                      {/* Size Selection */}
                      {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Size</label>
                          <div className="flex flex-wrap gap-2">
                            {selectedProduct.sizes.map((size) => (
                              <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                  selectedSize === size
                                    ? 'bg-yellow-500 text-black'
                                    : 'bg-black border border-yellow-500/30 text-gray-300 hover:border-yellow-500/50'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Color Selection */}
                      {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Color</label>
                          <div className="flex flex-wrap gap-2">
                            {selectedProduct.colors.map((color) => (
                              <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                  selectedColor === color
                                    ? 'bg-yellow-500 text-black'
                                    : 'bg-black border border-yellow-500/30 text-gray-300 hover:border-yellow-500/50'
                                }`}
                              >
                                {color}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Quantity Selector */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={decrementQuantity}
                            className="w-10 h-10 rounded-lg border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-white font-medium w-8 text-center">{quantity}</span>
                          <button
                            onClick={incrementQuantity}
                            className="w-10 h-10 rounded-lg border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={handleAddToCart}
                        className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Add to Cart - {selectedProduct.price}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Song Section */}
      <UpcomingSong />
    </div>
  );
}

// Add the missing imports at the top


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