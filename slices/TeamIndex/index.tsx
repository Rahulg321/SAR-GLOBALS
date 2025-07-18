import { FC } from "react";
import {
  Content,
  ImageField,
  KeyTextField,
  RichTextField,
} from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `TeamIndex`.
 */
export type TeamIndexProps = SliceComponentProps<Content.TeamIndexSlice>;

/**
 * Component for "TeamIndex" Slices.
 */
const TeamIndex: FC<TeamIndexProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full py-16 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm mb-4 tracking-wide">
            {slice.primary.tag}
          </p>
          <h1 className=" font-bold  mb-8">{slice.primary.heading}</h1>
          <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            {slice.primary.tagline}
          </p>
        </div>

        <div className="space-y-4">
          {slice.primary.members.map((member) => (
            <TeamCard
              key={member.member_name}
              memberImage={member.member_image}
              memberName={member.member_name}
              memberDesignation={member.member_designation}
              memberDescription={member.member_description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamIndex;

const TeamCard = ({
  memberImage,
  memberName,
  memberDesignation,
  memberDescription,
}: {
  memberImage: ImageField;
  memberName: KeyTextField;
  memberDesignation: KeyTextField;
  memberDescription: RichTextField;
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center md:justify-start">
          <div className="w-64 h-80 relative rounded-lg overflow-hidden shadow-lg">
            <PrismicNextImage
              field={memberImage}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 256px"
            />
          </div>
        </div>

        {/* Profile Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
              {memberName}
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium">
              {memberDesignation}
            </p>
          </div>

          <div className="prose max-w-none">
            <PrismicRichText field={memberDescription} />
          </div>
        </div>
      </div>
    </div>
  );
};
