import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Monitor,
  Search,
} from "lucide-react";

const AtDigitalWebsite = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-indigo-600 text-white">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded transform rotate-45"></div>
              <span className="text-xl font-bold">at digital</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-gray-200">
                SERVICES
              </a>
              <a href="#about" className="hover:text-gray-200">
                ABOUT US
              </a>
              <a href="#contact" className="hover:text-gray-200">
                CONTACT US
              </a>
              <a href="#careers" className="hover:text-gray-200">
                CAREERS
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-8 rounded-lg">
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  We Crush Your Competitors, Goals, And Sales Records - Without
                  The B.S.
                </h1>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors">
                  GET FREE CONSULTATION
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <Monitor className="w-16 h-16 text-gray-400" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex space-x-2">
                    <div className="w-16 h-12 bg-gray-200 rounded"></div>
                    <div className="w-16 h-12 bg-gray-200 rounded"></div>
                    <div className="w-16 h-12 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Web & Mobile Development */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-blue-100 p-8 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-12 bg-orange-400 rounded"></div>
                    <div className="w-12 h-16 bg-blue-400 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h2 className="text-3xl font-bold text-indigo-600">
                  Web & Mobile App Development
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Your web and mobile Apps are pieces of the puzzle to grow your
                  business. We use frameworks which tailor content and
                  engagement methods to respond to different intents shown by
                  your potential customers who interact with your business
                  online.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Digital Strategy Consulting */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-indigo-600">
                  Digital Strategy Consulting
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Your digital strategy should complement the overall marketing
                  strategy of the company. In online marketing, each component
                  will never work in isolation and every business needs a
                  different mix. We provide a clear concept and strategic
                  overview to find the most efficient model for your business.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition-colors">
                  LEARN MORE
                </button>
              </div>
              <div>
                <div className="bg-blue-100 p-8 rounded-lg flex justify-center">
                  <div className="relative">
                    <Search className="w-24 h-24 text-blue-500" />
                    <div className="absolute inset-0 bg-orange-400 rounded-full w-12 h-12 top-6 left-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
            Frequently asked questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-indigo-600" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded transform rotate-45"></div>
                <span className="text-xl font-bold">at digital</span>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Our Technologies</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-indigo-500 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-sm text-gray-200">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <span className="mx-4">|</span>
              <a href="#" className="hover:text-white">
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
