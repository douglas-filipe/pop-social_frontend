import { Container } from "./styles";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiAngryFill,
  BsFillEmojiDizzyFill,
  BsEmojiExpressionlessFill,
} from "react-icons/bs";
interface IreactionsProps {
  visible: boolean;
}
export const Reactions = ({ visible }: IreactionsProps) => {
  return (
    <Container visible={visible}>
      <BsFillEmojiHeartEyesFill />
      <BsFillEmojiAngryFill />
      <BsFillEmojiDizzyFill />
      <BsEmojiExpressionlessFill />
    </Container>
  );
};
