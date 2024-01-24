import bullEye from "../assets/bullsEye.png";
import thumbsUp from "../assets/thumbsUp.png";
import meh from "../assets/meh.png";
import { Image } from "@chakra-ui/react";
interface Props {
  rating: number;
}
function Emoji({ rating }: Props) {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: { src: string; alt: string } } = {
    3: { src: meh, alt: "Meh" },
    4: { src: thumbsUp, alt: "Recommended" },
    5: { src: bullEye, alt: "Exceptional" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={1} />;
}

export default Emoji;
