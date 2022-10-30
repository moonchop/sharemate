import { useRef } from "react";

export const useRadio = (contentList: string[]) => {
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
        <main className="flex w-full items-center justify-center p-2">
          <div
            className="grid w-[40rem] grid-flow-col-dense space-x-2 rounded-xl bg-gray-100 p-2"
            x-data="app"
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
                <label className=" block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-[#FCABBE] peer-checked:font-bold">
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
