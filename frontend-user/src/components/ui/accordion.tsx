import React, { useId, useState } from "react";

export type AccordionItemProps = {
  value: string;
  children: React.ReactNode;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ children }) => (
  <div className="border-b border-white/10 last:border-none">{children}</div>
);

export const AccordionTrigger: React.FC<React.HTMLAttributes<HTMLButtonElement> & { onClick?: () => void }> = ({ children, className = "", ...props }) => (
  <button
    type="button"
    className={"flex w-full items-center justify-between py-3 text-left " + className}
    {...props}
  >
    {children}
    <svg className="w-4 h-4 shrink-0 text-current ml-2" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
    </svg>
  </button>
);

export const AccordionContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div className={"px-1 pb-3 " + className} {...props}>
    {children}
  </div>
);

type AccordionProps = {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({ /* type = "single",*/ collapsible = true, className = "", children }) => {
  const id = useId();
  const [open, setOpen] = useState<string | null>(null);

  const items = React.Children.toArray(children) as React.ReactElement[];

  return (
    <div className={"w-full " + className}>
      {items.map((item, idx) => {
        const value = (item.props as AccordionItemProps).value ?? `${id}-${idx}`;
        const isOpen = open === value;
        const childNodes = React.Children.toArray((item.props as AccordionItemProps).children);
        const trigger = childNodes.find(
          (c) => React.isValidElement(c) && c.type === AccordionTrigger,
        ) as React.ReactElement | undefined;
        const content = childNodes.find(
          (c) => React.isValidElement(c) && c.type === AccordionContent,
        ) as React.ReactElement | undefined;

        return (
          <div key={value} className="overflow-hidden">
            {trigger &&
              React.cloneElement(trigger, {
                onClick: () => setOpen(isOpen && collapsible ? null : value),
                "aria-expanded": isOpen,
              } as React.HTMLAttributes<HTMLButtonElement>)}
            {content && (
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-200 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">{content}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
