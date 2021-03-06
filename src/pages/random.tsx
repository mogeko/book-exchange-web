import useQuery from "@/lib/hooks/useQuery";
import { useRouter } from "next/router";
import { type NextPage } from "next";
import { useSWRConfig } from "swr";
import { useEffect } from "react";

const RandomPage: NextPage = () => {
  const { data, isError, isLoading } = useQuery<ResType>("/random", {});
  const { cache } = useSWRConfig();
  const router = useRouter();

  useEffect(() => {
    if (data) {
      cache.delete("/random");
      router.push(data.url);
    }
  }, [router, data, cache]);

  if (isError) return <div>Oooops! Jumping failed!</div>;
  return (
    <div>
      We will jump to {isLoading ? <span>...</span> : <span>{data?.url}</span>}
    </div>
  );
};

interface ResType {
  book_id: `bk${number}`;
  url: `/books/bk${number}`;
}

export default RandomPage;
