import React from 'react';
interface ButtonProps {
  routeLink: string; // Define the type of routeLink as a string
  text: string; // You can also include other props as needed
}
import { useRouter } from 'next/navigation';
const Button: React.FC<ButtonProps> = ({ routeLink, text }) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(routeLink);
  };
  return (
    <button type="button" onClick={handleClick} className="button-theme ">
      {text}
    </button>
  );
};

export default Button;
