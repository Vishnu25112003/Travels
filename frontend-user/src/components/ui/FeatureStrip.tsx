import React from "react";
import { ShieldCheck, PhoneCall, BookmarkPlus } from "lucide-react";

type Feature = { icon: React.ComponentType<{ className?: string }>; title: string; text: string };

type FeatureStripProps = { items: Feature[]; className?: string };

const FeatureStrip: React.FC<FeatureStripProps> = ({ items, className = "" }) => {
  return (
    <section className={`py-6 md:py-8 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <div key={i} className="rounded-2xl border bg-white p-4 md:p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-secondary">{title}</h4>
                <p className="text-sm text-gray-700 mt-0.5">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
export { ShieldCheck, PhoneCall, BookmarkPlus };
