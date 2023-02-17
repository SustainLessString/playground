import cardback from "@img/bg-card-back.png";
import { CardBackProps } from "@app/components/types";

const CardBack: React.FC<CardBackProps> = ({ cardValidationCode }) => (
  <div
    className="flex flex-row flex-wrap w-[447px] h-[245px] text-white items-center justify-end space-x-2 pr-12"
    style={{ backgroundImage: `url(${cardback})` }}
  >
    {cardValidationCode.length
      ? [...cardValidationCode].map((cvc) => <div>{cvc}</div>)
      : [...Array(3)].map((_) => <div>{0}</div>)}
  </div>
);

export default CardBack;
