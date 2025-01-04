"use client";

import {
  Skill,
  SKILL_TYPES_COLORS,
  SKILLS,
} from "@/components/SkillChip/constants";
import SkillChip from "@/components/SkillChip/SkillChip";
import Timeline from "@/components/Timeline/Timeline";
import { ALL_TIMELINE_DETAILS, TimelineDetail } from "@/constants/timeline";
import { Container, Divider, Stack, styled, Typography } from "@mui/material";
import { capitalize, get, isEmpty } from "lodash";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Root = styled(Container)(({}) => ({
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
}));

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [skill, setSkill] = React.useState<Skill>();
  const [searchResults, setSearchResults] = React.useState<TimelineDetail[]>();

  useEffect(() => {
    const skillParam = searchParams.get("skill");
    // (1) If skill not in search param, set to not selected
    if (!skillParam) {
      setSkill("No skill selected");
    } else {
      // (2) If skill in search param is valid, set skill to that
      setSkill(skillParam);
      // (3) Get all the values in timeline details
      let results = Object.values(ALL_TIMELINE_DETAILS);
      // (4) Filter to only results that have the skill
      results = results.filter((result) => result.skills.includes(skillParam));
      // (5) Sort by endDate with "Present" at the beginning
      results.sort((a, b) => {
        if (a.endDate === "Present") return -1;
        if (b.endDate === "Present") return 1;
        // Compare by year
        if (get(a, "endDate.year") !== get(b, "endDate.year")) {
          return get(b, "endDate.year", 0) - get(a, "endDate.year", 0);
        }
        // Fallback to comparing by month
        return get(b, "endDate.month", 0) - get(a, "endDate.month", 0);
      });
      // (6) Set search results to the filtered results
      setSearchResults(results);
    }
  }, [searchParams]);

  const noResults = !!skill && isEmpty(searchResults);
  const skillTypes = Object.keys(SKILL_TYPES_COLORS);

  return (
    <Root maxWidth="lg">
      <Typography variant="h4">Search</Typography>
      <SkillChip skill={skill || ""} size="medium" variant="filled" />

      {noResults ? (
        <Typography variant="body1" color="textDisabled" my={4}>
          No results found
        </Typography>
      ) : (
        <Timeline details={searchResults || []} />
      )}

      <Divider sx={{ width: "100%", my: 3 }} />
      <Typography variant="h5" fontWeight="bold">
        All my skills
      </Typography>
      {skillTypes.map((skillType) => {
        const skills = Object.entries(SKILLS).filter(
          ([, type]) => type == skillType
        );
        return (
          <>
            <Typography variant="h6">
              {capitalize(skillType.replaceAll("_", " "))}
            </Typography>
            <Stack
              direction="row"
              width="100%"
              flexWrap="wrap"
              justifyContent="center"
            >
              {skills.map(([skill], i) => (
                <SkillChip key={`skill-${skillType}-${i}`} skill={skill} />
              ))}
            </Stack>
          </>
        );
      })}
    </Root>
  );
}
