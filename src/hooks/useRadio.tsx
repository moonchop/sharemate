import { useRef } from "react";

type Arrange_Type = "row" | "col";

export const useRadio = (contentList: string[], arrange: Arrange_Type) => {
  const Ref = useRef<any>([]);

  const handleClick = (content: string) => {
    contentList.map((str) => (Ref.current[str].checked = content === str));
  };

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
      <>
        <main className="flex p-2">
          <div
            className={`rounded-xl bg-gray-100 p-2 ${
              arrange === "col"
                ? "grid-flow-col-dense w-[40rem] grid"
                : "flex-row "
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
                <label className="px-6 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#FCABBE] peer-checked:font-bold">
                  {content}
                </label>
              </div>
            ))}
          </div>
        </main>
      </>
    );
  };

  return {
    Component: RadioComponent,
    onSubmit: handleSubmit,
  };
};
