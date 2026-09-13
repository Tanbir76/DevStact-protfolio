import FooterImg from '../logo-text.png'
function Footer() {
    return (
        <div className='mt-10 '>
        <div className='container mx-auto  py-7 md:py-10  grid md:grid-cols-5 gap:10  md:gap-20  '>
            <div className=' col-span-2 pl-4 '>
                <img src={FooterImg} alt="" />
                <p className='mt-4 text-[#94A3B8] '>Curated tools, technologies, and resources for developers <br /> building
                    modern software.</p>
                    <div className='flex gap-5 mt-10 mb-10 md:mb-1'>
                        <p> <a href="https://github.com/">GitHub</a></p>
                        <p><a href="https://x.com/">Twitter</a></p>
                        <p><a href="https://www.linkedin.com/">Linkedin</a></p>
                    </div>
            </div>
            <div className=' col-span-3 '>
            <div className='grid grid-cols-3'>
                <div>
                    <h3 className='text-[16px] font-bold'>Product</h3>
                    <p className='mt-3  text-[#94A3B8]'>Home</p>
                    <p className='text-[#94A3B8]'>Technologies</p>
                    <p className='text-[#94A3B8]'>project</p>
                </div>
                
                <div>
                    <h3 className='text-[16px] font-bold'>Company</h3>
                    <p className='mt-3 text-[#94A3B8]'>About</p>
                    <p className='text-[#94A3B8]'>Contact</p>
                    <p className='text-[#94A3B8]'>Careers</p>
                </div>
                 <div>
                    <h3 className='text-[16px] font-bold'>LEGAL</h3>
                    <p className='mt-3 text-[#94A3B8]'>Privacy Policy</p>
                    <p className='text-[#94A3B8]'>Terms of Service</p>
                    <p className='text-[#94A3B8]'>Careers</p>
                </div>
            </div>
            </div>
        </div>

        </div>
    );
}

export default Footer;