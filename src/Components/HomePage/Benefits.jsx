// components/Benefits.jsx
export default function Benefits() {
  const benefits = [
    {
      title: "100% Natural",
      icon: "🌿",
      description: "Pure herbal ingredients with no chemicals",
    },
    {
      title: "Vegan Friendly",
      icon: "🐇",
      description: "Safe, effective beauty solutions for feeling your best.",
    },
    { title: "Free Delivery", icon: "🚚", description: "On orders over $499" },
    {
      title: "Power Potion",
      icon: "🌿",
      description: "Founded with a passion for clean, effective skincare",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-transparent border-2 border-[#0e402d] rounded-lg"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
