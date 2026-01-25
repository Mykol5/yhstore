'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
// import Navbar from '../components/Navbar'; // Adjust path as needed
import Footer from '../components/Footer'; // Adjust path as needed
import { Heart, Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
  category: string;
  isNew?: boolean;
  isLimited?: boolean;
}

export default function ProductListing() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Healer Sign T-Shirt",
      price: "£120.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRRpvIZEH-1VsTyLqIzFJ0dShn1yXGpuHCO7YZk-cv5vsvX2NXlq15CPEDE-EB1V5kCBKPoQeAZ8xGYLCz36GEKjFnLoKdupootdfbexnIXaMsiTx7I7PX7n4pVp21KvPZFcrNiKcChQRZ5qMc4ss82qY4xuE0UDNnilC3bTKQMysg2K11IlqhCOKh8zCH-Z5NeCSEMN9LWJfndW7UhXvCYNE8qfmKuERymUqZ2v5yTg3-qx16vkcqyLWQefxECVxSS7kO3aBzonc",
      description: "Premium cotton t-shirt with signature embroidery",
      colors: ["Emerald", "Black"],
      sizes: ["S", "M", "L", "XL"],
      category: "t-shirts",
      isNew: true
    },
    {
      id: 2,
      name: "Ancestral Graphic Tee",
      price: "£95.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHxrdfvJGjYLzFgZoEzqgFXovwApAww66yVwDOekSStYgi4bgMn6dg-d1PJPXDEx90oiSfL5dDAVOhisIOF7e6NfsaoCEg9Mtu_ry1yJzdVrSbaMHwLmN_dpweWVhs8nc31ixA9omaXL5aOZtKYnjmIkWyBG_MUTGxKjbjXKGtYk1QcsQz6zYQCKi6nF7udYAoHjsZ7_baf4uPDHjtCiwZl46gXf4IFhRu-FWfl2cFSCxqVOt7LZqTkedwm27Ecrgn4KNc4OebNj4",
      description: "Graphic tee featuring traditional motifs",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL"],
      category: "t-shirts"
    },
    {
      id: 3,
      name: "Healer Graffiti Cap",
      price: "£45.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW-hLg9OZiQp1SMv-J75CYu3Jg0DMsdo96LM5pvOLy8EWlBTjdZDrKpa2dRfAsipYv1ZufocQugmpVpdVGPzNWt8ztGHgmAYF1xn_6eaOdfqQmBVBlBxX6O-ucEbkm8s8-YM4UzQwgRpgERkTRX03NRGbyRAonLpjTiqeZZcjd-2721uD_ZWhTFwPxEuVRZEdOxAFyIt21f8amd4N4YLjPcR23mzHFNuCqGWtm3YKOOfVKarMeNyNsU1b-6H2elYAShgVOS4tejYA",
      description: "Structured cap with graffiti artwork",
      colors: ["Black", "Gray"],
      sizes: ["One Size"],
      category: "accessories"
    },
    {
      id: 4,
      name: "Pixel Code T-Shirt",
      price: "£110.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpPvVCEBhNqBz-7fuoAww0BoyT6pV86SKXjYIQmaYS36ZtajB7tBvlvF-kbqObw-yE_fFOEbWQT5LU1JaibzcfAaQVdVAK0J7WueI2v0OCSkpsMDOYUK3BtzWFTQp86CC8zJu0Lve_oVT8rqL0XOicB1do_uEpOoNLLIRDoG92chAomM3R-5twwiVXIcFuG8oiDXG1YGVtRCjvtqN05rAn8FGLNJC7wtl4VOZKlXc24gORG5B_6O4FhtwreL232vgVSu_f5PxMIIo",
      description: "Digital-inspired pixel pattern tee",
      colors: ["Black"],
      sizes: ["S", "M", "L", "XL"],
      category: "t-shirts"
    },
    {
      id: 5,
      name: "Pixel Denim Jacket",
      price: "£285.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDW8xKKRLOThTXKRAI9g4SocvcOGQXD2gfkV3uuG0THZpGjvVImJMmaNjW7bcdo4RPjJy5lG-SzUc0lbubm7EBXYABwvlUcpB7cFzEzBXuQLcvv_TogJcsZbCp4HsXWLnVUENtrUdu4oYKYAYjkMpXNb-xu7DRzxw9rnaXfbE-Rnmaja6ZJo8ZadacqohCOgdehsoOPucfhMeoHKDdbtfYdrEDZTZV9fr6B8NaLIobkQSHvxhYYhvJtUKAySwLUq2wFQU8hffK75lE",
      description: "Premium denim with pixel embroidery",
      colors: ["Emerald"],
      sizes: ["S", "M", "L", "XL"],
      category: "outerwear"
    },
    {
      id: 6,
      name: "Heritage Varsity Jacket",
      price: "£450.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEM9K-LoZ9GJ5-ZWQFyty2WXtD2nDYpxcwEbS0eVOdM5_JKLoZkxZmqQ23zE-7QJuW6S2dd3fbSNxMKkLcY3SEBL4lFdz-d1R1gqkkqdYSqYDIVLHSdO9PZCCFhGZUeTxXwn2v7f1xIhhlybFs_UxZL_s1f6fI6xFW7Cs3_mi64oKKh0NnLz1DBZIxO6S8D6jMbVOWRqOmTF5V9iLHhPNbhACIErYISUWBTJT91DzsxzTFBfGJLuk7b997QL9UiFRsdZLTuiND6us",
      description: "Limited edition varsity jacket",
      colors: ["Blue", "Black"],
      sizes: ["M", "L", "XL"],
      category: "outerwear",
      isLimited: true
    },
    {
      id: 7,
      name: "Emblem Leather Slides",
      price: "£75.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB76oBqywUcxBgVeYYy86QcE3i2JXn1bhH0NTNcEkr1yYDb6fk_v5KQ8tAvk6HBVmP7vadc_F7t7ZAwHuUOAyao7vVHA4ivh8x_7_Pl5WfFLyF8l6W68QilgI51mSr0ZcFkd_o9euFtp8pgj2NAgucppQntyQ0ve9I5rGXms5IA-7IwJw1h3UsUbfxPL6HxFPeHgye3rX3KwWQ9sP0e9o7dfsfiobLXDvPO7rl1xowmTGEVOkZS5wIjx_R30ABg5OExMLuFpWwX0co",
      description: "Premium leather slides with emblem",
      colors: ["Amber", "Black"],
      sizes: ["S", "M", "L"],
      category: "accessories"
    },
    {
      id: 8,
      name: "Pixel Peak Sunglasses",
      price: "£135.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoukNu6B5Z5Sr0PQvRgQP5XJ5YwCuvoiVJUhsxTTeeqEiMNveU_Xmrq177JqORrmgCyxL55ZHBVDIQC8y4SWOnojtlw74wHtot3MEkWYYRyTNMtyByNOrkviXIkHdnTFDOEkJN_vZ9k7XUsxS1fCtFTek3H94DYi0ldmf_dGAYctVZJLETYZfHppvjvN07cX04-KTdudEVEWafHs7Ph1bkZq-F_wbVHP1k_bqTvIYiHUH1g5kXBh47DPnDvWvhH0thhtSXHPaSBSc",
      description: "Designer sunglasses with pixel frame",
      colors: ["Black", "Amber"],
      sizes: ["One Size"],
      category: "accessories"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: 8 },
    { id: 't-shirts', name: 'T-Shirts', count: 3 },
    { id: 'outerwear', name: 'Outerwear', count: 2 },
    { id: 'accessories', name: 'Accessories', count: 3 }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', value: 'black', class: 'bg-black' },
    { name: 'Emerald', value: 'emerald', class: 'bg-emerald-700' },
    { name: 'Blue', value: 'blue', class: 'bg-blue-800' },
    { name: 'Amber', value: 'amber', class: 'bg-amber-800' },
    { name: 'Gray', value: 'gray', class: 'bg-gray-500' }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedSize && !product.sizes.includes(selectedSize)) return false;
    if (selectedColor && !product.colors.some(c => c.toLowerCase().includes(selectedColor))) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('£', '')) - parseFloat(b.price.replace('£', ''));
      case 'price-high':
        return parseFloat(b.price.replace('£', '')) - parseFloat(a.price.replace('£', ''));
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const handleAddToCart = (product: Product) => {
    const basePrice = parseFloat(product.price.replace('£', ''));
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      basePrice: basePrice,
      shipping: 0,
      size: product.sizes[0],
      color: product.colors[0],
      image: product.image
    }, 1);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedSize('');
    setSelectedColor('');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* <Navbar /> */}
      
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <header className="mb-8 md:mb-12">
          <nav className="flex text-xs uppercase tracking-widest text-gray-500 mb-4">
            <a href="/" className="hover:text-black">Home</a>
            <span className="mx-2">/</span>
            <a href="#" className="hover:text-black">Shop</a>
            <span className="mx-2">/</span>
            <span className="text-black">All Products</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Premium Collection</h1>
              <p className="text-gray-500 max-w-xl text-sm leading-relaxed">
                Discover the intersection of West African heritage and contemporary streetwear. Limited edition artisanal pieces.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex items-center space-x-2">
                <span className="text-xs uppercase tracking-widest font-bold">Sort By:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-xs uppercase tracking-widest font-semibold focus:ring-0 p-0"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-black transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="lg:hidden mb-8 p-6 border border-gray-200 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`block text-xs uppercase tracking-wide text-left ${selectedCategory === category.id ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Size</h4>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
                      className={`border py-2 text-xs ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Color</h4>
              <div className="flex flex-wrap gap-3">
                {colors.map(color => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(selectedColor === color.value ? '' : color.value)}
                    className={`w-6 h-6 rounded-full border ${selectedColor === color.value ? 'border-black ring-2 ring-offset-2 ring-black' : 'border-gray-200'}`}
                  >
                    <div className={`w-full h-full rounded-full ${color.class}`} />
                  </button>
                ))}
              </div>
            </div>
            
            {(selectedCategory !== 'all' || selectedSize || selectedColor) && (
              <button
                onClick={handleClearFilters}
                className="mt-6 text-xs uppercase tracking-widest font-bold hover:text-black transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0 space-y-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Categories</h4>
              <div className="space-y-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`block text-xs uppercase tracking-wide text-left w-full ${selectedCategory === category.id ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Size</h4>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
                    className={`border py-2 text-xs ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Color</h4>
              <div className="flex flex-wrap gap-3">
                {colors.map(color => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(selectedColor === color.value ? '' : color.value)}
                    className={`w-6 h-6 rounded-full border ${selectedColor === color.value ? 'border-black ring-2 ring-offset-2 ring-black' : 'border-gray-200'}`}
                  >
                    <div className={`w-full h-full rounded-full ${color.class}`} />
                  </button>
                ))}
              </div>
            </div>
            
            {(selectedCategory !== 'all' || selectedSize || selectedColor) && (
              <button
                onClick={handleClearFilters}
                className="text-xs uppercase tracking-widest font-bold hover:text-black transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-gray-50 relative mb-4 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-white text-black text-[9px] font-bold tracking-widest px-2 py-1 uppercase">
                          New Drop
                        </span>
                      )}
                      {product.isLimited && (
                        <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-1 uppercase">
                          Limited
                        </span>
                      )}
                    </div>
                    
                    {/* Wishlist Button */}
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
                    >
                      <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                    </button>
                    
                    {/* Add to Cart Button */}
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 text-xs font-bold uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                    >
                      Add to cart
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xs font-medium uppercase tracking-wider">{product.name}</h3>
                    <p className="text-xs font-bold">{product.price}</p>
                    
                    {/* Color Options */}
                    <div className="flex gap-1.5 pt-2">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: color.toLowerCase() === 'black' ? '#000' :
                                            color.toLowerCase() === 'emerald' ? '#047857' :
                                            color.toLowerCase() === 'blue' ? '#1e40af' :
                                            color.toLowerCase() === 'amber' ? '#92400e' :
                                            color.toLowerCase() === 'gray' ? '#6b7280' : '#000'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            {sortedProducts.length > 0 && (
              <div className="mt-16 flex flex-col items-center">
                <p className="text-xs uppercase tracking-widest mb-6 text-gray-400">
                  Showing {sortedProducts.length} of {products.length} products
                </p>
                <button className="border border-black px-12 py-4 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all">
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Editorial Section */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[500px] group overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPgENgvzizG29hFBVpulEZzQZIG2UcLBnXnDVIhao-SonqSo8tqxZT9VEnkOxUaGl2OQIU3DR9f46Pm3SxklUYbt0SQ0xw-cDUaYtd5Pfyl0aSVO648q6DlvPv0MRh06zdK8pZuRZIYTcYisykNGfy1ue9TMLjhTXPxngtCdcy7M2AWWrdvPgAb9Tk3P2I4UTKpAJl9AeOkrguX66RUrmYaJmp8OCTw26_iPuTLMqNneIB55llSVrfek-CyoY0dk52vMYo5RaADR0"
              alt="The Lagos Archives"
              fill
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <div className="absolute bottom-12 left-12 text-white">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">The Lagos Archives</h3>
              <button className="text-xs uppercase tracking-widest border-b border-white pb-1 font-bold hover:border-gray-300 transition-colors">
                Explore Collection
              </button>
            </div>
          </div>
          
          <div className="relative h-[500px] group overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAONhvDRgT1nesfoNRM68eKUt9D_5SfiCD_xtEWPMUkSQ3rMACdpdb_7Dc32CD3x-Y7tijGe4JM_cTXRF-eDXZeLaKNPmRRtxwVuPyUKEzFSQhcrsMVeToo88-6zpefmpsDe6JRCdF97ZbyuoDQy_AouZECs2C0Vd4lDbpTXSarAO9CnTIyQOLZEoZOC04wsQeg5VWgIbe4Y95ud7jAvwybjXnC3mlfDoVs68SXlDFVn67Ix_4pdkqz3KcBwgB0Txl3ri_caN4LpYA"
              alt="Ancestral Futures"
              fill
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <div className="absolute bottom-12 left-12 text-white">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Ancestral Futures</h3>
              <button className="text-xs uppercase tracking-widest border-b border-white pb-1 font-bold hover:border-gray-300 transition-colors">
                Shop the Look
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}