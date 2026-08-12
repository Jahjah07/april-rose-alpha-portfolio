import { Reveal, MotionButton } from "@/app/components/Motion";

export default function Contact() {
  return (
    <div className="flex justify-center bg-primary py-8 px-4">
      <Reveal className="flex w-full max-w-5xl items-center justify-between text-white gap-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white border-2 border-white">
          <img src="/icons/email.png" alt="Mail Icon" className="h-8 w-8 filter invert" />
        </div>
        <div className="flex-1 text-left text-white">
          <h2 className="text-lg font-semibold">Let's work together!</h2>
          <p className="max-w-2xl text-sm text-white/80">
            Send me a message and let's discuss how I can help you achieve your goals.
          </p>
        </div>
        <MotionButton
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/95"
        >
          <span>Contact Me</span>
          <img src="/icons/paper.png" alt="Paper Icon" className="h-4 w-4" />
        </MotionButton>
      </Reveal>
    </div>
  );
}
