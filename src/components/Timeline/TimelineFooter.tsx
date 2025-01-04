import { Container } from "@mui/material";
import CaptionedIframe from "../HeroImage/CaptionedIframe";
import { Role, ROLES } from "../Page/PageContext";

function getContent(role: Role | null) {
  switch (role) {
    case ROLES.CREATOR:
      return (
        <CaptionedIframe
          src="https://www.youtube.com/embed/GEPhLqwKo6g"
          title="Think Different"
          iframeProps={{ style: { maxHeight: "400px", height: "100%" } }}
          caption={
            <>
              &ldquo;Here&apos;s to the crazy ones.
              <br />
              The misfits.
              <br />
              The rebels.
              <br />
              The troublemakers.
              <br />
              The round pegs in the square holes.
              <br />
              The ones who see things differently.
              <br />
              They&apos;re not fond of rules.
              <br />
              And they have no respect for the status quo.
              <br />
              You can quote them, disagree with them, glorify or vilify them.
              <br />
              About the only thing you can&apos;t do is ignore them.
              <br />
              Because they change things.
              <br />
              They push the human race forward.
              <br />
              While some may see them as the crazy ones, we see genius.
              <br />
              Because the people who are crazy enough to think they can change
              the world, are the ones who do.&rdquo;
              <br />
              <br />- Steve Jobs&apos; Apple Computer Inc. 1997
            </>
          }
        />
      );

    default:
      return null;
  }
}
interface Props {
  role: Role | null;
}
export default function TimelineFooter({ role }: Props) {
  return (
    <Container maxWidth="lg" sx={{ mt: "100px" }}>
      {getContent(role)}
    </Container>
  );
}
