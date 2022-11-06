import { useEffect, useRef } from "react";

type Arrange_Type = "row" | "col";

export const useRadio = (
  content: string,
  title: string,
  contentList: string[],
  arrange: Arrange_Type
) => {
  const Ref = useRef<any>([]);

  const handleClick = (content: string) => {
    contentList.map((str) => (Ref.current[str].checked = content === str));
    sessionStorage.setItem(title, content);
  };

  useEffect(() => {
    const data = sessionStorage.getItem(title);
    if (data === null) return;
    contentList.map((str) => (Ref.current[str].checked = data === str));
  });

  const handleSubmit = () =>
    contentList.reduce(
      (result, content) => ({
        ...result,
        [content]: Ref.current[content].checked,
      }),
      {}
    );
  const RadioComponent = () => {
    return (
      <div className="mb-[100px]">
        {content != "" && <p className="ml-3 text-xl">{content}</p>}
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
                  className="peer hidden"
                  type="radio"
                  ref={(el) => (Ref.current[content] = el)}
                />
                <label className="px-6 block cursor-pointer select-none rounded-xl text-lg p-2 text-center peer-checked:bg-[#ab82e084] peer-checked:font-semibold">
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
    onSubmit: handleSubmit,
  };
};
