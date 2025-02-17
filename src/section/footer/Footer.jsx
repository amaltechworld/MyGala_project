
import { F_logo } from "../../assets/images";
import { footerData } from "./footerData";
import FooterComponent from "./FooterComponent";

const Footer = () => {
    return (
        <footer className="bg-[#11235a] p-10 ">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-32 text-center">
                <aside className="flex flex-col items-start justify-center lg:pl-36 lg:pt-2 lg:pb-8">
                    {/* logo lg:pl-36 */}
                    <img
                        src={F_logo}
                        alt="footer_logo"
                        className=" lg:pt-2 lg:pb-8"
                    />
                    <p className="text-white md:text-xl lg:text-2xl">
                        Welcome to your one-
                        <br />
                        stop online marketplace
                        <br />
                        for top-notch services
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
            </div>
        </footer>
    );
};

               

export default Footer;
