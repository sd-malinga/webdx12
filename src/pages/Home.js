import logo from '../assets/head-logo.webp'
import logor from '../assets/logo-round.webp'
import pay from '../assets/div.webp'
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
                <h1 className="text-black/90 w-10/12 lg:w-[60%] m-auto pt-16 text-center font-black text-[2rem] md:text-[3rem] leading-[2rem] md:leading-[3rem] lg:leading-[4rem]">
                Brit Gold Just Entered<br/>
                <span className='font-[100] text-[1.7rem] md:text-[2.7rem] text-black/60'>the Real World</span>
                </h1>

                <div className='pc botttt transition-all duration-500 ease-in-out '>
                    <div className='scale-[50%] md:scale-[100%] md:w-[400px] h-[400px] grad absolute rounded-full drop-shadow-2xl absolute top-4 -left-[8%]'></div>
                    <div className='scale-[50%] md:scale-[100%] md:w-[150px] h-[150px] bg-white rounded-full drop-shadow-2xl absolute top-[28%] left-[12%]'></div>
                <img className='absolute right-0 top-[10%] ' src={shp1} />
                </div>

                <div className='m-auto w-full mt-16 flex gap-3 items-center lg:gap-8 flex-col lg:flex-row justify-center'>
                    <button className='py-4 px-8 grad rounded-md w-11/12 lg:w-fit hover:drop-shadow-xl transition-all duration-500 ease-in-out text-white shad'>Buy Tokens 45% Off</button>
                    <button className='py-4 px-8 bg-blue-200 w-11/12 lg:w-fit hover:bg-blue-600 hover:drop-shadow-xl transition-all duration-500 ease-in-out rounded-md text-white shad'>Whitepapers</button>
                </div>
                <img className='m-auto mt-12 noselect' src={pay} />
            </section>

            <section id="about" className="mt-16 toppp">
                <h1 className="text-blue-800 w-10/12 md:w-[60%] m-auto text-center font-black text-2xl md:text-4xl "><a className='transition-all duration-500 ease-in-out hover:text-blue-700' href='#about'>About</a></h1>
                <p className="text-black/50 w-10/12  md:w-[60%] mt-4 md:mt-8 m-auto text-center text-lg md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip
                </p>
            </section>

        </div>
    )
}

export default Home;
<img className='m-auto w-[40rem] mt-8 ' src={logor} />