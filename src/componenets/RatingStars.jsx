// components/RatingStars.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as solidStar,
  faStarHalfAlt as halfStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

export default function RatingStars({ rating = 0 }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      // Tam yıldız
      stars.push(
        <FontAwesomeIcon key={i} icon={solidStar} className="text-yellow-500" />
      );
    } else if (rating >= i - 0.5) {
      // Yarım yıldız
      stars.push(
        <FontAwesomeIcon key={i} icon={halfStar} className="text-yellow-500" />
      );
    } else {
      // Boş yıldız
      stars.push(
        <FontAwesomeIcon key={i} icon={regularStar} className="text-yellow-500" />
      );
    }
  }

  return <div className="flex gap-[2px]">{stars}</div>;
}
