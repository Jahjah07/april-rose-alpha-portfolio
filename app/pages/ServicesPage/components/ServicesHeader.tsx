export default function ServicesHeader() {
  return (
    <section
      id="services-header"
      className="bg-background px-6 py-16 lg:px-20"
    >
      <div className="mx-auto mt-12 max-w-4xl text-center">
        <div className="mb-4 inline-block rounded-md bg-secondary p-1">
          <p className="text-xl text-playfair">My Services</p>
        </div>

        <h1 className="mb-6 text-5xl font-playfair text-dark">
          How I Can Support Your Business
        </h1>

        <p className="mx-auto max-w-2xl font-poppins text-lg leading-8 text-dark/80">
          From keeping your day-to-day operations organised to managing your
          online presence and supporting your projects, I provide reliable
          virtual assistance tailored to the needs of your business.
        </p>
      </div>
    </section>
  );
}