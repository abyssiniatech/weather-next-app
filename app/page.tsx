
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
   
      

      {/* Hero Section */}
      <section className="bg-indigo-900 text-white relative px-6 md:px-16 py-32">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Amazing Websites with Next.js
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Create fast, modern, and scalable web applications with Next.js, Tailwind CSS, and TypeScript.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/about"
              className="bg-white text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Our Features
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Everything you need to build modern and professional web applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Fast Performance", desc: "Optimized for speed and scalability.", icon: "⚡" },
            { title: "SEO Friendly", desc: "Next.js provides server-side rendering.", icon: "🔍" },
            { title: "Responsive Design", desc: "Looks great on all devices.", icon: "📱" },
            { title: "Easy Integration", desc: "Works seamlessly with APIs and databases.", icon: "🔗" },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-900 text-white px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-200 text-lg md:text-xl">
            Trusted by amazing teams worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Alice Johnson", comment: "This team delivered an amazing website!" },
            { name: "Bob Smith", comment: "Highly professional and fast results." },
            { name: "Clara Lee", comment: "Their solutions are modern and scalable." },
          ].map((testimonial) => (
            <div key={testimonial.name} className="bg-white text-indigo-900 p-6 rounded-xl shadow-lg">
              <p className="mb-4">&quot;{testimonial.comment}&quot;</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 px-6 md:px-16 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Contact us today and let’s build something amazing together.
        </p>
        <a
          href="/contact"
          className="bg-indigo-900 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition"
        >
          Get in Touch
        </a>
      </section>

    
    </div>
  );
}
