import CardData from "./CardData";
import EventList from "./EventList";

// card page
const Card = () => {
    return (
        <div className="bg-[#fdfafa]">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-gray-900 text-3xl md:text-5xl lg:text-7xl font-playfair font-medium mb-4">
                        What We Serve To Plan Your
                        <div className="block lg:inline">
                            <span className="text-olive-600 ml-2">                 
                                Best Celebration
                            </span>
                        </div>
                    </h1>
                    <p className="text-gray-600 text-base md:text-xl lg:text-3xl font-poppins mx-auto lg:py-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed dapibus placerat velit.
                    </p>
                </div>
                <EventList events={CardData} />
            </div>
        </div>
    );
};

export default Card;
