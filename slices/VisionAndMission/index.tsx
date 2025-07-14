import { FC } from "react";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Award, LucideIcon, Target } from "lucide-react";

/**
 * Props for `VisionAndMission`.
 */
export type VisionAndMissionProps =
  SliceComponentProps<Content.VisionAndMissionSlice>;

type InfoCardProps = {
  icon: LucideIcon;
  title: KeyTextField;
  children: React.ReactNode;
  variant: "light" | "dark";
};

const InfoCard = ({ icon: Icon, title, children, variant }: InfoCardProps) => {
  // Define styles based on the variant to keep the component clean
  const styles = {
    light: {
      container: "bg-gray-50 text-gray-900",
      iconContainer: "bg-white",
      icon: "text-blue-600",
      paragraph: "text-gray-600",
    },
    dark: {
      container: "bg-[#0B3558] text-white", // Using a consistent dark blue
      iconContainer: "bg-blue-900",
      icon: "text-white",
      paragraph: "text-blue-100",
    },
  };

  const currentStyle = styles[variant];

  return (
    <div
      className={`p-8 md:p-12 flex flex-col justify-center items-center ${currentStyle.container}`}
    >
      {/* 2. Added a max-width container for better readability on large screens */}
      <div className="w-full max-w-xl">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm ${currentStyle.iconContainer}`}
          >
            <Icon className={`w-7 h-7 ${currentStyle.icon}`} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        <p className={`text-lg leading-relaxed ${currentStyle.paragraph}`}>
          {children}
        </p>
      </div>
    </div>
  );
};

/**
 * Component for "VisionAndMission" Slices.
 */
const VisionAndMission: FC<VisionAndMissionProps> = ({ slice }) => {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2 min-h-[400px]">
        <InfoCard
          title={slice.primary.vision_heading}
          icon={Target}
          variant="light"
        >
          {slice.primary.vision_text}
        </InfoCard>

        <InfoCard
          title={slice.primary.mission_heading}
          icon={Award}
          variant="dark"
        >
          {slice.primary.mission_text}
        </InfoCard>
      </div>
    </section>
  );
};

export default VisionAndMission;
