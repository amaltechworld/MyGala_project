import PropTypes from "prop-types";

// card component
const EventCard = ({ title, description, image }) => {
    return (
        <div className="bg-white text-center rounded-lg p-12 md:p-8 shadow-md hover:bg-[#A6B37D] hover:shadow-lg transition-shadow group min-h-[300px]">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900 font-playfair mb-3">
                {title}
            </h3>
            <p className="text-gray-600 font-poppins mb-4">{description}</p>
            <div className="flex justify-center">
                <span className="text-4xl text-gray-400 group-hover:text-black transition-transform transform group-hover:translate-x-2">
                    <i className="fas fa-angle-double-right "></i>
                </span>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default EventCard;
