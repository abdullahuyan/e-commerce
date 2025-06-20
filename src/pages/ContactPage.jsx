import { Phone, MapPin, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CurvedArrow from '../assets/CurvedArrow';


export default function ContactPage() {
    return (
        <div className="w-full bg-white text-gray-800">
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-12 px-4 gap-16">
                <div className="lg:w-1/2">
                    <h4 className="uppercase text-sm font-medium mb-8 text-blue-950">Contact us</h4>
                    <h1 className="text-5xl font-bold mb-8 leading-snug text-blue-950">Get in touch <br />today!</h1>
                    <p className="text-gray-600 mb-6">
                        We know how large objects will act, but things on a small scale
                    </p>
                    <p className="mb-1 font-bold text-blue-950">Phone: +451 215 215</p>
                    <p className="mb-8 font-bold text-blue-950">Fax: +451 215 215</p>

                    <div className="flex gap-4 mt-4 text-blue-950 text-3xl">
                        <a href="#" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <img
                        src="https://images.placeholders.dev/350"
                        alt="Happy customers"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </div>
            <div className=" py-12">
                <h3 className="text-center text-lg uppercase text-gray-500 font-semibold mb-2">Visit our office</h3>
                <h2 className="text-center text-2xl font-bold mb-10">We help small businesses with big ideas</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
                    <div className="p-12 text-center min-h-[340px] flex flex-col justify-between items-center">
                        <Phone className="mx-auto text-[#23A6F0] text-3xl size-16" />
                        <div>
                            <p>georgia.young@example.com</p>
                            <p className="mb-4">georgia.young@ple.com</p>
                            <h4 className="font-bold ">Get Support</h4>
                        </div>
                        <button className="border border-[#23A6F0] text-[#23A6F0] font-bold px-4 py-2 rounded-2xl hover:bg-blue-50 ">
                            Submit Request
                        </button>
                    </div>

                    <div className="bg-blue-950 text-white p-12 text-center min-h-[340px] flex flex-col justify-between items-center">
                        <MapPin className="mx-auto text-[#23A6F0] text-3xl size-16" />
                        <div>
                            <p>georgia.young@example.com</p>
                            <p className="mb-4">georgia.young@ple.com</p>
                            <h4 className="font-bold ">Get Support</h4>
                        </div>
                        <button className="border border-[#23A6F0] text-[#23A6F0] font-bold px-4 py-2 rounded-2xl hover:bg-blue-50 ">
                            Submit Request
                        </button>
                    </div>

                    <div className="bg-white p-12 text-center min-h-[340px] flex flex-col justify-between items-center">
                        <Mail className="mx-auto text-[#23A6F0] text-3xl size-16" />
                        <div>
                            <p>georgia.young@example.com</p>
                            <p className="mb-4">georgia.young@ple.com</p>
                            <h4 className="font-bold ">Get Support</h4>
                        </div>
                        <button className="border border-[#23A6F0] text-[#23A6F0] font-bold px-4 py-2 rounded-2xl hover:bg-blue-50 ">
                            Submit Request
                        </button>
                    </div>
                </div>

            </div>

            <div className="flex flex-col justify-center items-center gap-2 text-center py-12">
                <CurvedArrow className='size-24'/>
                <p className="text-sm font-semibold text-gray-500 uppercase mb-2">We can’t wait to meet you</p>
                <h2 className="text-4xl font-bold mb-4">Let’s Talk</h2>
                <button className="bg-[#23A6F0] text-white px-6 py-3 rounded hover:bg-blue-600">
                    Try it free now
                </button>
            </div>
        </div>
    );
}
