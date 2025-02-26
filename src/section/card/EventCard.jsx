import PropTypes from "prop-types";

// card component
const EventCard = ({ title, description, image }) => {
    return (
        <div className="bg-white text-center rounded-3xl p-2 md:p-8 border-2 border-[#e4e0e0] hover:bg-[#959b71] hover:shadow-lg transition-shadow group md:min-h-[300px]">
            <img
                src={image}
                alt={title}
                className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg md:text-2xl font-semibold text-gray-900 font-playfair mb-3">
                {title}
            </h3>
            <p className="text-gray-600 font-poppins mb-4 hidden lg:block">
                {description}
            </p>
            <div className="flex justify-center">
                <span className="md:text-4xl text-gray-400 group-hover:text-black transition-transform transform group-hover:translate-x-2">
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
