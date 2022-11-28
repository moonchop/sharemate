const ReportRadioButton = ({
  text,
  id,
  onClick,
}: {
  text: string;
  id: string;
  onClick: any;
}) => {
  return (
    <>
      <div className=" my-4">
        <input
          type="radio"
          value={id}
          name="report"
          className="mr-5 ml-8 my-2 h-5 w-5  accent-fuchsia-500 border-gray-400"
          onClick={onClick}
        />
        <span className="">{text}</span>
      </div>
      <hr className="" />
    </>
  );
};

export default ReportRadioButton;
