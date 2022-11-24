const HASHTAG_OBJ = {
  red: "ring-[rgb(219,156,218)] text-[rgb(219,156,218)]",
  blue: "ring-[rgb(175,173,245)] text-[rgb(175,173,245)]",
  green: "ring-[rgb(186,152,229)] text-[rgb(186,152,229)]",
};

const HashTag = ({
  text,
  color,
}: {
  text: string[];
  color: ("red" | "blue" | "green")[];
}) => {
  return (
    <div className="flex space-x-3">
      {text.map((elem, index) => (
        <p
          key={index}
          className={`items-center bg-white rounded-2xl ring-2 text-sm  px-2 py-1 min-w-fit ${
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
