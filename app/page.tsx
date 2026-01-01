'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useCart } from './context/CartContext';
import { useUser } from './context/UserContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart, Sparkles, Globe, Truck, Shield, Zap, Music2, Star, ArrowRight } from 'lucide-react';


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
  category: string;
  rating: number;
  reviewCount: number;
}

// Enhanced shipping rates with more countries
const SHIPPING_RATES: Record<string, number> = {
  'GB': 9.99, 'US': 14.99, 'CA': 17.99, 'FR': 11.99, 'DE': 11.99,
  'ES': 11.99, 'IT': 11.99, 'NL': 11.99, 'BE': 11.99, 'PT': 11.99,
  'IE': 11.99, 'AU': 19.99, 'NZ': 21.99, 'JP': 17.99, 'CN': 15.99,
  'IN': 19.99, 'NG': 24.99, 'GH': 24.99, 'KE': 24.99, 'ZA': 21.99,
  'BR': 21.99, 'MX': 17.99, 'AR': 19.99, 'CL': 19.99, 'AE': 17.99,
  'SA': 17.99, 'QA': 17.99, 'SG': 14.99, 'MY': 15.99, 'ID': 17.99,
  'KR': 14.99, 'RU': 19.99, 'TR': 14.99,
};

export default function Home() {
  const { hasSignedUp, setHasSignedUp, setUserData, hasPurchased, setHasPurchased, selectedCountry, setSelectedCountry } = useUser();
  const { cart } = useCart();
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [showSignupSection, setShowSignupSection] = useState(false);
  const [showFloatingSignup, setShowFloatingSignup] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (cart.length > 0 && !hasSignedUp) {
      setShowSignupSection(true);
      if (!hasPurchased) {
        setHasPurchased(true);
      }
    } else {
      setShowSignupSection(false);
    }
  }, [cart, hasSignedUp, hasPurchased, setHasPurchased]);

  useEffect(() => {
    if (!hasSignedUp && !showSignupSection) {
      const timer = setTimeout(() => {
        setShowFloatingSignup(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [hasSignedUp, showSignupSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black font-sans">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Enhanced Promotional Banner */}
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 text-black py-3 px-4 sticky top-0 z-40 border-b border-yellow-600/50"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
              <div className="absolute -inset-1 bg-yellow-400/30 rounded-full blur-sm"></div>
            </div>
            <span className="font-bold text-sm sm:text-base tracking-wide uppercase flex items-center gap-2">
              <Music2 className="w-4 h-4 animate-pulse" />
              PREMIERE: YORUBA HEALER VOL. 2 - GLOBAL TOUR ANNOUNCEMENT
            </span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPromoModal(true)}
            className="relative overflow-hidden group bg-black text-yellow-400 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-4 h-4 group-hover:animate-bounce" />
              GET VIP ACCESS
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Section */}
      {/* <header className="relative py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 mx-auto mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/yhimg.png"
                alt="Yoruba Healer"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
                priority
              />
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6"
            >
              YORUBA HEALER
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Global Music. Premium Merchandise. Exclusive Experiences.
            </motion.p>

            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-12"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <Globe className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">Worldwide Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">Authentic Products</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Truck className="w-5 h-5 text-yellow-500" />
                <span className="text-sm">Express Delivery</span>
              </div>
            </motion.div>
          </div>
        </div>
      </header> */}

      {/* Main Merch Section */}
      <MerchSection />
      
      {/* Floating Signup Button */}
      <AnimatePresence>
        {showFloatingSignup && !hasSignedUp && !showSignupSection && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowPromoModal(true)}
              className="relative group bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md group-hover:blur-xl transition-all duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                <Music2 className="w-6 h-6 animate-pulse" />
                <span className="text-lg">Join VIP List</span>
                <Sparkles className="w-5 h-5" />
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Signup Section */}
      {showSignupSection && (
        <NewsletterSignupSection onSignup={() => {
          setShowSignupSection(false);
          setShowFloatingSignup(false);
        }} />
      )}

      {/* Promotional Modal */}
      {showPromoModal && (
        <PromotionalModal onClose={() => setShowPromoModal(false)} />
      )}
    </div>
  );
}

// Enhanced Merch Section Component
function MerchSection() {
  const { addToCart } = useCart();
  const { selectedCountry, setHasPurchased } = useUser();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);
  
  const shippingCost = SHIPPING_RATES[selectedCountry] || 19.99;

  const merchProducts: Product[] = [
    {
      id: 1,
      name: "Signature Hoodie",
      price: "£89.99",
      image: "/hoodie.jpg",
      description: "Premium black hoodie with gold embroidery",
      status: "Pre-order",
      fullDescription: "Crafted from premium heavyweight cotton, this black hoodie features intricate gold embroidery of the Yoruba Healer logo. Perfect for everyday comfort.",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Midnight Black", "Royal Navy", "Charcoal"],
      category: "Apparel",
      rating: 4.9,
      reviewCount: 234
    },
    {
      id: 2,
      name: "Limited Edition T-Shirt",
      price: "£49.99",
      image: "/hoodie.jpg",
      description: "Classic cotton tee with exclusive artwork",
      status: "Pre-order",
      fullDescription: "100% premium cotton tee featuring exclusive Yoruba Healer artwork on the front. Soft, breathable, and perfect for daily wear.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Pure White", "Midnight Black", "Ash Gray"],
      category: "Apparel",
      rating: 4.8,
      reviewCount: 189
    },
    {
      id: 3,
      name: "Collector's Cap",
      price: "£39.99",
      image: "/brondy.jpg",
      description: "Structured cap with metallic logo",
      status: "Pre-order",
      fullDescription: "Structured six-panel cap with a curved visor and metallic Yoruba Healer logo patch. Adjustable strap for perfect fit.",
      sizes: ["One Size"],
      colors: ["Black", "Navy", "Olive"],
      category: "Accessories",
      rating: 4.7,
      reviewCount: 156
    },
    {
      id: 4,
      name: "Vinyl Album Package",
      price: "£69.99",
      image: "/shortie.jpg",
      description: "Limited edition vinyl + digital download",
      status: "Pre-order",
      fullDescription: "Limited edition 180g vinyl featuring exclusive artwork. Includes digital download code and exclusive booklet.",
      sizes: ["12-inch"],
      colors: ["Clear", "Black", "Gold Swirl"],
      category: "Music",
      rating: 5.0,
      reviewCount: 312
    },
    {
      id: 5,
      name: "Complete Collection Bundle",
      price: "£199.99",
      image: "/hoodie.jpg",
      description: "Full merch collection + digital content",
      status: "Exclusive",
      fullDescription: "The ultimate bundle including hoodie, tee, cap, and vinyl. Plus access to exclusive digital content and early releases.",
      sizes: ["Bundle"],
      colors: ["Complete Set"],
      category: "Bundles",
      rating: 4.9,
      reviewCount: 89
    },
    {
      id: 6,
      name: "Premium Track Jacket",
      price: "£104.99",
      image: "/hoodie.jpg",
      description: "Lightweight jacket with detailed embroidery",
      status: "Limited",
      fullDescription: "Lightweight track jacket with detailed embroidery on chest and sleeves. Perfect for layering and style.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Burgundy"],
      category: "Apparel",
      rating: 4.8,
      reviewCount: 167
    },
  ];

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

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
      const basePrice = parseFloat(selectedProduct.price.replace('£', ''));
      const totalPrice = (basePrice * quantity) + shippingCost;
      
      addToCart({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: `£${totalPrice.toFixed(2)}`,
        basePrice: basePrice,
        shipping: shippingCost,
        size: selectedSize,
        color: selectedColor,
        image: undefined
      }, quantity);

      setHasPurchased(true);
      closeProductModal();
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
{/* Enhanced Section Header - Refined */}
<motion.div 
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  className="text-center mb-12"
>
  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full border border-yellow-500/20">
    <Sparkles className="w-3 h-3 text-yellow-500" />
    <span className="text-yellow-500 text-xs font-medium uppercase tracking-wider">Premium Collection</span>
  </div>
  
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Global Merchandise
    <span className="block text-lg md:text-xl text-gray-400 font-normal mt-1">Curated for Worldwide Fans</span>
  </h2>
  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mt-8">
    <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-yellow-500/30 transition-colors">
      <div className="text-xl font-bold text-yellow-500">100%</div>
      <div className="text-gray-400 text-xs">Authentic</div>
    </div>
    <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-yellow-500/30 transition-colors">
      <div className="text-xl font-bold text-yellow-500">48H</div>
      <div className="text-gray-400 text-xs">Fast Dispatch</div>
    </div>
    <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-yellow-500/30 transition-colors">
      <div className="text-xl font-bold text-yellow-500">60+</div>
      <div className="text-gray-400 text-xs">Countries</div>
    </div>
    <div className="text-center p-3 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-yellow-500/30 transition-colors">
      <div className="text-xl font-bold text-yellow-500">24/7</div>
      <div className="text-gray-400 text-xs">Support</div>
    </div>
  </div>
