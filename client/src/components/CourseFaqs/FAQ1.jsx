import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "I am an international student, how can I enroll?" },
    { q: "I don't know anything about Coding, is this batch good for me?" },
    { q: "Do I need to be a Computer Science student to take up this batch?" },
    { q: "How will I ask my doubts?" },
    { q: "What is the batch duration?" },
    { q: "Is the batch in Hindi or English?" },
    { q: "How long is the batch access?" },
    { q: "Will there be a Certificate of completion?" },
    { q: "Is there a batch schedule?" },
    { q: "Will there be question practice in the course?" },
    { q: "Is there a group/community I can join after enrolling?" },
    { q: "Will there be Live classes?" },
    { q: "What are the lecture timings?" },
    { q: "I just completed 12th and want to prepare for internship/job as a Software Developer, can I take it?" },
    { q: "Where will I find my batch after enrollment?" },
    { q: "I paid but didn’t receive welcome email / cannot access my batch. What to do?" },
    { q: "Library Feature (MAANG PYQs) will be for how many companies?" },
    { q: "What is 1:1 Live Resume Correction?" },
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
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Answer will be added soon. (You can customize answers here.)
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
