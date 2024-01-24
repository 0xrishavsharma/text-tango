import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, post }) => {
  const sanitizedPostHtml = DOMPurify.sanitize(post?.content);

  return (
    <div className="flex flex-col justify-between gap-12 md:flex-row" key={key}>
      {post?.img && (
        <div className="relative hidden flex-1 xl:flex">
          <Image
            className="hidden flex-1 object-cover xl:flex"
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
          {post?.title ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </Link>
        <div
          className=" text-[var(--softTextColor)] xl:text-lg"
          dangerouslySetInnerHTML={{
            __html: `${sanitizedPostHtml.substring(0, 250)}...`,
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
