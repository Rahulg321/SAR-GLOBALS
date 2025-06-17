import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";

/**
 * Props for `TestimonialsSection`.
 */
export type TestimonialsSectionProps =
  SliceComponentProps<Content.TestimonialsSectionSlice>;

/**
 * Component for "TestimonialsSection" Slices.
 */
const TestimonialsSection: FC<TestimonialsSectionProps> = () => {
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
                  What Our Customers Have To Say
                </h2>
              </div>

              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="bg-green-600 p-8 lg:p-12 flex flex-col justify-center text-white">
            <div className="max-w-lg">
              <blockquote className="text-lg lg:text-xl italic leading-relaxed mb-8">
                &quot;We have been using Sapphire&apos;s services for the past
                10 years, and they consistently deliver on what they promise.
                Their team is always welcoming, and their staff is highly
                qualified and knowledgeable. They stay up-to-date with the
                latest tax laws and changes, so we never need to train them—they
                already know what they&apos;re doing exceptionally well. They
                have an impressive command over their work. If you&apos;re
                looking for an outsourcing company, I highly recommend Sapphire.
                They even offer free trial services for new clients, and
                I&apos;m confident that once you experience their service,
                you&apos;ll continue working with them.&quot; Thank you!
              </blockquote>

              <div>
                <p className="font-bold text-xl mb-1">GAGANDEEP SINGH</p>
                <p className="text-green-100 font-medium">1 to 1 Accountants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
