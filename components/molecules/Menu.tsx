import Image from 'next/image';

export default function Menu() {
  return (
    <div className="bg-[#111111] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-light text-left text-[#C77866] mb-12 ml-4">
          <span className="text-[#C77866] font-bold">Cocktails</span> Menu
        </h2>

        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center md:flex-row md:items-start md:text-left relative">
            <Image
              src="/cocktail1.png"
              alt="cocktail1"
              width={250}
              height={400}
              className="mb-4 md:mb-0 md:mr-8"
            />

            <div className="max-w-sm">
              <p className="text-xs tracking-widest text-white/60 mb-2">
                INDULGENT HARMONY
              </p>
              <h3 className="text-3xl font-extrabold leading-tight">
                Symphony<br /> <span className="text-white/80 font-light">in Gold</span>
              </h3>
              <p className="text-sm text-white mt-4">
                <span className="font-bold">Aged bourbon, honey, ginger.</span> <br />
                Experience the symphony of flavors as aged bourbon blends seamlessly with the sweetness of honey & the subtle spice of ginger.
              </p>
            </div>

            {/* Button */}
            <button className="absolute top-1/2 left-210 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}