import logo from '../assets/head-logo.webp'
import logor from '../assets/logo-round.webp'
import pay from '../assets/div.webp'
import vid from '../assets/vid.webp'
import img1 from '../assets/img-1.webp'
import img2 from '../assets/img-2.webp'
import shp1 from '../assets/shp01.svg'

const Home = () => {
    return(
        <div>
            <section id='nav' className="flex fixed backdrop-blur-xl w-full top-0 bg-white/90 toppp justify-center md:justify-between p-6 px-12 items-center">
                <img className='h-[1rem] lg:h-auto' src={logo} />
                <div className="pc hidden lg:visible text-black/60 font-medium text-md flex lg:gap-10">
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">About</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Services</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Roadmap</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Statistic</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Token</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Whitepaper</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Team</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">FAQ</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Blog</a>
                </div>
                <button className='rounded-lg pc px-6 py-4 text-white font-medium text-sm grad'>Join Brit World</button>
            </section>
            <section className="mt-[15%] lg:mt-[8%] relative">
                <h1 className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-16 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]">
                Brit Gold Just Entered<br/>
                <span className='font-[100] text-[1.7rem] md:text-[2.7rem] text-black/60'>the Real World</span>
                </h1>

                <div className='pc botttt transition-all duration-500 ease-in-out '>
                    <div className='scale-[50%] md:scale-[100%] md:w-[400px] h-[400px] grad absolute rounded-full drop-shadow-2xl absolute top-4 -left-[8%]'>
                        <img className='m-auto topppp mt-14 ' src={logor} /></div>
                    <div className='scale-[50%] md:scale-[100%] md:w-[150px] h-[150px] bg-white rounded-full drop-shadow-2xl absolute top-[45%] left-[16%]'></div>
                <img className='absolute right-0 w-[25%] top-[10%] bottt' src={shp1} />
                    <div className='scale-[50%] md:scale-[100%] md:w-[150px] h-[150px] bg-white rounded-full drop-shadow-2xl absolute -bottom-[68%] right-[12%]'></div>
                </div>

                <div className='m-auto w-full mt-16 flex gap-3 items-center lg:gap-8 flex-col lg:flex-row justify-center'>
                    <button className='py-4 px-8 grad rounded-md w-11/12 lg:w-fit hover:drop-shadow-xl transition-all duration-500 ease-in-out text-white shad'>Buy Tokens 45% Off</button>
                    <button className='py-4 px-8 bg-blue-200 w-11/12 lg:w-fit hover:bg-blue-600 hover:drop-shadow-xl transition-all duration-500 ease-in-out rounded-md text-white shad'>Whitepapers</button>
                </div>
                <img className='m-auto mt-12 noselect' src={pay} />

            </section>

            <img className='m-auto w-11/12 mt-12 drop-shadow-xl shad hover:p-4 bg-white/20 backdrop-blur-xl hover:scale-[102%] transition-all duration-700 ease-in-out rounded-lg  md:w-1/2' src={vid} />

            <section id="economy" className="mt-8 md:mt-16 relative w-full gap-8 px-3 lg:px-12 flex flex-col-reverse lg:flex-row toppp">
                <p className='absolute mob top-8 m-auto left-12 md:left-0  text-xs text-blue-500'>▽ DECENTRALISED ECONOMY</p>
                <p className='absolute pc top-8 m-auto right-16  text-xs text-blue-500'>▽ DECENTRALISED ECONOMY</p>
                <img className='p-6 object-contain' src={img1} />
                <div className=''>
                    <h1 className="text-black/90 w-10/12 m-auto pt-16 font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"><a className='transition-all duration-500 ease-in-out hover:text-blue-700' href='#about'>A banking platform that <br/><span className='font-[100] text-[1.7rem] md:text-[2.4rem] text-black/60'>enables developer solutions</span></a></h1>
                    <p className="text-black/50 w-10/12 mt-4  m-auto text-lg ">
                    Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in have can mountain thought. Jumbo plus shine sale.
                    </p>
                    <div className='w-10/12 m-auto mt-6 md:mt-10'>
                        <div className='flex gap-3 p-2 justify-start items-start'>
                            <div className='mt-2 '>
                                <svg width="15" height="13" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z" fill="#0008B2"/>
                                    <path d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z" fill="#0008B2"/>
                                </svg>
                            </div>
                            <p className='text-black/80 '><strong>Modular structure </strong>enabling easy implementation for different softwares</p>
                        </div>
                        <div className='flex gap-3 p-2 justify-start items-start'>
                            <div className='mt-2'>
                                <svg width="15" height="13" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z" fill="#0008B2"/>
                                    <path d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z" fill="#0008B2"/>
                                </svg>
                            </div>
                            <p className='text-black/80 '><strong>Advanced payment </strong>and processing technologies, fine-tuned from more than 3 years of development testing</p>
                        </div>
                        <div className='flex gap-3 p-2 justify-start items-start'>
                            <div className='mt-2'>
                                <svg width="15" height="13" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z" fill="#0008B2"/>
                                    <path d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z" fill="#0008B2"/>
                                </svg>
                            </div>
                            <p className='text-black/80 '><strong>Unified AppStore </strong>for retail cryptocurrency solutions with a Crypterium products audience</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="mt-8 md:mt-16 relative w-full gap-8 px-3 lg:px-12 flex flex-col-reverse lg:flex-row-reverse toppp">
                <p className='absolute mob top-8 m-auto left-12 md:left-0 bottt text-xs text-blue-500'>▽ ABOUT BRIT GOLD</p>
                <p className='absolute pc top-8 m-auto ml-4 left-24 bottt  text-xs text-blue-500'>▽ ABOUT BRIT GOLD</p>
                <img className='p-6 object-contain' src={img2} />
                <div className=''>
                    <h1 className="text-black/90 w-10/12 m-auto pt-20 font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]"><a className='transition-all duration-500 ease-in-out hover:text-blue-700' href='#about'>Brit Gold Theme <br/><span className='font-[100] text-[1.7rem] md:text-[2.4rem] text-black/60'>is the best for your ICO</span></a></h1>
                    <p className="text-black/50 w-10/12 mt-4  m-auto text-lg ">
                    Spend real fights effective anything extra by leading. Mouthwatering leading how real formula also locked-in have can mountain thought. Jumbo plus shine sale.
                    </p>
                    <div className='w-10/12 m-auto mt-6 md:mt-10'>
                        <div className='flex gap-3 p-2 justify-start items-start'>
                            <div className='mt-2 '>
                                <svg width="15" height="13" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z" fill="#0008B2"/>
                                    <path d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z" fill="#0008B2"/>
                                </svg>
                            </div>
                            <p className='text-black/80 '>Mouthwatering leading how real formula also</p>
                        </div>
                        <div className='flex gap-3 p-2 justify-start items-start'>
                            <div className='mt-2'>
                                <svg width="15" height="13" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z" fill="#0008B2"/>
                                    <path d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z" fill="#0008B2"/>
                                </svg>
                            </div>
                            <p className='text-black/80 '>Locked-in have can mountain thought</p>
                        </div>
                        <div className='flex gap-3 p-2 justify-start items-start'>
                            <div className='mt-2'>
                                <svg width="15" height="13" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.79302 1.92236L10.062 3.18239L5.60699 7.64646L4.33801 6.36842L8.79302 1.92236Z" fill="#0008B2"/>
                                    <path d="M1.69202 4.59545L2.96099 3.32642L6.40801 6.76437L5.13903 8.04241L1.69202 4.59545Z" fill="#0008B2"/>
                                </svg>
                            </div>
                            <p className='text-black/80 '>Locked-in have can mountain thought</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home;