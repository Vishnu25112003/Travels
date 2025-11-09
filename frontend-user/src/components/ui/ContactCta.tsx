import React from "react";

type CtaProps = {
  title: string;
  subtitle?: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
};

const ContactCta: React.FC<CtaProps> = ({
  title,
  subtitle,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  className = "",
}) => {
  return (
    <section className={`py-10 md:py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-primary to-orange-500 text-white p-6 md:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
              {subtitle && <p className="text-white/90 mt-1 text-sm md:text-base">{subtitle}</p>}
            </div>
            <div className="flex gap-3">
              <a href={primaryHref} className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white text-primary font-semibold shadow hover:opacity-95">
                {primaryText}
              </a>
              {secondaryText && secondaryHref && (
                <a href={secondaryHref} className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/80 text-white font-semibold hover:bg-white/10">
                  {secondaryText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
