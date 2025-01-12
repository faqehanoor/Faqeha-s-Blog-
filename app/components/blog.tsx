import React from 'react';
import Comments from './Comments';
import Image from 'next/image';
import Sea from '@/app/Sea.jpg'

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image width={9} height={9}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={Sea}
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
                    Ratti Gali Lake Waterfall (Azad Kashmir)
                  </h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">
                  Ratti Gali Lake Waterfall (Azad Kashmir)
                  </h1>
                  <div className="flex items-center flex-wrap">
                    <a className="text-white inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Blog Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCNAdOj1y6Flgg_qcigKnPxt4wNMK8_1_6A&s"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Shingrai Waterfall (Swat Valley)
                  </h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">
                  Shingrai Waterfall (Swat Valley)
                  </h1>
                 
                  <div className="flex items-center flex-wrap">
                    <a className="text-white inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Blog Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="data:image/jpeg;base64,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"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Mushkpuri Waterfall (Abbottabad)
                  </h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">
                  Mushkpuri Waterfall (Abbottabad)
                  </h1>
                  <div className="flex items-center flex-wrap">
                    <a className="text-white inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Blog Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="data:image/jpeg;base64,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"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Neelum Valley Waterfalls (Azad Kashmir)
                  </h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">
                  Neelum Valley Waterfalls (Azad Kashmir)
                  </h1>
                  <div className="flex items-center flex-wrap">
                    <a className="text-white inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fifth Blog Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="data:image/jpeg;base64,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"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Wahdat Waterfall (Islamabad)

                  </h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">
                  Wahdat Waterfall (Islamabad)

                  </h1>
                  <div className="flex items-center flex-wrap">
                    <a className="text-white inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="data:image/jpeg;base64,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"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Falling Waterfall (Naltar Valley)
                  </h2>
                  <h1 className="title-font text-lg font-bold text-white mb-3">
                  Falling Waterfall (Naltar Valley)
                  </h1>
                  <div className="flex items-center flex-wrap">
                    <a className="text-white inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
         <Comments/>
        </div>
      </section>
    </div>
  );
};

export default Blog;
