import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      <div className="mx-auto px-4 narrow-container">
        <div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold mb-8">
              {slice.primary.heading}
            </h2>
            {isFilled.keyText(slice.primary.tagline) && (
              <p className="text-xl">{slice.primary.tagline}</p>
            )}
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {slice.primary.questions.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 4}`}
                  className="border-b border-[#1a2d5a]/20"
                >
                  <AccordionTrigger className=" text-left hover:no-underline py-4 text-sm md:text-lg ">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 prose prose-ul:list-disc prose-ul:marker:text-red-500 text-sm">
                    <PrismicRichText field={faq.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSlice;
