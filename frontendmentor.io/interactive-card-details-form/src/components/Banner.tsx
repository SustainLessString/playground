import { BannerProps } from "@app/components/types";

import CardBack from "@app/components/CardBack";
import CardFront from "@app/components/CardFront";

const Banner: React.FC<BannerProps> = ({ formInput }) => (
  <div className="relative xl:h-screen xs:h-96 xs:w-fit">
    <div className="absolute z-20 xl:mt-[12rem] xl:ml-[10rem] xs:mt-52 xs:ml-12">
      <CardFront
        cardHolderName={formInput.cardHolderName}
        cardNumber={formInput.cardNumber}
        expiryMonth={formInput.expiryMonth}
        expiryYear={formInput.expiryYear}
      />
    </div>
    <div className="absolute z-10 xl:mt-[30rem] xl:ml-[16rem] xs:mt-12 xs:ml-48">
      <CardBack cardValidationCode={formInput.cardValidationCode} />
    </div>
  </div>
);

export default Banner;
