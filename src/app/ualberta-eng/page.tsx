"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import { UALBERTA_ENG_SKILLS } from "@/constants/skills";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

const SECTION_PT = 10;

export default function UAlbertaEngPage() {
  return (
    <Root maxWidth="md">
      <Typography variant="h4" gutterBottom>
        UAlberta Engineering
      </Typography>
      <HeroImageBase src="swe/ualberta_eng_hero.jpg" sx={{ height: "300px" }} />

      <ProjectMetadata
        skills={UALBERTA_ENG_SKILLS}
        buttons={[
          {
            url: "https://www.ualberta.ca/en/engineering/index.html",
            text: "UAlberta Engineering",
            type: "web",
          },
          {
            url: "https://www.youtube.com/@CivE_UoA",
            text: "@CivE_UoA",
            type: "youtube",
          },
          {
            url: "https://engcourses-uofa.ca",
            text: "EngCourses Open Resources",
            type: "book",
          },
        ]}
      />

      <CaptionedImage
        src="swe/ualberta_eng_river1d.jpg"
        title="River1D"
        caption="I assisted in deploying River1D, a river ice process model for simulating ice jams, to the web and presented a poster at the CRIPE 2023 River Ice Conference. I also attended a workshop to learn more about river ice and industry-standard tools."
        mt={2}
        links={[
          {
            url: "https://www.riverice.ca/modeling",
            text: "[riverice.ca] River1D Numerical Modeling",
          },
          {
            url: "https://virtual.oxfordabstracts.com/event/4074/submission/61",
            text: "[Poster] A Web-Based Ice Jam Profile Model",
          },
          {
            url: "https://mecsimcalc.com/app/9298398/river_1_d_latest_version",
            text: "[App] River1D",
          },
        ]}
      />

      <CaptionedImage
        src="swe/ualberta_eng_epcor.jpg"
        title="EPCOR Utilities"
        caption="I developed a Flask website for EPCOR, the largest utility in Edmonton, to identify areas with strong sewage odors based on a pipe pressure and airflow algorithm. I visualized the results using interactive heatmaps and pipe flow maps with LeafletJS."
        mt={SECTION_PT}
      />

      <CaptionedImage
        src="swe/ualberta_eng_cmj.jpg"
        title="Countermovement Jump"
        caption="I consulted with head coaches and PhDs to develop a Python Tkinter program that analyzes countermovement jump (CMJ) data for athletes recovering from knee surgery. Additionally, I created a file management program that anonymizes athlete files with a unique ID."
        mt={SECTION_PT}
        links={[
          {
            url: "https://mecsimcalc.com/app/7588440/countermovement_jump_analysis_full_analysis",
            text: "[App] Countermovement Jump Analysis",
          },
        ]}
      />

      <CaptionedImage
        src="swe/ualberta_eng_hydro.jpg"
        title="BC Hydro"
        caption="I developed a ReactJS website for BC Hydro, Canada's second-largest electric utility, to model Total Dissolved Gas (TDG) levels in the Columbia River downstream of hydroelectric dams, using a Python algorithm created by a Ph.D. student. I visualized the data on an interactive LeafletJS map."
        mt={SECTION_PT}
        links={[
          {
            url: "https://mecsimcalc.com/app/1829880/generation_and_transport_of_tdg_in_lower_columbia_river",
            text: "[App] Generation and transport of TDG in lower Columbia River",
          },
        ]}
      />

      <CaptionedImage
        src="swe/ualberta_eng_pipeline.jpg"
        title="Pipeline Simulation"
        caption="I helped a Ph.D. student parallelize their Monte Carlo simulation code in Python, reducing runtime from 74 days to just 14 hours (a 100x speedup) using Numba and Concurrent Futures. This work led to my co-authorship in their papers on pipeline failure probability."
        mt={SECTION_PT}
        links={[
          {
            url: "https://mecsimcalc.com/app/5339494/strain_demand_in_pipes_subjected_to_ground_movement",
            text: "[App] Strain Demand in Pipes Subjected...",
          },
          {
            url: "https://ascelibrary.org/doi/10.1061/JPSEA2.PSENG-1509",
            // text: "[ASCE Paper] Probabilistic Analysis of Pipelines in Geohazard Zones Using a Novel Approach for Strain Calculation",
            text: "[Paper] Probabilistic Analysis of Pipelines...",
          },
          {
            url: "https://asmedigitalcollection.asme.org/IPC/proceedings-abstract/IPC2022/86564/V001T06A004/1154809",
            text: "[Paper] Development of an Online Calculation...",
          },
          {
            url: "", // No link available
            text: "[Paper] Reliability Assessment of Pipes...",
          },
        ]}
      />

      <CaptionedImage
        src="swe/ualberta_eng_textbook.jpg"
        title="Numerical Analysis Textbook"
        caption="I co-authored a university textbook by programming interactive examples in JavaScript and Python code snippets for numerical analysis. I also re-developed all the labs in Python, including recording 21 instructional videos."
        mt={SECTION_PT}
        links={[
          {
            url: "https://engcourses-uofa.ca/books/numericalanalysis",
            text: "[Engcourses] Numerical Analysis Textbook",
          },
          {
            url: "https://engcourses-uofa.ca/books/numericalanalysis/python-lab-tutorials/getting-started-with-python",
            text: "[Engcourses] My Python Lab Tutorials",
          },
          {
            url: "https://engcourses-uofa.ca/interactive-elements-manual",
            text: "[Engcourses] My Interactive Elements Manuals",
          },
        ]}
      />

      <CaptionedIframe
        src="https://www.youtube.com/embed/mjCMyO7QEWs"
        title="Simulation Designer"
        caption="I worked in a team of 4 for 2 months to film and edit 110 engineering lab videos for 11 different university courses, in preparation for online course delivery during the COVID-19 pandemic."
        mt={SECTION_PT}
        links={[
          {
            url: "https://www.youtube.com/watch?v=mjCMyO7QEWs&list=PLt2e1W5DyEIR-uGeD4EUFx9XuHSGKrMz1",
            text: "[Youtube] CivE 221 Labs",
          },
          {
            url: "https://www.youtube.com/watch?v=s-an6S_H_RI&list=PLt2e1W5DyEITxzv-8jrgDr-aFVuH5CS_3",
            text: "[Youtube] EnvE 324 Labs",
          },
          {
            url: "https://www.youtube.com/watch?v=JEo-4sCZhpw&list=PLt2e1W5DyEIQ5sZm4qjBBOsqye9DgO1Gn",
            text: "[Youtube] CivE 391 Labs",
          },
          {
            url: "https://www.youtube.com/watch?v=k6nlr-WPv8A&list=PLt2e1W5DyEIT4q5pxnXs_e9dYmqah5GkI",
            text: "[Youtube] PetE 364 Labs",
          },
        ]}
      />
    </Root>
  );
}
