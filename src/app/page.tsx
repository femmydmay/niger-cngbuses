import Image from "next/image";
import { Inter } from "next/font/google";

import Link from "next/link";
import Header from "../header/header";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Header />

        <section className="min-h-[60vh] w-11/12 items-center font-efg mb-20  bg-[#f7f9fc] bg-cover  text-justify -mt-10 mx-auto">
          <div className="">
            <h2 className="text-slate-900 font-bold   mt-20   text-xl   text-center">
              Digital and convinient Card Payment System, for the Niger State
              Mass Transit Buses. Powered by SAMAY CLASSIC SYNERGY LIMITED{" "}
              <br />( S.C.S.L) A digital and innovative Information Technology
              Firm.
            </h2>
            <div className="grid max-md:grid-cols-1 grid-cols-3 lg:h-[40vh] max-md:gap-10 items-center  gap-4">
              <Image
                className="
              border-slate-900 rounded-lg shadow-sm mt-4
          w-[100%] h-[80%]  items-center  top-0"
                src="/transp1.jpg"
                width={300}
                height={300}
                alt="Picture of the bgaboutus2"
              />

              <div>
                <p className={" text-justify text-sm mt-10 mb-10"}>
                  NIGER STATE MASS TRANSIT Bus System, Powered by SAMAY CLASSIC
                  SYNERGY LIMITED (S.C.S.L) is designed to cater to the needs of
                  daily commuters, tourists, and occasional travelers. The buses
                  run on a fixed schedule, ensuring timely departures and
                  arrivals, which help passengers plan their journeys with
                  precision. With the use of Digital Bus pass cards and readers.
                  <br /> In the bustling landscape of urban commuting, the mass
                  transit bus service operated by Niger State stands out as a
                  crucial lifeline, efficiently connecting passengers from Point
                  A to Point B. This service exemplifies convenience,
                  reliability, and sustainability in modern transportation.
                </p>
              </div>
              <div className="">
                <Image
                  className="
              border-slate-900 rounded-lg shadow-sm mt-4
          w-[100%] h-[80%]   mb-10 top-0"
                  src="/transp2.jpg"
                  width={400}
                  height={400}
                  alt="Picture of the bgaboutus2"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Picture 1 Samay */}

        <section className="min-h-[60vh] w-11/12 items-center  font-efg   bg-[#f7f9fc] bg-cover mt-40 text-justify  mx-auto">
          <div className="">
            <h2 className="text-slate-900   mb-10   text-4xl   text-center">
              With about 200 Compressed Natural Gas (CNG) Buses
              <br /> inagaurated by his Excellency Mohammed Umar Bago
            </h2>
            <div className="grid max-md:grid-cols-1 grid-cols-3 lg:h-[40vh] max-md:gap-10 items-center  gap-4">
              <Image
                className="
              border-slate-900 rounded-lg shadow-sm mt-7
          w-[100%] h-[80%]  items-center  top-0"
                src="/nbusreal1.jpg"
                width={500}
                height={500}
                alt="Picture of the bgaboutus2"
              />

              <div>
                <Image
                  className="
              border-slate-900 rounded-lg shadow-sm mt-7
          w-[100%] h-[80%]  items-center  top-0"
                  src="/nbusback1.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the bgaboutus2"
                />
              </div>
              <Image
                className="
              border-slate-900 rounded-lg shadow-sm mt-7
          w-[100%] h-[80%]   mb-6 top-0"
                src="/nbuses1.jpg"
                width={500}
                height={500}
                alt="Picture of the bgaboutus2"
              />
            </div>
          </div>
        </section>

        {/* ends here gov bus inauguration */}

        <div className="w-11/12 grid  mx-auto py-20 mt-10 h-full gap-9s z-10 bg-[#f7f9fc]">
          <section className="w-full">
            <h3 className="text-slate-800  font-bold text-xl text-center -mt-10  my-3">
              Mass Transit buses with Card Payment System
            </h3>
          </section>
          <div>
            <Image
              className="mx-auto mb-9"
              src="/busniger.jpg"
              width={800}
              height={800}
              alt=""
            />
          </div>
        </div>

        <section className="min-h-[60vh] w-11/12  items-center mb-20   bg-[#b9d1f5] bg-cover h-full text-justify mt-4 mx-auto">
          <div className="">
            <h2 className="text-[#be123c] p-5 rounded-xl  shadow-2xl ml-8 mr-12 font-bold bg-[#06ee4c] font-efg uppercase  mt-10   text-xl   text-center">
              EASY TO USE CARD, TOP UP AND RIDE!
            </h2>
            <div>
              <Image
                className="mx-auto mb-9 mt-6"
                src="/govcard.jpg"
                width={400}
                height={400}
                alt=""
              />
            </div>

            <section>
              <div className="grid md:grid-cols-2 gap-2 ">
                <article className=" bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                  <div className="flex items-center sm:gap-8 ">
                    <Image
                      src="/search.jpg"
                      width={50}
                      height={50}
                      alt="search image"
                    />

                    <div>
                      <h3 className="mt-4 text-lg text-black font-medium sm:text-xl">
                        <Link href="" className="hover:underline">
                          Register & Top Up Card
                        </Link>
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">
                        Get your card from a registered and vetted agent.
                        Register your Card with a Niger State Mass transit
                        agent. Top up card in any way convinient, via USSD, Bank
                        Transfer or Card Payment.
                      </p>
                      <div>
                        <button className="block  rounded bg-primary text-white py-2 px-4 text-sm font-medium transition hover:scale-105 float-right">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className=" bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                  <div className="flex items-center sm:gap-8 ">
                    <Image
                      src="/search.jpg"
                      width={50}
                      height={50}
                      alt="search image"
                    />

                    <div>
                      <h3 className="mt-4 text-black  text-lg font-medium sm:text-xl">
                        <Link href="" className="hover:underline">
                          Tap the card and tap Out
                        </Link>
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">
                        Make sure you tap in to register the start of the ride,
                        and tap out when exiting bus. Your card will be debited
                        with the right amount, meant for the Bus ride. Note:
                        keep the card well, do not bend or get it wet.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </section>

        <section className="min-h-[60vh] w-10/12 -mt-40  mx-auto py-24 lg:py-28 overflow-hidden">
          <h2 className="text-slate-800 font-bold mt-20 uppercase mb-20  text-[3rem] font-cde text-center">
            Services
          </h2>
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/3 p-8">
                <div className="max-w-xs mx-auto text-center">
                  <Image
                    className="mx-auto mb-9"
                    src="/busstop1.jpg"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <h3 className="mb-4 text-xl font-semibold tracking-tight">
                    PickUp at Bustop Terminal
                  </h3>
                  <p className="mb-8 tracking-tight">
                    Buses will be on schedule and available at Bus Terminals,
                    and variuos Bus Stops
                  </p>
                  <a
                    className="font-semibold text-indigo-500 hover:text-indigo-600 tracking-tight transition duration-200"
                    href="#"
                  >
                    <Link href="/Business"> Go to business page</Link>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-8">
                <div className="max-w-xs mx-auto text-center">
                  <Image
                    className="mx-auto mb-9"
                    src="/busride.jpg"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <h3 className="mb-4 text-xl font-semibold tracking-tight">
                    Clean and convenient bus rides
                  </h3>
                  <p className="mb-8 tracking-tight">
                    Buses will be able to commute and move passengers, from
                    point a to b.
                  </p>
                  <a
                    className="font-semibold text-indigo-500 hover:text-indigo-600 tracking-tight transition duration-200"
                    href="#"
                  >
                    <Link href="/Business"> Go to business page</Link>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-8">
                <div className="max-w-xs mx-auto text-center">
                  <Image
                    className="mx-auto mb-9"
                    src="/buscard1.jpg"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <h3 className="mb-4 text-xl font-semibold tracking-tight">
                    Card Payment
                  </h3>
                  <p className="mb-8 tracking-tight">
                    Tap in card on entry and tap card out at exit. Do not forget
                    this process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid place-items-center -mt-40 min-h-[60dvh] ">
          <div className="w-10/12 grid text-center  gap-9s">
            <section>
              <h3 className="text-[#be123c]  text-center sm:text-xl md:text-2xl lg:text-3xl font-bold  font-cde my-2">
                Contract Execution/Project Management
              </h3>
              <article className="text-slate-900 text-center sm:text-xl md:text-2xl lg:text-3xl leading-[3rem]">
                At S.C.S.L technologies we believe in <br />
                diverifying and have highly skilled and trained personnel in
                different areas of tech...
              </article>
            </section>

            <div className="mt-3 mb-6">
              <a
                className="font-semibold text-indigo-500 hover:text-indigo-600 tracking-tight transition duration-200"
                href="#"
              >
                <Link href="/Business"> Go to business page</Link>
              </a>
            </div>
          </div>
        </div>

        <div className="grid  place-items-center mt-10 relative min-h-[90dvh]  ">
          <Image
            className="absolute
              border-gray-100  shadow-sm 
          w-[100%] h-full object-cover rounded-3xl -z-10 top-0"
            src="/yelowblue1.jpg"
            width={500}
            height={500}
            alt="Picture of the computerbg"
          />

          {/* <section className="min-h-[60vh] w-11/12 w-full items-center mb-20   bg-[#b9d1f5] bg-cover h-full text-justify mt-4 mx-auto"> */}
          <div className="">
            <h2 className="mt-4 text-white bg-[#be123c] shadow-2xl rounded p-5 sm:text-xl md:text-2xl lg:text-3xl font-medium ml-10 mr-14 text-justify">
              Our comfortable and newly designed CNG buses, are available for
              everyone. We know commuting can be stressful, that is why we put
              your comfort first. Safe Drivers, AC available and online payment
              system.
            </h2>

            <div className="grid max-md:grid-cols-1 grid-cols-3 lg:h-[40vh] max-md:gap-10 items-center  gap-4">
              <div>
                <Image
                  className="
              border-gray-100  shadow-sm 
          w-[80%] h-50 rounded ml-10 mt-7 -z-10 top-0"
                  src="/driverbus.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the computerbg"
                />

                <div className="mt-3 mx-auto ">
                  <button className="butenq_request flex flex-col items-center justify-center px-3 py-1 ml-20 bg-slate-300  text-bold text-[.8rem] h-10 rounded font-bold  hover:bg-green-200 hover:text-red-900">
                    Safe and on-time{" "}
                    <p>
                      <Link href="/Business"> Drivers</Link>
                    </p>
                  </button>
                </div>
              </div>
              <div>
                <Image
                  className="
              border-gray-100  shadow-sm 
          w-[80%] h-50 rounded ml-10 mt-7 -z-10 top-0"
                  src="/ac2.webp"
                  width={500}
                  height={500}
                  alt="Picture of the computerbg"
                />

                <div className="mt-3 mx-auto ">
                  <button className="butenq_request flex flex-col items-center justify-center px-3 py-1 ml-20 bg-slate-300  text-bold text-[.8rem] h-10 rounded font-bold  hover:bg-green-200 hover:text-red-900">
                    Cozy{" "}
                    <p>
                      <Link href="/Business"> Air Conditioning</Link>
                    </p>
                  </button>
                </div>
              </div>
              <div>
                <Image
                  className="
              border-gray-100  shadow-sm 
          w-[80%] h-50 rounded ml-10 mt-7 -z-10 top-0"
                  src="/techbg22.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the computerbg"
                />

                <div className="mt-3 mx-auto ">
                  <button className="butenq_request flex flex-col items-center justify-center px-3 py-1 ml-20 bg-slate-300  text-bold text-[.8rem] h-10 rounded font-bold  hover:bg-green-200 hover:text-red-900">
                    Online{" "}
                    <p>
                      <Link href="/Business"> Payment System</Link>
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* </section> */}
        </div>
        {/* picture grid end */}
        <div className="grid mt-20 place-items-center  relative min-h-[90dvh]  ">
          <Image
            className="absolute
              border-gray-100  shadow-sm 
          w-[100%] h-[100%] object-cover rounded-3xl -z-10 "
            src="/yellowcard.jpg"
            width={500}
            height={500}
            alt="Picture of the computerbg"
          />

          {/* <section className="min-h-[60vh] w-11/12 w-full items-center mb-20   bg-[#b9d1f5] bg-cover h-full text-justify mt-4 mx-auto"> */}
          <div className="">
            <div className="grid max-md:grid-cols-1 grid-cols-2 lg:h-[40vh] max-md:gap-10 items-center  gap-4">
              <div>
                <Image
                  className="
              border-gray-100  shadow-sm 
          w-[80%] h-50 rounded-2xl ml-10 mt-6 -z-10 top-0 "
                  src="/busride.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the computerbg"
                />
              </div>
              <div>
                <div>
                  <h1 className=" text-white sm:text-xl md:text-2xl lg:text-3xl ml-10  bg-opacity-50 mr-80 px-5 py-2 rounded-2xl bg-slate-500">
                    BUS ROUTES
                  </h1>
                </div>
                <h2 className="mt-4  text-black ml-10 font-medium  sm:text-xl md:text-2xl lg:text-3xl  ">
                  The Mass Transit buses will cover major bus routes.
                  <br /> Within Niger State and to the airport.
                  <br /> Bus terminals will be situated at easy to reach
                  locations and buses will ply major roads.
                </h2>
                <div>
                  <h2 className="mt-10 ml-10 sm:text-xl md:text-2xl lg:text-3xl bg-opacity-50 text-white  mr-60 px-5 py-2 rounded-2xl bg-slate-500">
                    NST0001 TO NST0002
                  </h2>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          {/* </section> */}
        </div>

        <section className="min-h-[60vh] w-11/12 mb-60 text-justify mt-40 mx-auto">
          <h2 className="text-slate-800   uppercase mb-12 mt-20  sm:text-xl md:text-2xl lg:text-3xl font-cde font-bold text-center">
            NIGER STATE MASS TRANSIT SYSTEM <br />
            TO AND FRO DESTINATION.
          </h2>

          <div className="">
            <h2 className="text-slate-800  font-efg uppercase  mt-10  sm:text-xl md:text-2xl lg:text-3xl   text-center">
              Enhancing Lives and Serving People: The Impact of Our Mass Transit
              Bus System
            </h2>
            <div className="grid max-md:grid-cols-1 grid-cols-3 lg:h-[40vh] max-md:gap-10  gap-4">
              <Image
                className="
              border-slate-900 rounded-lg shadow-sm mt-7
          w-[100%] h-[90%]    top-0"
                src="/nigerbusemblem.jpg"
                width={400}
                height={400}
                alt="Picture of the bgaboutus2"
              />
              <div>
                <p className={"lor text-justify mt-10 mb-10"}>
                  Niger State mass transit and S.C.S.L, we believe in the power
                  of efficient, reliable, and accessible transportation to
                  transform communities and improve the quality of life. Our
                  mass transit bus system is designed with the needs of the
                  people in mind, providing a service that not only connects
                  destinations but also fosters community growth and individual
                  well-being. Improving Daily Commutes Our mass transit bus
                  system revolutionizes the daily commute by offering:
                  Convenience: With buses running on a fixed schedule and
                  frequent departures, commuters can rely on timely and
                  predictable transportation.
                </p>
                <div className="mx-auto mt-3  ">
                  <button className="butenq_request px-3 py-1 bg-slate-300  text-bold text-[.8rem] h-10 rounded font-bold  hover:bg-green-200 hover:text-red-900">
                    Read More{" "}
                    <p>
                      <Link href="/Business"> Business</Link>
                    </p>
                  </button>
                </div>
              </div>

              <Image
                className="
              border-slate-900 rounded-lg shadow-sm mt-7
          w-[100%] h-[90%]   mb-6 top-0"
                src="/nigerbusemblem2.jpg"
                width={400}
                height={400}
                alt="Picture of the bgaboutus2"
              />
            </div>
          </div>
          {/* picture Nexus 2  */}
          <div className="mt-40 mx-auto justify-center gap-10 flex ">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="
              border-slate-900  shadow-sm mt-7
          w-[100%] h-[50%]   mb-6 top-0 rounded-lg overflow-hidden transform transition duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                src="/play_store.png"
                width={500}
                height={500}
                alt="Picture of the bgaboutus2"
              />
            </a>

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="
              border-slate-900  shadow-sm mt-7
          w-[100%] h-[50%]  mb-6 top-0 rounded-lg overflow-hidden transform transition duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                src="/app_store.png"
                width={500}
                height={500}
                alt="Picture of the bgaboutus2"
              />
            </a>
          </div>

          <div className="mt-10">
            <h2 className="text-slate-800 font-efg  uppercase bg-[#c3e408] rounded-xl  mb-10  text-2xl mt-10  text-center">
              TOP UP VIA YOUR SMARTPHONE/CHECK OUR ROUTES ON YOUR PC
            </h2>
            <div className="grid max-md:grid-cols-1 grid-cols-3 lg:h-[40vh] max-md:gap-10 gap-4 mb-0">
              <Image
                className="
              border-slate-900 rounded-lg shadow-sm mt-7
          w-[100%] h-[80%]   mb-6 top-0"
                src="/techbg3.jpg"
                width={500}
                height={500}
                alt="Picture of the bgaboutus2"
              />
              <div>
                <p className={" lor text-justify mt-10 mb-10"}>
                  Download the App: Start by downloading our official app from
                  the App Store or Google Play. The app is free and designed to
                  be user-friendly, making the top-up process simple and
                  intuitive. Register or Log In: If you are a new user, register
                  your account by providing some basic information. Existing
                  users can simply log in using their credentials. Link Your Bus
                  Card: Once logged in, link your bus card to your account by
                  entering the card number.
                </p>
                <div className=" mx-auto mt-30">
                  <button className="butenq_request px-3 py-1 bg-slate-300  text-bold text-[.8rem] h-10 rounded font-bold  hover:bg-green-200 hover:text-red-900">
                    Read More{" "}
                    <p>
                      <Link href="/Business"> Business</Link>
                    </p>
                  </button>
                </div>
              </div>

              <Image
                className="
              border-slate-900 rounded-lg shadow-sm mt-7
          w-[100%] h-[80%]   mb-6 top-0"
                src="/techbg1.jpg"
                width={500}
                height={500}
                alt="Picture of the bgaboutus2"
              />
            </div>
          </div>
        </section>

        {/* picture grid ends */}

        <footer />
      </main>
    </>
  );
}
