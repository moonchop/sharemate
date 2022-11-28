import React from "react";

const InputComponent = ({
  placeholder,
  id,
  onChange,
  value,
}: {
  placeholder: string;
  id: string;
  onChange: any;
}) => {
  return (
    <div className="flex items-center justify-center rounded-xl bg-gray-100 py-3 mt-3">
      <input
        className="w-full text-center text-coolGray-900 bg-transparent placeholder-slate-300 placeholder:text-md outline-none"
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
