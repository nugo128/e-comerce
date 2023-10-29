import { useEffect, useState } from 'react';

const Banner = ()=>{
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        // Trigger the animation after a delay (e.g., 1 second).
        setTimeout(() => {
          setAnimate(true);
        }, 100);
      }, []);
      
    return <div className='relative'>
        <img className={`${animate ? 'opacity-100 ' : 'opacity-70'} transition-all duration-[2000ms] ease-in-out overflow-hidden w-screen h-screen absolute z-0`} src={require('../images/background-banner.png')} alt="BANNER" />
        <div className="z-50  absolute left-1/4 top-60 text-white">
        <h1 className={`${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} transition-all duration-[3000ms] ease-in-out overflow-hidden text-6xl font-bold mb-8`}>The Place Where You Can Buy Everything</h1>
        <h3 className={`${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"} transition-all duration-[4000ms] ease-in-out overflow-hidden text-center text-3xl font-bold `}>Discover the best quality products and we will deliver them to your door.</h3>
        <button className={`${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-44"} transition-all duration-[5000ms] ease-in-out overflow-hidden ml-[460px] px-6 py-2 rounded-md font-bold bg-[#e39a65] mt-10`}>Shop Now</button>
        </div>
    </div>
}
export default Banner