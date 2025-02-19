import PropTypes from "prop-types";
import { SocialIcons } from "../footer/footerData";

const NewsIcons = ({ title, links }) => {
    return (
        <nav className="  block lg:hidden ">
            {/* head */}
            <h6 className="text-black text-xl md:text-2xl font-playfair font-semibold pb-2 lg:pt-4 lg:pb-8">
                {title}
            </h6>
            {/* section */}
            <ul className="space-y-1 font-poppins">
                {links.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.link}
                            className="block text-[#454545] hover:text-black text-base md:text-lg underline-animation"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
            {title === "Contact Us" && (
                <div className="flex space-x-4 pt-4">
                    {SocialIcons.map((social) => (
                        <a
                            key={social.id}
                            href={social.href}
                            aria-label={social.ariaLabel}
                            className="text-[#788247] text-2xl hover:text-gray-400 transition duration-300"
                        >
                            <i className={`fab fa-${social.icon}`} />
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

NewsIcons.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default NewsIcons;
