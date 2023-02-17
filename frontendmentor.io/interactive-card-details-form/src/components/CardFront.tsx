import cardfront from "@img/bg-card-front.png";
import { CardFrontProps } from "@app/components/types";

const CardFront: React.FC<CardFrontProps> = ({
  cardHolderName,
  cardNumber,
  expiryMonth,
  expiryYear,
}) => (
  <div
    className="flex flex-col flex-wrap w-[447px] h-[245px] text-white justify-between"
    style={{ backgroundImage: `url(${cardfront})` }}
  >
    <div className="flex flex-row">
      <div className="w-12 h-12 mt-6 ml-6 bg-white rounded-full"></div>
      <div className="w-6 h-6 mt-10 ml-6 border-2 rounded-full bg-none"></div>
    </div>
    <div className="">
      <div className="flex flex-row justify-center text-[2rem]">
        {cardNumber.length
          ? cardNumber.split(/(?=(?!^)(?:\d{4})+$)/).map((digits) => (
              <div className="flex flex-row mx-3">
                {[...digits].map((digit) => (
                  <div className="flex flex-row">{digit}</div>
                ))}
              </div>
            ))
          : [...Array(4)].map((_) => (
              <div className="flex flex-row mx-3">
                {[...Array(4)].map((_) => (
                  <div className="flex flex-row">{0}</div>
                ))}
              </div>
            ))}
      </div>

      <div className="flex flex-row justify-between font-mono text-1xl">
        <div className="m-6">
          {cardHolderName.length ? cardHolderName : "JANE APPLESSED"}
        </div>
        <div className="m-6">
          {expiryMonth.length ? expiryMonth : "00"}/
          {expiryYear.length ? expiryYear : "00"}
        </div>
      </div>
    </div>
  </div>
);

export default CardFront;
