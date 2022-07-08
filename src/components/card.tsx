import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  <div className="animate-pulse relative flex flex-col mb-4 w-28">
    <figure className="flex justify-center items-center h-[calc(7rem/2*3)] rounded bg-base-300 mb-2" />
    <div className="flex flex-col">
      <h2 className="w-24 h-2 rounded bg-base-300 mb-2" />
      <p className="w-20 h-2 rounded bg-base-300 mb-2" />
    </div>
  </div>
);

const Card = { Book, BookSkeleton };

interface CardProps {
  title: string;
  cover: string;
  author: string;
  id: number | string;
}

export default Card;