</motion.div>

        {/* Products Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div 
                className="relative bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 group-hover:border-yellow-500/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer group-hover:shadow-2xl group-hover:shadow-yellow-500/10"
                onClick={() => openProductModal(product)}
              >
                {/* Product Image */}
                <div className="relative h-80 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Music2 className="w-20 h-20 text-gray-700" />
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      product.status === 'Exclusive' 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black' 
                        : product.status === 'Limited'
                        ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    } shadow-lg`}>
                      {product.status}
                    </div>
                  </div>
                  
                  {/* Wishlist Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-4 right-4 p-2.5 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                  </button>
                  
                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm">
                      Quick View
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-yellow-500 font-medium">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm text-white font-medium">{product.rating}</span>
                      <span className="text-xs text-gray-500">({product.reviewCount})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div>
                      <div className="text-yellow-500 text-2xl font-bold">{product.price}</div>
                      <div className="text-gray-500 text-xs">+ shipping</div>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openProductModal(product);
                      }}
                      className="px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-white rounded-lg text-sm font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200"
                    >
                      Select Options
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl"
              >
                {/* Close Button */}
                <button 
                  onClick={closeProductModal}
                  className="absolute top-6 right-6 z-10 p-2 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Image Gallery */}
                    <div className="space-y-4">
                      <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                        {selectedProduct.image && (
                          <Image
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            fill
                            className="object-cover"
                            priority
                          />
                        )}
                        <div className="absolute top-4 left-4">
                          <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                            selectedProduct.status === 'Exclusive' 
                              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black' 
                              : selectedProduct.status === 'Limited'
                              ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white'
                              : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                          }`}>
                            {selectedProduct.status}
                          </div>
                        </div>
                      </div>
                      
                      {/* Thumbnails */}
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-24 rounded-lg bg-gray-800 border border-gray-700 hover:border-yellow-500 cursor-pointer transition-colors"></div>
                        ))}
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{selectedProduct.name}</h3>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            ))}
                            <span className="text-sm text-gray-400 ml-2">({selectedProduct.reviewCount} reviews)</span>
                          </div>
                          <span className="text-sm text-green-500">In Stock</span>
                        </div>
                        
                        <div className="text-yellow-500 text-4xl font-bold mb-6">{selectedProduct.price}</div>
                        
                        <p className="text-gray-300 leading-relaxed">{selectedProduct.fullDescription}</p>
                      </div>

                      {/* Size Selection */}
                      {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-3">Select Size</label>
                          <div className="flex flex-wrap gap-2">
                            {selectedProduct.sizes.map((size) => (
                              <motion.button
                                key={size}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedSize(size)}
                                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                  selectedSize === size
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg'
                                    : 'bg-gray-800 border border-gray-700 text-gray-300 hover:border-yellow-500 hover:text-white'
                                }`}
                              >
                                {size}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Color Selection */}
                      {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-3">Select Color</label>
                          <div className="flex flex-wrap gap-2">
                            {selectedProduct.colors.map((color) => (
                              <motion.button
                                key={color}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedColor(color)}
                                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                  selectedColor === color
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg'
                                    : 'bg-gray-800 border border-gray-700 text-gray-300 hover:border-yellow-500 hover:text-white'
                                }`}
                              >
                                {color}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Quantity Selector */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">Quantity</label>
                        <div className="flex items-center space-x-4">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={decrementQuantity}
                            className="w-12 h-12 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors flex items-center justify-center"
                          >
                            -
                          </motion.button>
                          <span className="text-2xl font-bold text-white w-12 text-center">{quantity}</span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={incrementQuantity}
                            className="w-12 h-12 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors flex items-center justify-center"
                          >
                            +
                          </motion.button>
                        </div>
                      </div>

                      {/* Shipping & Total */}
                      <div className="pt-6 border-t border-gray-800 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Item total:</span>
                          <span className="text-white font-medium">£{(parseFloat(selectedProduct.price.replace('£', '')) * quantity).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Shipping to {selectedCountry}:</span>
                          <span className="text-yellow-500 font-medium">£{shippingCost.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-700">
                          <span className="text-white">Total Amount:</span>
                          <span className="text-yellow-500">£{(parseFloat(selectedProduct.price.replace('£', '')) * quantity + shippingCost).toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-6">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleAddToCart}
                          className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300"
                        >
                          Add to Cart
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => toggleWishlist(selectedProduct.id)}
                          className="px-6 py-4 border border-gray-700 text-white rounded-xl hover:bg-gray-800 transition-colors"
                        >
                          <Heart className={`w-6 h-6 ${wishlist.includes(selectedProduct.id) ? 'fill-red-500 text-red-500' : ''}`} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Enhanced Newsletter Signup Component
function NewsletterSignupSection({ onSignup }: { onSignup: () => void }) {
  const { setHasSignedUp, setUserData } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    location: '',
    country: 'GB'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setHasSignedUp(true);
    setUserData(formData);
    localStorage.setItem('yh_user', JSON.stringify(formData));
    onSignup();
    setIsSubmitting(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6">
              <Music2 className="w-10 h-10 text-black" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Join the <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Global Community</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Be the first to access exclusive content, early releases, and VIP experiences worldwide.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: '🎫', title: 'Early Access', desc: 'Concert tickets 48h before public' },
                { icon: '💿', title: 'Exclusive Content', desc: 'Unreleased tracks & demos' },
                { icon: '🎁', title: 'Member Perks', desc: 'Special discounts & gifts' }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-colors"
                >
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h4 className="text-yellow-500 font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSignUp} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3 text-left">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3 text-left">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3 text-left">
                  Your City
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="Where are you based?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3 text-left">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="GB">🇬🇧 United Kingdom</option>
                  <option value="US">🇺🇸 United States</option>
                  <option value="CA">🇨🇦 Canada</option>
                  <option value="NG">🇳🇬 Nigeria</option>
                  <option value="GH">🇬🇭 Ghana</option>
                  <option value="KE">🇰🇪 Kenya</option>
                  <option value="ZA">🇿🇦 South Africa</option>
                  <option value="AU">🇦🇺 Australia</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3 text-left">
                Age (Optional)
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                placeholder="Your age"
                min="1"
                max="120"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-5 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Join VIP Community'
              )}
            </motion.button>

            <p className="text-gray-500 text-sm text-center">
              By joining, you agree to receive updates about new releases and exclusive offers. 
              Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

// Enhanced Promotional Modal
function PromotionalModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[85vh] md:max-h-[80vh] overflow-hidden border border-yellow-500/20 shadow-2xl"
      >
        {/* Luxury Metallic Border Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-2xl md:rounded-3xl opacity-20"></div>
          <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl md:rounded-3xl"></div>
        </div>

        {/* Fixed Close Button - Always Visible */}
        <button 
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 md:top-6 md:right-6 z-50 p-3 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-black hover:border-yellow-500 transition-all duration-300 group shadow-xl"
        >
          <svg className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-yellow-500/10 transition-all duration-300"></div>
        </button>

        {/* Scrollable Content Container */}
        <div className="relative h-full overflow-y-auto custom-scrollbar">
          {/* Luxury Header Section */}
          <div className="relative p-6 md:p-8 pt-12 md:pt-14 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
            
            <div className="text-center mb-8">
              {/* Animated Glowing Badge */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(234, 179, 8, 0.3)",
                    "0 0 40px rgba(234, 179, 8, 0.5)",
                    "0 0 20px rgba(234, 179, 8, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 mb-6"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">GLOBAL EXCLUSIVE</span>
              </motion.div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Yoruba Healer{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Premium Access
                </span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">World-class experiences for global fans</p>
            </div>

            {/* International Flags Badge */}
            <div className="flex justify-center gap-2 mb-8">
              {['🇺🇸', '🇬🇧', '🇳🇬', '🇨🇦', '🇦🇺', '🇫🇷', '🇩🇪', '🇯🇵'].map((flag, i) => (
                <motion.div
                  key={flag}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xl hover:scale-110 transition-transform cursor-help"
                  title="Available Worldwide"
                >
                  {flag}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="p-6 md:p-8 pt-0">
            {/* Luxury Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {[
                {
                  icon: '🎤',
                  title: 'World Tour',
                  subtitle: 'Global Experience',
                  description: '30+ cities, VIP packages, meet & greet',
                  color: 'from-yellow-500/20 to-orange-500/20',
                  borderColor: 'border-yellow-500/30',
                  badge: 'TICKETS'
                },
                {
                  icon: '💿',
                  title: 'Album Vol.2',
                  subtitle: 'Collector\'s Edition',
                  description: 'Limited vinyl + digital content',
                  color: 'from-blue-500/20 to-cyan-500/20',
                  borderColor: 'border-blue-500/30',
                  badge: 'PRE-ORDER'
                },
                {
                  icon: '✨',
                  title: 'VIP Access',
                  subtitle: 'Members Only',
                  description: 'Exclusive drops & collaborations',
                  color: 'from-purple-500/20 to-pink-500/20',
                  borderColor: 'border-purple-500/30',
                  badge: 'EXCLUSIVE'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`group relative bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-xl p-5 border ${item.borderColor} hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 cursor-pointer`}
                >
                  {/* Floating Badge */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <span className="px-3 py-1 bg-black text-yellow-400 text-xs font-bold rounded-full border border-yellow-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-yellow-400 text-sm mb-2">{item.subtitle}</p>
                    <p className="text-gray-300 text-xs mb-4">{item.description}</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2.5 bg-black/50 border border-gray-700 text-white text-sm font-medium rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium Features List */}
            <div className="mb-8">
              <h3 className="text-white font-bold text-lg mb-4 text-center">Global Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  '🌍 Worldwide Shipping & Support',
                  '🎫 Early Access to All Events',
                  '📦 Free Shipping Over $150',
                  '🎁 Exclusive Member Gifts',
                  '💎 Limited Edition Products',
                  '👑 VIP Priority Treatment'
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 + 0.5 }}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-yellow-500/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-5 mb-8 border border-yellow-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">⭐</span>
                </div>
                <div>
                  <div className="text-white font-bold">Global Fan Experience</div>
                  <div className="text-yellow-400 text-xs">5,000+ Members Worldwide</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                "The premium access transformed my experience. Early tickets, exclusive merch, and worldwide community."
              </p>
              <div className="text-right text-xs text-gray-400 mt-2">— Sarah K., London</div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Zap className="w-5 h-5" />
                Join Global VIP List
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full bg-transparent border-2 border-gray-700 text-gray-300 py-3.5 rounded-xl font-semibold hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300"
              >
                Continue Exploring Store
              </motion.button>
            </div>

            {/* Global Stats Footer */}
            <div className="mt-8 pt-6 border-t border-gray-800/50">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-yellow-400 font-bold text-xl">50K+</div>
                  <div className="text-gray-400 text-xs">Global Members</div>
                </div>
                <div>
                  <div className="text-yellow-400 font-bold text-xl">60+</div>
                  <div className="text-gray-400 text-xs">Countries</div>
                </div>
                <div>
                  <div className="text-yellow-400 font-bold text-xl">4.9★</div>
                  <div className="text-gray-400 text-xs">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add CSS for custom scrollbar */}
        <style jsx global>{`
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(234, 179, 8, 0.5) rgba(0, 0, 0, 0.1);
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, rgba(234, 179, 8, 0.5), rgba(245, 158, 11, 0.5));
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, rgba(234, 179, 8, 0.8), rgba(245, 158, 11, 0.8));
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
}






// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useCart } from './context/CartContext';
// import { useUser } from './context/UserContext';

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   description: string;
//   status: string;
//   fullDescription: string;
//   sizes?: string[];
//   colors?: string[];
// }

// // Shipping rates by country code
// const SHIPPING_RATES: Record<string, number> = {
//   'GB': 10, // United Kingdom
//   'US': 15, // United States
//   'CA': 18, // Canada
//   'FR': 12, // France
//   'DE': 12, // Germany
//   'ES': 12, // Spain
//   'IT': 12, // Italy
//   'NL': 12, // Netherlands
//   'BE': 12, // Belgium
//   'PT': 12, // Portugal
//   'IE': 12, // Ireland
//   'AU': 20, // Australia
//   'NZ': 22, // New Zealand
//   'JP': 18, // Japan
//   'CN': 16, // China
//   'IN': 20, // India
//   'NG': 25, // Nigeria
//   'GH': 25, // Ghana
//   'KE': 25, // Kenya
//   'ZA': 22, // South Africa
//   'BR': 22, // Brazil
//   'MX': 18, // Mexico
//   'AR': 20, // Argentina
//   'CL': 20, // Chile
//   'AE': 18, // UAE
//   'SA': 18, // Saudi Arabia
//   'QA': 18, // Qatar
//   'SG': 15, // Singapore
//   'MY': 16, // Malaysia
//   'ID': 18, // Indonesia
//   'KR': 15, // South Korea
//   'RU': 20, // Russia
//   'TR': 15, // Turkey
//   // Default for other countries
// };

// export default function Home() {
//   const { hasSignedUp, setHasSignedUp, setUserData, hasPurchased, setHasPurchased, selectedCountry, setSelectedCountry } = useUser();
//   const { cart } = useCart();
//   const [showPromoModal, setShowPromoModal] = useState(false);
//   const [showSignupSection, setShowSignupSection] = useState(false);
//   const [showFloatingSignup, setShowFloatingSignup] = useState(false);
  
//   // Check if user has made a purchase to show signup section
//   useEffect(() => {
//     if (cart.length > 0 && !hasSignedUp) {
//       setShowSignupSection(true);
//       if (!hasPurchased) {
//         setHasPurchased(true);
//       }
//     } else {
//       setShowSignupSection(false);
//     }
//   }, [cart, hasSignedUp, hasPurchased, setHasPurchased]);

//   // Show floating signup after 10 seconds of browsing
//   useEffect(() => {
//     if (!hasSignedUp && !showSignupSection) {
//       const timer = setTimeout(() => {
//         setShowFloatingSignup(true);
//       }, 10000); // 10 seconds delay

//       return () => clearTimeout(timer);
//     }
//   }, [hasSignedUp, showSignupSection]);

//   return (
//     <div className="min-h-screen bg-black font-sans">
//       {/* Promotional Banner - ALWAYS VISIBLE */}
//       <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 px-4 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
//           <div className="flex items-center gap-2">
//             <span className="animate-pulse">🔥</span>
//             <span className="font-bold text-sm sm:text-base">NEW ALBUM: YORUBA HEALER VOL. 2 - COMING SOON</span>
//           </div>
//           <button 
//             onClick={() => setShowPromoModal(true)}
//             className="bg-black text-yellow-400 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-900 transition-colors whitespace-nowrap"
//           >
//             GET UPDATES →
//           </button>
//         </div>
//       </div>

//       {/* Logo Header */}
//       <header className="py-6 px-4 bg-black">
//         <div className="max-w-7xl mx-auto flex flex-col items-center">
//           {/* <div className="relative w-40 h-40 mb-4">
//             <Image
//               src="/yhimg.png"
//               alt="Yoruba Healer"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div> */}
//           {/* <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
//             Yoruba Healer Official Store
//           </h1>
//           <p className="text-gray-300 text-center max-w-2xl">
//             Premium merchandise & exclusive collection. Worldwide shipping available.
//           </p> */}
//         </div>
//       </header>

//       {/* Main Merch Section - SHOWS FIRST */}
//       <MerchSection />
      
//       {/* Floating Signup Button (for browsing users) */}
//       {showFloatingSignup && !hasSignedUp && !showSignupSection && (
//         <div className="fixed bottom-6 right-6 z-40 animate-bounce">
//           <button
//             onClick={() => setShowPromoModal(true)}
//             className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
//           >
//             <span>🎵</span>
//             <span>Get Early Access</span>
//           </button>
//         </div>
//       )}

//       {/* Newsletter Signup Section - Only show if user has items in cart AND hasn't signed up */}
//       {showSignupSection && (
//         <NewsletterSignupSection onSignup={() => {
//           setShowSignupSection(false);
//           setShowFloatingSignup(false);
//         }} />
//       )}

//       {/* Promotional Modal */}
//       {showPromoModal && (
//         <PromotionalModal onClose={() => setShowPromoModal(false)} />
//       )}
//     </div>
//   );
// }

// // Merch Section Component
// function MerchSection() {
//   const { addToCart } = useCart();
//   const { selectedCountry, setHasPurchased } = useUser();
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
  
//   const shippingCost = SHIPPING_RATES[selectedCountry] || 20;

//   const merchProducts: Product[] = [
//     {
//       id: 1,
//       name: "Signature Hoodie",
//       price: "£80.00",
//       image: "/hoodie.jpg",
//       description: "Premium black hoodie with gold embroidery",
//       status: "Pre-order",
//       fullDescription: "Crafted from premium heavyweight cotton, this black hoodie features intricate gold embroidery of the Yoruba Healer logo. Perfect for everyday comfort.",
//       sizes: ["S", "M", "L", "XL", "XXL"],
//       colors: ["Black", "Navy", "Charcoal"]
//     },
//     {
//       id: 2,
//       name: "Limited Edition T-Shirt",
//       price: "£45.00",
//       image: "/hoodie.jpg",
//       description: "Classic cotton tee with exclusive artwork",
//       status: "Pre-order",
//       fullDescription: "100% premium cotton tee featuring exclusive Yoruba Healer artwork on the front. Soft, breathable, and perfect for daily wear.",
//       sizes: ["S", "M", "L", "XL"],
//       colors: ["White", "Black", "Ash Gray"]
//     },
//     {
//       id: 3,
//       name: "Collector's Cap",
//       price: "£35.00",
//       image: "/brondy.jpg",
//       description: "Structured cap with metallic logo",
//       status: "Pre-order",
//       fullDescription: "Structured six-panel cap with a curved visor and metallic Yoruba Healer logo patch. Adjustable strap for perfect fit.",
//       sizes: ["One Size"],
//       colors: ["Black", "Navy", "Olive"]
//     },
//     {
//       id: 4,
//       name: "Vinyl Album Package",
//       price: "£60.00",
//       image: "/shortie.jpg",
//       description: "Limited edition vinyl + digital download",
//       status: "Pre-order",
//       fullDescription: "Limited edition 180g vinyl featuring exclusive artwork. Includes digital download code and exclusive booklet.",
//       sizes: ["12-inch"],
//       colors: ["Clear", "Black", "Gold Swirl"]
//     },
//     {
//       id: 5,
//       name: "Complete Collection Bundle",
//       price: "£180.00",
//       image: "/hoodie.jpg",
//       description: "Full merch collection + digital content",
//       status: "Exclusive",
//       fullDescription: "The ultimate bundle including hoodie, tee, cap, and vinyl. Plus access to exclusive digital content and early releases.",
//       sizes: ["Bundle"],
//       colors: ["Complete Set"]
//     },
//     {
//       id: 6,
//       name: "Premium Track Jacket",
//       price: "£95.00",
//       image: "/hoodie.jpg",
//       description: "Lightweight jacket with detailed embroidery",
//       status: "Limited",
//       fullDescription: "Lightweight track jacket with detailed embroidery on chest and sleeves. Perfect for layering and style.",
//       sizes: ["S", "M", "L", "XL"],
//       colors: ["Black", "Navy", "Burgundy"]
//     },
//   ];

//   const openProductModal = (product: Product) => {
//     setSelectedProduct(product);
//     setQuantity(1);
//     setSelectedSize(product.sizes?.[0] || '');
//     setSelectedColor(product.colors?.[0] || '');
//   };

//   const closeProductModal = () => {
//     setSelectedProduct(null);
//     setQuantity(1);
//   };

//   const handleAddToCart = () => {
//     if (selectedProduct) {
//       const basePrice = parseFloat(selectedProduct.price.replace('£', ''));
//       const totalPrice = (basePrice * quantity) + shippingCost;
      
//       addToCart({
//         id: selectedProduct.id,
//         name: selectedProduct.name,
//         price: `£${totalPrice.toFixed(2)}`,
//         basePrice: basePrice,
//         shipping: shippingCost,
//         size: selectedSize,
//         color: selectedColor,
//         image: undefined
//       }, quantity);

//       setHasPurchased(true);
//       closeProductModal();
//     }
//   };

//   const incrementQuantity = () => setQuantity(prev => prev + 1);
//   const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

//   return (
//     <section className="py-12 px-4 bg-black">
//       <div className="max-w-7xl mx-auto">
//         {/* Simple Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Shop The Collection
//           </h2>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             Browse our premium merchandise. All prices include VAT. Shipping calculated at checkout.
//           </p>
//           <div className="mt-4 flex items-center justify-center gap-2 text-yellow-400">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//             <span>Free UK returns • Worldwide shipping</span>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {merchProducts.map((product) => (
//             <div 
//               key={product.id} 
//               className="bg-gray-900/30 rounded-xl p-4 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
//               onClick={() => openProductModal(product)}
//             >
//               <div className="relative h-64 bg-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
//                 {product.image ? (
//                   <div className="relative w-full h-full">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       fill
//                       className="object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                 ) : (
//                   <div className="text-center text-gray-400">
//                     <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//                     </svg>
//                     <p className="text-sm">Product Image</p>
//                   </div>
//                 )}
                
//                 <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
//                   product.status === 'Exclusive' 
//                     ? 'bg-yellow-500 text-black' 
//                     : product.status === 'Limited'
//                     ? 'bg-red-600 text-white'
//                     : 'bg-blue-500 text-white'
//                 }`}>
//                   {product.status}
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
//                 <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
//                 <div className="flex items-center justify-between">
//                   <div className="text-yellow-400 text-xl font-bold">{product.price}</div>
//                   <button className="text-gray-400 hover:text-yellow-400 transition-colors">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Product Modal */}
//         {selectedProduct && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
//             <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="p-6">
//                 {/* Header */}
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
//                     <div className="flex items-center gap-2 mt-1">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         selectedProduct.status === 'Exclusive' 
//                           ? 'bg-yellow-500 text-black' 
//                           : selectedProduct.status === 'Limited'
//                           ? 'bg-red-600 text-white'
//                           : 'bg-blue-500 text-white'
//                       }`}>
//                         {selectedProduct.status}
//                       </span>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={closeProductModal}
//                     className="text-gray-400 hover:text-yellow-400 transition-colors p-1"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//                     </svg>
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Product Image */}
//                   <div className="bg-gray-800 rounded-xl h-64 flex items-center justify-center overflow-hidden">
//                     {selectedProduct.image ? (
//                       <div className="relative w-full h-full">
//                         <Image
//                           src={selectedProduct.image}
//                           alt={selectedProduct.name}
//                           fill
//                           className="object-contain p-4"
//                           priority
//                         />
//                       </div>
//                     ) : (
//                       <div className="text-center text-gray-400">
//                         <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//                         </svg>
//                         <p className="text-sm">Product Image</p>
//                       </div>
//                     )}
//                   </div>

//                   {/* Product Details */}
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="text-yellow-400 text-2xl font-bold mb-2">{selectedProduct.price}</h4>
//                       <p className="text-gray-300 text-sm mb-4">{selectedProduct.fullDescription}</p>
//                     </div>

//                     {/* Size Selection */}
//                     {selectedProduct.sizes && selectedProduct.sizes.length > 0 && selectedProduct.sizes[0] !== 'Bundle' && (
//                       <div>
//                         <label className="block text-sm font-medium text-gray-300 mb-2">Select Size</label>
//                         <div className="flex flex-wrap gap-2">
//                           {selectedProduct.sizes.map((size) => (
//                             <button
//                               key={size}
//                               onClick={() => setSelectedSize(size)}
//                               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                                 selectedSize === size
//                                   ? 'bg-yellow-500 text-black'
//                                   : 'bg-gray-800 border border-gray-700 text-gray-300 hover:border-yellow-500'
//                               }`}
//                             >
//                               {size}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Color Selection */}
//                     {selectedProduct.colors && selectedProduct.colors.length > 0 && selectedProduct.colors[0] !== 'Complete Set' && (
//                       <div>
//                         <label className="block text-sm font-medium text-gray-300 mb-2">Select Color</label>
//                         <div className="flex flex-wrap gap-2">
//                           {selectedProduct.colors.map((color) => (
//                             <button
//                               key={color}
//                               onClick={() => setSelectedColor(color)}
//                               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                                 selectedColor === color
//                                   ? 'bg-yellow-500 text-black'
//                                   : 'bg-gray-800 border border-gray-700 text-gray-300 hover:border-yellow-500'
//                               }`}
//                             >
//                               {color}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Quantity Selector */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
//                       <div className="flex items-center space-x-3">
//                         <button
//                           onClick={decrementQuantity}
//                           className="w-10 h-10 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
//                         >
//                           -
//                         </button>
//                         <span className="text-white font-medium w-8 text-center">{quantity}</span>
//                         <button
//                           onClick={incrementQuantity}
//                           className="w-10 h-10 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     {/* Shipping & Total Info */}
//                     <div className="pt-4 border-t border-gray-700 space-y-2">
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-400">Item total:</span>
//                         <span className="text-white">£{(parseFloat(selectedProduct.price.replace('£', '')) * quantity).toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-400">Shipping to {selectedCountry}:</span>
//                         <span className="text-yellow-400">£{shippingCost.toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-700">
//                         <span className="text-white">Total:</span>
//                         <span className="text-yellow-400">£{(parseFloat(selectedProduct.price.replace('£', '')) * quantity + shippingCost).toFixed(2)}</span>
//                       </div>
//                     </div>

//                     {/* Add to Cart Button */}
//                     <button
//                       onClick={handleAddToCart}
//                       className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
//                     >
//                       Add to Cart - £{(parseFloat(selectedProduct.price.replace('£', '')) * quantity + shippingCost).toFixed(2)}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// // Newsletter Signup Component (shown after adding to cart)
// function NewsletterSignupSection({ onSignup }: { onSignup: () => void }) {
//   const { setHasSignedUp, setUserData } = useUser();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: '',
//     location: '',
//     country: 'GB'
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();
//     setHasSignedUp(true);
//     setUserData(formData);
//     localStorage.setItem('yh_user', JSON.stringify(formData));
//     onSignup();
//   };

//   return (
//     <section className="py-16 px-4 bg-gray-900">
//       <div className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8 border border-yellow-500/30">
//         <div className="text-center mb-8">
//           <div className="relative w-20 h-20 mx-auto mb-4">
//             <Image
//               src="/yhimg.png"
//               alt="Yoruba Healer"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-2">
//             Get Exclusive Artist Updates
//           </h2>
//           <p className="text-gray-300 mb-2">
//             Join our community for early access to concerts, new music, and special offers.
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-3 text-yellow-400 text-sm">
//             <span className="flex items-center gap-1">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               Early concert tickets
//             </span>
//             <span className="flex items-center gap-1">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               Album pre-releases
//             </span>
//             <span className="flex items-center gap-1">
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//               </svg>
//               Exclusive merch access
//             </span>
//           </div>
//         </div>

//         <form onSubmit={handleSignUp} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                 Name *
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 placeholder="Your full name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 placeholder="your.email@example.com"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                 City
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 placeholder="Your city"
//               />
//             </div>

//             <div>
//               <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                 Country
//               </label>
//               <select
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//               >
//                 <option value="GB">United Kingdom</option>
//                 <option value="US">United States</option>
//                 <option value="CA">Canada</option>
//                 <option value="NG">Nigeria</option>
//                 <option value="GH">Ghana</option>
//                 <option value="KE">Kenya</option>
//                 <option value="ZA">South Africa</option>
//                 <option value="AU">Australia</option>
//                 <option value="FR">France</option>
//                 <option value="DE">Germany</option>
//                 <option value="JP">Japan</option>
//                 <option value="CN">China</option>
//                 <option value="BR">Brazil</option>
//                 <option value="MX">Mexico</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//               Age (Optional)
//             </label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//               placeholder="Your age"
//               min="1"
//               max="120"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
//           >
//             Join Artist Updates List
//           </button>

//           <p className="text-gray-400 text-sm text-center">
//             By signing up, you agree to receive updates about new music releases, merchandise drops, and upcoming events. You can unsubscribe at any time.
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

// // Promotional Modal Component
// function PromotionalModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
//       <div className="bg-gray-900 border-2 border-yellow-500 rounded-2xl max-w-md w-full p-6">
//         <div className="flex justify-between items-start mb-6">
//           <div>
//             <h3 className="text-2xl font-bold text-white flex items-center gap-2">
//               <span className="text-yellow-400">🎵</span> Exclusive Artist Updates
//             </h3>
//             <p className="text-gray-400 text-sm mt-1">Stay connected with Yoruba Healer</p>
//           </div>
//           <button 
//             onClick={onClose}
//             className="text-gray-400 hover:text-yellow-400 transition-colors p-1"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//             </svg>
//           </button>
//         </div>
        
//         <div className="space-y-4">
//           <div className="bg-gray-800 border border-yellow-500/30 rounded-xl p-4 hover:border-yellow-500/50 transition-colors">
//             <div className="flex items-start gap-3">
//               <div className="bg-yellow-500/20 p-2 rounded-lg">
//                 <span className="text-yellow-400">🎤</span>
//               </div>
//               <div>
//                 <h4 className="font-bold text-yellow-400 mb-1">UPCOMING CONCERTS</h4>
//                 <p className="text-white text-sm">Yoruba Healer Live @ O2 Arena London</p>
//                 <p className="text-gray-400 text-xs mt-1">March 15, 2024 - Limited Tickets Available</p>
//                 <button className="mt-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1">
//                   Get Early Access <span>→</span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-gray-800 border border-yellow-500/30 rounded-xl p-4 hover:border-yellow-500/50 transition-colors">
//             <div className="flex items-start gap-3">
//               <div className="bg-yellow-500/20 p-2 rounded-lg">
//                 <span className="text-yellow-400">💿</span>
//               </div>
//               <div>
//                 <h4 className="font-bold text-yellow-400 mb-1">NEW ALBUM ANNOUNCEMENT</h4>
//                 <p className="text-white text-sm">"Yoruba Healer Vol. 2" - Coming Soon</p>
//                 <p className="text-gray-400 text-xs mt-1">Pre-order starts February 28, 2024</p>
//                 <button className="mt-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1">
//                   Join Waitlist <span>→</span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-gray-800 border border-yellow-500/30 rounded-xl p-4 hover:border-yellow-500/50 transition-colors">
//             <div className="flex items-start gap-3">
//               <div className="bg-yellow-500/20 p-2 rounded-lg">
//                 <span className="text-yellow-400">✨</span>
//               </div>
//               <div>
//                 <h4 className="font-bold text-yellow-400 mb-1">EXCLUSIVE MERCH DROPS</h4>
//                 <p className="text-white text-sm">Limited edition items for subscribers only</p>
//                 <p className="text-gray-400 text-xs mt-1">First access to new collections</p>
//                 <button className="mt-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1">
//                   View Collection <span>→</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <button 
//           onClick={onClose}
//           className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useCart } from './context/CartContext';
// import { useUser } from './context/UserContext';

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   description: string;
//   status: string;
//   fullDescription: string;
//   sizes?: string[];
//   colors?: string[];
// }

// // Shipping rates by country code
// const SHIPPING_RATES: Record<string, number> = {
//   'GB': 10, // United Kingdom
//   'US': 15, // United States
//   'CA': 18, // Canada
//   'FR': 12, // France
//   'DE': 12, // Germany
//   'ES': 12, // Spain
//   'IT': 12, // Italy
//   'NL': 12, // Netherlands
//   'BE': 12, // Belgium
//   'PT': 12, // Portugal
//   'IE': 12, // Ireland
//   'AU': 20, // Australia
//   'NZ': 22, // New Zealand
//   'JP': 18, // Japan
//   'CN': 16, // China
//   'IN': 20, // India
//   'NG': 25, // Nigeria
//   'GH': 25, // Ghana
//   'KE': 25, // Kenya
//   'ZA': 22, // South Africa
//   'BR': 22, // Brazil
//   'MX': 18, // Mexico
//   'AR': 20, // Argentina
//   'CL': 20, // Chile
//   'AE': 18, // UAE
//   'SA': 18, // Saudi Arabia
//   'QA': 18, // Qatar
//   'SG': 15, // Singapore
//   'MY': 16, // Malaysia
//   'ID': 18, // Indonesia
//   'KR': 15, // South Korea
//   'RU': 20, // Russia
//   'TR': 15, // Turkey
//   // Default for other countries
// };

// export default function Home() {
//   const { hasSignedUp, setHasSignedUp, setUserData, hasPurchased, setHasPurchased, selectedCountry, setSelectedCountry } = useUser();
//   const { cart } = useCart();
//   const [showPromoModal, setShowPromoModal] = useState(false);
//   const [showSignupSection, setShowSignupSection] = useState(false);
  
//   // Check if user has made a purchase to show signup section
//   useEffect(() => {
//     // Show signup if user has items in cart AND hasn't signed up yet
//     if (cart.length > 0 && !hasSignedUp) {
//       setShowSignupSection(true);
//       // Set hasPurchased to true when items are in cart
//       if (!hasPurchased) {
//         setHasPurchased(true);
//       }
//     } else {
//       setShowSignupSection(false);
//     }
//   }, [cart, hasSignedUp, hasPurchased, setHasPurchased]);

//   return (
//     <div className="min-h-screen bg-black font-sans">
//       {/* Promotional Banner - ALWAYS VISIBLE */}
//       <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 px-4 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
//           <div className="flex items-center gap-2">
//             <span className="animate-pulse">🔥</span>
//             <span className="font-bold text-sm sm:text-base">NEW ALBUM: YORUBA HEALER VOL. 2 - COMING SOON</span>
//           </div>
//           <button 
//             onClick={() => setShowPromoModal(true)}
//             className="bg-black text-yellow-400 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-900 transition-colors whitespace-nowrap"
//           >
//             GET UPDATES →
//           </button>
//         </div>
//       </div>

//       {/* Hero Introduction - Brief before merch */}
//       <section className="py-8 px-4 bg-gradient-to-b from-black to-yellow-900/5">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="relative w-32 h-32 mx-auto mb-6">
//             <Image
//               src="/yhimg.png"
//               alt="Yoruba Healer"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//           <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Yorùbá Healer Merchandise
//           </h1>
//           <p className="text-lg text-gray-300 mb-6">
//             Spiritual wear for the culture carriers. Each piece tells a story.
//           </p>
//           <div className="w-48 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
//         </div>
//       </section>

//       {/* Main Merch Section - ALWAYS SHOW FIRST */}
//       <MerchSection />
      
//       {/* Newsletter Signup Section - Only show if user has items in cart AND hasn't signed up */}
//       {showSignupSection && (
//         <NewsletterSignupSection onSignup={() => setShowSignupSection(false)} />
//       )}

//       {/* Promotional Modal */}
//       {showPromoModal && (
//         <PromotionalModal onClose={() => setShowPromoModal(false)} />
//       )}
//     </div>
//   );
// }

// // Merch Section Component
// function MerchSection() {
//   const { addToCart } = useCart();
//   const { selectedCountry, setHasPurchased } = useUser();
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
  
//   const shippingCost = SHIPPING_RATES[selectedCountry] || 20;

//   const merchProducts: Product[] = [
//     {
//       id: 1,
//       name: "Signature Hoodie",
//       price: "£80.00",
//       image: "/hoodie.jpg",
//       description: "Premium black hoodie with gold Yoruba Healer embroidery",
//       status: "Pre-order",
//       fullDescription: "Crafted from premium heavyweight cotton, this black hoodie features intricate gold embroidery of the Yoruba Healer logo. Perfect for everyday comfort with a touch of spiritual elegance.",
//       sizes: ["S", "M", "L", "XL", "XXL"],
//       colors: ["Black", "Navy", "Charcoal"]
//     },
//     {
//       id: 2,
//       name: "Limited Tee",
//       price: "£80.00",
//       image: "/hoodie.jpg",
//       description: "Classic cotton tee with exclusive artwork",
//       status: "Pre-order",
//       fullDescription: "100% premium cotton tee featuring exclusive Yoruba Healer artwork on the front. Soft, breathable, and perfect for showing your spiritual connection.",
//       sizes: ["S", "M", "L", "XL"],
//       colors: ["White", "Black", "Ash"]
//     },
//     {
//       id: 3,
//       name: "Collector's Cap",
//       price: "£80.00",
//       image: "/brondy.jpg",
//       description: "Structured cap with metallic logo",
//       status: "Pre-order",
//       fullDescription: "Structured six-panel cap with a curved visor and metallic Yoruba Healer logo patch. Adjustable strap for perfect fit.",
//       sizes: ["One Size"],
//       colors: ["Black", "Navy", "Olive"]
//     },
//     {
//       id: 4,
//       name: "Vinyl Package",
//       price: "£80.00",
//       image: "/shortie.jpg",
//       description: "Limited edition vinyl + digital download",
//       status: "Pre-order",
//       fullDescription: "Limited edition 180g vinyl featuring exclusive Yoruba Healer artwork. Includes digital download code and spiritual guidance booklet.",
//       sizes: ["12-inch"],
//       colors: ["Clear", "Black", "Gold Swirl"]
//     },
//     {
//       id: 5,
//       name: "Healing Bundle",
//       price: "£250.00",
//       image: "/hoodie.jpg",
//       description: "Complete merch collection + spiritual access",
//       status: "Exclusive",
//       fullDescription: "The ultimate spiritual bundle including hoodie, tee, cap, and vinyl. Plus access to exclusive healing content and early releases.",
//       sizes: ["Bundle"],
//       colors: ["Complete Set"]
//     },
//     {
//       id: 6,
//       name: "Ancestral Jacket",
//       price: "£120.00",
//       image: "/hoodie.jpg",
//       description: "Premium track jacket with detailed embroidery",
//       status: "Limited",
//       fullDescription: "Lightweight track jacket with detailed ancestral embroidery on chest and sleeves. Perfect for spiritual layering and protection.",
//       sizes: ["S", "M", "L", "XL"],
//       colors: ["Black", "Navy", "Burgundy"]
//     },
//   ];

//   const openProductModal = (product: Product) => {
//     setSelectedProduct(product);
//     setQuantity(1);
//     setSelectedSize(product.sizes?.[0] || '');
//     setSelectedColor(product.colors?.[0] || '');
//   };

//   const closeProductModal = () => {
//     setSelectedProduct(null);
//     setQuantity(1);
//   };

//   const handleAddToCart = () => {
//     if (selectedProduct) {
//       const basePrice = parseFloat(selectedProduct.price.replace('£', ''));
//       const totalPrice = (basePrice * quantity) + shippingCost;
      
//       addToCart({
//         id: selectedProduct.id,
//         name: selectedProduct.name,
//         price: `£${totalPrice.toFixed(2)}`,
//         basePrice: basePrice,
//         shipping: shippingCost,
//         size: selectedSize,
//         color: selectedColor,
//         image: undefined
//       }, quantity);

//       // Mark user as having made a purchase
//       setHasPurchased(true);
      
//       closeProductModal();
//     }
//   };

//   const incrementQuantity = () => setQuantity(prev => prev + 1);
//   const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

//   return (
//     <section className="py-12 px-4 bg-black">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Spiritual Collection
//           </h2>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             All items include premium quality and spiritual essence. Shipping calculated based on your location.
//           </p>
//           <div className="mt-4 flex items-center justify-center gap-2 text-yellow-400">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//             <span>Pre-order now for first access</span>
//           </div>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
//           {merchProducts.map((product) => (
//             <div 
//               key={product.id} 
//               className="bg-black/50 rounded-2xl p-4 md:p-6 border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
//               onClick={() => openProductModal(product)}
//             >
//               <div className="relative h-64 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-xl mb-4 flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 transition-colors overflow-hidden">
//                 {product.image ? (
//                   <div className="relative w-full h-full">
//                     <Image
//                       src={product.image}
//                       alt={product.name}
//                       fill
//                       className="object-contain p-4"
//                     />
//                   </div>
//                 ) : (
//                   <div className="text-center text-yellow-400/60">
//                     <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//                     </svg>
//                     <p className="text-sm">Sacred Item</p>
//                   </div>
//                 )}
                
//                 <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
//                   product.status === 'Exclusive' 
//                     ? 'bg-yellow-500 text-black' 
//                     : product.status === 'Limited'
//                     ? 'bg-red-500/90 text-white'
//                     : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
//                 }`}>
//                   {product.status}
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
//                 <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
//                 <div className="flex items-center justify-between">
//                   <div className="text-yellow-400 text-xl font-bold">{product.price}</div>
//                   <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Product Modal */}
//         {selectedProduct && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
//             <div className="bg-black border border-yellow-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="p-6">
//                 {/* Header */}
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
//                     <div className="flex items-center gap-2 mt-1">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         selectedProduct.status === 'Exclusive' 
//                           ? 'bg-yellow-500 text-black' 
//                           : selectedProduct.status === 'Limited'
//                           ? 'bg-red-500 text-white'
//                           : 'bg-yellow-500/20 text-yellow-400'
//                       }`}>
//                         {selectedProduct.status}
//                       </span>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={closeProductModal}
//                     className="text-gray-400 hover:text-yellow-400 transition-colors p-1"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//                     </svg>
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Product Image */}
//                   <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-xl h-64 flex items-center justify-center border border-yellow-500/20">
//                     {selectedProduct.image ? (
//                       <div className="relative w-full h-full">
//                         <Image
//                           src={selectedProduct.image}
//                           alt={selectedProduct.name}
//                           fill
//                           className="object-contain p-6"
//                           priority
//                         />
//                       </div>
//                     ) : (
//                       <div className="text-center text-yellow-400/60">
//                         <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//                         </svg>
//                         <p className="text-sm">Sacred Item</p>
//                       </div>
//                     )}
//                   </div>

//                   {/* Product Details */}
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="text-yellow-400 text-2xl font-bold mb-2">{selectedProduct.price}</h4>
//                       <p className="text-gray-300 text-sm mb-4">{selectedProduct.fullDescription}</p>
//                     </div>

//                     {/* Size Selection */}
//                     {selectedProduct.sizes && selectedProduct.sizes.length > 0 && selectedProduct.sizes[0] !== 'Bundle' && (
//                       <div>
//                         <label className="block text-sm font-medium text-gray-300 mb-2">Size</label>
//                         <div className="flex flex-wrap gap-2">
//                           {selectedProduct.sizes.map((size) => (
//                             <button
//                               key={size}
//                               onClick={() => setSelectedSize(size)}
//                               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                                 selectedSize === size
//                                   ? 'bg-yellow-500 text-black'
//                                   : 'bg-black border border-yellow-500/30 text-gray-300 hover:border-yellow-500/50'
//                               }`}
//                             >
//                               {size}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Color Selection */}
//                     {selectedProduct.colors && selectedProduct.colors.length > 0 && selectedProduct.colors[0] !== 'Complete Set' && (
//                       <div>
//                         <label className="block text-sm font-medium text-gray-300 mb-2">Color</label>
//                         <div className="flex flex-wrap gap-2">
//                           {selectedProduct.colors.map((color) => (
//                             <button
//                               key={color}
//                               onClick={() => setSelectedColor(color)}
//                               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                                 selectedColor === color
//                                   ? 'bg-yellow-500 text-black'
//                                   : 'bg-black border border-yellow-500/30 text-gray-300 hover:border-yellow-500/50'
//                               }`}
//                             >
//                               {color}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Quantity Selector */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
//                       <div className="flex items-center space-x-3">
//                         <button
//                           onClick={decrementQuantity}
//                           className="w-10 h-10 rounded-lg border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors"
//                         >
//                           -
//                         </button>
//                         <span className="text-white font-medium w-8 text-center">{quantity}</span>
//                         <button
//                           onClick={incrementQuantity}
//                           className="w-10 h-10 rounded-lg border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>

//                     {/* Shipping & Total Info */}
//                     <div className="pt-4 border-t border-yellow-500/20 space-y-2">
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-400">Item total:</span>
//                         <span className="text-white">£{(parseFloat(selectedProduct.price.replace('£', '')) * quantity).toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-400">Shipping to {selectedCountry}:</span>
//                         <span className="text-yellow-400">£{shippingCost.toFixed(2)}</span>
//                       </div>
//                       <div className="flex justify-between font-semibold text-lg pt-2 border-t border-yellow-500/20">
//                         <span className="text-white">Total:</span>
//                         <span className="text-yellow-400">£{(parseFloat(selectedProduct.price.replace('£', '')) * quantity + shippingCost).toFixed(2)}</span>
//                       </div>
//                     </div>

//                     {/* Add to Cart Button */}
//                     <button
//                       onClick={handleAddToCart}
//                       className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
//                     >
//                       Add to Cart - £{(parseFloat(selectedProduct.price.replace('£', '')) * quantity + shippingCost).toFixed(2)}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// // Newsletter Signup Component (shown after adding to cart)
// function NewsletterSignupSection({ onSignup }: { onSignup: () => void }) {
//   const { setHasSignedUp, setUserData } = useUser();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: '',
//     location: '',
//     country: 'GB'
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();
//     setHasSignedUp(true);
//     setUserData(formData);
//     localStorage.setItem('yh_user', JSON.stringify(formData));
//     onSignup();
//   };

//   return (
//     <section className="py-16 px-4 bg-gradient-to-b from-black to-yellow-900/10">
//       <div className="max-w-2xl mx-auto bg-black/70 rounded-2xl p-8 border border-yellow-500/30 backdrop-blur-sm">
//         <div className="text-center mb-8">
//           <div className="relative w-20 h-20 mx-auto mb-4">
//             <Image
//               src="/yhimg.png"
//               alt="Yoruba Healer"
//               fill
//               className="object-contain"
//             />
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-2">
//             Join the Spiritual Circle
//           </h2>
//           <p className="text-gray-300 mb-2">
//             Get exclusive access to Yoruba Healer's spiritual journey
//           </p>
//           <div className="flex items-center justify-center gap-2 text-yellow-400 text-sm">
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//             <span>Early concert access</span>
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//             <span>Album pre-releases</span>
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//             <span>Members-only merch</span>
//           </div>
//         </div>

//         <form onSubmit={handleSignUp} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                 Name *
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 placeholder="Your full name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 placeholder="your.email@example.com"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                 City
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//                 placeholder="Your city"
//               />
//             </div>

//             <div>
//               <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                 Country
//               </label>
//               <select
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//               >
//                 <option value="GB">United Kingdom</option>
//                 <option value="US">United States</option>
//                 <option value="CA">Canada</option>
//                 <option value="NG">Nigeria</option>
//                 <option value="GH">Ghana</option>
//                 <option value="KE">Kenya</option>
//                 <option value="ZA">South Africa</option>
//                 <option value="AU">Australia</option>
//                 <option value="FR">France</option>
//                 <option value="DE">Germany</option>
//                 <option value="JP">Japan</option>
//                 <option value="CN">China</option>
//                 <option value="BR">Brazil</option>
//                 <option value="MX">Mexico</option>
//                 {/* Add more countries as needed */}
//               </select>
//             </div>
//           </div>

//           <div>
//             <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//               Age (Optional)
//             </label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               value={formData.age}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
//               placeholder="Your age"
//               min="1"
//               max="120"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             Join Yoruba Healer Inner Circle
//           </button>

//           <p className="text-gray-400 text-sm text-center">
//             By signing up, you agree to receive spiritual updates, music releases, and exclusive offers. You can unsubscribe at any time.
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

// // Promotional Modal Component
// function PromotionalModal({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
//       <div className="bg-black border-2 border-yellow-500 rounded-2xl max-w-md w-full p-6 animate-fadeIn">
//         <div className="flex justify-between items-start mb-6">
//           <div>
//             <h3 className="text-2xl font-bold text-white flex items-center gap-2">
//               <span className="text-yellow-400">🎵</span> Exclusive Spiritual Updates
//             </h3>
//             <p className="text-gray-400 text-sm mt-1">For the true believers</p>
//           </div>
//           <button 
//             onClick={onClose}
//             className="text-gray-400 hover:text-yellow-400 transition-colors p-1"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//             </svg>
//           </button>
//         </div>
        
//         <div className="space-y-4">
//           <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-4 hover:border-yellow-500/50 transition-colors">
//             <div className="flex items-start gap-3">
//               <div className="bg-yellow-500/20 p-2 rounded-lg">
//                 <span className="text-yellow-400">🎤</span>
//               </div>
//               <div>
//                 <h4 className="font-bold text-yellow-400 mb-1">NEXT SPIRITUAL GATHERING</h4>
//                 <p className="text-white text-sm">Yoruba Healer Live Experience @ O2 Arena London</p>
//                 <p className="text-gray-400 text-xs mt-1">March 15, 2024 - Limited Spiritual Seats</p>
//                 <button className="mt-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1">
//                   Get Early Access <span>→</span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-4 hover:border-yellow-500/50 transition-colors">
//             <div className="flex items-start gap-3">
//               <div className="bg-yellow-500/20 p-2 rounded-lg">
//                 <span className="text-yellow-400">💿</span>
//               </div>
//               <div>
//                 <h4 className="font-bold text-yellow-400 mb-1">ALBUM ANNOUNCEMENT</h4>
//                 <p className="text-white text-sm">"Yoruba Healer Vol. 2: Spiritual Awakening"</p>
//                 <p className="text-gray-400 text-xs mt-1">Pre-order starts February 28, 2024</p>
//                 <button className="mt-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1">
//                   Join Waitlist <span>→</span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-4 hover:border-yellow-500/50 transition-colors">
//             <div className="flex items-start gap-3">
//               <div className="bg-yellow-500/20 p-2 rounded-lg">
//                 <span className="text-yellow-400">✨</span>
//               </div>
//               <div>
//                 <h4 className="font-bold text-yellow-400 mb-1">EXCLUSIVE SPIRITUAL MERCH</h4>
//                 <p className="text-white text-sm">Sacred items available only to inner circle members</p>
//                 <p className="text-gray-400 text-xs mt-1">Limited quantities, ancestral blessings included</p>
//                 <button className="mt-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center gap-1">
//                   View Collection <span>→</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <button 
//           onClick={onClose}
//           className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
//         >
//           Continue Browsing
//         </button>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useCart } from './context/CartContext';
// import { useUser } from './context/UserContext';

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   description: string;
//   status: string;
//   fullDescription: string;
//   sizes?: string[];
//   colors?: string[];
// }

// export default function Home() {
//   const { hasSignedUp, setHasSignedUp, setUserData } = useUser();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: '',
//     location: '',
//     country: ''
//   });

//   // Check if user has already signed up
//   useEffect(() => {
//     console.log('User has signed up:', hasSignedUp);
//   }, [hasSignedUp]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle newsletter signup logic here
//     console.log('Newsletter signup:', formData);
    
//     // Save to context and localStorage
//     setHasSignedUp(true);
//     setUserData(formData);
    
//     // You can also send this data to your backend here
//     // await fetch('/api/newsletter-signup', { ... })
//   };

//   // If user has signed up (now or previously), show the merch section
//   if (hasSignedUp) {
//     return <MerchSection />;
//   }

//   return (
//     <div className="min-h-screen bg-black font-sans">
//       {/* Main Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16">
//         {/* Background with subtle gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-black to-yellow-600/5" />
        
//         {/* Content */}
//         <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//           {/* Yoruba Healer Logo with top spacing */}
//           <div className="mb-8 mt-8 sm:mt-0">
//             <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6">
//               <Image
//                 src="/yhimg.png"
//                 alt="Yoruba Healer"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
//           </div>

//           {/* Description */}
//           <div className="mb-12 text-left">
//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
//               <span className="text-yellow-400 font-semibold">Yorùbá Healer by Moelogo</span>
//             </p>
            
//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
//               Yorùbá Healer is more than music - it's a spirit.
//             </p>
            
//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
//               It's a reminder that our culture, our roots, our prayers, and our rhythm all carry healing. Through story, sound and soul, I'm honouring where I come from and speaking life into where we're going.
//             </p>

//             <div className="space-y-4 mb-6">
//               <p className="text-lg md:text-xl text-yellow-400 font-semibold">
//                 Yorùbá Healer brand celebrates:
//               </p>
//               <ul className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-2 ml-6">
//                 <li>• Yoruba legacy & spirituality</li>
//                 <li>• The journey of African excellence</li>
//                 <li>• Faith, resilience & destiny</li>
//                 <li>• Healing through sound, culture & truth</li>
//                 <li>• Music with purpose, depth and ancestral pride</li>
//               </ul>
//             </div>

//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
//               Yorùbá Healer is for the ones who carry their identity with love...
//               for the ones still discovering who they are...
//               and for everyone who believes music can uplift, cleanse and reveal.
//             </p>

//             <p className="text-lg md:text-xl text-yellow-400 font-semibold leading-relaxed">
//               We're creating a movement - emotional, cultural, spiritual.
//               Let's walk this journey together.
//             </p>
//           </div>

//           {/* Newsletter Signup Section */}
//           <div className="bg-black/50 rounded-2xl p-8 border border-yellow-500/30 backdrop-blur-sm max-w-2xl mx-auto">
//             <h2 className="text-3xl font-bold text-white mb-2">
//               Join Mail Lists
//             </h2>
//             <p className="text-gray-300 mb-6">
//               Sign up to receive newsletters about Yoruba Healer Albums And Pre-order Yoruba Healer Merch.
//             </p>

//             <form onSubmit={handleSignUp} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Name */}
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                     Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Age */}
//                 <div>
//                   <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                     Age
//                   </label>
//                   <input
//                     type="number"
//                     id="age"
//                     name="age"
//                     value={formData.age}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Your age"
//                     min="1"
//                     max="120"
//                   />
//                 </div>

//                 {/* Location */}
//                 <div>
//                   <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     id="location"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Your city"
//                   />
//                 </div>
//               </div>

//               {/* Country Selection */}
//               <div>
//                 <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                   Country *
//                 </label>
//                 <select
//                   id="country"
//                   name="country"
//                   required
//                   value={formData.country}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
//                 >
//                   <option value="">Select your country</option>
//                   <option value="AF">Afghanistan</option>
//                   <option value="AL">Albania</option>
//                   <option value="DZ">Algeria</option>
//                   <option value="AR">Argentina</option>
//                   <option value="AU">Australia</option>
//                   <option value="AT">Austria</option>
//                   <option value="BS">Bahamas</option>
//                   <option value="BH">Bahrain</option>
//                   <option value="BD">Bangladesh</option>
//                   <option value="BB">Barbados</option>
//                   <option value="BE">Belgium</option>
//                   <option value="BR">Brazil</option>
//                   <option value="CA">Canada</option>
//                   <option value="CL">Chile</option>
//                   <option value="CN">China</option>
//                   <option value="CO">Colombia</option>
//                   <option value="CD">Congo, Democratic Republic</option>
//                   <option value="CG">Congo, Republic</option>
//                   <option value="CR">Costa Rica</option>
//                   <option value="HR">Croatia</option>
//                   <option value="CU">Cuba</option>
//                   <option value="DK">Denmark</option>
//                   <option value="EG">Egypt</option>
//                   <option value="FI">Finland</option>
//                   <option value="FR">France</option>
//                   <option value="DE">Germany</option>
//                   <option value="GH">Ghana</option>
//                   <option value="GR">Greece</option>
//                   <option value="HT">Haiti</option>
//                   <option value="IN">India</option>
//                   <option value="ID">Indonesia</option>
//                   <option value="IR">Iran</option>
//                   <option value="IQ">Iraq</option>
//                   <option value="IE">Ireland</option>
//                   <option value="IL">Israel</option>
//                   <option value="IT">Italy</option>
//                   <option value="JM">Jamaica</option>
//                   <option value="JP">Japan</option>
//                   <option value="JO">Jordan</option>
//                   <option value="KE">Kenya</option>
//                   <option value="KW">Kuwait</option>
//                   <option value="LB">Lebanon</option>
//                   <option value="LR">Liberia</option>
//                   <option value="LY">Libya</option>
//                   <option value="MY">Malaysia</option>
//                   <option value="MX">Mexico</option>
//                   <option value="MA">Morocco</option>
//                   <option value="NL">Netherlands</option>
//                   <option value="NZ">New Zealand</option>
//                   <option value="NG">Nigeria</option>
//                   <option value="NO">Norway</option>
//                   <option value="OM">Oman</option>
//                   <option value="PK">Pakistan</option>
//                   <option value="PA">Panama</option>
//                   <option value="PY">Paraguay</option>
//                   <option value="PE">Peru</option>
//                   <option value="PH">Philippines</option>
//                   <option value="PL">Poland</option>
//                   <option value="PT">Portugal</option>
//                   <option value="QA">Qatar</option>
//                   <option value="RO">Romania</option>
//                   <option value="RU">Russia</option>
//                   <option value="SA">Saudi Arabia</option>
//                   <option value="SN">Senegal</option>
//                   <option value="RS">Serbia</option>
//                   <option value="SG">Singapore</option>
//                   <option value="SO">Somalia</option>
//                   <option value="ZA">South Africa</option>
//                   <option value="KR">South Korea</option>
//                   <option value="ES">Spain</option>
//                   <option value="LK">Sri Lanka</option>
//                   <option value="SE">Sweden</option>
//                   <option value="CH">Switzerland</option>
//                   <option value="TW">Taiwan</option>
//                   <option value="TZ">Tanzania</option>
//                   <option value="TH">Thailand</option>
//                   <option value="TR">Turkey</option>
//                   <option value="UG">Uganda</option>
//                   <option value="UA">Ukraine</option>
//                   <option value="AE">United Arab Emirates</option>
//                   <option value="GB">United Kingdom</option>
//                   <option value="US">United States</option>
//                   <option value="UY">Uruguay</option>
//                   <option value="VE">Venezuela</option>
//                   <option value="VN">Vietnam</option>
//                   <option value="YE">Yemen</option>
//                   <option value="ZM">Zambia</option>
//                   <option value="ZW">Zimbabwe</option>
//                 </select>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//               >
//                 Sign Up & View Merch
//               </button>

//               <p className="text-gray-400 text-sm">
//                 By signing up, you agree to receive updates about new music releases, merchandise drops, and special offers.
//               </p>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Merch Section Component
// function MerchSection() {
//   const { addToCart } = useCart();
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');

//   const merchProducts: Product[] = [
//     {
//       id: 1,
//       name: "Signature Hoodie",
//       price: "£80.00",
//       image: "/hoodie.jpg",
//       description: "Premium black hoodie with gold Yoruba Healer embroidery",
//       status: "Pre-order",
//       fullDescription: "Crafted from premium heavyweight cotton, this black hoodie features intricate gold embroidery of the Yoruba Healer logo. Perfect for everyday comfort with a touch of spiritual elegance.",
//       sizes: ["S", "M", "L", "XL", "XXL"],
//       colors: ["Black", "Navy", "Charcoal"]
//     },
//     {
//       id: 2,
//       name: "Limited Tee",
//       price: "£80.00",
//       image: "/hoodie.jpg",
//       description: "Classic cotton tee with exclusive artwork",
//       status: "Pre-order",
//       fullDescription: "100% premium cotton tee featuring exclusive Yoruba Healer artwork on the front. Soft, breathable, and perfect for showing your spiritual connection.",
//       sizes: ["S", "M", "L", "XL"],
//       colors: ["White", "Black", "Ash"]
//     },
//     {
//       id: 3,
//       name: "Collector's Cap",
//       price: "£80.00",
//       image: "/brondy.jpg",
//       description: "Structured cap with metallic logo",
//       status: "Pre-order",
//       fullDescription: "Structured six-panel cap with a curved visor and metallic Yoruba Healer logo patch. Adjustable strap for perfect fit.",
//       sizes: ["One Size"],
//       colors: ["Black", "Navy", "Olive"]
//     },
//     {
//       id: 4,
//       name: "Vinyl Package",
//       price: "£80.00",
//       image: "/shortie.jpg",
//       description: "Limited edition vinyl + digital download",
//       status: "Pre-order",
//       fullDescription: "Limited edition 180g vinyl featuring exclusive Yoruba Healer artwork. Includes digital download code and spiritual guidance booklet.",
//       sizes: ["12-inch"],
//       colors: ["Clear", "Black", "Gold Swirl"]
//     },
//     // {
//     //   id: 5,
//     //   name: "Healing Bundle",
//     //   price: "£80.00",
//     //   image: "hoodie.jpg",
//     //   description: "Complete merch collection + spiritual access",
//     //   status: "Exclusive",
//     //   fullDescription: "The ultimate spiritual bundle including hoodie, tee, cap, and vinyl. Plus access to exclusive healing content and early releases.",
//     //   sizes: ["Bundle"],
//     //   colors: ["Complete Set"]
//     // },
//     // {
//     //   id: 6,
//     //   name: "Spiritual Beanie",
//     //   price: "£80.00",
//     //   image: "/merch/beanie.png",
//     //   description: "Acrylic blend beanie with woven logo",
//     //   status: "New",
//     //   fullDescription: "Warm and comfortable acrylic blend beanie with woven Yoruba Healer logo. One size fits all for spiritual comfort.",
//     //   sizes: ["One Size"],
//     //   colors: ["Black", "Charcoal", "Navy"]
//     // },
//     {
//       id: 5,
//       name: "Ancestral Jacket",
//       price: "£80.00",
//       image: "/hoodie.jpg",
//       description: "Premium track jacket with detailed embroidery",
//       status: "Limited",
//       fullDescription: "Lightweight track jacket with detailed ancestral embroidery on chest and sleeves. Perfect for spiritual layering and protection.",
//       sizes: ["S", "M", "L", "XL"],
//       colors: ["Black", "Navy", "Burgundy"]
//     },
//     // {
//     //   id: 8,
//     //   name: "Sacred Sticker Pack",
//     //   price: "£80.00",
//     //   image: "/merch/stickers.png",
//     //   description: "Set of 5 premium vinyl stickers",
//     //   status: "In Stock",
//     //   fullDescription: "Set of 5 high-quality vinyl stickers featuring Yoruba Healer sacred symbols and artwork. Weather-resistant and perfect for spiritual tools.",
//     //   sizes: ["Pack of 5"],
//     //   colors: ["Mixed Colors"]
//     // }
//     // {
//     //   id: 9,
//     //   name: "Ritual Tote",
//     //   price: "£80.00",
//     //   image: "/merch/tote.png",
//     //   description: "Eco-friendly canvas tote bag",
//     //   status: "Eco",
//     //   fullDescription: "Durable canvas tote bag made from eco-friendly materials with sacred Yoruba Healer print. Perfect for carrying spiritual items.",
//     //   sizes: ["One Size"],
//     //   colors: ["Natural", "Black", "Olive"]
//     // },
//     // {
//     //   id: 10,
//     //   name: "Protection Phone Case",
//     //   price: "£80.00",
//     //   image: "/merch/case.png",
//     //   description: "Protective case with sacred artwork",
//     //   status: "New",
//     //   fullDescription: "Durable protective phone case featuring exclusive Yoruba Healer sacred artwork. Carries spiritual protection with you.",
//     //   sizes: ["Universal"],
//     //   colors: ["Clear", "Black", "Smoke"]
//     // }
//   ];

//   const openProductModal = (product: Product) => {
//     setSelectedProduct(product);
//     setQuantity(1);
//     setSelectedSize(product.sizes?.[0] || '');
//     setSelectedColor(product.colors?.[0] || '');
//   };

//   const closeProductModal = () => {
//     setSelectedProduct(null);
//     setQuantity(1);
//   };

//   const handleAddToCart = () => {
//     if (selectedProduct) {
//       addToCart({
//         id: selectedProduct.id,
//         name: selectedProduct.name,
//         price: selectedProduct.price,
//         size: selectedSize,
//         color: selectedColor,
//         image: undefined
//       }, quantity);

//       console.log('Added to cart:', {
//         product: selectedProduct,
//         quantity,
//         size: selectedSize,
//         color: selectedColor
//       });

//       closeProductModal();
//     }
//   };

//   const incrementQuantity = () => setQuantity(prev => prev + 1);
//   const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

//   return (
//     <div className="min-h-screen bg-black font-sans">
//       {/* Merch Products Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <div className="relative w-32 h-32 mx-auto mb-6">
//               <Image
//                 src="/yhimg.png"
//                 alt="Yoruba Healer"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Merchandise Collection
//             </h1>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               All items priced at £80. Limited quantities available for spiritual connection.
//             </p>
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
//             {merchProducts.map((product) => (
//               <div 
//                 key={product.id} 
//                 className="bg-black/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300 group cursor-pointer"
//                 onClick={() => openProductModal(product)}
//               >
//  {/* // In the Products Grid section, update the Product Image section: */}

// <div className="relative h-32 sm:h-36 md:h-48 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 transition-colors">
//   {product.image ? (
//     <div className="relative w-full h-full">
//       <Image
//         src={product.image}
//         alt={product.name}
//         fill
//         className="object-contain p-2"
//       />
//     </div>
//   ) : (
//     <div className="text-center text-yellow-400/60">
//       <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//       </svg>
//       <p className="text-xs sm:text-sm">Sacred Item</p>
//     </div>
//   )}
  
//   {/* Status Badge remains the same */}
//   <div className={`absolute top-2 right-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium ${
//     product.status === 'Exclusive' 
//       ? 'bg-yellow-500 text-black' 
//       : product.status === 'Limited'
//       ? 'bg-red-500 text-white'
//       : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
//   }`}>
//     {product.status}
//   </div>
// </div>

//                 {/* Product Info */}
//                 <div className="text-center">
//                   <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 line-clamp-2">{product.name}</h3>
//                   <p className="text-gray-400 text-xs mb-2 sm:mb-3 line-clamp-2">{product.description}</p>
//                   <div className="text-yellow-400 text-base sm:text-lg md:text-xl font-bold">{product.price}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

// {/* Product Modal */}
// {selectedProduct && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
//     <div className="bg-black border border-yellow-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//       <div className="p-6">
//         {/* Header */}
//         <div className="flex justify-between items-start mb-6">
//           <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
//           <button 
//             onClick={closeProductModal}
//             className="text-gray-400 hover:text-yellow-400 transition-colors"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//             </svg>
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Product Image - UPDATED: Use actual product image */}
//           <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-xl h-64 flex items-center justify-center border border-yellow-500/20">
//             {selectedProduct.image ? (
//               <div className="relative w-full h-full">
//                 <Image
//                   src={selectedProduct.image}
//                   alt={selectedProduct.name}
//                   fill
//                   className="object-contain p-4"
//                   priority
//                 />
//               </div>
//             ) : (
//               <div className="text-center text-yellow-400/60">
//                 <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//                 </svg>
//                 <p className="text-sm">Sacred Item</p>
//               </div>
//             )}
//           </div>

