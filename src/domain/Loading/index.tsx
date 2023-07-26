import { gsap } from "gsap";
import { FC, useLayoutEffect, useRef } from "react";
import HelloText from "./HelloText";

const textList = [
  "Hello!",
  "你好!",
  "こんにちは!",
  "안녕하세요!",
  "Bonjour!",
  "Hallo!",
  "Привет!",
  "Olá!",
  "Ciao!",
  "¡¡Buenas!",
];

const Loading: FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.to(".text", {
        duration: 0,
        opacity: 1,
        stagger: 0.2,
      });
      gsap.to(".text", {
        delay: 0.2,
        duration: 0,
        opacity: 0,
        stagger: 0.2,
      });
      gsap.to(textRef.current, {
        y: "-100%",
        delay: 2,
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen " ref={textRef}>
      <div className="left-0 w-full h-full p-0 bg-black">
        <div className="absolute left-1/2 top-1/2">
          {textList.map((text, index) => (
            <HelloText key={index} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
