import { HeaderProps } from "@app/types/components";

const Header: React.FC<HeaderProps> = ({ title, description }) => (
  <div className="my-6 mt-2">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="text-lg font-regular text-neutral-coolgray">{description}</p>
  </div>
);
export default Header;
