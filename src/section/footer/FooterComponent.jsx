import PropTypes from 'prop-types';
import { SocialIcons } from './footerData';

const FooterComponent = ({title, links}) => {
  return (
      <nav className="hidden lg:block lg:pl-10 lg:ml-10 xl:pl-20 xl:ml-20">
          {/* head */}
          <h6 className="text-white text-3xl font-semibold lg:pt-4 lg:pb-8">
              {title}
          </h6>
          {/* section */}
          <ul className="space-y-2">
              {links.map((item) => (
                  <li key={item.id}>
                      <a
                          href={item.link}
                          className="block text-slate-300 hover:text-white lg:text-xl underline-animation"
                      >
                          {item.name}
                      </a>
                  </li>
              ))}
          </ul>
          {title === "Contact Us" && (
              <div className="flex space-x-7 pt-4">
                  {SocialIcons.map((social) => (
                      <a
                          key={social.id}
                          href={social.href}
                          aria-label={social.ariaLabel}
                          className="text-white text-2xl hover:text-gray-400 transition duration-300"
                      >
                          <i className={`fab fa-${social.icon}`} />
                      </a>
                  ))}
              </div>
          )}
      </nav>
  );
};

FooterComponent.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FooterComponent