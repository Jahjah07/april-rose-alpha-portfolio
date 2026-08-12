"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Reveal, MotionButton, Stagger, StaggerItem } from "@/app/components/Motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to send your message."
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-background px-6 py-20 lg:px-20"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-block rounded-md bg-secondary p-1">
            <p className="text-xl text-playfair">
              Let&apos;s Connect
            </p>
          </div>

          <h1 className="font-playfair text-4xl text-dark sm:text-5xl">
            Let&apos;s Work Together
          </h1>

          <p className="mt-5 font-poppins text-base leading-8 text-dark/70 sm:text-lg">
            Have a project in mind, need help with your day-to-day tasks, or
            simply want to learn more about how I can support your business?
            I&apos;d love to hear from you.
          </p>
        </Reveal>

        {/* Contact Area */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <Reveal className="rounded-[28px] bg-primary p-8 text-white shadow-xl sm:p-10">
            <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Get In Touch
            </p>

            <h2 className="mt-3 font-playfair text-3xl sm:text-4xl">
              I&apos;d love to hear from you.
            </h2>

            <p className="mt-5 font-poppins text-sm leading-7 text-white/80">
              Whether you need ongoing virtual assistance or support with a
              specific project, send me a message and let&apos;s discuss how I
              can help.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="font-poppins text-xs text-white/60">
                    Email
                  </p>

                  <a
                    href="mailto:averylight624@gmail.com"
                    className="font-poppins text-sm font-medium transition hover:text-white/80"
                  >
                    averylight624@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MessageCircle
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="font-poppins text-xs text-white/60">
                    Availability
                  </p>

                  <p className="font-poppins text-sm font-medium">
                    Remote / Virtual Support
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="font-poppins text-sm leading-6 text-white/70">
                I&apos;ll get back to you as soon as possible to learn more
                about what you need and how I can help.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal
            delay={0.1}
            className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-lg sm:p-10"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-poppins text-sm font-semibold text-dark"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-background px-4 py-3 font-poppins text-sm text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-poppins text-sm font-semibold text-dark"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-background px-4 py-3 font-poppins text-sm text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block font-poppins text-sm font-semibold text-dark"
                >
                  What can I help you with?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-300 bg-background px-4 py-3 font-poppins text-sm text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="administrative">
                    Administrative Support
                  </option>
                  <option value="project-management">
                    Project Coordination
                  </option>
                  <option value="social-media">
                    Social Media & Marketing
                  </option>
                  <option value="design">
                    Web & Graphic Design
                  </option>
                  <option value="research">
                    Lead Generation & Research
                  </option>
                  <option value="business-support">
                    Business & Client Support
                  </option>
                  <option value="other">
                    Something Else
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-poppins text-sm font-semibold text-dark"
                >
                  Tell me about your needs
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a little about your business, project, or the kind of support you're looking for..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 bg-background px-4 py-3 font-poppins text-sm leading-6 text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {status === "success" && (
                <div
                  role="status"
                  className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 font-poppins text-sm text-green-700"
                >
                  Thanks for reaching out! Your message has been sent successfully.
                  I&apos;ll get back to you as soon as possible.
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-poppins text-sm text-red-700"
                >
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <MotionButton
                type="submit"
                disabled={isSubmitting}
                whileHover={
                  !isSubmitting
                    ? { y: -2, scale: 1.01 }
                    : undefined
                }
                whileTap={
                  !isSubmitting
                    ? { scale: 0.98 }
                    : undefined
                }
                className="
                  group inline-flex w-full items-center justify-center
                  gap-2 rounded-full bg-primary px-6 py-3.5
                  font-poppins text-sm font-semibold text-white
                  shadow-md shadow-primary/20
                  transition hover:bg-primary/90
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                <span>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>

                <Send
                  aria-hidden="true"
                  className={`
                    h-4 w-4
                    transition-transform duration-300
                    ${
                      isSubmitting
                        ? "animate-pulse"
                        : "group-hover:translate-x-1"
                    }
                  `}
                />
              </MotionButton>
            </form>
          </Reveal>
        </div>

        {/* What Happens Next */}
        <Reveal delay={0.15} className="mt-16">
          <div className="text-center">
            <h2 className="font-playfair text-3xl text-dark sm:text-4xl">
              What Happens Next?
            </h2>

            <p className="mx-auto mt-3 max-w-xl font-poppins text-sm leading-7 text-dark/65">
              Getting started is simple. Just tell me what you need and we&apos;ll
              take it from there.
            </p>
          </div>

          <Stagger className="mt-8 grid gap-5 sm:grid-cols-3">
            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 font-playfair text-lg text-primary">
                01
              </div>

              <h3 className="mt-4 font-playfair text-xl text-dark">
                Send a Message
              </h3>

              <p className="mt-2 font-poppins text-sm leading-6 text-dark/65">
                Tell me a little about your business and what you need help
                with.
              </p>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 font-playfair text-lg text-primary">
                02
              </div>

              <h3 className="mt-4 font-playfair text-xl text-dark">
                Let&apos;s Connect
              </h3>

              <p className="mt-2 font-poppins text-sm leading-6 text-dark/65">
                We&apos;ll discuss your needs, priorities, and how I can best
                support you.
              </p>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-secondary/30 font-playfair text-lg text-primary">
                03
              </div>

              <h3 className="mt-4 font-playfair text-xl text-dark">
                Get Started
              </h3>

              <p className="mt-2 font-poppins text-sm leading-6 text-dark/65">
                Once we&apos;re aligned, we can get started and take those tasks
                off your plate.
              </p>
            </StaggerItem>
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}