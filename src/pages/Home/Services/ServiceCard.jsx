import { FaAngleRight } from "react-icons/fa";


const ServiceCard = ({ service }) => {
    const { img, title, price } = service
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
                    <button className="text-red-600"><FaAngleRight></FaAngleRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;