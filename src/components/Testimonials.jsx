import { FaQuoteRight, FaStar, FaRegStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahim Uddin",
      role: "Patient",
      rating: 5,
      comment: "Super smooth booking and great doctor support.",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Nusrat Jahan",
      role: "Patient",
      rating: 4,
      comment: "খুব দ্রুত অ্যাপয়েন্টমেন্ট পেলাম। অসাধারণ সেবা!",
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Sajid Hasan",
      role: "Patient",
      rating: 3,
      comment: "Clean UI and very easy to use.",
      img: "https://i.pravatar.cc/100?img=3",
    },
  ];

  // ⭐ rating function
  const renderStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="text-gray-300" />
      )
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">
          What Our Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, i) => (
            <div
              key={i}
              className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:-rotate-1 hover:shadow-xl transition"
            >
              <FaQuoteRight className="absolute top-4 right-4 text-blue-400 opacity-30 text-3xl" />

              <img
                src={item.img}
                alt=""
                className="w-14 h-14 rounded-full mx-auto mb-4 border-2 border-blue-400"
              />

              {/* ⭐ Rating */}
              <div className="flex justify-center gap-1 mb-3">
                {renderStars(item.rating)}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                “{item.comment}”
              </p>

              <h4 className="font-semibold">{item.name}</h4>
              <span className="text-xs text-gray-400">
                {item.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;