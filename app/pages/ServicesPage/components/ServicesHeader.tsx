import Header from "../../../components/Header";

export default function ServicesHeader() {
  return (
    <section id="services-header" className="py-16 px-6 lg:px-20 bg-background">
      <Header />
      <div className="max-w-4xl mx-auto text-center mt-12">
        <div className="bg-secondary p-1 rounded-md mb-4 inline-block">
          <p className="text-xl text-playfair">My Services</p>
        </div>
        <h1 className="text-5xl font-playfair text-dark mb-6">What I Offer</h1>
        <p className="text-lg text-dark/80 font-poppins max-w-2xl mx-auto">
          I provide a range of services to help you manage your business more effectively. 
          From administrative support to social media management, I can help you save time 
          and focus on what matters most.
        </p>
      </div>
    </section>
  );
}
