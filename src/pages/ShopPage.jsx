import { useState } from 'react';
import { ChevronRight, LayoutGrid, ListChecks } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../componenets/ProductCard';
import Partner from '../componenets/Partner';

export default function ShopPage() {
  const PRODUCTS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const allProducts = Array(36).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Graphic Design`,
    subTitle: `English Department`,
    price1: "$16.48",
    price2: "$6.48",
    image: "https://images.placeholders.dev/300x350",
    colors: ["#008080", "#228B22", "#FFA500", "#0000FF"],
  }));

  const categories = Array(5).fill({
    title: "CLOTHS",
    count: "5 Items",
    image: "https://images.placeholders.dev/200x200",
  });

  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const visibleProducts = allProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <>
      {/* Geniş arka plan */}
      <div className="w-full bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          {/* Sayfa Başlığı ve Breadcrumb */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
            <h2 className="text-2xl font-bold">Shop</h2>
            <div className="text-sm text-gray-500 flex items-center">
              <Link to="/" className="font-bold hover:underline">Home</Link>
              <ChevronRight size={16} className="mx-1" />
              <span>Shop</span>
            </div>
          </div>

          {/* Kategori Kartları */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="relative text-white h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${cat.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-lg">{cat.title}</h3>
                  <p className="text-sm">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ürünler ve Filtreler */}
      <div className="container mx-auto px-4 py-6">
        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4 w-full">
          <p className="text-gray-600 font-medium text-sm hidden lg:block">
            Showing {visibleProducts.length} of {allProducts.length} results
          </p>
          <div className="flex flex-col items-center w-full lg:w-auto">
            <div className="flex items-center gap-2 mb-2 lg:mb-0">
              <span className="font-semibold text-gray-700 text-sm">Views:</span>
              <button className="p-2 border rounded-md hover:bg-gray-100 bg-white text-gray-800">
                <LayoutGrid size={16} fill='black'/>
              </button>
              <button className="p-2 border rounded-md hover:bg-gray-100 bg-white text-gray-800">
                <ListChecks size={16} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <select className="border rounded-md px-4 py-2 text-sm text-gray-700 bg-white w-full lg:w-auto">
              <option>Popularity</option>
              <option>Price low to high</option>
              <option>Price high to low</option>
            </select>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md text-sm w-full lg:w-auto">
              Filter
            </button>
          </div>
        </div>

        {/* Ürün Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Sayfalama */}
        <div className="flex justify-center items-center mt-10 flex-wrap">
          <button
            onClick={() => setCurrentPage(1)}
            className="border px-6 py-4 disabled:opacity-50 disabled:text-gray-500 disabled:bg-gray-100 text-blue-500"
            disabled={currentPage === 1}
          >
            First
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-4 border ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(totalPages)}
            className="border px-6 py-4 disabled:opacity-50 disabled:text-gray-500 disabled:bg-gray-100 text-blue-500"
            disabled={currentPage === totalPages}
          >
            Last
          </button>
        </div>
      </div>

      {/* Partner Logoları */}
      <Partner />
    </>
  );
}