import PropTypes from "prop-types";
import  { useState } from "react";

const CitySelector = ({ onSelect, className = "" }) => {
    const [selectedCity, setSelectedCity] = useState(null);


    const cities = [
        { id: "1", name: "New York" },
        { id: "2", name: "London" },
        { id: "3", name: "Tokyo" },
        { id: "4", name: "Paris" },
        { id: "5", name: "Dubai" },
        //  cities as needed
    ];

    const handleCityChange = (event) => {
        const cityId = event.target.value;
        const city = cities.find((c) => c.id === cityId);
        if (city) {
            setSelectedCity(city);
            onSelect(city);
        }
    };

    return (
        <div className="relative">
            <select
                className={`select select-bordered w-full max-w-xs ${className}`}
                value={selectedCity?.id || ""}
                onChange={handleCityChange}
            >
                <option value="" disabled>
                    Select City
                </option>
                {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                        {city.name}
                    </option>
                ))}
            </select>

        </div>
    );
};

CitySelector.propTypes = {
    onSelect: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default CitySelector;
