// 'use client';

// import Image from "next/image";
// import { useState } from "react";

// export default function UpcomingSong() {
//   const [activeImage, setActiveImage] = useState(0);

//   const moodBoardImages = [
//     {
//       id: 1,
//       src: "/demo/mood1.jpg", // Replace with your actual images
//       alt: "Creative visual 1",
//       title: "Visual Storytelling"
//     },
//     {
//       id: 2,
//       src: "/demo/mood2.jpg",
//       alt: "Creative visual 2",
//       title: "Emotional Landscape"
//     },
//     {
//       id: 3,
//       src: "/demo/mood3.jpg",
//       alt: "Creative visual 3",
//       title: "Artistic Expression"
//     },
//     {
//       id: 4,
//       src: "/demo/mood4.jpg",
//       alt: "Creative visual 4",
//       title: "Sonic Atmosphere"
//     }
//   ];

//   const musicPlatforms = [
//     {
//       name: "Spotify",
//       icon: "🎵",
//       color: "bg-green-500 hover:bg-green-600",
//       url: "#"
//     },
//     {
//       name: "Apple Music",
//       icon: "🎶",
//       color: "bg-pink-500 hover:bg-pink-600",
//       url: "#"
//     },
//     {
//       name: "iTunes",
//       icon: "📀",
//       color: "bg-blue-500 hover:bg-blue-600",
//       url: "#"
//     }
//   ];

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//             COMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SOON</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Experience the next chapter of musical innovation. A journey through sound and emotion.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Creative Display */}
//           <div className="space-y-8">
//             {/* Main Featured Image */}
//             <div className="relative group">
//               <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
//                 {/* Fallback demo image */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
//                   <div className="text-center text-white">
//                     <div className="text-6xl mb-4">🎵</div>
//                     <p className="text-lg">Album Artwork</p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Floating Elements */}
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm transform rotate-12 shadow-2xl">
//                 NEW
//               </div>
//             </div>

//             {/* Music Platforms */}
//             <div className="bg-black/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
//               <h3 className="text-white text-xl font-semibold mb-4 text-center">Available On</h3>
//               <div className="grid grid-cols-3 gap-4">
//                 {musicPlatforms.map((platform, index) => (
//                   <a
//                     key={platform.name}
//                     href={platform.url}
//                     className={`${platform.color} text-white p-4 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
//                   >
//                     <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
//                       {platform.icon}
//                     </div>
//                     <div className="text-sm font-medium">{platform.name}</div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Mood Board & Details */}
//           <div className="space-y-8">
//             {/* Song Details */}
//             <div className="bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
//               <h2 className="text-3xl font-bold text-white mb-2">Ethereal Dreams</h2>
//               <p className="text-cyan-400 text-lg mb-4">Single Release</p>
//               <div className="space-y-3">
//                 <div className="flex justify-between text-gray-300">
//                   <span>Release Date:</span>
//                   <span className="text-white">December 15, 2024</span>
//                 </div>
//                 <div className="flex justify-between text-gray-300">
//                   <span>Genre:</span>
//                   <span className="text-white">Alternative R&B</span>
//                 </div>
//                 <div className="flex justify-between text-gray-300">
//                   <span>Duration:</span>
//                   <span className="text-white">3:45</span>
//                 </div>
//               </div>
//             </div>

//             {/* Mood Board Gallery */}
//             <div className="bg-black/40 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
//               <h3 className="text-white text-2xl font-semibold mb-6">Creative Vision</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {moodBoardImages.map((image, index) => (
//                   <div
//                     key={image.id}
//                     className="relative group cursor-pointer"
//                     onMouseEnter={() => setActiveImage(index)}
//                   >
//                     <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl border border-white/10">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="text-3xl text-white/70">✨</div>
//                       </div>
//                     </div>
//                     <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                       <p className="text-white text-xs text-center">{image.title}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Countdown Timer */}
//             <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 text-center border border-cyan-400/30">
//               <h4 className="text-white font-semibold mb-3">Release Countdown</h4>
//               <div className="flex justify-center space-x-4 text-white">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">14</div>
//                   <div className="text-xs">DAYS</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">06</div>
//                   <div className="text-xs">HOURS</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">23</div>
//                   <div className="text-xs">MINUTES</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Creative Elements */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-black/30 rounded-xl p-6 text-center border border-white/10 backdrop-blur-sm">
//             <div className="text-3xl mb-3">🎨</div>
//             <h4 className="text-white font-semibold mb-2">Visual Artistry</h4>
//             <p className="text-gray-300 text-sm">Immersive visual experience</p>
//           </div>
//           <div className="bg-black/30 rounded-xl p-6 text-center border border-white/10 backdrop-blur-sm">
//             <div className="text-3xl mb-3">🌟</div>
//             <h4 className="text-white font-semibold mb-2">Innovative Sound</h4>
//             <p className="text-gray-300 text-sm">Pushing musical boundaries</p>
//           </div>
//           <div className="bg-black/30 rounded-xl p-6 text-center border border-white/10 backdrop-blur-sm">
//             <div className="text-3xl mb-3">💫</div>
//             <h4 className="text-white font-semibold mb-2">Emotional Journey</h4>
//             <p className="text-gray-300 text-sm">Deep, meaningful storytelling</p>
//           </div>
//         </div>

//         {/* Pre-save CTA */}
//         <div className="text-center mt-12">
//           <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//             Pre-save on Spotify
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from "react";

