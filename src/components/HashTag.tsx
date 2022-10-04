import React from "react";
// rgb(175,173,245)
// rgb(186,152,229)

const HASHTAG_OBJ = {
  red: "ring-[rgb(219,156,218)] text-[rgb(219,156,218)]",
  blue: "ring-[rgb(175,173,245)] text-[rgb(175,173,245)]",
  green: "ring-[rgb(186,152,229)] text-[rgb(186,152,229)]",
};
console.log(HASHTAG_OBJ["red"]);
const HashTag = ({
  text,
  color,
}: {
  text: string[];
  color: ("red" | "blue" | "green")[];
}) => {
  const value = "#FF0000";
  return (
    <div className="flex gap-2">
      {text.map((elem, index) => (
        <p
          key={index}
          className={`items-center  bg-white rounded-2xl ring-2 text-sm  px-3 py-1 min-w-fit ${
            HASHTAG_OBJ[color[index]]
          }`}
        >
          #{elem}
        </p>
      ))}
    </div>
  );
};

export default HashTag;
