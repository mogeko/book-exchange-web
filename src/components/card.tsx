import Skeleton from "@/components/skeleton";
import Image from "next/image";
import Link from "next/link";

const Book: React.FC<CardProps> = ({ title, cover, author, id }) => {
  return (
    <div className="relative flex flex-col mb-4 w-28">
      <figure className="flex justify-center items-center">
        <Link href={`/books/${id}`}>
          <a className="relative w-full h-[calc(7rem/2*3)]">
            <Image src={cover} layout="fill" alt={title} />
          </a>
        </Link>
      </figure>
      <div className="flex flex-col text-sm">
        <Link href={`/books/${id}`}>
          <a className="link no-underline text-primary hover:bg-primary hover:text-primary-content focus:bg-primary-focus focus:text-primary-content">
            <h2 className="truncate">{title}</h2>
          </a>
        </Link>
        <p className="truncate">{author}</p>
      </div>
    </div>
  );
};

const BookSkeleton: React.FC = () => (
  <Skeleton.Pulse className="relative flex flex-col mb-4 w-28">
    <Skeleton.Square className="mb-2 w-28 h-[calc(7rem/2*3)]" />
    <Skeleton.Line className="mb-2 w-24" />
    <Skeleton.Line className="mb-2 w-20" />
  </Skeleton.Pulse>
);

const Card = { Book, BookSkeleton };

interface CardProps {
  title: string;
  cover: string;
  author: string;
  id: number | string;
}

export default Card;
