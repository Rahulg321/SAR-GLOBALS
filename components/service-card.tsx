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
      <Card className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden py-0">
        <div className="relative overflow-hidden">
          <PrismicNextImage
            field={service.data.featured_image}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <CardHeader className="">
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
            {service.data.service_name}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <CardDescription className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {service.data.service_excerpt}
          </CardDescription>

          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
              Learn More
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
