import {
  Description,
  GitHub,
  Instagram,
  Language,
  LinkedIn,
  Newspaper,
  YouTube,
} from "@mui/icons-material";
import ButtonsBase from "./ButtonsBase";
import { FaAppStoreIos } from "react-icons/fa";

export type ButtonType =
  | "github"
  | "paper"
  | "news"
  | "linkedin"
  | "web"
  | "youtube"
  | "instagram"
  | "appstore";

export interface DynamicButtonProps {
  url: string;
  text: string;
  type: ButtonType;
}

export default function DynamicButton({ url, text, type }: DynamicButtonProps) {
  switch (type) {
    case "github":
      return (
        <ButtonsBase startIcon={<GitHub />} color="githubBlack" href={url}>
          {text}
        </ButtonsBase>
      );
    case "paper":
      return (
        <ButtonsBase startIcon={<Description />} color="info" href={url}>
          {text}
        </ButtonsBase>
      );
    case "news":
      return (
        <ButtonsBase startIcon={<Newspaper />} color="info" href={url}>
          {text}
        </ButtonsBase>
      );
    case "linkedin":
      return (
        <ButtonsBase startIcon={<LinkedIn />} color="linkedinBlue" href={url}>
          {text}
        </ButtonsBase>
      );
    case "web":
      return (
        <ButtonsBase startIcon={<Language />} color="info" href={url}>
          {text}
        </ButtonsBase>
      );
    case "youtube":
      return (
        <ButtonsBase startIcon={<YouTube />} color="youtubeRed" href={url}>
          {text}
        </ButtonsBase>
      );
    case "instagram":
      return (
        <ButtonsBase startIcon={<Instagram />} color="instagramPink" href={url}>
          {text}
        </ButtonsBase>
      );
    case "appstore":
      return (
        <ButtonsBase
          startIcon={<FaAppStoreIos />}
          color="appstoreBlue"
          href={url}
        >
          {text}
        </ButtonsBase>
      );
    default:
      return null;
  }
}
