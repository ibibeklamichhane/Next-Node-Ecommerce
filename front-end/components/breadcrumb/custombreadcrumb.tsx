import React from "react";
import Link from "next/link";
//import RightSideArrowIcon from "../../assets/icons/RightSideArrowIcon";

const CustomBreadCrumb = ({
  title,
  link,
  list,
  className,
}: {
  title: string;
  link?: string;
  list: Array<{ link?: string | undefined; name: string }>;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-wrap gap-3 items-center ${
        className ? className : "pb-5"
      }`}
    >
      {link ? (
        <Link
          href={link}
          className="text-xl font-medium text-black cursor-pointer"
        >
          {title}
        </Link>
      ) : (
        <h2 className="text-xl font-medium text-primary cursor-pointer">
          {title}
        </h2>
      )}
      {list.map(
        (curr: { link?: string | undefined; name: string }, indx: number) => {
          return (
            <React.Fragment key={indx}>
              {curr.link ? (
                <>
/
                  <Link href={curr.link}>
                    <h5 className="text-md font-medium text-gray-500">
                      {curr.name}
                    </h5>
                  </Link>
                </>
              ) : (
                <>
/                  <h5 className="text-xl font-medium text-primary">
                    {curr.name}
                  </h5>
                </>
              )}
            </React.Fragment>
          );
        }
      )}
    </div>
  );
};

export default CustomBreadCrumb;
