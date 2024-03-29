import { sanitizedHtml } from "@/utils/utils";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, post }) => {
  return (
    <div className="flex flex-col justify-between gap-12 md:flex-row" key={key}>
      {post?.img && (
        <div className="relative hidden flex-1 xl:flex">
          <Image
            className="hidden flex-1 object-cover lg:min-h-[270px] xl:flex"
            src={post?.img}
            alt=""
            fill
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-3">
        <div className="flex gap-2 font-medium opacity-90">
          <span>{post.createdAt.substring(0, 10)}</span>
          <span>-</span>
          <span className="text-base capitalize text-red-500 xl:text-lg">
            {post?.categorySlug}
          </span>
        </div>
        <Link
          href={`/posts/${post.slug}`}
          className="text-xl font-bold lg:text-2xl xl:text-3xl"
        >
          {post?.title.length >= 40
            ? `${post?.title.substring(0, 40)}...`
            : post?.title}
        </Link>
        <div
          className=" text-[var(--softTextColor)] xl:text-lg"
          dangerouslySetInnerHTML={{
            __html: `${sanitizedHtml(post?.content).substring(0, 200)}...`,
          }}
        />
        <Link
          href={`/posts/${post.slug}`}
          className="relative w-max text-base font-semibold after:absolute after:-bottom-[2px] after:left-0 after:h-[1.7px] after:w-full after:bg-themeRedColor"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
