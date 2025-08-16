import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall } from "lucide-react";

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full ">
        <div className="container mx-auto">
          <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center block-space">
            <div>
              <Badge>{slice.primary.badge}</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl md:text-5xl text-featured tracking-tighter max-w-xl font-regular">
                {slice.primary.heading}
              </h3>
              <p className="text-lg leading-relaxed tracking-tight max-w-xl">
                {slice.primary.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
