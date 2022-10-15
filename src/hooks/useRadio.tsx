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
        {contentList.map((content, index) => (
          <div key={content}>
            <p>{content}</p>
            <input
              type="radio"
              onClick={() => handleClick(content)}
              ref={(el) => (Ref.current[content] = el)}
            />
          </div>
        ))}
      </>
    );
  };

  return {
    Component: RadioComponent,
    onSubmit: handleSubmit,
  };
};
