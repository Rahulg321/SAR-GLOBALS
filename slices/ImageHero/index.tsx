import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/lib/utils";
import AnimatedHeading from "@/components/animated-heading";
import AnimatedText from "@/components/animated-text";

/**
 * Props for `ImageHero`.
 */
export type ImageHeroProps = SliceComponentProps<Content.ImageHeroSlice>;

/**
 * Component for "ImageHero" Slices.
 */
const ImageHero: FC<ImageHeroProps> = ({ slice }) => {
  if (slice.variation === "imageBackgroundWithMargin") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="block-space-mini extra-big-container"
      >
        <div className=" relative min-h-[52vh] w-full overflow-hidden ">
          <PrismicNextImage
            field={slice.primary.background_image}
            fill
            priority
            className={cn("object-cover")}
          />

          <div className="bg-slate-800/60 absolute inset-0"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <AnimatedHeading heading={slice.primary.heading} />
            {isFilled.keyText(slice.primary.tagline) && (
              <AnimatedText text={slice.primary.tagline} />
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-[70vh] w-full overflow-hidden"
    >
      <PrismicNextImage
        field={slice.primary.background_image}
        fill
        priority
        className={cn("object-cover", {})}
      />

      <div className="bg-slate-800/60 absolute inset-0"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white mb-4">{slice.primary.heading}</h1>
        <p className="text-white max-w-2xl">{slice.primary.tagline}</p>
      </div>
    </section>
  );
};

export default ImageHero;
