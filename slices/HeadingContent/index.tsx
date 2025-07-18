import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeadingContent`.
 */
export type HeadingContentProps =
  SliceComponentProps<Content.HeadingContentSlice>;

/**
 * Component for "HeadingContent" Slices.
 */
const HeadingContent: FC<HeadingContentProps> = ({ slice }) => {
  if (slice.variation === "contentWithMutedBackground") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="block-space big-container"
      >
        <div className="bg-muted p-4 md:p-6 lg:p-8">
          <div className="prose max-w-none">
            <PrismicRichText field={slice.primary.featured_content} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div>
        <div className="prose max-w-none">
          <PrismicRichText field={slice.primary.featured_content} />
        </div>
      </div>
    </section>
  );
};

export default HeadingContent;
