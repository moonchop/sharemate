import { useEffect, useRef, useState } from "react";

type Arrange_Type = "row" | "col";

export const useRadio = ({
  contentList,
  arrange = "col",
  defaultState,
  title,
}: {
  contentList: string[];
  arrange?: Arrange_Type;
  defaultState?: string | null;
  title?: string;
}) => {
  const Ref = useRef<any>([]);
  const [radioState, setRadioState] = useState(defaultState ?? null);
  const handleClick = (content: string) => setRadioState(content);

  useEffect(() => {
    contentList.map(
      (str) =>
        (Ref.current[str].checked = radioState !== null && radioState === str)
    );
  }, [radioState]);

  const RadioComponent = () => {
    return (
      <div className="mb-20">
        {title && <p className="ml-3 text-md">{title}</p>}
        <main className="flex p-2 ">
          <div
            className={`rounded-xl bg-gray-100 p-2 ${
              arrange === "col"
                ? "grid-flow-col-dense w-[40rem] grid"
                : "flex-row w-auto"
            }`}
          >
            {contentList.map((content) => (
              <div
                key={content}
                onClick={() => {
                  handleClick(content);
                }}
              >
                <input
                  className="hidden"
                  type="radio"
                  ref={(el) => (Ref.current[content] = el)}
                />
                <label
                  className={`px-6 block cursor-pointer select-none rounded-xl text-lg p-2 text-center ${
                    radioState === content ? "bg-[#ab82e084] font-semibold" : ""
                  }`}
                >
                  {content}
                </label>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  };

  return {
    Component: RadioComponent,
    state: radioState,
  };
};
