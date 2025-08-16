import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Badge } from "@/components/ui/badge";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ImageContent`.
 */
export type ImageContentProps = SliceComponentProps<Content.ImageContentSlice>;

/**
 * Component for "ImageContent" Slices.
 */
const ImageContent: FC<ImageContentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
            <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
              <PrismicNextImage field={slice.primary.featured_image} />
            </div>
            <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
              <div>
                <Badge>{slice.primary.badge}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-xl text-featured md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                  {slice.primary.heading}
                </h2>
                <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-left">
                  {slice.primary.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageContent;
