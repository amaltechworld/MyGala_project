import { F_logo } from "../../assets/images";
import { footerData } from "./footerData";
import FooterComponent from "./FooterComponent"; // grid grid-cols-1 lg:grid-cols-3

const Footer = () => {
    return (
        <footer className="bg-[#11235a] p-10 lg:pr-36 lg:pl-36">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-36 xl:gap-80 ">
                <aside className="flex flex-col items-center lg:items-start text-center lg:text-left lg:space-y-8">
                    {/* logo lg:pl-36 */}
                    <img src={F_logo} alt="footer_logo" className="lg:pt-2" />
                    <p className="text-white md:text-xl font-poppins leading-relaxed lg:text-2xl lg:pl-5 hidden lg:block">
                        Welcome to your one-
                        <br />
                        stop online marketplace
                        <br />
                        for top-notch services
                    </p>
                    <div className="flex items-center pl-5 ">
                        <div className="border-t-2 border-white py-3">
                            <p className="text-white font-poppins lg:text-xl ">
                                Privacy Policy | Terms
                            </p>
                        </div>
                    </div>
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
