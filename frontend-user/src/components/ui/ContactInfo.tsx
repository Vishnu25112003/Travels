import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export type ContactItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
};

type ContactInfoProps = {
  items: ContactItem[];
  className?: string;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ items, className = "" }) => {
  return (
    <section className={`py-8 md:py-10 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map(({ icon: Icon, title, lines, href }, idx) => (
            <div key={idx} className="rounded-2xl border bg-white p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-secondary">{title}</h4>
              </div>
              <div className="text-sm text-gray-700 space-y-1">
                {lines.map((line, i) => {
                  const isPhone = line.replace(/\s/g, "").startsWith("+") || /\d{3,}/.test(line);
                  const isEmail = line.includes("@");
                  const link = href || (isPhone ? `tel:${line.replace(/\s/g, "")}` : isEmail ? `mailto:${line}` : undefined);
                  return link ? (
                    <p key={i}>
                      <a className="hover:text-primary" href={link}>{line}</a>
                    </p>
                  ) : (
                    <p key={i}>{line}</p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
export { Phone, Mail, MapPin, Clock };
