import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type PromiseFeaturesProps =
  SliceComponentProps<Content.PromiseFeaturesSlice>;

const PromiseFeatures: FC<PromiseFeaturesProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 lg:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl text-featured font-bold mb-4">
              {slice.primary.heading}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {slice.primary.tagline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {slice.primary.promises.map((promise, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                  {promise.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {promise.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseFeatures;
