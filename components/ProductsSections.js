import React, { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import ProductCard from "./ProductCard"
import { productsList } from "../public/assets/cardsList"

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productsList.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productsList.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Products</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore a variety of aromatic and flavorful spice products sourced
          from around the world.
        </p>

        {/* Mobile View */}
        <div className="md:hidden relative px-8">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <IoIosArrowBack size={24} />
          </button>

          <div className="w-full max-w-[320px] mx-auto">
            <ProductCard product={productsList[currentIndex]} />
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            aria-label="Next slide"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 px-4">
          {productsList.map((product, index) => (
            <div key={index} className="max-w-[320px] mx-auto w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
