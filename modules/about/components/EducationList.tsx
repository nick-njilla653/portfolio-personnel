import { TbSchool as EducationIcon } from "react-icons/tb";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { EDUCATION } from "@/common/constants/education";

import EducationCard from "./EducationCard";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const EducationList = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Formation" icon={<EducationIcon />} />
        <SectionSubHeading>
          <p>Mon parcours académique et mes diplômes</p>
          <div className="mt-2 flex flex-col gap-4 md:mt-0 md:flex-row">
            <Portfolio />
            <Resume />
          </div>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {EDUCATION?.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EducationList;
