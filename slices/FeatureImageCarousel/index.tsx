import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * Props for `FeatureImageCarousel`.
 */
export type FeatureImageCarouselProps =
  SliceComponentProps<Content.FeatureImageCarouselSlice>;

/**
 * Component for "FeatureImageCarousel" Slices.
 */
const FeatureImageCarousel: FC<FeatureImageCarouselProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full overflow-hidden"
    >
      <div className="w-full py-16 lg:py-24 px-4 lg:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex gap-4 flex-col items-start">
              <div>
                <Badge>Platform</Badge>
              </div>
              <div className="flex gap-3 flex-col">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tighter font-regular text-left">
                  This is the start of something new
                </h2>
                <p className="text-base lg:text-lg max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  Managing a small business today is already tough. Avoid
                  further complications by ditching outdated, tedious trade
                  methods. Our goal is to streamline SMB trade, making it easier
                  and faster than ever.
                </p>
              </div>
            </div>
            <div className="w-full">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-full"
                    >
                      <div className="flex rounded-lg aspect-video bg-muted items-center justify-center p-4">
                        <span className="text-sm text-center px-2">
                          Platform Screenshot {index + 1}
                        </span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 md:left-4" />
                <CarouselNext className="right-2 md:right-4" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImageCarousel;
