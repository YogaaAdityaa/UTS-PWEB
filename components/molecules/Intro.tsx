import Image from 'next/image';

export default function Intro() {
  return (
    <div className="bg-black text-white font-serif px-6 py-12">
      <div className="flex flex-col items-center">
        <Image
          src="/cocktail.png"
          alt="Cocktail"
          width={300}
          height={400}
          className="mb-8"
        />

<div className="max-w-3xl w-full text-left">
          <p className="text-[22px] md:text-[28px] leading-snug">
            Liquid Maestro, the newest hotspot in<br />
            downtown <span className="underline">Los Angeles.</span> Our skilled mixologists<br />
            are passionate about crafting exceptional<br />
            cocktails that will <span className="font-bold">delight your senses.</span>
          </p>

          <p className="mt-6 text-sm text-gray-300 leading-relaxed">
            With an ambiance that exudes elegance and a commitment to delivering<br />
            unforgettable experiences, Liquid Maestro is the ultimate destination for cocktail<br />
            enthusiasts. Join us for an exquisite journey into the world of liquid artistry.
          </p>
        </div>
      </div>
    </div>
  );
}