//           {/* Product Details */}
//           <div className="space-y-4">
//             <div>
//               <h4 className="text-yellow-400 text-xl font-bold mb-2">{selectedProduct.price}</h4>
//               <p className="text-gray-300 text-sm">{selectedProduct.fullDescription}</p>
//             </div>

//             {/* Size Selection */}
//             {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Size</label>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedProduct.sizes.map((size) => (
//                     <button
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                         selectedSize === size
//                           ? 'bg-yellow-500 text-black'
//                           : 'bg-black border border-yellow-500/30 text-gray-300 hover:border-yellow-500/50'
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Color Selection */}
//             {selectedProduct.colors && selectedProduct.colors.length > 0 && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">Color</label>
//                 <div className="flex flex-wrap gap-2">
//                   {selectedProduct.colors.map((color) => (
//                     <button
//                       key={color}
//                       onClick={() => setSelectedColor(color)}
//                       className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                         selectedColor === color
//                           ? 'bg-yellow-500 text-black'
//                           : 'bg-black border border-yellow-500/30 text-gray-300 hover:border-yellow-500/50'
//                       }`}
//                     >
//                       {color}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quantity Selector */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
//               <div className="flex items-center space-x-3">
//                 <button
//                   onClick={decrementQuantity}
//                   className="w-10 h-10 rounded-lg border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors"
//                 >
//                   -
//                 </button>
//                 <span className="text-white font-medium w-8 text-center">{quantity}</span>
//                 <button
//                   onClick={incrementQuantity}
//                   className="w-10 h-10 rounded-lg border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               onClick={handleAddToCart}
//               className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
//             >
//               Add to Cart - {selectedProduct.price}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )}
//         </div>
//       </section>
//     </div>
//   );
// }



// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { useCart } from './context/CartContext';

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   description: string;
//   status: string;
//   fullDescription: string;
//   sizes?: string[];
//   colors?: string[];
// }

// export default function Home() {
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: '',
//     location: '',
//     country: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle newsletter signup logic here
//     console.log('Newsletter signup:', formData);
//     setIsSignedUp(true);
//   };

//   // If user has signed up, show the merch section
//   if (isSignedUp) {
//     return <MerchSection />;
//   }

//   return (
//     <div className="min-h-screen bg-black font-sans">
//       {/* Main Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16">
//         {/* Background with subtle gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-black to-yellow-600/5" />
        
//         {/* Content */}
//         <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//           {/* Yoruba Healer Logo with top spacing */}
//           <div className="mb-8 mt-8 sm:mt-0">
//             <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6">
//               <Image
//                 src="/yhimg.png"
//                 alt="Yoruba Healer"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
//           </div>

//           {/* Description */}
//           <div className="mb-12 text-left">
//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
//               <span className="text-yellow-400 font-semibold">Yorùbá Healer by Moelogo</span>
//             </p>
            
//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
//               Yorùbá Healer is more than music - it's a spirit.
//             </p>
            
//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
//               It's a reminder that our culture, our roots, our prayers, and our rhythm all carry healing. Through story, sound and soul, I'm honouring where I come from and speaking life into where we're going.
//             </p>

