import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white font-righteous">
      <div className="w-full h-full flex items-center justify-center text-5xl uppercase font-bold text-black">
        <div className="flex flex-col items-center uppercase">
          <span className="text-5xl  font-bold text-black">
            <Image
              src="/asset/lol.png"
              className="w-50 h-50"
              alt="Logo"
              width={500}
              height={500}
            />
          </span>
          <span className="text-5xl  font-bold text-black">
            Welcome To My World
          </span>
        </div>
      </div>
    </div>
  );
}
