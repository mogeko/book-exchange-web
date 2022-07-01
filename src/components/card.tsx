import React from "react";

const CardRoot: React.FC<{
  href?: string;
  children?: React.ReactNode;
}> = ({ href, children }) => {
  return (
    <a
      className="m-4 p-6 text-left text-inherit no-underline border border-solid border-[#eaeaea] rounded-[10px] max-w-[300px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3] transition-colors"
      href={href}
    >
      {children}
      {typeof children}
    </a>
  );
};

const Title: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <h2 className={className ?? "m-0 mb-4 text-[1.5rem]"}>{children}</h2>;
};

const Desc: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return <p className={className ?? "m-0 text-xl leading-[1.5]"}>{children}</p>;
};

const Card = Object.assign(CardRoot, { Title, Desc });

export default Card;
