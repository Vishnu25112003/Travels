import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

const SectionTitle: React.FC<Props> = ({ title, subtitle, align = "center", className = "" }) => {
  return (
    <div className={`mx-auto ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-gray-600 mb-16 ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;