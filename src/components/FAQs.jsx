import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What does validator check?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    question: "How long does a validation take?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Do I need an account to use Validator?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "How will I receive my report?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#D6E0D6] px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-[#004B38]">
          FAQs
        </p>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black md:text-4xl">
              Frequently Asked
              <br />
              Questions
            </h2>

            <div className="mt-10 rounded-md bg-[#004B38] p-6 shadow-md md:p-8">
              <h3 className="text-lg font-semibold text-white md:text-xl">
                Still have a question?
              </h3>
              <p className="mt-4 text-sm leading-relaxed tracking-wide text-white md:text-base">
                We're here to help. Whether it's about Validator, your report,
                or getting started, send us an email and we'll be happy to
                assist.
              </p>
              <a
                href="mailto:enquiries@gmail.com"
                className="mt-6 inline-flex items-center gap-2 bg-[#FBB724] px-5 py-3 text-sm font-medium text-[#004B38] transition hover:brightness-95"
              >
                Send an Email
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:pt-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-md border border-black/10 bg-white/20"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-black md:text-base">
                      {faq.question}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black text-black">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${index}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-gray-900 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}