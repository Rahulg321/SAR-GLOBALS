import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `BusinessAwardSection`.
 */
export type BusinessAwardSectionProps =
  SliceComponentProps<Content.BusinessAwardSectionSlice>;

/**
 * Component for "BusinessAwardSection" Slices.
 */
const BusinessAwardSection: FC<BusinessAwardSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="w-full max-w-none prose">
            <PrismicRichText field={slice.primary.content} />
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
              <PrismicNextImage
                field={slice.primary.featured_image}
                className="w-full h-auto object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAwardSection;