//             <div className="space-y-4 mb-6">
//               <p className="text-lg md:text-xl text-yellow-400 font-semibold">
//                 Yorùbá Healer brand celebrates:
//               </p>
//               <ul className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-2 ml-6">
//                 <li>• Yoruba legacy & spirituality</li>
//                 <li>• The journey of African excellence</li>
//                 <li>• Faith, resilience & destiny</li>
//                 <li>• Healing through sound, culture & truth</li>
//                 <li>• Music with purpose, depth and ancestral pride</li>
//               </ul>
//             </div>

//             <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
//               Yorùbá Healer is for the ones who carry their identity with love...
//               for the ones still discovering who they are...
//               and for everyone who believes music can uplift, cleanse and reveal.
//             </p>

//             <p className="text-lg md:text-xl text-yellow-400 font-semibold leading-relaxed">
//               We're creating a movement - emotional, cultural, spiritual.
//               Let's walk this journey together.
//             </p>
//           </div>

//           {/* Newsletter Signup Section */}
//           <div className="bg-black/50 rounded-2xl p-8 border border-yellow-500/30 backdrop-blur-sm max-w-2xl mx-auto">
//             <h2 className="text-3xl font-bold text-white mb-2">
//               Join Mail Lists
//             </h2>
//             <p className="text-gray-300 mb-6">
//               Sign up to receive newsletters about Yoruba Healer Albums And Pre-order Yoruba Healer Merch.
//             </p>

