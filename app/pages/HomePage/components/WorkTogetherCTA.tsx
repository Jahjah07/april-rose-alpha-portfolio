import Link from "next/link";
import { Reveal, MotionButton } from "@/app/components/Motion";

export default function WorkTogetherCTA() {
  return (
    <section className="bg-primary px-4 py-10 sm:py-12">
      <Reveal
        className="
          mx-auto flex w-full max-w-5xl
          flex-col items-center gap-6
          text-center text-white
          sm:flex-row sm:text-left
        "
      >
        {/* Email Icon */}
        <div
          className="
            group flex h-16 w-16 shrink-0
            items-center justify-center
            rounded-full border-2 border-white/80
            bg-white/10
            shadow-lg shadow-black/10
            transition-all duration-300
            hover:scale-110
            hover:-rotate-3
            hover:bg-white/20
            hover:border-white
          "
        >
          <img
            src="/icons/email.png"
            alt=""
            aria-hidden="true"
            className="
              h-8 w-8
              filter invert
              transition-transform duration-300
              group-hover:scale-110
            "
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="font-playfair text-2xl sm:text-3xl">
            Let&apos;s work together!
          </h2>

          <p className="mx-auto mt-1 max-w-2xl font-poppins text-sm leading-6 text-white/80 sm:mx-0">
            Send me a message and let&apos;s discuss how I can help you stay
            organised, save time, and keep your business moving forward.
          </p>
        </div>

        {/* CTA Button */}
        <MotionButton
          whileHover={{
            y: -3,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            group shrink-0
            rounded-full
            bg-white
            text-primary
            shadow-lg shadow-black/10
            transition-shadow duration-300
            hover:shadow-xl hover:shadow-black/20
          "
        >
          <Link
            href="/contact"
            className="
              flex items-center gap-2
              px-6 py-3.5
              font-poppins text-sm font-semibold
            "
          >
            <span>Contact Me</span>

            <img
              src="/icons/paper.png"
              alt=""
              aria-hidden="true"
              className="
                h-4 w-4
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </MotionButton>
      </Reveal>
    </section>
  );
}