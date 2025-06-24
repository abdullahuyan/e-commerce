
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHooli, 
    faLyft, 
    faPiedPiperHat, 
    faStripe, 
    faAws, 
    faRedditAlien 
  } from '@fortawesome/free-brands-svg-icons';
  

export default function Partner() {

  return (
    <>
    {/* Partner Logoları */}
    <div className="bg-gray-50 py-8 w-full px-4 border-b-2 md:px-20 text-center">
    <h2 className="text-xl text-[#252B42] font-bold mb-4">Big Companies Are Here</h2>
        <p className="text-gray-600 mb-8 text-sm">
          Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics
        </p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around mt-16 text-gray-500 text-6xl bg-gray-50 ">
      <FontAwesomeIcon icon={faHooli} />
  <FontAwesomeIcon icon={faLyft} />
  <FontAwesomeIcon icon={faPiedPiperHat} />
  <FontAwesomeIcon icon={faStripe} />
  <FontAwesomeIcon icon={faAws} />
  <FontAwesomeIcon icon={faRedditAlien} />
</div></div>
    </>
  );
}