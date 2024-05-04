import Image from "next/image";
import React from "react";
import Header from "./Header";

const Example = ({
  image,
}: {
  image: {
    before: string;
    after: string;
  };
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-7 ">
        <div className=" flex flex-col  justify-center border max-h-[400px] overflow-hidden  rounded-lg bg-black shadow-md ">
          <div className="h-full w-full ">
            <Image
              src={image?.before}
              alt="before"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className=" flex flex-col  justify-center border   rounded-lg bg-black shadow-md">
          <Image
            src={image?.after}
            alt="after"
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
      </div>
      <hr />
      <h2 className="text-xl my-5 font-bold text-dark-600">
        Now it's your turn
      </h2>
    </>
  );
};

export default Example;
