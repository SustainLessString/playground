import { ThankYouProps } from "@app/components/types";

const ThankYou: React.FC<ThankYouProps> = ({ handleSubmit }) => (
  <div className="flex flex-col items-center justify-center min-h-screen select-none min-w-fit">
    <div className="flex flex-col items-center justify-center max-w-md space-y-6 text-center xl:min-w-xl xs:min-w-xs">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-gradientStart to-primary-gradientEnd">
        <div className="text-4xl font-bold text-white translate-y-[80%] top-1/2 scale-x-125">
          🗸
        </div>
      </div>
      <h1 className="text-4xl">THANK YOU!</h1>
      <h2 className="text-lg">We've added your card details</h2>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="w-full h-10 text-2xl text-white bg-black rounded-lg"
        >
          Confirm
        </button>
      </form>
    </div>
  </div>
);
export default ThankYou;
