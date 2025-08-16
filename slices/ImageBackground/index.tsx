import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "@/components/ui/button";

/**
 * Props for `ImageBackground`.
 */
export type ImageBackgroundProps =
  SliceComponentProps<Content.ImageBackgroundSlice>;

/**
 * Component for "ImageBackground" Slices.
 */
const ImageBackground: FC<ImageBackgroundProps> = ({ slice }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        {/* Stronger overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl  font-bold leading-tight mb-6 text-white drop-shadow-2xl">
          Our accounting experts are devoted to helping you improve your
          financial health.
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-white/90 font-medium drop-shadow-lg max-w-3xl">
          The right financial tools and solutions can help you grow older how
          and where you want.
        </p>

        <Button className="bg-white text-black hover:bg-white/90 hover:text-black/90 font-semibold px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default ImageBackground;
