import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import SkillChip from "../SkillChip/SkillChip";
import { Skill } from "../SkillChip/constants";
import DynamicButton, { DynamicButtonProps } from "../Buttons/DynamicButton";

interface Props {
  skills: Skill[];
  buttons?: DynamicButtonProps[];
}
export default function ProjectMetadata({ skills, buttons }: Props) {
  return (
    <Card variant="outlined" sx={{ mt: 1, borderRadius: "15px" }}>
      <CardContent sx={{ p: "16px !important" }}>
        <Stack direction="column">
          <Typography variant="overline">Skills</Typography>
          <Stack direction="row" width="100%" flexWrap="wrap">
            {skills.map((skill, i) => (
              <SkillChip key={`skill-${i}`} skill={skill} />
            ))}
          </Stack>
          {!!buttons && !!buttons.length && (
            <>
              <Divider sx={{ my: "12px" }} />
              <Stack direction="row" flexWrap="wrap" justifyContent="center">
                {buttons.map((button, i) => (
                  <DynamicButton key={`button-${i}`} {...button} />
                ))}
              </Stack>
            </>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
