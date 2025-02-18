import { F_logo } from "../../assets/images";
import { footerData } from "./footerData";
import FooterComponent from "./FooterComponent"; // lg:pl-28

const Footer = () => {
    return (
        <footer className="bg-[#11235a] p-10 lg:pr-36 lg:pl-36">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-32 ">
                <aside className="flex flex-col items-center lg:items-start text-center lg:text-left lg:space-y-8">
                    {/* logo lg:pl-36 */}
                    <img src={F_logo} alt="footer_logo" className="lg:pt-2" />
                    <p className="text-white md:text-xl leading-relaxed lg:text-2xl lg:pl-5 hidden lg:block">
                        Welcome to your one-
                        <br />
                        stop online marketplace
                        <br />
                        for top-notch services
                    </p>
                    <p className="text-white lg:text-xl lg:pl-5">
                        Privacy Policy | Terms
                    </p>
                </aside>

                {/* service and contact section */}
                {footerData && footerData.length > 0 ? (
                    footerData.map((section) => (
                        <FooterComponent
                            key={section.title}
                            links={section.links}
                            title={section.title}
                        />
                    ))
                ) : (
                    <p className="text-white"> No data found</p>
                )}
                {/* social icon section */}
            </div>
        </footer>
    );
};

export default Footer;
