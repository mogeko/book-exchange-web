import Image from "next/image";
import Link from "next/link";

const Logo: React.FC<LogoProps> = ({ href, src, children }) => {
  return (
    <div className="flex justify-start">
      <Link href={href ?? "/"}>
        <a className="btn btn-ghost normal-case">
          <span className="sr-only">{children ?? "Logo"}</span>
          {src ? (
            <Image className="h-8 w-auto sm:h-10" src={src} alt="logo" />
          ) : (
            <h1 className="text-xl font-bold text-primary-content">
              {children}
            </h1>
          )}
        </a>
      </Link>
    </div>
  );
};

type LogoProps = {
  href?: string;
  children?: React.ReactNode;
} & Partial<Pick<Parameters<typeof Image>[0], "src">>;

export default Logo;
