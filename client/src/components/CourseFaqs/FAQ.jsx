import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What are Data Structures and Algorithms (DSA)?",
      a: `DSA are tools & techniques that help us write efficient and optimized code.
         Data Structures store data, while Algorithms solve problems using step-by-step logic.`
    },
    {
      q: "What is Web Development?",
      a: `Web development is the process of building websites and applications using HTML, CSS, JavaScript and frameworks.`
    },
    {
      q: "What is MERN Stack in Development?",
      a: `MERN stack includes MongoDB, Express.js, React.js, and Node.js for full-stack web development.`
    },
    {
      q: "Why should I learn Data Structures and Algorithms (DSA)?",
      a: `DSA improves problem-solving skills and is essential for coding interviews at tech companies.`
    },
    {
      q: "What is App Development?",
      a: `App development means building mobile applications for Android and iOS using Java, Kotlin, Swift or Flutter.`
    },
    {
      q: "What is Artificial Intelligence (AI)?",
      a: `AI enables machines to mimic human intelligence, learn from data and make decisions.`
    },
    {
      q: "What is Machine Learning (ML)?",
      a: `Machine Learning teaches computers to learn from data and improve accuracy without being programmed explicitly.`
    },
    {
      q: "What is Cyber Security?",
      a: `Cyber Security protects systems from hacking, data theft and unauthorized access.`
    },
    {
      q: "What skills do I need to start programming?",
      a: `Basic logical thinking and the ability to understand instructions — anyone can start programming.`
    },
    {
      q: "Which course is best for beginners?",
      a: `Python, Web Development, and C language are the best starting points for beginners.`
    }
  ];

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow cursor-pointer transition"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold dark:text-white">{item.q}</h3>
            {openIndex === index ? (
              <ChevronUp className="text-gray-600 dark:text-gray-300" />
            ) : (
              <ChevronDown className="text-gray-600 dark:text-gray-300" />
            )}
          </div>

          {openIndex === index && (
            <p className="mt-3 text-gray-600 dark:text-gray-300">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
