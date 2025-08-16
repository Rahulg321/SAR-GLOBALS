import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Testimonial } from "@/components/testimonial-card";

/**
 * Props for `TestimonialGrid`.
 */
export type TestimonialGridProps =
  SliceComponentProps<Content.TestimonialGridSlice>;

/**
 * Component for "TestimonialGrid" Slices.
 */
const TestimonialGrid: FC<TestimonialGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="big-container block-space">
        <div className="flex gap-4 flex-col items-center">
          <div></div>
          <div className="w-full">
            <h2 className="text-3xl text-featured md:text-5xl tracking-tighter max-w-xl font-regular text-center mx-auto">
              Testimonials
            </h2>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {slice.primary.testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              image={testimonial.person_image.url!}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
