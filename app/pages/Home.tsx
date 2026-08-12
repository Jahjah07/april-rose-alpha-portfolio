import Header from "../components/Header";

export default function Hero() {
  
  return (
    <section id="home">
      <Header />
      <div className="flex flex-col-reverse gap-12 lg:flex-row lg:justify-between min-h-screen bg-background px-6 py-10 lg:px-20">
        <div className="w-full lg:w-1/2 text-left">
          <div className="bg-secondary p-1 rounded-md mb-2 inline-block">
            <p className="text-xl text-playfair">Welcome!</p>
          </div>
          <p className="text-2xl font-playfair text-dark">Hello, I'm</p>
          <p className="text-5xl font-playfair text-primary">April Rose Alpha</p>
          <p className="mt-4 text-5xl font-allura text-accent">Virtual Assistant</p>
          <p className="mt-6 max-w-lg text-base leading-8 text-dark font-poppins">
            I help busy entrepreneurs and business owners streamline their tasks, stay organized,
            and reclaim their time to focus on what truly matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary/90">
             <img src="/icons/paper.png" alt="Send Message" className="h-5 w-5" />
             <p> WORK WITH ME</p>
            </button>
            <button className="rounded-full border border-primary bg-white px-7 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10">
              VIEW MY SERVICES
            </button>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-4 text-sm font-playfair text-dark">
              <span>Tools I use</span>
              <div className="flex-1 h-px bg-dark"></div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <img src="/applogos/figma.png" alt="Tool logo" className="h-6 w-6 object-contain" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <img src="/applogos/figma.png" alt="Tool logo" className="h-6 w-6 object-contain" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <img src="/applogos/gmail.png" alt="Tool logo" className="h-6 w-6 object-contain" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <img src="/applogos/gmail.png" alt="Tool logo" className="h-6 w-6 object-contain" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <img src="/applogos/gmail.png" alt="Tool logo" className="h-6 w-6 object-contain" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center w-full lg:w-1/2">
          <div className="hidden lg:block absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent opacity-80"></div>
          <div className="hidden lg:block absolute -right-16 bottom-12 h-72 w-72 rounded-full bg-secondary opacity-90"></div>
          <div className="absolute bottom-20 left-5 z-10 hidden lg:block w-[450px] h-[150px] rounded-[32px] bg-white/95 border border-slate-200 p-6 shadow-2xl backdrop-blur-sm">
            <div className="grid grid-cols-[auto_1px_auto_1px_auto] gap-3 text-center font-poppins text-dark">
              <div>
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-white">
                  <img src="/icons/medal.png" alt="Reliable" className="h-5 w-5 object-contain" />
                </div>
                <p className="text-sm font-bold">Reliable</p>
                <p className="text-xs text-dark/70">You can count on me.</p>
              </div>
              <div className="mx-auto my-auto h-16 w-px bg-slate-300" />
              <div>
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-white">
                  <img src="/icons/target.png" alt="Detail-Oriented" className="h-5 w-5 object-contain" />
                </div>
                <p className="text-sm font-bold">Detail-Oriented</p>
                <p className="text-xs text-dark/70">I pay attention to every detail.</p>
              </div>
              <div className="mx-auto my-auto h-16 w-px bg-slate-300" />
              <div>
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-white">
                  <img src="/icons/bolt.png" alt="Proactive" className="h-5 w-5 object-contain" />
                </div>
                <p className="text-sm font-bold">Proactive</p>
                <p className="text-xs text-dark/70">Anticipates needs and takes initiative.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden h-[560px] w-[520px] rounded-[32px] bg-secondary shadow-xl">
            <div className="absolute pr-20 top-8 z-8 h-150 w-150 overflow-hidden">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <img
              src="/images/office-background.avif"
              alt="April Rose Alpha"
              className="object-cover h-full w-full blur-[4px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}