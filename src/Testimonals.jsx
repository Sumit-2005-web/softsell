function Testimonals() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "IT Manager",
      company: "TechCorp",
      message: "SoftSell made it super easy to sell our unused licenses. Fast payment and great support!",
    },
    {
      name: "David Lee",
      role: "Procurement Head",
      company: "FinServe Inc.",
      message: "Got an instant valuation and cash within days. Highly recommend SoftSell!",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 mb-4">“{t.message}”</p>
            <div className="font-semibold text-blue-600">{t.name}</div>
            <div className="text-sm text-gray-500">{t.role} at {t.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonals;
