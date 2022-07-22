import Box from "@/layouts/boxes";
import { useBook } from "@/lib/hooks/useBooks";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import Alert from "@/components/base/alert";
import Skeleton from "@/components/base/skeleton";

const BookView: React.FC = () => {
  const { query } = useRouter();
  const { data, isError, isLoading } = useBook(query.id as string);

  if (isError) return <Alert.Error message="Network Error!" />;
  return (
    <Box>
      <Box.Header>{data?.title}</Box.Header>
      {isLoading ? (
        <BookViewSkeleton />
      ) : (
        <>
          <BookInfo
            title={data?.title!}
            cover={data?.cover!}
            mate={data?.mate}
          />
          <BookDesc title="About this book" text={data?.desc?.long_desc} />
          <BookDesc
            title="Popular Highlights in this book"
            text={data?.desc?.digest}
          />
        </>
      )}
    </Box>
  );
};

export const BookInfo: React.FC<BookInfoProps> = ({ title, cover, mate }) => (
  <div className="my-4 flex w-full gap-3">
    <figure className="flex items-center justify-center">
      <div className="relative w-32 h-48">
        <Image src={cover} layout="fill" alt={title} />
      </div>
    </figure>
    <div className="flex flex-col">
      {Object.entries(mate ?? {}).map(([itemName, value], i) => {
        if (itemName === "paperback" || itemName === "hardcover") {
          return (
            <div key={i} className="inline-flex gap-1 text-base">
              <span className="capitalize">{itemName}:</span>
              <span>{value} pages</span>
            </div>
          );
        }
        if (itemName === "publication_date") {
          return (
            <div key={i} className="inline-flex gap-1 text-base">
              <span className="capitalize">{itemName}:</span>
              <span>{new Date(value).toLocaleDateString()}</span>
            </div>
          );
        }
        if (itemName === "isbn") {
          return (
            <div key={i} className="inline-flex gap-1 text-base">
              <span className="uppercase">{itemName}:</span>
              <span>{value}</span>
            </div>
          );
        }
        return (
          <div key={i} className="inline-flex gap-1 text-base">
            <span className="capitalize">{itemName}:</span>
            <span>{value}</span>
          </div>
        );
      })}
    </div>
  </div>
);

export const BookDesc: React.FC<BookDescProps> = ({ title, text }) => {
  const [needClamp, setNeedClamp] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const handleReadMore = () => setIsReadMore(true);

  useEffect(() => {
    const dom = textRef.current;
    const height = dom ? parseInt(getComputedStyle(dom).height) : 0;
    setNeedClamp(!isReadMore && height > 200);
  }, [text, isReadMore]);

  if (!text) return null;
  return (
    <Box.SubBox title={title}>
      <p
        ref={textRef}
        className={`indent-8 ${needClamp ? "line-clamp-6 text-ellipsis" : ""}`}
      >
        {text}
      </p>
      {needClamp && (
        <button onClick={handleReadMore} className="btn btn-sm btn-link">
          <FaAngleDown className="w-5 h-5" /> Read more
        </button>
      )}
    </Box.SubBox>
  );
};

const BookViewSkeleton: React.FC = () => (
  <>
    <BookInfoSkeleton />
    <BookDescSkeleton />
    <BookDescSkeleton />
  </>
);

const BookInfoSkeleton: React.FC = () => (
  <Skeleton.Pulse>
    <div className="my-4 flex w-full gap-3">
      <Skeleton.Square className="relative w-32 h-48" />
      <div className="flex flex-col gap-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="inline-flex gap-2">
            <Skeleton.Line className="w-14" />
            <Skeleton.Line className="w-32" />
          </div>
        ))}
      </div>
    </div>
  </Skeleton.Pulse>
);

const BookDescSkeleton: React.FC = () => (
  <Skeleton.Pulse>
    <div className="flex flex-col my-4 gap-3">
      <Skeleton.Square className="h-4 w-44 mb-4" />
      <div className="inline-flex">
        <div className="w-8" />
        <Skeleton.Line className="w-full" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton.Line key={i} className="w-full" />
      ))}
      <Skeleton.Line className="w-64" />
    </div>
  </Skeleton.Pulse>
);

interface BookInfoProps {
  title: string;
  cover: string;
  mate?: BookType["mate"];
}

interface BookDescProps {
  title: string;
  text?: string;
}

type BookType = NonNullable<ReturnType<typeof useBook>["data"]>;

export default BookView;
