const Footer: React.FC<FooterProps> = ({ time, author }) => {
  const now = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>
          Copyright © {time === now ? now : `${time} - ${now}`}, All right
          reserved{author ? ` by ${author}` : null}.
        </p>
      </div>
    </footer>
  );
};

interface FooterProps {
  time: number;
  author?: string;
}

export default Footer;
