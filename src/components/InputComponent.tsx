import React from "react";

const InputComponent = ({
  placeholder,
  id,
  onChange,
}: {
  placeholder: string;
  id: string;
  onChange: any;
}) => {
  return (
    <div className="flex items-center justify-center rounded-xl bg-gray-100 mx-2 py-4 mt-1">
      <input
        className="w-full text-center text-coolGray-900 bg-transparent placeholder-slate-300 placeholder:text-md"
        id={id}
        type="text"
        name={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
