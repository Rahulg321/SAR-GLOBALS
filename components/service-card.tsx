import Link from "next/link";
import { cn } from "@/lib/utils";
import { PrismicNextImage } from "@prismicio/next";
import { Content } from "@prismicio/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ServiceCardProps {
  className?: string;
  service: Content.ServiceDocument;
}

export default function ServiceCard({ className, service }: ServiceCardProps) {
  return (
    <Link href={`/service/${service.uid}`}>
      <Card className="group cursor-pointer  border-0 shadow-lg overflow-hidden py-0">
        <PrismicNextImage
          field={service.data.featured_image}
          className="w-full h-48 object-cover"
        />
        <CardHeader className="">
          <CardTitle className="text-xl font-bold text-gray-900 ">
            {service.data.service_name}
          </CardTitle>
        </CardHeader>

        <CardContent className="pb-2">
          <span className="leading-relaxed  line-clamp-3">
            {service.data.service_excerpt}
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
