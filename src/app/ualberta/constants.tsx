import { LinkNewTab } from "@/components/Page/PageBase";
import { TimelineListItemProp } from "@/components/TimelineList/TimelineListItem";
import { ReactNode } from "react";

export const UALBERTA_RESEARCH_LABS: TimelineListItemProp[] = [
  {
    primary: (
      <>
        Dr. Samer Adeeb&apos;s
        <br />
        Civil Engineering Lab
      </>
    ),
    startDate: { year: 2020, month: 6 },
    endDate: { year: 2023, month: 12 },
  },
  {
    primary: (
      <>
        Dr. Lindsey Westover&apos;s
        <br />
        Biomedical Engineering Lab
      </>
    ),
    startDate: { year: 2020, month: 6 },
    endDate: { year: 2023, month: 12 },
  },
  {
    primary: (
      <>
        Dr. Di Niu&apos;s
        <br />
        AI Lab at Huawei
      </>
    ),
    startDate: { year: 2022, month: 5 },
    endDate: { year: 2022, month: 12 },
  },
  {
    primary: (
      <>
        Dr. Matthew Taylor&apos;s
        <br />
        Intelligent Robot Learning Lab (
        <LinkNewTab href="https://irll.ca">irll.ca</LinkNewTab>)
      </>
    ),
    startDate: { year: 2023, month: 9 },
    endDate: { year: 2023, month: 12 },
  },
];

export const UALBERTA_AWARDS: (string | ReactNode)[] = [
  "NSERC Undergraduate Student Research Award (2023)",
  "Walter and Edith (Hughes) Fryers Undergraduate Scholarship (2022)",
  "Ledcor Undergraduate Scholarship in Construction Engineering and Management (2022)",
  "Faculty of Engineering Academic Excellence Scholarship (2018)",
  "Advanced Placement Scholarship (2018)",
  "Jason Lang Scholarship, GPA ≥ 3.2 (2019, 2020, 2021)",
];

export const UALBERTA_CERTIFICATES: (string | ReactNode)[] = [
  <>
    Engineer In Training (EIT)
    <br />
    Issued Jul 2023 by The Association of Professional Engineers and
    Geoscientists of Alberta (APEGA)
  </>,
  <>
    SOLIDWORKS CAD Design Associate (CSWA)
    <br />
    Issued Aug 2020 by Dassault Systèmes{" "}
    <LinkNewTab href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-65RYSEXUZT">
      [Credential ID: C-65RYSEXUZT]
    </LinkNewTab>
  </>,
  <>
    Community Helpers Program
    <br />
    Issued Jun 2023 by Alberta Health Services
  </>,
  <>
    QPR Suicide Prevention Gatekeeper Program
    <br />
    Issued Jun 2023 by QPR Institute
  </>,
  <>
    Standard First Aid/CPR-C
    <br />
    Issued Sept 2022 by Lifesaving Society Alberta and Northwest Territories
  </>,
];

export const UALBERTA_VOLUNTEERING: TimelineListItemProp[] = [
  {
    primary: "President",
    secondary: (
      <>
        UAlberta Taekwondo Club (
        <LinkNewTab href="https://uatkd.ca">uatkd.ca</LinkNewTab>)
      </>
    ),
    startDate: { year: 2022, month: 5 },
    endDate: { year: 2023, month: 4 },
  },
  {
    primary: "Social Media Coordinator",
    secondary: (
      <>
        UAlberta Taekwondo Club (
        <LinkNewTab href="https://uatkd.ca">uatkd.ca</LinkNewTab>)
      </>
    ),
    startDate: { year: 2020, month: 2 },
    endDate: { year: 2022, month: 4 },
  },
  {
    primary: "Project Lead",
    secondary: (
      <>
        UAlberta Future Creators (
        <LinkNewTab href="https://uafc.ca">uafc.ca</LinkNewTab>)
      </>
    ),
    startDate: { year: 2019, month: 12 },
    endDate: { year: 2021, month: 4 },
  },
  {
    primary: "UASUevents Media Team",
    secondary: (
      <>
        UAlberta Students&apos; Union (
        <LinkNewTab href="https://www.su.ualberta.ca">
          su.ualberta.ca
        </LinkNewTab>
        )
      </>
    ),
    startDate: { year: 2018, month: 12 },
    endDate: { year: 2020, month: 9 },
  },
];

export const UALBERTA_CLASSES: { [semester: string]: string[] } = {
  "Winter 2023": [
    "ECE 455 Engineering of Nanobiotechnological Systems",
    "ECE 456 Introduction to Nanoelectronics",
    "ECE 487 Data Communication Networks",
    "ECE 492 Computer Engineering Design Project",
    "ENGG 404 Engineering Safety and Risk Management-Leadership in Risk Management",
    "ENG M 401 Financial Management for Engineers",
    "ENGG 400 The Practice of the Engineering Profession",
  ],
  "Fall 2022": ["WKEXP 905 Engineering Work Experience V"],
  "Summer 2022": ["WKEXP 904 Engineering Work Experience IV"],
  "Winter 2022": [
    "CMPUT 301 Introduction to Software Engineering",
    "ECE 315 Computer Interfacing",
    "ECE 420 Parallel and Distributed Programming",
    "CH E 243 Engineering Thermodynamics",
    "HIST 115 Technology and History",
  ],
  "Fall 2021": [
    "CMPUT 379 Operating System Concepts",
    "ECE 304 Digital Electronics",
    "ECE 449 Intelligent Systems Engineering",
    "ECE 342 Probability for Electrical and Computer Engineers",
    "ECE 410 Advanced Digital Logic Design",
  ],
  "Summer 2021": ["WKEXP 903 Engineering Work Experience III"],
  "Winter 2021": ["WKEXP 902 Engineering Work Experience II"],
  "Fall 2020": [
    "CMPUT 291 Introduction to File and Database Management",
    "ECE 302 Electronic Devices",
    "ECE 311 Computer Organization and Architecture",
    "ECE 325 Object-Oriented Software Design",
    "ECE 340 Discrete Time Signals and Systems",
    "MEC E 250 Engineering Mechanics II",
  ],
  "Summer 2020": ["WKEXP 901 Engineering Work Experience I"],
  "Winter 2020": [
    "CMPUT 275 Introduction to Tangible Computing II",
    "CMPUT 272 Formal Systems and Logic in Computing Science",
    "ECE 203 Electrical Circuits II",
    "ECE 212 Introduction to Microprocessors",
    "ECE 240 Continuous Time Signals and Systems",
    "PHYS 230 Electricity and Magnetism",
  ],
  "Fall 2019": [
    "CMPUT 274 Introduction to Tangible Computing I",
    "ECE 202 Electrical Circuits I",
    "ECE 210 Introduction to Digital Logic Design",
    "MATH 201 Differential Equations",
    "MATH 209 Calculus for Engineering III",
    "ENGG 299 Orientation to Cooperative Education",
  ],
  "Winter 2019": [
    "ENCMP 100 Computer Programming for Engineers",
    "MATH 101 Calculus for Engineering II",
    "MATH 102 Applied Linear Algebra",
    "EN PH 131 Mechanics",
    "CHEM 105 Introductory University Chemistry II",
    "ENGG 101 Orientation to the Engineering Profession II",
  ],
  "Fall 2018": [
    "MATH 100 Calculus for Engineering I",
    "ENGG 130 Engineering Mechanics",
    "PHYS 130 Wave Motion, Optics, and Sound",
    "ENGL 199 English for Engineering Students",
    "CHEM 103 Introductory University Chemistry I",
    "ENGG 100 Orientation to the Engineering Profession I",
  ],
};