//             <form onSubmit={handleSignUp} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Name */}
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                     Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Age */}
//                 <div>
//                   <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                     Age
//                   </label>
//                   <input
//                     type="number"
//                     id="age"
//                     name="age"
//                     value={formData.age}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Your age"
//                     min="1"
//                     max="120"
//                   />
//                 </div>

//                 {/* Location */}
//                 <div>
//                   <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     id="location"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Your city"
//                   />
//                 </div>
//               </div>

//               {/* Country Selection */}
//               <div>
//                 <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2 text-left">
//                   Country *
//                 </label>
//                 <select
//                   id="country"
//                   name="country"
//                   required
//                   value={formData.country}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
//                 >
//                   <option value="">Select your country</option>
//                   <option value="AF">Afghanistan</option>
//                   <option value="AL">Albania</option>
//                   <option value="DZ">Algeria</option>
//                   <option value="AR">Argentina</option>
//                   <option value="AU">Australia</option>
//                   <option value="AT">Austria</option>
//                   <option value="BS">Bahamas</option>
//                   <option value="BH">Bahrain</option>
//                   <option value="BD">Bangladesh</option>
//                   <option value="BB">Barbados</option>
//                   <option value="BE">Belgium</option>
//                   <option value="BR">Brazil</option>
//                   <option value="CA">Canada</option>
//                   <option value="CL">Chile</option>
//                   <option value="CN">China</option>
//                   <option value="CO">Colombia</option>
//                   <option value="CD">Congo, Democratic Republic</option>
//                   <option value="CG">Congo, Republic</option>
//                   <option value="CR">Costa Rica</option>
//                   <option value="HR">Croatia</option>
//                   <option value="CU">Cuba</option>
//                   <option value="DK">Denmark</option>
//                   <option value="EG">Egypt</option>
//                   <option value="FI">Finland</option>
//                   <option value="FR">France</option>
//                   <option value="DE">Germany</option>
//                   <option value="GH">Ghana</option>
//                   <option value="GR">Greece</option>
//                   <option value="HT">Haiti</option>
//                   <option value="IN">India</option>
//                   <option value="ID">Indonesia</option>
//                   <option value="IR">Iran</option>
//                   <option value="IQ">Iraq</option>
//                   <option value="IE">Ireland</option>
//                   <option value="IL">Israel</option>
//                   <option value="IT">Italy</option>
//                   <option value="JM">Jamaica</option>
//                   <option value="JP">Japan</option>
//                   <option value="JO">Jordan</option>
//                   <option value="KE">Kenya</option>
//                   <option value="KW">Kuwait</option>
//                   <option value="LB">Lebanon</option>
//                   <option value="LR">Liberia</option>
//                   <option value="LY">Libya</option>
//                   <option value="MY">Malaysia</option>
//                   <option value="MX">Mexico</option>
//                   <option value="MA">Morocco</option>
//                   <option value="NL">Netherlands</option>
//                   <option value="NZ">New Zealand</option>
//                   <option value="NG">Nigeria</option>
//                   <option value="NO">Norway</option>
//                   <option value="OM">Oman</option>
//                   <option value="PK">Pakistan</option>
//                   <option value="PA">Panama</option>
//                   <option value="PY">Paraguay</option>
//                   <option value="PE">Peru</option>
//                   <option value="PH">Philippines</option>
//                   <option value="PL">Poland</option>
//                   <option value="PT">Portugal</option>
//                   <option value="QA">Qatar</option>
//                   <option value="RO">Romania</option>
//                   <option value="RU">Russia</option>
//                   <option value="SA">Saudi Arabia</option>
//                   <option value="SN">Senegal</option>
//                   <option value="RS">Serbia</option>
//                   <option value="SG">Singapore</option>
//                   <option value="SO">Somalia</option>
//                   <option value="ZA">South Africa</option>
//                   <option value="KR">South Korea</option>
//                   <option value="ES">Spain</option>
//                   <option value="LK">Sri Lanka</option>
//                   <option value="SE">Sweden</option>
//                   <option value="CH">Switzerland</option>
//                   <option value="TW">Taiwan</option>
//                   <option value="TZ">Tanzania</option>
//                   <option value="TH">Thailand</option>
//                   <option value="TR">Turkey</option>
//                   <option value="UG">Uganda</option>
//                   <option value="UA">Ukraine</option>
//                   <option value="AE">United Arab Emirates</option>
//                   <option value="GB">United Kingdom</option>
//                   <option value="US">United States</option>
//                   <option value="UY">Uruguay</option>
//                   <option value="VE">Venezuela</option>
//                   <option value="VN">Vietnam</option>
//                   <option value="YE">Yemen</option>
//                   <option value="ZM">Zambia</option>
//                   <option value="ZW">Zimbabwe</option>
//                 </select>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-4 rounded-lg font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//               >
//                 Sign Up & View Merch
//               </button>

