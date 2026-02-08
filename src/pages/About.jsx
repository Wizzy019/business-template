const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600">
          We provide high-quality phone accessories designed to protect,
          enhance, and elevate your everyday mobile experience.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-600 leading-relaxed">
            We started with one goal — to make premium phone accessories
            accessible and affordable. From protective cases to fast chargers,
            we carefully select products that combine durability with style.
          </p>
        </div>

        <div className="bg-gray-100 h-64 rounded-lg"></div>
        {/* Placeholder for image */}
      </div>

      {/* Why Choose Us */}
      <div>
        <h3 className="text-xl font-semibold text-center mb-8">
          Why Choose Us
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold mb-2">Quality Assurance</h4>
            <p className="text-gray-600 text-sm">
              We offer carefully selected products tested for reliability.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold mb-2">Affordable Pricing</h4>
            <p className="text-gray-600 text-sm">
              Competitive prices without compromising quality.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h4 className="font-semibold mb-2">Customer Support</h4>
            <p className="text-gray-600 text-sm">
              Fast responses and reliable assistance when you need it.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;