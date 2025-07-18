import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Props for `ContentWithButtons`.
 */
export type ContentWithButtonsProps =
  SliceComponentProps<Content.ContentWithButtonsSlice>;

/**
 * Component for "ContentWithButtons" Slices.
 */
const ContentWithButtons: FC<ContentWithButtonsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full block-space"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h2 className="font-bold leading-tight">{slice.primary.heading}</h2>

          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            {slice.primary.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild variant={"default"} className="rounded-2xl">
              <Link href="/contact">Booking Meeting</Link>
            </Button>
            <Button asChild variant={"secondary"} className="rounded-2xl">
              <Link href="/contact">Get in Touch Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWithButtons;
