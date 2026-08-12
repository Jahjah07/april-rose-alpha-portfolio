import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, MotionButton } from "@/app/components/Motion";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTA({
  title = "Ready to Work Together?",
  description = "Let me help you stay organised, productive, and focused on what matters most.",
  buttonText = "Get In Touch",
  buttonHref = "/contact",
}: CTAProps) {
  return (
    <section className="bg-background px-6 py-20 lg:px-20">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-lg sm:px-10 lg:px-16">
          {/* Decorative shapes */}
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -right-16 h-52 w-52 rounded-full bg-secondary/30" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mb-3 font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Let&apos;s Work Together
            </p>

            <h2 className="font-playfair text-4xl text-white sm:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-xl font-poppins text-base leading-7 text-white/85 sm:text-lg">
              {description}
            </p>

            <MotionButton
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8"
            >
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-poppins text-sm font-semibold text-primary transition-colors hover:bg-white/90"
              >
                {buttonText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </MotionButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}