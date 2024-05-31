import { useState } from "react";
import copy from "../assets/copy.png";
import success from "../assets/success.gif";

import { PLATFORMS } from "../pages/generatePost/constant";

const Posts = ({ data }: { data: string[] }) => {
  const [copyFile, setCopyFile] = useState<number>(-1)

  const handleCopyText = (text: string, file: number) => {
    navigator.clipboard.writeText(text)
    setCopyFile(file)
    setTimeout(() => {
      setCopyFile(-1)
    }, 1000);
  }

  return (
    <>
      {data.map((e, i) => {
        return e?.length ? (
          <div
            key={i}
            className="mb-5 border border-black rounded-xl p-3 bg-amber-50 "
          >
            <p className="capitalize font-semibold text-xl flex justify-between">
              {PLATFORMS[i]}

              {copyFile === i ?
                <img
                  src={success}
                  className="h-[20px] w-[20px]"
                  alt="copied"
                /> :
                <img
                  onClick={() => handleCopyText(e, i)}
                  src={copy}
                  className="cursor-pointer  h-[20px] w-[20px]"
                  alt="copy"
                />
              }

            </p>
            <p>{e}</p>
          </div>
        ) : null;
      })}
    </>
  );
};

export default Posts;
