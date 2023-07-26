import { FC } from "react";

interface HelloTextProps {
  text: string;
}

const HelloText: FC<HelloTextProps> = ({ text }) => {
  return (
    <h2 className="absolute top-0 text-5xl text-white opacity-0 text whitespace-nowrap">{`・${text}`}</h2>
  );
};

export default HelloText;
