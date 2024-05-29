import { BackgroundBeams } from "./components/ui/background-beams";
import Login from "./components/ui/login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-lime-200 to-lime-600  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            "MailJet: Intelligent Email Solutions for Your Business"
          </p>
          <Login />
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
