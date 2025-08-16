import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Badge } from "@/components/ui/badge";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `FeaturesGrid`.
 */
export type FeaturesGridProps = SliceComponentProps<Content.FeaturesGridSlice>;

/**
 * Component for "FeaturesGrid" Slices.
 */
const FeaturesGrid: FC<FeaturesGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full block-space">
        <div className="big-container">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 flex-col items-center">
              <div>
                <Badge>{slice.primary.badge}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl text-featured tracking-tighter max-w-xl font-regular text-left">
                  {slice.primary.heading}
                </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  {slice.primary.tagline}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {slice.primary.features.map((e) => {
                return (
                  <div className="flex flex-col gap-2" key={e.feature_heading}>
                    <div className="bg-muted rounded-md aspect-video mb-2">
                      <PrismicNextImage field={e.feature_image} />
                    </div>
                    <h3 className="text-xl tracking-tight">
                      {e.feature_heading}
                    </h3>
                    <p className="text-muted-foreground text-base">
                      {e.feature_tagline}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
