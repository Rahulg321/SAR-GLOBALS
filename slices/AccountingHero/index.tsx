import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `AccountingHero`.
 */
export type AccountingHeroProps =
  SliceComponentProps<Content.AccountingHeroSlice>;

/**
 * Component for "AccountingHero" Slices.
 */
const AccountingHero: FC<AccountingHeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden py-20 lg:py-32"
    >
      {/* Background geometric shapes with better contrast */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-600/40 transform skew-x-12 origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-slate-500/30 transform -skew-x-12"></div>
      </div>

      <div className="relative big-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <PrismicNextImage
                field={slice.primary.featured_image}
                className="w-full h-auto rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-wider uppercase text-blue-300 bg-blue-900/20 px-4 py-2 rounded-full inline-block">
                {slice.primary.badge}
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                {slice.primary.heading}
              </h1>
            </div>

            {/* Quote */}
            <div className="relative pl-8 border-l-4 border-blue-400/50">
              <div className="absolute -left-2 -top-2 text-6xl text-blue-300/30 font-serif">
                &quot;
              </div>
              <blockquote className="text-lg lg:text-xl italic text-slate-100 leading-relaxed">
                {slice.primary.tagline}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountingHero;
