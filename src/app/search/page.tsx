"use client";

import {
  TIMELINE_DETAILS,
  TimelineDetail,
} from "@/components/Page/PageContext";
import { Skill } from "@/components/SkillChip/constants";
import SkillChip from "@/components/SkillChip/SkillChip";
import Timeline from "@/components/Timeline/Timeline";
import { Container, styled, Typography } from "@mui/material";
import { isEmpty, uniqBy } from "lodash";
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
      let results = Object.values(TIMELINE_DETAILS).flat();
      // (4) Filter to only unique values
      results = uniqBy(results, "url");
      // (5) Filter to only results that have the skill
      results = results.filter((result) => result.skills.includes(skillParam));
      // (6) Sort by endDate with "Present" at the beginning
      results.sort((a, b) => {
        if (a.endDate === "Present") return -1;
        if (b.endDate === "Present") return 1;
        // Compare by year
        if (a.endDate.year !== b.endDate.year) {
          return b.endDate.year - a.endDate.year;
        }
        // Fallback to comparing by month
        return b.endDate.month - a.endDate.month;
      });
      // (7) Set search results to the filtered results
      setSearchResults(results);
    }
  }, [searchParams]);

  const noResults = !!skill && isEmpty(searchResults);
  return (
    <Root maxWidth="xl">
      <Typography variant="h4">Search</Typography>
      <SkillChip skill={skill || ""} size="medium" variant="filled" />

      {noResults ? (
        <Typography variant="body1" color="textDisabled">
          No results found
        </Typography>
      ) : (
        <Timeline details={searchResults || []} />
      )}
    </Root>
  );
}
