import { ChipProps } from "@mui/material";

export const SKILL_TYPES_COLORS: { [type: string]: ChipProps["color"] } = {
  LANGUAGE: "primary",
  LIBRARY: "secondary",
  APPLICATION: "success",
  CATEGORY: "info",
  HARDWARE: "warning",
  PLATFORM: "error",
  SOFT_SKILL: "default",
};
export type SkillType = keyof typeof SKILL_TYPES_COLORS;

export const SKILLS: { [skill: string]: SkillType } = {
  // CATEGORY
  Robotics: "CATEGORY",
  EE: "CATEGORY",
  CS: "CATEGORY",
  AI: "CATEGORY",
  AP: "CATEGORY",
  Athletics: "CATEGORY",
  Volunteering: "CATEGORY",
  BME: "CATEGORY",
  CivE: "CATEGORY",
  "Cloud Computing": "CATEGORY",
  Art: "CATEGORY",
  Photography: "CATEGORY",
  Videography: "CATEGORY",
  WebDev: "CATEGORY",
  Hardware: "CATEGORY",
  CAD: "CATEGORY",
  Animation: "CATEGORY",
  "Social Media": "CATEGORY",
  // LIBRARY
  ROS1: "LIBRARY",
  Gazebo: "LIBRARY",
  RViz: "LIBRARY",
  TensorFlow: "LIBRARY",
  PyTorch: "LIBRARY",
  NextJS: "LIBRARY",
  ReactJS: "LIBRARY",
  // LANGUAGE
  Python: "LANGUAGE",
  C: "LANGUAGE",
  HTML: "LANGUAGE",
  CSS: "LANGUAGE",
  JavaScript: "LANGUAGE",
  TypeScript: "LANGUAGE",
  // HARDWARE
  Soldering: "HARDWARE",
  Circuits: "HARDWARE",
  Embedded: "HARDWARE",
  "Embedded Systems": "HARDWARE",
  Arduino: "HARDWARE",
  // Platform
  Linux: "PLATFORM",
  Docker: "PLATFORM",
  Kubernetes: "PLATFORM",
  AWS: "PLATFORM",
  "Digital Ocean": "PLATFORM",
  // Application
  Unity: "APPLICATION",
  SolidWorks: "APPLICATION",
  Maya: "APPLICATION",
  Blender: "APPLICATION",
  // Soft Skills
  Leadership: "SOFT_SKILL",
  "Conflict Resolution": "SOFT_SKILL",
  "Public Speaking": "SOFT_SKILL",
  Networking: "SOFT_SKILL",
};

export type Skill = keyof typeof SKILLS;
