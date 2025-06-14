export default function ProductBanner() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between bg-white h-[700px] gap-36">
        <div className="w-full md:w-1/2 flex justify-center px-12">
          <img src="https://images.placeholders.dev/700" alt="Model Couple" className="w-full max-w-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <p className="text-gray-500 uppercase text-sm font-bold tracking-wider">SUMMER 2020</p>
          <h2 className="text-4xl md:text-3xl font-bold text-[#252B42] mt-2">Part of the Neural <br /> Universe</h2>
          <p className="text-gray-600 text-base md:text-lg mt-4">
            We know how large objects will act, <br /> but things on a small scale.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-[#2DC071] text-white font-bold py-3 px-6 rounded-md hover:bg-[#25A35A] transition-colors">
              BUY NOW
            </button>
            <button className="bg-transparent border border-[#2DC071] text-[#2DC071] font-bold py-3 px-6 rounded-md hover:bg-[#2DC071] hover:text-white transition-colors">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    );
  }