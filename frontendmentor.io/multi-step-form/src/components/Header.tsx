import { HeaderProps } from "@app/types";

const Header: React.FC<HeaderProps> = ({ title, description }) => (
  <div className="my-8 mt-2">
    <h1 className="text-2xl font-bold">{title}</h1>
    <p className="text-lg font-regular text-neutral-coolgray">{description}</p>
  </div>
);
export default Header;
