import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AtDigitalWebsite = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu lorem?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-indigo-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white transform rotate-45"></div>
            <span className="text-xl font-bold">AT DIGITAL</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-orange-400 transition-colors">
              SERVICES
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              ABOUT US
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              CONTACT US
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              CAREERS
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-100 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="bg-teal-400 text-white p-8 rounded-lg max-w-md">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  We Crush Your Competitors, Goals, And Sales Records - Without
                  The B.S.
                </h1>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors">
                  GET FREE CONSULTATION
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
                  <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-gray-500">Laptop Image</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Web & Mobile App Development */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-indigo-100 p-8 rounded-lg">
                <div className="w-16 h-16 bg-orange-500 rounded mb-4"></div>
                <div className="w-12 h-8 bg-teal-400 rounded"></div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
                Web & Mobile App Development
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents that provide seamless
                user experiences.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Digital Strategy Consulting */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-teal-100 p-8 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-teal-400 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-orange-400 rounded-full opacity-75"></div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pr-12">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
                Digital Strategy Consulting
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                needs to work in synergy as a coherent strategy. Our goal is to
                understand your business requirements through a strategic,
                data-driven approach.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-white transform rotate-45"></div>
                <span className="text-xl font-bold">AT DIGITAL</span>
              </div>
              <p className="text-indigo-200 max-w-sm">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>

            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
              <div>
                <h3 className="font-bold mb-4">Our Technologies</h3>
                <ul className="space-y-2 text-indigo-200">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      ReactJS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Gatsby
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      NextJS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      NodeJS
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Our Services</h3>
                <ul className="space-y-2 text-indigo-200">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Social Media Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Web & Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Data & Analytics
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-indigo-500 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-indigo-200">
            <div className="mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors mr-6">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AtDigitalWebsite;
