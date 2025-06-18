import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ShoppingCart, Heart, Eye } from 'lucide-react';
import BestSeller from '../componenets/BestSeller';
import Partner from '../componenets/Partner';
import RatingStars from '../componenets/RatingStars';
import { useState } from 'react';


const products = [
    {
        id: '1',
        title: 'Floating Phone',
        rating: 3.7,
        reviewCount: 10,
        price: 1139.33,
        inStock: true,
        description: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.',
        descImg: "https://images.placeholders.dev/300x350",
        colors: ['#228B22', '#1D1F36', '#FFA500', '#008080'],
        images: [
            'https://images.placeholders.dev/500x500',
            'https://images.placeholders.dev/80',
            'https://images.placeholders.dev/80',
        ],
    },
    // İsteğe göre başka ürünler de eklenebilir
];

export default function ProductDetailPage() {
    const { id } = useParams();
    const product = products.find((item) => item.id === id);
    const [activeTab, setActiveTab] = useState('description');

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold">Product not found</h2>
                <Link to="/shop" className="text-blue-600 underline">Back to shop</Link>
            </div>
        );
    }

    return (
        <div className="w-full bg-gray-50 py-6">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Link to="/" className="font-bold hover:underline">Home</Link>
                    <ChevronRight size={16} className="mx-1" />
                    <Link to="/shop">Shop</Link>
                    <ChevronRight size={16} className="mx-1" />
                    <span className="text-blue-600">{product.title}</span>
                </div>

                {/* Product Section */}
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left - Images */}
                    <div className="flex-1">
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            className="rounded w-full"
                        />
                        <div className="flex gap-2 mt-4">
                            {product.images.slice(1).map((img, i) => (
                                <img key={i} src={img} className="border rounded w-20 h-20 object-cover" />
                            ))}
                        </div>
                    </div>

                    {/* Right - Info */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
                        <div className="flex items-center gap-2 mb-2">
                            <RatingStars rating={product.rating} />
                            <span className="text-sm text-gray-600 font-bold">{product.reviewCount} Reviews</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-800 mb-1">${product.price.toFixed(2)}</p>
                        <p className="text-green-600 mb-4">{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                        <p className="text-gray-600 mb-4">{product.description}</p>

                        {/* Color Options */}
                        <div className="flex gap-2 mb-4">
                            {product.colors.map((color, i) => (
                                <div key={i} className="w-6 h-6 rounded-full border" style={{ backgroundColor: color }} />
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 mb-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Select Options</button>
                            <button className="border p-2 rounded-full">
                                <Heart size={18} />
                            </button>
                            <button className="border p-2 rounded-full">
                                <ShoppingCart size={18} />
                            </button>
                            <button className="border p-2 rounded-full">
                                <Eye size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center justify-center gap-6 border-b text-sm text-gray-500 font-medium pb-4 mt-6">
                    <button
                        className={`pb-2 transition-all ${activeTab === 'description'
                            ? 'font-bold'
                            : ''
                            }`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button
                        className={`pb-2 transition-all ${activeTab === 'additional'
                            ? 'font-bold'
                            : ''
                            }`}
                        onClick={() => setActiveTab('additional')}
                    >
                        Additional Information
                    </button>
                    <button
                        className={`pb-2 transition-all ${activeTab === 'reviews'
                            ? 'font-bold'
                            : ''
                            }`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews <span className='text-green-500 font-semibold'>(0)</span>
                    </button>
                </div>
                <div className="my-6 text-gray-700 ">
                    {activeTab === 'description' && (
                        <div className="flex flex-col md:flex-row gap-12 ">
                            <img
                                src={product.descImg}
                                alt=""
                                className="object-cover rounded shadow-2xl"
                            />

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold mb-2">the quick fox jumps over</h3>
                                    <p className="mb-4">{product.description}</p>
                                    <p className="mb-4">{product.description}</p>
                                    <p>{product.description}</p>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-bold mb-2">the quick fox jumps over</h3>
                                    <ul className="ml-1 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight size={16} className="text-gray-500 mt-[2px]" />
                                            <span>the quick fox jumps over the lazy dog</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight size={16} className="text-gray-500 mt-[2px]" />
                                            <span>the quick fox jumps over the lazy dog</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight size={16} className="text-gray-500 mt-[2px]" />
                                            <span>the quick fox jumps over the lazy dog</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight size={16} className="text-gray-500 mt-[2px]" />
                                            <span>the quick fox jumps over the lazy dog</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'additional' && (
                        <>

                        </>
                    )}

                    {activeTab === 'reviews' && (
                        <>

                        </>
                    )}
                </div>

            </div>

            <BestSeller />
            <Partner />
        </div>
    );
}
