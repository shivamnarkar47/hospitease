import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <div className="relative">
        <Image
          className="object-cover w-full h-full"
          src="/lafia_home.jpeg"
          fill={true}
          alt="Home Background"
        />
        <div id="home" className="text-white text-lg bg-black/70 relative">
          {/* Nav Section */}
          <div className="flex flex-row p-5 top-0 sticky">
            <Link href="/" className="left-0 hover:text-slate-500">
              HospitEase
            </Link>
          </div>
          <div className="flex flex-col items-center h-screen justify-center space-y-5">
            <div className="text-5xl text-center mb-4 font-bold">
              <p className="uppercase">Empower your hospital</p>
              <p>and enhance your patient&apos;s care</p>
            </div>
            <Link
              href="/dashboard"
              className="bg-slate-600 rounded-lg px-20 py-1 hover:bg-slate-800 font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Link
        href="#home"
        className="fixed bottom-0 right-0 m-4 hover:text-black"
      >
        Back to Top
      </Link>
    </div>
  );
}
