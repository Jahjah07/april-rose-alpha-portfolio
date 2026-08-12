import Header from "../../../components/Header";

export default function ContactForm() {
  return (
    <section id="contact-form" className="py-20 px-6 lg:px-20 bg-background">
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <div className="text-center mb-12 mt-8">
          <h1 className="text-5xl font-playfair text-dark mb-4">Get In Touch</h1>
          <p className="text-lg text-dark/80 font-poppins">
            Have a question or ready to work together? I'd love to hear from you.
          </p>
        </div>

        <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">Subject</label>
            <input
              type="text"
              placeholder="What is this about?"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">Message</label>
            <textarea
              placeholder="Tell me more..."
              rows={5}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
