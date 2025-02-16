import CitySelector from "./CitySelector";
import Services from "./Services";
import './Nav.css';

//<div className="navbar flex items-center justify-between px-12">
//<div className=" flex-1 flex justify-center items-center"
const Nav = () => {
    return (
        <header className="bg-white relative">
            <div className=" navbar px-12 max-w-[1920px] mx-auto relative">
                <div className="flex items-center">
                    <p className="ml-4 text-2xl text-black font-medium">
                        Are you a Vendor?
                    </p>
                </div>
                <div className=" absolute left-1/2 transform -translate-x-1/2 flex items-center">
                    <span className="text-3xl font-semibold gradient-text">
                        MyGala
                    </span>
                </div>
                {/* flex-1  */}
                <div className=" gap-4 flex justify-end flex-1 items-center">
                    <ul className="menu menu-horizontal px-1">
                        <CitySelector
                            onSelect={(city) => console.log(city)}
                            className="select select-bordered w-full max-w-xs bg-[#ffefea] border-none text-black text-lg font-medium" //FFEFEA
                        />

                        <Services />
                    </ul>
                </div>
                {/* login btn */}
                <div>
                    <a className="btn">Login</a>
                </div>
            </div>
        </header>
    );
};

export default Nav;

