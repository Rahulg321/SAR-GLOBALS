import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestimonialsSection`.
 */
export type TestimonialsSectionProps =
  SliceComponentProps<Content.TestimonialsSectionSlice>;

/**
 * Component for "TestimonialsSection" Slices.
 */
const TestimonialsSection: FC<TestimonialsSectionProps> = ({ slice }) => {
  return (
    <section className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
          {/* Left Column - Call to Action */}
          <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-center">
            <div className="max-w-md">
              <p className="text-green-600 font-medium mb-6 tracking-wide">
                Testimonials
              </p>

              <div className="border-l-4 border-green-600 pl-6 mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {slice.primary.heading}
                </h2>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="bg-green-600 p-8 lg:p-12 flex flex-col justify-center text-white">
            <div>
              <div className="prose">
                <PrismicRichText field={slice.primary.content} />
              </div>
            </div>
            <div>
              <p className="font-bold text-xl mb-1 mt-4">
                {slice.primary.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