//               <p className="text-gray-400 text-sm">
//                 By signing up, you agree to receive updates about new music releases, merchandise drops, and special offers.
//               </p>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Merch Section Component
// function MerchSection() {
//   const { addToCart } = useCart();
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');

//   const merchProducts: Product[] = [
//     {
//       id: 1,
//       name: "Signature Hoodie",
//       price: "£80.00",
//       image: "/merch/hoodie.png",
//       description: "Premium black hoodie with gold Yoruba Healer embroidery",
//       status: "Pre-order",
//       fullDescription: "Crafted from premium heavyweight cotton, this black hoodie features intricate gold embroidery of the Yoruba Healer logo. Perfect for everyday comfort with a touch of spiritual elegance.",
//       sizes: ["S", "M", "L", "XL", "XXL"],
//       colors: ["Black", "Navy", "Charcoal"]
//     },
//     {
//       id: 2,
//       name: "Limited Tee",
//       price: "£80.00",
//       image: "/merch/tee.png",
//       description: "Classic cotton tee with exclusive artwork",
//       status: "Pre-order",
//       fullDescription: "100% premium cotton tee featuring exclusive Yoruba Healer artwork on the front. Soft, breathable, and perfect for showing your spiritual connection.",
//       sizes: ["S", "M", "L", "XL"],
//       colors: ["White", "Black", "Ash"]
//     },
//     {
//       id: 3,
//       name: "Collector's Cap",
//       price: "£80.00",
//       image: "/merch/cap.png",
//       description: "Structured cap with metallic logo",
//       status: "Pre-order",
//       fullDescription: "Structured six-panel cap with a curved visor and metallic Yoruba Healer logo patch. Adjustable strap for perfect fit.",
//       sizes: ["One Size"],
//       colors: ["Black", "Navy", "Olive"]
//     },
//     {
//       id: 4,
//       name: "Vinyl Package",
//       price: "£80.00",
//       image: "/merch/vinyl.png",
//       description: "Limited edition vinyl + digital download",
//       status: "Pre-order",
//       fullDescription: "Limited edition 180g vinyl featuring exclusive Yoruba Healer artwork. Includes digital download code and spiritual guidance booklet.",
//       sizes: ["12-inch"],
//       colors: ["Clear", "Black", "Gold Swirl"]
//     },
//     {
//       id: 5,
//       name: "Healing Bundle",
//       price: "£80.00",
//       image: "/merch/bundle.png",
//       description: "Complete merch collection + spiritual access",
//       status: "Exclusive",
//       fullDescription: "The ultimate spiritual bundle including hoodie, tee, cap, and vinyl. Plus access to exclusive healing content and early releases.",
//       sizes: ["Bundle"],
//       colors: ["Complete Set"]
//     },
//     {
//       id: 6,
//       name: "Spiritual Beanie",
//       price: "£80.00",
//       image: "/merch/beanie.png",
//       description: "Acrylic blend beanie with woven logo",
//       status: "New",
//       fullDescription: "Warm and comfortable acrylic blend beanie with woven Yoruba Healer logo. One size fits all for spiritual comfort.",
//       sizes: ["One Size"],
//       colors: ["Black", "Charcoal", "Navy"]
//     },
//     {
//       id: 7,
//       name: "Ancestral Jacket",
//       price: "£80.00",
//       image: "/merch/jacket.png",
//       description: "Premium track jacket with detailed embroidery",
//       status: "Limited",
//       fullDescription: "Lightweight track jacket with detailed ancestral embroidery on chest and sleeves. Perfect for spiritual layering and protection.",
//       sizes: ["S", "M", "L", "XL"],
//       colors: ["Black", "Navy", "Burgundy"]
//     },
//     {
//       id: 8,
//       name: "Sacred Sticker Pack",
//       price: "£80.00",
//       image: "/merch/stickers.png",
//       description: "Set of 5 premium vinyl stickers",
//       status: "In Stock",
//       fullDescription: "Set of 5 high-quality vinyl stickers featuring Yoruba Healer sacred symbols and artwork. Weather-resistant and perfect for spiritual tools.",
//       sizes: ["Pack of 5"],
//       colors: ["Mixed Colors"]
//     },
//     {
//       id: 9,
//       name: "Ritual Tote",
//       price: "£80.00",
//       image: "/merch/tote.png",
//       description: "Eco-friendly canvas tote bag",
//       status: "Eco",
//       fullDescription: "Durable canvas tote bag made from eco-friendly materials with sacred Yoruba Healer print. Perfect for carrying spiritual items.",
//       sizes: ["One Size"],
//       colors: ["Natural", "Black", "Olive"]
//     },
//     {
//       id: 10,
//       name: "Protection Phone Case",
//       price: "£80.00",
//       image: "/merch/case.png",
//       description: "Protective case with sacred artwork",
//       status: "New",
//       fullDescription: "Durable protective phone case featuring exclusive Yoruba Healer sacred artwork. Carries spiritual protection with you.",
//       sizes: ["Universal"],
//       colors: ["Clear", "Black", "Smoke"]
//     }
//   ];

