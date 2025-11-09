import React from "react";
import SectionTitle from "./SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

const Faq: React.FC<FaqProps> = ({ items, title = "FAQs", subtitle, align = "left", className = "" }) => {
  return (
    <section className={`py-10 md:py-12 ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <SectionTitle title={title} subtitle={subtitle} align={align} className="mb-6 md:mb-8" />
        )}
        <Accordion className="rounded-xl border border-gray-200 divide-y">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="px-3 md:px-4 text-sm md:text-base font-semibold text-secondary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-3 md:px-4 pb-4 text-sm text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
