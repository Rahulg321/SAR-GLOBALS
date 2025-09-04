import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
/**
 * Props for `FaqSlice`.
 */
export type FaqSliceProps = SliceComponentProps<Content.FaqSliceSlice>;

/**
 * Component for "FaqSlice" Slices.
 */
const FaqSlice: FC<FaqSliceProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full  block-space"
    >
      <div className="container">
        <div className="text-center">
          <Badge className="text-xs font-medium">{slice.primary.badge}</Badge>
          <h1 className="mt-4 text-4xl font-semibold text-featured">
            {slice.primary.heading}
          </h1>
          <p className="mt-6 font-medium text-muted-foreground">
            {slice.primary.tagline}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-screen-sm">
          {slice.primary.questions.map((e, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div className="w-full space-y-2">
                <h3 className="font-medium">{e.question}</h3>
                <div className="prose text-justify max-w-none w-full">
                  <PrismicRichText field={e.answer} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSlice;