//   const openProductModal = (product: Product) => {
//     setSelectedProduct(product);
//     setQuantity(1);
//     setSelectedSize(product.sizes?.[0] || '');
//     setSelectedColor(product.colors?.[0] || '');
//   };

//   const closeProductModal = () => {
//     setSelectedProduct(null);
//     setQuantity(1);
//   };

// const handleAddToCart = () => {
//   if (selectedProduct) {
//     addToCart({
//       id: selectedProduct.id,
//       name: selectedProduct.name,
//       price: selectedProduct.price,
//       size: selectedSize,
//       color: selectedColor
//     }, quantity); // Pass the quantity here

//     console.log('Added to cart:', {
//       product: selectedProduct,
//       quantity,
//       size: selectedSize,
//       color: selectedColor
//     });

//     closeProductModal();
//   }
// };
//   const incrementQuantity = () => setQuantity(prev => prev + 1);
//   const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

//   return (
//     <div className="min-h-screen bg-black font-sans">
//       {/* Merch Products Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <div className="relative w-32 h-32 mx-auto mb-6">
//               <Image
//                 src="/yhimg.png"
//                 alt="Yoruba Healer"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Sacred Merchandise Collection
//             </h1>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               All items priced at £80. Limited quantities available for spiritual connection.
//             </p>
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
//             {merchProducts.map((product) => (
//               <div 
//                 key={product.id} 
//                 className="bg-black/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300 group cursor-pointer"
//                 onClick={() => openProductModal(product)}
//               >
//                 {/* Product Image */}
//                 <div className="relative h-32 sm:h-36 md:h-48 bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center border border-yellow-500/10 group-hover:border-yellow-500/30 transition-colors">
//                   <div className="text-center text-yellow-400/60">
//                     <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//                     </svg>
//                     <p className="text-xs sm:text-sm">Sacred Item</p>
//                   </div>
                  
//                   {/* Status Badge */}
//                   <div className={`absolute top-2 right-2 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium ${
//                     product.status === 'Exclusive' 
//                       ? 'bg-yellow-500 text-black' 
//                       : product.status === 'Limited'
//                       ? 'bg-red-500 text-white'
//                       : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
//                   }`}>
//                     {product.status}
//                   </div>
//                 </div>

//                 {/* Product Info */}
//                 <div className="text-center">
//                   <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 line-clamp-2">{product.name}</h3>
//                   <p className="text-gray-400 text-xs mb-2 sm:mb-3 line-clamp-2">{product.description}</p>
//                   <div className="text-yellow-400 text-base sm:text-lg md:text-xl font-bold">{product.price}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Product Modal */}
//           {selectedProduct && (
//             <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
//               <div className="bg-black border border-yellow-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                   {/* Header */}
//                   <div className="flex justify-between items-start mb-6">
//                     <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
//                     <button 
//                       onClick={closeProductModal}
//                       className="text-gray-400 hover:text-yellow-400 transition-colors"
//                     >
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//                       </svg>
//                     </button>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Product Image */}
//                     <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-xl h-64 flex items-center justify-center border border-yellow-500/20">
//                       <div className="text-center text-yellow-400/60">
//                         <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
//                         </svg>
//                         <p className="text-sm">Sacred Item</p>
//                       </div>
//                     </div>

//                     {/* Product Details */}
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="text-yellow-400 text-xl font-bold mb-2">{selectedProduct.price}</h4>
//                         <p className="text-gray-300 text-sm">{selectedProduct.fullDescription}</p>
//                       </div>

//                       {/* Size Selection */}
//                       {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
//                         <div>
//                           <label className="block text-sm font-medium text-gray-300 mb-2">Size</label>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.sizes.map((size) => (
//                               <button
//                                 key={size}
//                                 onClick={() => setSelectedSize(size)}
//                                 className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                                   selectedSize === size
//                                     ? 'bg-yellow-500 text-black'
//                                     : 'bg-black border border-yellow-500/30 text-gray-300 hover:border-yellow-500/50'
//                                 }`}
//                               >
//                                 {size}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {/* Color Selection */}
//                       {selectedProduct.colors && selectedProduct.colors.length > 0 && (
//                         <div>
//                           <label className="block text-sm font-medium text-gray-300 mb-2">Color</label>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedProduct.colors.map((color) => (
//                               <button
//                                 key={color}
//                                 onClick={() => setSelectedColor(color)}
//                                 className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                                   selectedColor === color
//                                     ? 'bg-yellow-500 text-black'
//                                     : 'bg-black border border-yellow-500/30 text-gray-300 hover:border-yellow-500/50'
//                                 }`}
//                               >
//                                 {color}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {/* Quantity Selector */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
//                         <div className="flex items-center space-x-3">
//                           <button
//                             onClick={decrementQuantity}
//                             className="w-10 h-10 rounded-lg border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors"
//                           >
//                             -
//                           </button>
//                           <span className="text-white font-medium w-8 text-center">{quantity}</span>
//                           <button
//                             onClick={incrementQuantity}
//                             className="w-10 h-10 rounded-lg border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10 transition-colors"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>

//                       {/* Add to Cart Button */}
//                       <button
//                         onClick={handleAddToCart}
//                         className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                       >
//                         Add to Cart - {selectedProduct.price}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Upcoming Song Section */}
//       {/* <UpcomingSong /> */}
//     </div>
//   );
// }