export default function BestSeller() {
    const products = [
      { title: 'Graphic Design', subTitle: 'English Department', price1: '$16.48', price2:'$6.48', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], image: '/bs1.jpg' },
      { title: 'Graphic Design', subTitle: 'English Department', price1: '$16.48', price2:'$6.48', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], image: '/bs2.jpg' },
      { title: 'Graphic Design', subTitle: 'English Department', price1: '$16.48', price2:'$6.48', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], image: '/bs3.jpg' },
      { title: 'Graphic Design', subTitle: 'English Department', price1: '$16.48', price2:'$6.48', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], image: '/bs4.jpg' },
      { title: 'Graphic Design', subTitle: 'English Department', price1: '$16.48', price2:'$6.48', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], image: '/bs5.jpg' },
      { title: 'Graphic Design', subTitle: 'English Department', price1: '$16.48', price2:'$6.48', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], image: '/bs6.jpg' },
      { title: 'Graphic Design', subTitle: 'English Department', price1: '$16.48', price2:'$6.48', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], image: '/bs7.jpg' },
      { title: 'Graphic Design', subTitle: 'English Department', price1: '$16.48', price2:'$6.48', colors: ['#23A6F0', '#23856D', '#E77C40', '#252B42'], image: '/bs8.jpg' },
    ];
  
    return (
      <section className="py-16 px-4 bg-[#F7F7F7]">
        <div className="text-center mb-12">
          <p className="text-[#737373] text-sm mb-2">Featured Products</p>
          <h2 className="text-xl font-bold text-[#252B42] mb-2">BESTSELLER PRODUCTS</h2>
          <p className="text-[#737373] text-xs">Problems trying to resolve the conflict between</p>
        </div>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {products.map((product, index) => (
            <div key={index} className="relative p-4">
              <img src={product.image} alt={product.title} className="w-full h-64 object-fill " />
              <div className="mt-4 text-center">
                <h3 className="text-md font-semibold text-[#252B42]">{product.title}</h3>
                <p className="text-sm text-[#737373]">{product.subTitle}</p>
                <p className="text-md text-[#BDBDBD]">{product.price1} <span className="font-bold text-[#23856D]">{product.price2}</span></p>
                <div className="flex justify-center mt-2">
                  {product.colors.map((color, i) => (
                    <div key={i} className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: color }}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }