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
    <div className="flex space-x-3">
      {text.map((elem, index) => (
        <p key = {index} className={`flex-row  items-center justify-center bg-white rounded-2xl ring-2  ring-[${HASHTAG_OBJ[index]}] text-[${HASHTAG_OBJ[index]}] text-sm px-3 py-1`}>
          #{elem}
        </p>
      ))}
    </div>
  );
};

export default HashTag;
