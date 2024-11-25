const ProductCard = ({ product }) => (
  <div className="relative rounded-lg shadow-lg w-full max-w-sm mx-auto">
    <div className="relative aspect-[3/4] max-h-[480px]">
      <img
        src={product.imageSrc}
        alt={product.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20">
        <div className="absolute bottom-0 left-0 p-5 text-white">
          <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
          <p className="text-sm text-gray-200">{product.description}</p>
        </div>
      </div>
    </div>
  </div>
)

export default ProductCard
