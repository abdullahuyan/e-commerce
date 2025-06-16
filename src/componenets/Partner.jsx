
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
    <div className="bg-gray-50 py-4 w-full px-4 border-b-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around my-8 text-gray-500 text-6xl bg-gray-50 ">
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