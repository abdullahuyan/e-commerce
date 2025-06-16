export default function ProductCard({ product }) {
    return (
      <div className="relative p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-fill"
        />
        <div className="mt-4 text-center">
          <h3 className="text-md font-semibold text-[#252B42]">
            {product.title}
          </h3>
          <p className="text-sm text-[#737373]">{product.subTitle}</p>
          <p className="text-md text-[#BDBDBD]">
            {product.price1}{" "}
            <span className="font-bold text-[#23856D]">{product.price2}</span>
          </p>
          <div className="flex justify-center mt-2">
            {product.colors.map((color, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  