"use client";

import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import { HeroImageBase } from "@/components/HeroImage/common";
import LinkNewTab from "@/components/Buttons/LinkNewTab";
import TimelineList from "@/components/TimelineList/TimelineList";
import { Container, styled, Typography } from "@mui/material";
import {
  UALBERTA_AWARDS,
  UALBERTA_CERTIFICATES,
  UALBERTA_CLASSES,
  UALBERTA_RESEARCH_LABS,
  UALBERTA_VOLUNTEERING,
} from "./constants";

const Root = styled(Container)(({}) => ({
  // fontFamily: "Roboto", // Roboto is UAlberta's official font
  "& .MuiTypography-root": {
    fontFamily: "inherit",
    fontWeight: "inherit",
  },
}));
const UnorderedList = styled("ul")(({}) => ({
  paddingLeft: "40px",
}));
const OrderedList = styled("ol")(({}) => ({
  paddingLeft: "40px",
}));
const HEADER_PT = 4;

export default function UAlbertaPage() {
  return (
    <Root maxWidth="md">
      <Typography variant="h4" gutterBottom>
        University of Alberta
      </Typography>
      <HeroImageBase src="student/ualberta_hero.jpg" sx={{ height: "300px" }} />
      <Typography variant="h5" pt={HEADER_PT}>
        Degree
      </Typography>
      <Typography variant="body1">
        <strong>
          Bachelor of Science in Computer Engineering Cooperative Program, Class
          of 2023
        </strong>
        <br />
        Sept 2018 - Jun 2023 | Edmonton, Canada
        <br />
        <em>
          * Graduated on June 6, 2023 with Distinction and First Class Standing
        </em>
      </Typography>

      <Typography variant="h5" pt={HEADER_PT}>
        Research
      </Typography>
      <TimelineList items={UALBERTA_RESEARCH_LABS} />
      <Typography variant="subtitle1">PRINCIPAL INVESTIGATORS</Typography>
      <UnorderedList>
        <li>
          <LinkNewTab href="https://apps.ualberta.ca/directory/person/adeeb">
            <strong>Dr. Samer Adeeb</strong>
          </LinkNewTab>
          , Professor, Civil and Environmental Engineering
        </li>
        <li style={{ marginLeft: "40px" }}>
          Chair, Civil and Environmental Engineering Department
        </li>
        <li>
          <LinkNewTab href="https://apps.ualberta.ca/directory/person/lwestove">
            <strong>Dr. Lindsey Westover</strong>
          </LinkNewTab>
          , Associate Professor, Biomedical Engineering
        </li>
        <li style={{ marginLeft: "40px" }}>
          Associate Dean for Graduate Students, Biomedical Engineering
          Department
        </li>
        <li>
          <LinkNewTab href="https://apps.ualberta.ca/directory/person/dniu">
            <strong>Dr. Di Niu</strong>
          </LinkNewTab>
          , Professor, Electrical and Computer Engineering
        </li>
        <li>
          <LinkNewTab href="https://apps.ualberta.ca/directory/person/mtaylor3">
            <strong>Dr. Matthew Taylor</strong>
          </LinkNewTab>
          , Professor, Computing Science
        </li>
      </UnorderedList>
      <Typography variant="subtitle1">PUBLICATIONS</Typography>
      <OrderedList>
        <li>
          Qian Zheng, Ismael Allouche, Weichen Qiu, et al.{" "}
          <strong>
            “Probabilistic Analysis of Pipelines in Geohazard Zones Using a
            Novel Approach for Strain Calculation.”
          </strong>{" "}
          ASCE&apos;s Journal of Pipeline Systems Engineering and Practice. Nov.
          2023.{" "}
          <LinkNewTab href="https://ascelibrary.org/doi/10.1061/JPSEA2.PSENG-1509">
            [ASCE]
          </LinkNewTab>
        </li>
        <li>
          Keith Mills, Muhammad Qharabagh, Weichen Qiu, et al.{" "}
          <strong>“Applying Graph Explanation to Operator Fusion.”</strong> The
          60th Design Automation Conference (DAC 2023). July 2023.{" "}
          <LinkNewTab href="https://arxiv.org/abs/2501.00636">
            [Arxiv]
          </LinkNewTab>{" "}
          <LinkNewTab href="https://kgmills.github.io/assets/posters/applying_get_op_fusion_DAC2023.pdf">
            [Poster]
          </LinkNewTab>{" "}
          <LinkNewTab href="https://60dac.conference-program.com/presentation/?id=RESEARCH145&sess=sess243">
            [DAC Session]
          </LinkNewTab>
        </li>
        <li>
          Tyler Hoekstra, Julia Blackburn, Yuntong She, Weichen Qiu, et al.{" "}
          <strong>“A Web-Based Ice Jam Profile Model.”</strong> 22nd Workshop on
          the Hydraulics of Ice Covered Rivers (CRIPE 2023). July 2023.{" "}
          <LinkNewTab href="https://virtual.oxfordabstracts.com/event/4074/submission/61">
            [CRIPE]
          </LinkNewTab>
        </li>
        <li>
          Keith Mills, Di Niu, Mohammad Salameh, Weichen Qiu, et al.{" "}
          <strong>
            “AIO-P: Expanding Neural Performance Predictors Beyond Image
            Classification.”
          </strong>{" "}
          The 37th Association for the Advancement of Artificial Intelligence
          Conference (AAAI 2023, 19.6% acceptance rate). Feb. 2023.{" "}
          <LinkNewTab href="https://arxiv.org/abs/2211.17228">
            [Arxiv]
          </LinkNewTab>
        </li>
        <li>
          Qian Zheng, Weichen Qiu, et al.{" "}
          <strong>
            “Development of an Online Calculation Tool for Safety Evaluation of
            Pipes Subjected to Ground Movements.”
          </strong>{" "}
          The 14th International Pipeline Conference (IPC 2022). Sept. 2022.{" "}
          <LinkNewTab href="https://asmedigitalcollection.asme.org/IPC/proceedings-abstract/IPC2022/86564/V001T06A004/1154809">
            [ASME]
          </LinkNewTab>
        </li>
        <li>
          Qian Zheng, Weichen Qiu, et al.{" "}
          <strong>
            “Reliability Assessment of Pipes Subjected to Ground Displacements
            Based on a Novel Methodology for Strain Demand Predictions.”
          </strong>{" "}
          The Technology for Future and Ageing Pipelines Conference (TFAP 2022).
          March 2022.
        </li>
        <li>
          Karen Dow, Samer Adeeb, Lindsey Westover, Yong Li, Weichen Qiu, et al.{" "}
          <strong>
            “Introduction to Numerical Analysis for Engineers Textbook.”
          </strong>{" "}
          Engineering at Alberta Open Educational Resources. 2020.{" "}
          <LinkNewTab href="https://engcourses-uofa.ca/books/numericalanalysis/">
            [Textbook]
          </LinkNewTab>
        </li>
      </OrderedList>

      <Typography variant="h5" pt={HEADER_PT}>
        Awards & Scholarships
      </Typography>
      <OrderedList>
        {UALBERTA_AWARDS.map((award, i) => (
          <li key={`award-${i}`}>{award}</li>
        ))}
      </OrderedList>

      <Typography variant="h5" pt={HEADER_PT}>
        Certifications
      </Typography>
      <OrderedList>
        {UALBERTA_CERTIFICATES.map((certificate, i) => (
          <li key={`certificate-${i}`}>{certificate}</li>
        ))}
      </OrderedList>

      <Typography variant="h5" pt={HEADER_PT}>
        Volunteering
      </Typography>
      <TimelineList items={UALBERTA_VOLUNTEERING} />
      <CaptionedImage
        src="student/uasu_media_img1.jpg"
        caption={`“First year Engineering student Weichen Qiu is framed by a giant board game as he takes photographs during University of Alberta welcome week activities in the school's quad, in Edmonton Wednesday Sept. 4, 2019. Photo by David Bloom.”`}
        title="UASUevents Media Team"
        links={[
          {
            url: "https://edmontonjournal.com/year-in-review/year-in-review-david-blooms-top-photos-of-2019",
            text: "[Edmonton Journal] Year in Review: David Bloom's top photos of 2019",
          },
        ]}
        mt={5}
      />

      <Typography variant="h5" pt={HEADER_PT}>
        Coursework
      </Typography>
      {Object.entries(UALBERTA_CLASSES).map(([semester, classes]) => (
        <div key={semester}>
          <Typography variant="subtitle1">{semester.toUpperCase()}</Typography>
          <UnorderedList>
            {classes.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </UnorderedList>
        </div>
      ))}
    </Root>
  );
}
