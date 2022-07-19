import { DefaultLayout } from "@/layouts/layout";
import Box from "@/layouts/boxes";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import useTags from "@/lib/hooks/useTags";

const Tags: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full gap-6 flex-col c-lg:flex-row">
        <div className="flex basis-5/7 gap-14 max-w-[41rem] flex-col">
          <TagView />
        </div>
        <div className="flex basis-2/7">
          <TagsCotroller />
        </div>
      </div>
    </DefaultLayout>
  );
};

const TagView: React.FC = () => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <Box>
      <Box.Header>Tag: {tag}</Box.Header>
      {tag && <Box.BookList limit={10} tags_include={tag} />}
    </Box>
  );
};

export const TagsCotroller: React.FC = () => {
  const { tags, isLoading, isError } = useTags();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  return (
    <Box title="Tags">
      {Object.entries(tags!).map((items, i) => (
        <Box.SubBox key={i} title={items[0]}>
          <div className="flex flex-wrap gap-2">
            {items[1]?.map((item, j) => (
              <TagItem
                name={item.replace("-", " ")}
                href={`/tags/${item}`}
                key={j}
              />
            ))}
          </div>
        </Box.SubBox>
      ))}
    </Box>
  );
};

const TagItem: React.FC<TagProps> = ({ size, name, href }) => {
  return (
    <Link href={href!}>
      <a className={`btn btn-${size ?? "xs"} normal-case`}>{name}</a>
    </Link>
  );
};

type TagProps = {
  name: string;
  size?: "xs" | "sm" | "md" | "lg";
} & Omit<Parameters<typeof Link>[0], "children">;

export default Tags;
