import logo from '../assets/head-logo.webp'
import logor from '../assets/logo-round.webp'
import pay from '../assets/div.webp'
import vid from '../assets/vid.webp'
import img1 from '../assets/img-1.webp'
import img2 from '../assets/img-2.webp'
import mob from '../assets/mobile.webp'
import shp1 from '../assets/shp01.svg'
import shp2 from '../assets/shp02.svg'
import rdmp from '../assets/roadmap.svg'
import working from '../assets/working.svg'
import pdf from '../assets/pdf.svg'

import gp from '../assets/gp.png'
import as from '../assets/as.png'

import fe1 from '../assets/features/feat01.webp'
import fe2 from '../assets/features/feat02.webp'
import fe3 from '../assets/features/feat03.webp'
import fe4 from '../assets/features/feat04.webp'
import fe5 from '../assets/features/feat05.webp'
import fe6 from '../assets/features/feat06.webp'

import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div>

            <section id='nav' className="flex fixed backdrop-blur-xl w-full top-0 bg-white/90 topppp justify-center md:justify-between p-6 px-12 items-center">
                <a href='#home'><img className='h-[1rem] lg:h-auto' src={logo} /></a>
                <div className="pc hidden lg:visible text-black/60 font-medium text-md flex lg:gap-10">
                    <a href="#about" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">About</a>
                    <a href="#services" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Services</a>
                    <a href="#roadmap" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Roadmap</a>
                    <a href="#stats" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Statistic</a>
                    <a href="#token" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Token</a>
                    <a href="#whitepaper" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Whitepaper</a>
                    <a href="#team" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Team</a>
                    <a href="#faq" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">FAQ</a>
                    <a href="#blog" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Blog</a>
                </div>
                <button className='rounded-lg pc px-6 py-4 text-white font-medium text-sm grad'>Join Brit World</button>
            </section>

            <section id='#home' className="mt-[15%] lg:mt-[8%] relative">
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

            {/*<img className='m-auto w-11/12 mt-12 drop-shadow-xl shad hover:p-4 bg-white/20 backdrop-blur-xl hover:scale-[102%] transition-all duration-700 ease-in-out rounded-lg  md:w-1/2' src={vid} />*/}
            
            <h1 className="text-black/90 w-10/12 lg:w-[60%] my-24 m-auto pt-16 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]">
                Brit Gold Just Entered<br/>
                <span className='font-[100] text-[1.7rem] md:text-[2.7rem] text-black/60'>the Real World</span>
                </h1>

            <section id="#economy" className="mt-8 md:mt-16 relative w-full gap-8 px-3 lg:px-12 flex flex-col-reverse lg:flex-row toppp">
                <p className='absolute mob top-8 m-auto left-12 md:left-0  text-xs text-[#303C8B]'>▽ DECENTRALISED ECONOMY</p>
                <p className='absolute pc top-8 m-auto right-16  text-xs text-[#303C8B]'>▽ DECENTRALISED ECONOMY</p>
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

            <section id="#about" className="mt-8 md:mt-16 relative w-full gap-8 px-3 lg:px-12 flex flex-col-reverse lg:flex-row-reverse toppp">
                <p className='absolute mob top-8 m-auto left-12 md:left-0 bottt text-xs text-[#303C8B]'>▽ ABOUT BRIT GOLD</p>
                <p className='absolute pc top-8 m-auto ml-4 left-24 bottt  text-xs text-[#303C8B]'>▽ ABOUT BRIT GOLD</p>
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

            <section id='#services' className='mt-8 md:mt-16 relative'>
                <p className='absolute mob top-8 text-center m-auto centerh md:left-0 bottt text-xs text-[#303C8B]'>▽ ABOUT BRIT GOLD</p>
                <p className='absolute pc top-8 m-auto text-center md:text-left centerh bottt  text-xs text-[#303C8B]'>▽ ABOUT BRIT GOLD</p>
                <h1 className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-16 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]">Brit Gold Features</h1>

                <div className='w-full md:w-[85%] m-auto scale-[90%] md:scale-[85%] justify-center flex flex-wrap gap-4'>
                    <div className='flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]'>
                        <img className=' object-contain p-2 shad1 rounded-full' src={fe1} />
                        <div className='text-center md:text-left '>
                            <h3 className=' font-bold text-2xl my-2'>General ecosystem</h3>
                            <p className='text-black/60'>Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]'>
                        <img className=' object-contain p-2 shad1 rounded-full' src={fe2} />
                        <div className='text-center md:text-left '>
                            <h3 className=' font-bold text-2xl my-2'>General ecosystem</h3>
                            <p className='text-black/60'>Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]'>
                        <img className=' object-contain p-2 shad1 rounded-full' src={fe3} />
                        <div className='text-center md:text-left '>
                            <h3 className=' font-bold text-2xl my-2'>Exchange for other crypto currency</h3>
                            <p className='text-black/60'>Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]'>
                        <img className=' object-contain p-2 shad1 rounded-full' src={fe4} />
                        <div className='text-center md:text-left '>
                            <h3 className=' font-bold text-2xl my-2'>Protection against fraud</h3>
                            <p className='text-black/60'>Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]'>
                        <img className=' object-contain p-2 shad1 rounded-full' src={fe5} />
                        <div className='text-center md:text-left '>
                            <h3 className=' font-bold text-2xl my-2'>Transfer to Debit card</h3>
                            <p className='text-black/60'>Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap justify-center gap-4 bg-white rounded-xl p-4 items-start w-full md:w-[45%]'>
                        <img className=' object-contain p-2 shad1 rounded-full' src={fe6} />
                        <div className='text-center md:text-left '>
                            <h3 className=' font-bold text-2xl my-2'>Anonymity</h3>
                            <p className='text-black/60'>Surf sardine mooneye, sawtooth eel trout-perch, Death Valley pupfish zebra tilapia medaka golden shiner, danio Black angelfish sandperch, whiff.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='relative '>
                <p className='absolute mob top-8 text-center m-auto centerh md:left-0 bottt text-xs text-[#303C8B]'>▽ ROADMAP</p>
                <p className='absolute pc top-8 m-auto text-center md:text-left centerh bottt  text-xs text-[#303C8B]'>▽ ROADMAP</p>
                <h1 className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-16 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]">Roadmap</h1>
                <img className='m-auto w-11/12 md:w-[65%] mt-8 md:mt-12' src={rdmp} />
            </section>

            <section className='mt-8 md:mt-12 relative'>
                <p className='absolute mob top-8 m-auto left-8 md:left-0 bottt text-xs text-[#303C8B]'>▽ APPS</p>
                <p className='absolute pc top-8 m-auto ml-4 left-16 bottt  text-xs text-[#303C8B]'>▽ APPS</p>
                <div className='relative w-full h-auto md:h-[70vh] overflow-hidden'>
                    <img className='absolute bottt pc right-0 w-1/2' src={shp2} />
                    <div className='flex flex-col justify-center ml-[8%] md:ml-[6%]'>
                        <h1 className="text-black/90 w-11/12 lg:w-[40%] pt-16 font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]">
                        Brit Gold App for ICO Platform
                        </h1>
                        <p className='text-black/50 w-11/12 lg:w-[50%]  mt-4  text-lg '>JavaScript virtual machines (VMs) and platforms built upon them have also increased the popularity of JavaScript for server-side web applications. On the client side, JavaScript</p>
                        <div className='flex w-10/12 gap-3 md:gap-6 mt-8'>
                            <img className='w-[45%] md:w-auto' src={gp} />
                            <img className='w-[45%] md:w-auto'  src={as} />
                        </div>
                        <img className='absolute pc -bottom-8 right-[20%] w-1/4' src={mob} />
                    </div>
                </div>
            </section>

            <section className='relative mt-12'>
                <p className='absolute mob top-8 text-center m-auto centerh md:left-0 bottt text-xs text-[#303C8B]'>▽ WORKING</p>
                <p className='absolute pc top-8 m-auto text-center md:text-left centerh bottt  text-xs text-[#303C8B]'>▽ WORKING</p>
                <h1 className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-16 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]">Working of Brit Gold </h1>
                <img className='m-auto w-11/12 md:w-[65%] my-8 md:my-12' src={working} />
            </section>

            
            <section className='relative mt-12'>
                <p className='absolute mob top-8 text-center m-auto centerh md:left-0 bottt text-xs text-[#303C8B]'>▽ DOCUMENTS</p>
                <p className='absolute pc top-8 m-auto text-center md:text-left centerh bottt  text-xs text-[#303C8B]'>▽ DOCUMENTS</p>
                <h1 className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-16 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[3.5rem]">Documents
                 of Brit Gold </h1>

                <div className='flex flex-wrap lg:flex-nowrap justify-center gap-6 mt-12 md:gap-12 items-center w-full'>
                    <div className='flex flex-col gap-4 text-white text-xs md:text-md font-bold justify-center hover:scale-[102%] transition-all duration-500 ease-in-out text-center p-5 grad rounded-2xl items-center w-[9rem] md:w-[15rem] min-h-[9rem] md:min-h-[15rem]'>
                        <img className='w-[2rem]' src={pdf} />
                        <p>Terms & Conditions</p>
                    </div>
                    <div className='flex flex-col gap-4 text-white text-xs md:text-md font-bold justify-center hover:scale-[102%] transition-all duration-500 ease-in-out text-center p-5 grad rounded-2xl items-center w-[9rem] md:w-[15rem] min-h-[9rem] md:min-h-[15rem]'>
                        <img className='w-[2rem]' src={pdf} />
                        <p>Whitepapers</p>
                    </div>
                    <div className='flex flex-col gap-4 text-white text-xs md:text-md font-bold justify-center hover:scale-[102%] transition-all duration-500 ease-in-out text-center p-5 grad rounded-2xl items-center w-[9rem] md:w-[15rem] min-h-[9rem] md:min-h-[15rem]'>
                        <img className='w-[2rem]' src={pdf} />
                        <p>Privacy Policy</p>
                    </div>
                    <div className='flex flex-col gap-4 text-white text-xs md:text-md font-bold justify-center hover:scale-[102%] transition-all duration-500 ease-in-out text-center p-5 grad rounded-2xl items-center w-[9rem] md:w-[15rem] min-h-[9rem] md:min-h-[15rem]'>
                        <img className='w-[2rem]' src={pdf} />
                        <p>Business Profile</p>
                    </div>
                </div>
            </section>


            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    )
}

export default Home;