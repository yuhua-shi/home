import { FC } from "react";

interface HelloTextProps {
  text: string;
}

const HelloText: FC<HelloTextProps> = ({ text }) => {
  return (
    <h2 className="absolute text-5xl text-white -translate-x-1/2 opacity-0 text whitespace-nowrap">{`・${text}`}</h2>
  );
};

export default HelloText;
