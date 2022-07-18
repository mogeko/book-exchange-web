import { DefaultLayout } from "@/layouts/layout";
import { tags } from "@/lib/_variable";
import Box from "@/layouts/boxes";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

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
  return (
    <Box title="Tags">
      {tags.map((tag, i) => (
        <Box.SubBox key={i} title={tag.name}>
          <div className="flex flex-wrap gap-2">
            {tag.items?.map((item, j) => (
              <TagItem key={j} {...item} />
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
