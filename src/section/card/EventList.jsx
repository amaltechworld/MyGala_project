import PropTypes from "prop-types";
import EventCard from "./EventCard";

// card
const EventList = ({ events }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10">
            {events.map((event, index) => (
                <EventCard
                    key={index}
                    title={event.title}
                    description={event.description}
                    image={event.image}
                />
            ))}
        </div>
    );
};

EventList.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default EventList;
