export const SKILL_TYPES_COLORS = {
  LANGUAGES: "primary",
  FRAMEWORKS: "secondary",
  CATEGORY: "info",
};
export type SkillType = keyof typeof SKILL_TYPES_COLORS;

export const SKILLS: { [skill: string]: SkillType } = {
  Robotics: "CATEGORY",
  EE: "CATEGORY",
  CS: "CATEGORY",
  AI: "CATEGORY",
  AP: "CATEGORY",
  Athletics: "CATEGORY",
  Volunteering: "CATEGORY",
  BME: "CATEGORY",
  CivE: "CATEGORY",
};

export type Skill = keyof typeof SKILLS;
