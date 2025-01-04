"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import CaptionedVideo from "@/components/HeroImage/CaptionedVideo";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));
const HEADER_PT = 7;
const SECTION_PT = 5;

export default function MecSimCalcPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo
        title="MecSimCalc"
        imgSrc="entrepreneur/mecsimcalc_logo2.jpg"
      />
      <HeroImageBase
        src="entrepreneur/mecsimcalc_hero.jpg"
        sx={{ height: "300px" }}
      />

      <ProjectMetadata
        skills={[
          "Engineering",
          "Startup",
          "CS",
          "CivE",
          "WebDev",
          "Python",
          "Django",
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "ReactJS",
          "NextJS",
          "LeafletJS",
          "Material UI",
          "SQL",
          "PostgreSQL",
          "Stripe",
          "Cloud Computing",
          "AWS",
          "DigitalOcean",
          "Kubernetes",
          "Linux",
          "Docker",
          "AI",
          "Langchain",
          "Discourse",
          "Docusaurus",
          "Markdown",
          "Git",
          "Leadership",
          "Social Media",
        ]}
        buttons={[
          {
            url: "https://linkedin.com/company/mecsimcalc",
            text: "@mecsimcalc",
            type: "linkedin",
          },
          {
            url: "https://www.youtube.com/@mecsimcalc3063",
            text: "@mecsimcalc3063",
            type: "youtube",
          },
          {
            url: "https://github.com/MecSimCalc",
            text: "MecSimCalc",
            type: "github",
          },
          {
            url: "https://mecsimcalc.com",
            text: "mecsimcalc.com",
            type: "web",
          },
        ]}
      />

      <CaptionedIframe
        src="https://www.youtube.com/embed/guUi0arZroQ"
        title="The Motivation"
        caption="As Python becomes more widely adopted by engineers for calculations and simulations, a knowledge gap exists between running Python code locally and deploying it online at scale. Traditional methods often require learning new languages and configuring web servers, which can be a roadblock for many non-developers. Frustrated by the repetitive process of building a new app for each research project, MecSimCalc was born."
        mt={2}
      />
      <CaptionedVideo
        src="entrepreneur/mecsimcalc_demo.mp4"
        title="How it works"
        imgPosition="right"
        caption="MecSimCalc is a 100% web-based platform that streamlines Python web app creation into 3 simple steps: inputs, code, and outputs. The intuitive drag-and-drop interface for inputs, in-browser code editor, and rich text editor for outputs make development effortless. Publishing takes a single click, instantly making the app live alongside thousands of others. MecSimCalc is like YouTube for Python web apps, enabling everyone from engineers to educators to deploy, share, and even monetize their work."
        links={[
          {
            url: "https://mecsimcalc.com/search",
            text: "[Web] Explore apps on MecSimCalc",
          },
          {
            url: "https://docs.mecsimcalc.com",
            text: "[Docs] How apps work",
          },
        ]}
        videoProps={{ style: { maxHeight: "auto" } }} // Allow full height
        mt={SECTION_PT}
      />

      <CaptionedImage
        src="entrepreneur/mecsimcalc_event.jpg"
        title="Entrepreneurship"
        caption="As the technical co-founder, I led a 3-9 member team, overseeing development, conducting code reviews, and driving user growth through cold calls, customer interviews, and digital marketing. I actively engaged in the local startup ecosystem by attending conferences, hosting hackathons, and networking with other founders. Our startup was part of CMU's Project Olympus incubator, March 2024 cohort."
        links={[
          {
            url: "https://www.cmu.edu/swartz-center-for-entrepreneurship/education-and-resources/project-olympus/customerdiscoverykickstartteams.html",
            text: "[CMU] Project Olympus Cohorts",
          },
        ]}
        mt={SECTION_PT}
      />

      <Typography variant="h5" pt={HEADER_PT}>
        Tech Stack
      </Typography>
      <CaptionedImage
        src="entrepreneur/mecsimcalc_front.png"
        title="Front-end"
        caption="I built the front-end from the ground up using Next.js, a React.js framework, and the Material-UI design library. I handled every aspect of the process, from coding to UI/UX design, and owned the entire front-end development lifecycle, from conception to deployment."
        unconstrained
      />
      <CaptionedImage
        src="entrepreneur/mecsimcalc_aws.jpg"
        title="Back-end"
        caption="I built the back-end using Python's Django and PostgreSQL, hosted on a DigitalOcean Kubernetes cluster. I engineered an end-to-end pipeline in AWS, from building Docker images with Image Builder to storing assets in S3 and ECR, and deploying apps on Lambda and Fargate. I leveraged the AWS JavaScript SDK and even delved into Lambda's source code to customize the Golang server to our specific needs. This resulted in an automated, robust, and highly scalable infrastructure."
        imgPosition="right"
        mt={3}
        links={[
          {
            url: "https://github.com/MecSimCalc/aws-lambda-runtime-interface-emulator",
            text: "[Github] My Modified AWS Lambda Golang Server",
          },
        ]}
      />
      <CaptionedIframe
        src="https://mecsimcalc.com/app/6170581/thevenin_equivalent_circuit_calculator"
        title="Third-Party Integrations"
        caption="I integrated third-party APIs and tools, including the AWS JavaScript API for compute, Stripe for payments, OpenAI and LangChain for a custom chatbot, Discourse for a discussion platform, and Docusaurus for the documentation page. This involved reading extensive documentation and following security best practices when using and storing API keys."
        mt={SECTION_PT}
        iframeProps={{ style: { height: "500px", maxHeight: "500px" } }} // Set height to larger
      />
    </Root>
  );
}
