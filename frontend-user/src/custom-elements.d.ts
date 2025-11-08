declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-wc": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        crossorigin?: string;
        autoplay?: boolean;
        loop?: boolean;
      };
    }
  }
}

export {};
