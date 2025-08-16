import { FC, Suspense } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ServiceCardSkeleton from "@/components/skeletons/service-card-skeleton";
import { createClient } from "@/prismicio";
import ServiceCard from "@/components/service-card";

/**
 * Props for `ServicesIndex`.
 */
export type ServicesIndexProps =
  SliceComponentProps<Content.ServicesIndexSlice>;

/**
 * Component for "ServicesIndex" Slices.
 */
const ServicesIndex: FC<ServicesIndexProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space big-container"
    >
      <div>
        {isFilled.keyText(slice.primary.heading) && (
          <h2>{slice.primary.heading}</h2>
        )}
      </div>
      <div className="mt-6">
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
              <ServiceCardSkeleton />
            </div>
          }
        >
          <GetServices />
        </Suspense>
      </div>
    </section>
  );
};

export default ServicesIndex;

async function GetServices() {
  const client = createClient();
  const services = await client.getAllByType("service");
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
