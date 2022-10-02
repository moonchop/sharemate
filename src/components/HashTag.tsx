import React from "react";
// rgb(175,173,245)
// rgb(186,152,229)

const HASHTAG_OBJ = [
  "rgb(219,156,218)",
  "rgb(175,173,245)",
  "rgb(186,152,229)",
]

const HashTag = ({ text }: { text: string[] }) => {
  return (
    <div className="flex gap-2">
      {text.map((elem, index) => (
        <p key = {elem+HASHTAG_OBJ[index]} className={`items-center  bg-white rounded-2xl ring-2  ring-[${HASHTAG_OBJ[index]}] text-[${HASHTAG_OBJ[index]}] text-sm  px-3 py-1 min-w-fit`}>
          #{elem}
        </p>
      ))}
    </div>
  );
};

export default HashTag;
