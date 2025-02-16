
const Services = () => {
  return (
      <div>
          <li className="relative">
              <details className="group">
                  <summary className="text-xl text-black font-medium cursor-pointer list-none items-center">
                      Services
                  </summary>
                  {/* services list */}
                  {/*                   <ul className="absolute left-[-17.7rem] -translate-x-3/4 top-full mt-2 bg-white p-[59px] shadow-lg flex gap-6 w-screen justify-evenly border-t border-t-[#b9b9b9] ">
                   */}
                  {/*  */}
                  <div className="absolute left-0 w-screen transform -translate-x-1/2 top-full ">
                      <ul className=" mt-2 bg-white p-[59px] shadow-lg flex gap-6 justify-evenly border-t border-t-[#b9b9b9] ">
                          <li className="py-1">
                              <a className="flex flex-col items-center gap-3 text-black text-xl font-semibold px-4 py-2 hover:bg-gray-100 rounded-lg">
                                  Photography
                              </a>
                          </li>
                          <li className="py-1">
                              <a className="flex flex-col items-center gap-3 text-black text-xl font-semibold px-4 py-2 hover:bg-gray-100 rounded-lg">
                                  Catering
                              </a>
                          </li>
                          <li className="py-1">
                              <a className="flex flex-col items-center gap-3 text-black text-xl font-semibold px-4 py-2 hover:bg-gray-100 rounded-lg">
                                  Decorators
                              </a>
                          </li>
                          <li className="py-1">
                              <a className="flex flex-col items-center gap-3 text-black text-xl font-semibold px-4 py-2 hover:bg-gray-100 rounded-lg">
                                  Entertainment
                              </a>
                          </li>
                          <li className="py-1">
                              <a className="flex flex-col items-center gap-3 text-black text-xl font-semibold px-4 py-2 hover:bg-gray-100 rounded-lg">
                                  Venues
                              </a>
                          </li>
                          <li className="py-1">
                              <a className="flex flex-col items-center gap-3 text-black text-xl font-semibold px-4 py-2 hover:bg-gray-100 rounded-lg">
                                  Mehandi
                              </a>
                          </li>
                          <li className="py-1">
                              <a className="flex flex-col items-center gap-3 text-black text-xl font-semibold px-4 py-2 hover:bg-gray-100 rounded-lg">
                                  Makeup
                              </a>
                          </li>
                      </ul>
                  </div>
              </details>
          </li>
      </div>
  );
}

export default Services

