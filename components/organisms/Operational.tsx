import Image from 'next/image';

export default function Operational() {
  return (
    <div className="bg-black text-white font-serif px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src="/glass.png"
          alt="Glass Pour"
          width={600}
          height={400}
          className="w-full object-cover"
        />
        <Image
          src="/bartender.png"
          alt="Bartender Pour"
          width={600}
          height={400}
          className="w-full object-cover"
        />
      </div>

      <div className="mt-12 max-w-5xl  mx-auto">
      <h2 className="text-2xl font-light text-[#C77866] mb-6">
        <span className="text-[#C77866] font-bold">Opening</span> Hours
      </h2>
        <div className="max-w-xl border-t border-b border-dashed border-gray-500 divide-y divide-dashed divide-gray-500">
        <div className="py-4 flex justify-between">
          <span>Mon - Thu:</span>
          <span className="font-bold">5 PM - 12 AM</span>
        </div>
        <div className="py-4 flex justify-between">
          <span>Fri - Sat:</span>
          <span className="font-bold">5 PM - 2 AM</span>
        </div>
        <div className="py-4 flex justify-between">
          <span>Sun:</span>
          <span>Closed</span>
        </div>
      </div>
    </div>
</div>
  );
}