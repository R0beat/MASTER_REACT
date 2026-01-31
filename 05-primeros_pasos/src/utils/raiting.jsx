import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export const RatingPonderacion = ({ rating, className }) => {
    const estrellas = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            estrellas.push(<IoIosStar key={i} className={className} />);
        } else if (rating >= i - 0.5) {
            estrellas.push(<IoIosStarHalf key={i} className={className} />);
        } else {
            estrellas.push(<IoIosStarOutline key={i} className={className} />);
        }
    }
    return <div className="d-flex">{estrellas}</div>;
};
