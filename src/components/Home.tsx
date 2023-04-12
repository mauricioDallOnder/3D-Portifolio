import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";


const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const ButtonMobile=()=>{
    return(
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about' className="flex items-center">
            <button className="flex flex-row justify-center items-center p-2 gap-2 w-50 h-10 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-700 shadow-lg rounded-md font-bold">
            Clique para acessar a próxima página
            </button>
          </a>
        </div>
    )
  }


  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event:any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <section className='relative w-full h-screen mx-auto'>
        <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Olá! eu sou <span className='text-[#915EFF]'>Mauricio</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Estudante de programação 
              e desenvolvedor FrontEnd.
            </p>
          </div>
        </div>

        <ComputersCanvas />
        <div>
          {isMobile? <ButtonMobile/>:''}
       
        </div>
       
      </section>
    </>
  );
};

export default Home;
