import React, { useState } from "react"
import Image from "next/image"

const AwardsGallery2 = (certificates) => {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = {
    mobile: 2,
    desktop: 6,
  }

  const getVisibleCertificates = (count) => {
    const visibleItems = []
    for (let i = 0; i < count; i++) {
      const index = (startIndex + i) % certificates.length
      visibleItems.push(certificates[index])
    }
    return visibleItems
  }

  const handlePrevious = () => {
    setStartIndex((prev) => {
      if (prev === 0) {
        return certificates.length - 1
      }
      return prev - 1
    })
  }

  const handleNext = () => {
    setStartIndex((prev) => {
      return (prev + 1) % certificates.length
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="relative flex items-center justify-center mb-6">
        {/* Left decoration */}
        <div className="absolute left-0 w-8 h-8">
          <Image
            src="/images/left-feather.png"
            alt="Left decoration"
            width={32}
            height={32}
            className="opacity-50"
          />
        </div>

        {/* certificatesListArr heading */}
        <h2 className="text-2xl font-semibold text-center px-12">
          certificatesListArr
        </h2>

        {/* Right decoration */}
        <div className="absolute right-0 w-8 h-8">
          <Image
            src="/images/right-feather.png"
            alt="Right decoration"
            width={32}
            height={32}
            className="opacity-50"
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-center text-gray-600 mb-8">
        We prioritize sustainable farming to protect our planet. Our practices
        ensure that we support local farmers while providing high-quality
        spices.
      </p>

      {/* certificatesListArr carousel */}
      <div className="relative">
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-xl">&larr;</span>
          </div>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-xl">&rarr;</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default AwardsGallery2
