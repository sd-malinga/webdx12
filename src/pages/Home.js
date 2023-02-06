import img1 from '../assets/blob.webp'

const Home = () => {

    return(
        <div>
            
            <div class="opacity-30 w-[200px] md:w-[350px] h-[350px] bg-red-300 rounded-full blur-[140px] bottt top-[35%] absolute "></div>
            <div class="opacity-50 w-[200px] md:w-[350px] h-[350px] bg-blue-300 rounded-full blur-[140px] bottt top-[35%]  absolute "></div>
    
            <section id='nav' className="flex backdrop-blur-xl toppp justify-center md:justify-between p-8 px-12 items-center">
                <p className="text-blue-800 font-bold text-2xl">$LOGO</p>
                <div className="pc text-blue-800/60 font-medium text-lg flex md:gap-8 lg:gap-12">
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">About</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Services</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Roadmap</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Statistic</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Token</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">Team</a>
                    <a href="/" className="hover:text-blue-800 transition-all duration-500 ease-in-out ">FAQ</a>
                </div>
            </section>

            <section className="mt-[10%]">
                <h1 className="text-black/70 w-10/12 md:w-[60%] m-auto text-center font-black text-2xl md:text-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip
                </h1>
                <img className='m-auto w-[40rem] mt-8 blur-xl' src={img1} />
            </section>

            <section id="about" className="my-8">
                <h1 className="text-blue-800 w-10/12 md:w-[60%] m-auto text-center font-black text-2xl md:text-4xl "><a className='transition-all duration-500 ease-in-out hover:text-blue-700' href='#about'>About</a></h1>
                <p className="text-black/50 w-10/12  md:w-[60%] mt-4 md:mt-8 m-auto text-center text-lg md:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip
                </p>
            </section>

        </div>
    )
}

export default Home;