import { FaUserMd, FaClock, FaHeart, FaUsers } from "react-icons/fa";

const WhyChoose = () => {
  const items = [
    {
      title: "Certified Specialists",
      desc: "All doctors are verified with real patient feedback.",
      icon: <FaUserMd />,
    },
    {
      title: "Quick Scheduling",
      desc: "Book visits instantly without waiting on calls.",
      icon: <FaClock />,
    },
    {
      title: "Care You Deserve",
      desc: "Patient-focused treatment with transparency.",
      icon: <FaHeart />,
    },
    {
      title: "Growing Community",
      desc: "Thousands trust our platform every day.",
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className="text-blue-500">DocAppoint</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-md bg-white/60 dark:bg-gray-800/60 border border-white/30 shadow-lg hover:scale-105 transition"
            >
              <div className="text-2xl text-blue-500">
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;