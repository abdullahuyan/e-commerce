export default function EditorsPick() {
    const items = [
      {
        title: 'MEN',
        image: '/ep1.jpg',
        classes: 'md:row-span-2 md:col-span-2',
      },
      {
        title: 'WOMEN',
        image: '/ep2.jpg',
        classes: 'md:row-span-2',
      },
      {
        title: 'ACCESSORIES',
        image: '/ep3.jpg',
        classes: 'md:row-span-1',
      },
      {
        title: 'KIDS',
        image: '/ep4.jpg',
      },
    ];
  
    return (
      <section className="py-16 px-4 bg-[#F7F7F7]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#252B42] mb-2">EDITOR’S PICK</h2>
          <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between</p>
        </div>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div key={index} className={`relative h-full ${item.classes || ''}`}>
              <img src={item.image} alt={item.title} className="object-cover w-full h-full rounded-lg" />
              <div className="absolute bottom-4 left-4 bg-white px-6 py-2 font-bold text-sm text-[#252B42] rounded">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }