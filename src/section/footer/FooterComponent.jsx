import PropTypes from 'prop-types';

const FooterComponent = ({title, links}) => {
  return (
      <nav >
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