import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const {_id, img, title, price } = service
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions flex justify-between items-center">
                    <p className="text-red-600">Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}><button className="text-red-600"><FaAngleRight></FaAngleRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;