
import BannerImg from '../banner-stack.png'

function Banner() {
    return (
        <div className='container mx-auto flex justify-center items-center mt-20 py-10 '>
            <div className='space-y-1  '>
                <h1 className= 'font-bold md:font-black text-5xl text-[#0F172A]  '>Build Your Ideal</h1>
                <h1 className='font-bold md:font-black  text-5xl bg-linear-to-r from-[#ff5622dc] via-[#db177cd8] to-[#5b06ee] bg-clip-text text-transparent'>Development Stack</h1>
                <p className='md:w-[45%] text-[18px] text-[#475569] mt-6'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className='space-x-4 mt-10 '>
                    <button className=" btn bg-linear-to-r  from-[#f168079f] to-[#ec2b9c] text-white">Explore Technologies</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div>
                <img src={BannerImg} alt="" />
            </div>


        </div>
    );
}

export default Banner;