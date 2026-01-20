 import React, { cache, useEffect } from 'react';

import { Link } from 'react-router-dom';

const LandingPage = () => {

    
    return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
       

        <main className="flex-1">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              {/* Hero Section */}
              <div className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="A stylish watch on a dark background."
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOPs_3Z-1914Ajuxewu8HssDQt4Itm9zxr6E33BhWRB1eM6l6hiSABOhja5EMahXOisp12e96iHPc7E8Xcb1MMjkg9w3YLSUroy8y2xlY7TdJesuyeuQHsvN6IzdaW7JOOpTSK-kszfh8JZer2ofFdTiafwnQsYpH1FWEmmWMvOfjhkTLFR1qxUZub9rzDIQeg1eXD6GQmS1K5cX1PToEcAbl06oSxhzpzR-np8OufI4QHZcTsNXt3ytr7BFis7KPYg_ZfaWW5b_jg")',
                  }}
                ></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    Summer Styles are Here
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-200">
                    Discover our latest collection of must-have pieces to
                    elevate your look this season.
                  </p>
                  <Link 
                    className="mt-8 pointer inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                    to="/products"
                    
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Bento Grid Section */}
              <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
                {/* 1 - Footwear */}
                <div className="lg:col-span-2 lg:row-span-2 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 relative group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-alt="Red and white sports shoe."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgVrR_5wPD8aZGXTsm9VXPqHFMVAw9PodR7-HjbTgYn11mhmI-b0fSyAiCNejwzdA1uLyzCJ36xIYYxM_64l7Umtkii8lle9ICb2uO4NqIlFh0w8pc7xcvGu02mYxq_1Uhe-ViTxD6xUH412gXzb6GIiHRejU5twF6EDnGErb-vOk7mUXt7OsGF21wlMd2C6zdeL4xIhag9c5k9imRyV70POH8_ul-mQxT90LekpCQD0F2IYEvaJeIUQ4QtZjNoTo6F_9C0v4KGlbi"
                    alt="Footwear"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-2xl font-bold">
                      New Arrivals: Footwear
                    </h3>
                    <p className="text-gray-200 mt-1">Step up your game.</p>
                  </div>
                </div>

                {/* 2 - Review Card */}
                <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <img
                        className="size-12 rounded-full object-cover"
                        data-alt="Avatar of customer Alex Johnson."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNmNeJ2dTxuuMCToT5jZtNVrxYu4u3Wy9HcZ51ALjzWR24pijDD2vs9BHOVAzwHzA_ZtGZ8J_quAjvagegnKD5ydwjvPvwPhcASGFTmtAUtdAruGeF1977UeIVN_g0hJNl27E3rhzn9F9UmHEo-T1eZgvnLAQjeeIjM6fcZgz1mHbI8BEiF-TtXTjxHug890uq2S23duwBZWjXK9gnsFt_ntneQZTajSJgGVc4qEQNEKQN8IpP1LKYJGwwRLi1ygfqBQeupwNl4EQ8"
                        alt="Alex Johnson"
                      />
                      <div>
                        <p className="text-gray-900 dark:text-white font-semibold">
                          Alex Johnson
                        </p>
                        <div className="flex items-center mt-1">
                          {Array(5)
                            .fill()
                            .map((_, i) => (
                              <span
                                key={i}
                                className="material-symbols-outlined text-yellow-400 text-base"
                              >
                                star
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                      "Absolutely love the quality and design. My new favorite
                      store for sure! Highly recommended."
                    </p>
                  </div>
                </div>

                {/* 3 - Hats & Caps */}
                <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 relative group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-alt="A person wearing a stylish hat."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu4_2AvRF6gkezmjARugvDMDQNO3N_uJyUk1d317n9_GyRYjHeBJRB-4pwHNDWEwWO0x76ju1OEYIugbGp7f0cTDbxVsHPiwAcLzDoVDltyrvc-L70YbsjQpJiv84FBhzWeWi9m21Xp7xdSEvjuKGynvlQ7BjsTexwIKQKdRRvWNY362O-rRja2yQgX7E7ffnTCuQUHvEN090wefd6oj9p5qYgfFNT6espRAZ9OCXmtZSA752y1AnmJFjuhthWCTWSXr92xctohOEO"
                    alt="Hats & Caps"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-xl font-bold">Hats & Caps</h3>
                  </div>
                </div>

                {/* 4 - Newsletter */}
                <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg bg-primary dark:bg-primary/90 text-white p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-bold">Join Our Newsletter</h3>
                  <p className="mt-2 max-w-sm">
                    Get exclusive deals, new product announcements, and more,
                    straight to your inbox.
                  </p>
                  <form className="mt-6 flex w-full max-w-md">
                    <input
                      className="w-full rounded-l-lg border-0 py-2 px-4 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-white"
                      placeholder="Enter your email"
                      required
                      type="email"
                    />
                    <button
                      className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r-lg"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* 5 - T-Shirts */}
                <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 relative group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-alt="Folded t-shirts in different colors."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxBymb4HyoJT-6xx8ksJvLyrjaJko0Ra6wzi1Y-F9xQeItN9zEYOQ77jEK7IuLgEnObuzy88GhBn3VuhhLFq7u4iU373Ye9ZR2oT1J4-w-HAxb-DFMXniHAdkc-QTbAyV0ZBrcV41WUbhKQbQAFiUy8uAYPpYGcFV268Yib9K1QEwd4huegrvXWmqAggseb-MD2YAGnk7XiQK10wHvVheRsAoZkyahALPEWLdkALf18JLvnSyL1MjAnXnpGYrQ-MiyxYjWvemYXNLM"
                    alt="Essential Tees"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-xl font-bold">
                      Essential Tees
                    </h3>
                  </div>
                </div>

                {/* 6 - Secure Payments */}
                <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6 flex flex-col justify-center items-center">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">
                    Secure Payments
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                    <svg
                      className="h-8 w-auto"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M47.23,66.5H464.77a23.9,23.9,0,0,1,23.71,26.27L452.92,391.2a24,24,0,0,1-23.71,22.3H82.79a24,24,0,0,1-23.71-22.3L23.52,92.77A23.9,23.9,0,0,1,47.23,66.5Zm398.63,44.75H66.14l30.29,255.7h319.1Z"></path>
                      <path d="M110.59,209.84a24,24,0,0,1,24-24H377.41a24,24,0,0,1,0,48H134.59A24,24,0,0,1,110.59,209.84Z"></path>
                    </svg>
                    <svg
                      className="h-8 w-auto"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M336,224a112,112,0,1,0,112,112A112.12,112.12,0,0,0,336,224Zm0,192a80,80,0,1,1,80-80A80.09,80.09,0,0,1,336,416Z"></path>
                      <path d="M192,224a112,112,0,1,0-112-112A112.12,112.12,0,0,0,192,224Zm0-192a80,80,0,1,1-80,80A80.09,80.09,0,0,1,192,32Z"></path>
                      <path d="M80,336a112,112,0,1,0,112,112A112.12,112.12,0,0,0,80,336Zm112,160a80,80,0,1,1,80-80A80.09,80.09,0,0,1,192,496Z"></path>
                    </svg>
                    <svg
                      className="h-8 w-auto"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M336,32h-95.2L128,224H32v96h48v64a64.07,64.07,0,0,0,64,64h16a32,32,0,0,0,32-32V384h48V320h48V224h48V128h-48V32Z"></path>
                      <path d="M480,224h-48v96h48v-96Z"></path>
                      <path d="M480,32h-48v96h48v-96Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    );
}

export default LandingPage;
