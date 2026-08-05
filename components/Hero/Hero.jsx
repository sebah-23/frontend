import hero from "../../assets/image/hero-img.png";

function Hero() {
  return (
   <section className="bg-[#FAF6F2] max-w-7xl mx-auto px-6 lg:px-16 py-10 lg:py-16 ">
   <div className="flex flex-col-reverse lg: flex-row justify-between item-center gap-10" >
     <div className="flex-1 text-center lg: text-left" > 
     <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2E1B12] leading-tight ">Find Your <br /> Dream Home</h1>
        <p className="mt-6 text-gray-600 text-lg leading-8 max-w-md mx-auto lg:mx-0">Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>

       <button className="bg-[#2E1B12] text-white px-6 py-3 rounded-lg hover:bg-[#4B2F24] transition "> Sign up </button>
    </div>
    <div className="flex flex-1 justify-center">
        <img src={hero} alt="hero-img" className="w-full max-w-xl" />
    </div>
  
   </div>
   </section>
  )
}
export default Hero;