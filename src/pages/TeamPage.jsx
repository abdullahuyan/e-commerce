import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const teamMembers = [
  {
    img: 'https://randomuser.me/api/portraits/women/1.jpg',
    name: 'Username',
    job: 'Profession',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Username',
    job: 'Profession',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: 'Username',
    job: 'Profession',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Username',
    job: 'Profession',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Username',
    job: 'Profession',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Username',
    job: 'Profession',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Username',
    job: 'Profession',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/7.jpg',
    name: 'Username',
    job: 'Profession',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Username',
    job: 'Profession',
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white text-center text-[#252B42]">
      {/* Başlık */}
      <section className="py-20">
        <h5 className="text-sm font-semibold text-gray-500 tracking-widest mb-2">WHAT WE DO</h5>
        <h1 className="text-4xl font-bold mb-4">Innovation tailored for you</h1>
        <div className="text-sm text-gray-500 flex items-center justify-center">
              <Link to="/" className="font-bold hover:underline">Home</Link>
              <ChevronRight size={16} className="mx-1" />
              <span>Team</span>
            </div>
      </section>

      {/* Görseller */}
      <section className="w-full flex flex-col md:flex-row mb-20">
  {/* Sol: Büyük Görsel */}
  <div className="md:w-1/2 w-full h-[500px]">
    <img
      src="https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg"
      alt="Main"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Sağ: 4 Küçük Görsel */}
  <div className="md:w-1/2 w-full grid grid-cols-2 grid-rows-2">
    <img
      src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg"
      alt="1"
      className="w-full h-[250px] object-cover"
    />
    <img
      src="https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg"
      alt="2"
      className="w-full h-[250px] object-cover"
    />
    <img
      src="https://images.pexels.com/photos/2983466/pexels-photo-2983466.jpeg"
      alt="3"
      className="w-full h-[250px] object-cover"
    />
    <img
      src="https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg"
      alt="4"
      className="w-full h-[250px] object-cover"
    />
  </div>
</section>


      {/* Takım Üyeleri */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 max-w-6xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="text-center">
              <img src={member.img} alt={member.name} className="w-full h-80 object-cover rounded" />
              <h4 className="font-bold mt-4">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.job}</p>
              <div className="flex justify-center gap-4 mt-2 mb-8 text-[#23A6F0] text-lg">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Start your 14 days free trial</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
        </p>
        <button className="bg-[#23A6F0] text-white px-6 py-3 rounded hover:bg-blue-600 mb-8">
          Try it free now
        </button>
        <div className="flex justify-center gap-6 text-[#252B42] text-xl">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </section>
    </div>
  );
}