export default function UpcomingSong() {
  const [showFullPreview, setShowFullPreview] = useState(false);

  const musicPlatforms = [
    {
      name: "Spotify",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-2-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
      color: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600",
      url: "#"
    },
    {
      name: "Apple Music",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.65 5.66a10.05 10.05 0 00-.55-1.6 5.97 5.97 0 00-1.2-1.59c-.56-.56-1.2-.98-1.92-1.27A6.67 6.67 0 0015.36 1a7.3 7.3 0 00-2.36.38 9 9 0 00-2.03 1.07 9.51 9.51 0 00-1.67 1.5 10.3 10.3 0 00-1.24 1.86 9.92 9.92 0 00-.8 2.15 9.4 9.4 0 00-.28 2.34v.18a9.65 9.65 0 00.28 2.34 9.92 9.92 0 00.8 2.15 10.3 10.3 0 001.24 1.86 9.51 9.51 0 001.67 1.5 9 9 0 002.03 1.07 7.3 7.3 0 002.36.38 6.67 6.67 0 002.62-.52c.72-.29 1.36-.71 1.92-1.27a5.97 5.97 0 001.2-1.59c.32-.55.56-1.14.72-1.76.16-.62.24-1.27.24-1.93v-.18a9.4 9.4 0 00-.24-1.93 10.05 10.05 0 00-.72-1.76z"/>
        </svg>
      ),
      color: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600",
      url: "#"
    },
    {
      name: "iTunes",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600",
      url: "#"
    }
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="text-yellow-400 text-sm font-medium">New Single Coming Soon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">PREVIEW</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get ready for the next musical experience. A glimpse into the artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Visual Preview */}
          <div className="space-y-8">
            {/* Main Artwork Preview */}
            <div className="relative group">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 border border-yellow-500/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-20 h-20 mx-auto mb-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                  </svg>
                  <p className="text-lg font-semibold text-yellow-100">Artwork Preview</p>
                  <p className="text-sm text-yellow-300/70 mt-1">Full visual coming soon</p>
                </div>
              </div>
              
              {/* Gold Accent */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xs transform rotate-12 shadow-2xl">
                PREVIEW
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black/80 rounded-xl p-4 text-center border border-yellow-500/20">
                <div className="text-yellow-400 text-2xl font-bold">15</div>
                <div className="text-yellow-300/70 text-xs">DAYS</div>
              </div>
              <div className="bg-black/80 rounded-xl p-4 text-center border border-yellow-500/20">
                <div className="text-yellow-400 text-2xl font-bold">Single</div>
                <div className="text-yellow-300/70 text-xs">RELEASE</div>
              </div>
              <div className="bg-black/80 rounded-xl p-4 text-center border border-yellow-500/20">
                <div className="text-yellow-400 text-2xl font-bold">R&B</div>
                <div className="text-yellow-300/70 text-xs">GENRE</div>
              </div>
            </div>
          </div>

          {/* Right Column - Essential Info */}
          <div className="space-y-8">
            {/* Song Preview Card */}
            <div className="bg-black/80 rounded-2xl p-8 backdrop-blur-sm border border-yellow-500/20">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Ethereal Dreams</h2>
                  <p className="text-yellow-400 text-lg">Single Preview</p>
                </div>
                <div className="bg-yellow-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
                  <span className="text-yellow-400 text-sm font-medium">3:45</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                A preview of the upcoming single that blends soulful melodies with contemporary R&B vibes. 
                Full experience coming December 15, 2024.
              </p>

              {/* Quick Platforms */}
              <div className="flex gap-3">
                {musicPlatforms.slice(0, 2).map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    className={`${platform.color} text-black px-4 py-2 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 text-sm font-medium`}
                  >
                    {platform.icon}
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Preview Features */}
            <div className="bg-black/80 rounded-2xl p-6 backdrop-blur-sm border border-yellow-500/20">
              <h3 className="text-white text-xl font-semibold mb-4">Preview Highlights</h3>
              <div className="space-y-3">
                {[
                  { icon: "🎵", text: "Soulful vocal arrangements" },
                  { icon: "🎶", text: "Modern R&B production" },
                  { icon: "✨", text: "Emotional storytelling" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-yellow-100">
                    <span className="text-yellow-400">{feature.icon}</span>
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main CTA */}
            <div className="text-center">
              <button 
                onClick={() => setShowFullPreview(!showFullPreview)}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center mx-auto gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {showFullPreview ? "Show Less" : "Show Full Preview"}
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Preview Section */}
        {showFullPreview && (
          <div className="mt-12">
            <div className="bg-black/90 rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Full Experience Preview</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mood Board Preview */}
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-4">Visual Mood</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="aspect-square bg-gradient-to-br from-yellow-500/10 to-yellow-600/20 rounded-lg border border-yellow-500/30 flex items-center justify-center">
                        <svg className="w-8 h-8 text-yellow-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Platform Links */}
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-4">All Platforms</h4>
                  <div className="space-y-3">
                    {musicPlatforms.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        className={`${platform.color} text-black p-3 rounded-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-3 font-medium`}
                      >
                        {platform.icon}
                        <span>Pre-save on {platform.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Coming Soon Footer */}
        <div className="text-center mt-12">
          <p className="text-yellow-300/70 text-sm">
            Full music page with complete discography, videos, and merchandise coming soon
          </p>
        </div>
      </div>
    </section>
  );
}