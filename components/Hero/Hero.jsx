import heroHouse from "../../assets/image/hero-img.png";

function Hero() {
  return (
    <section className="bg-[#FAF6F2]">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left */}

          <div className="flex-1">

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#2E1B12]">
              Find Your
              <br />
              Dream Home
            </h1>

            <p className="mt-6 text-gray-600 leading-8 max-w-md">
              Explore our curated selection of exquisite properties
              meticulously tailored to your unique dream home vision.
            </p>

            <button className="mt-10 bg-[#2E1B12] text-white px-8 py-3 rounded-lg hover:bg-[#4B2F24] transition">
              Sign Up
            </button>

          </div>

          {/* Right */}

          <div className="flex-1 flex justify-center">

            <img
              src={heroHouse}
              alt="Dream Home"
              className="w-full max-w-xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;