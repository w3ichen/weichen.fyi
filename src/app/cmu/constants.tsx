import LinkNewTab from "@/components/Buttons/LinkNewTab";
import { TimelineListItemProp } from "@/components/TimelineList/TimelineListItem";
import Link from "next/link";
import { ReactNode } from "react";

export const CMU_RESEARCH_LABS: TimelineListItemProp[] = [
  {
    primary: (
      <>
        Dr. Aaron Johnson&apos;s
        <br />
        <LinkNewTab href="https://www.cmu.edu/me/robomechanicslab/">
          <strong>Robomechanics Lab</strong>
        </LinkNewTab>{" "}
      </>
    ),
    startDate: { year: 2024, month: 3 },
    endDate: { year: 2025, month: 5 },
  },
  {
    primary: (
      <>
        <LinkNewTab href="https://frc.ri.cmu.edu/">
          Field Robotics Center&apos;s
        </LinkNewTab>
        <br />
        PitMAGIC Lunar Pit Project{" "}
      </>
    ),
    startDate: { year: 2024, month: 3 },
    endDate: { year: 2024, month: 4 },
  },
];
export const CMU_CERTIFICATES: (string | ReactNode)[] = [
  <>
    Physical Science Responsible Conduct of Research Course
    <br />
    Issued Dec 2023 by CITI Program{" "}
    <LinkNewTab href="https://www.citiprogram.org/verify/?wcd8f3bec-b010-4ca3-b72d-6e8b46575b43-60172863">
      [Credential ID: 60172863]
    </LinkNewTab>
  </>,
];

export const CMU_CLASSES: { [semester: string]: string[] } = {
  "Spring 2025": [
    "16-880 Engineering Haptic Interfaces [1]",
    "16-350 Planning Techniques for Robotics [2]",
    "18-842 Autonomous Robotics I [3]",
    "18-349 Introduction to Embedded Systems",
    "24-200 Maker Series: Intro to Manual Machining",
  ],
  "Fall 2024": [
    "16-878 Advanced Mechatronic Design [4]",
    "18-648 Embedded Real-Time Systems",
    "24-760 Robot Dynamics and Analysis",
    "18-021 Introduction to Printed Circuit Boards Fabrication",
    "88-235 Negotiation: Strategies and Behavioral Insights",
  ],
  "Spring 2024": [
    "18-613 Foundations of Computer Systems",
    "18-744 Autonomous Driving",
    "18-665 Advanced Probability & Statistics for Engineers",
    "18-980 M.S. Graduate Project I",
    "18-989 Introduction to Graduate Studies",
  ],
};

export const CMU_CLASSES_FOOTNOTES: ReactNode[] = [
  <>
    [1]{" "}
    <Link href="https://weichen.fyi/haptic-hand">
      https://weichen.fyi/haptic-hand
    </Link>
  </>,
  <>
    [2]{" "}
    <Link href="https://weichen.fyi/vegmap-planner">
      https://weichen.fyi/vegmap-planner
    </Link>
  </>,
  <>
    [3]{" "}
    <Link href="https://z4ziad.github.io/2025-05-13-auto_robo_update_2">
      https://z4ziad.github.io/2025-05-13-auto_robo_update_2
    </Link>
  </>,
  <>
    [4]{" "}
    <Link href="https://weichen.fyi/hasselhoff-bot">
      https://weichen.fyi/hasselhoff-bot
    </Link>
  </>,
];
