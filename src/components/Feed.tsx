import React, { useMemo } from "react";

interface IUser {
  name: string;
  age: string;
  major: string;
  text: string;
}

const dumyData: IUser[] = [
  {
    name: "장은학",
    age: "24",
    major: "소프트웨어학과",
    text: "#학생",
  },
  {
    name: "정희수",
    age: "24",
    major: "소프트웨어학과",
    text: "#학생",
  },
  {
    name: "장은학",
    age: "24",
    major: "소프트웨어학과",
    text: "#학생",
  },
  {
    name: "장은학",
    age: "24",
    major: "소프트웨어학과",
    text: "#학생",
  },
];

// const userList = useMemo(() => {
//   return dumyData.map((elem) => (
//     <div>
//       <h1>{elem.name}</h1>
//       <h6>{elem.text}</h6>
//     </div>
//   ));
// }, [dumyData]);

const Feed = () => {
  return (
    <div className="h-3/6 ">
      <div className="flex my-2 justify-between ">
        <div className="flex flex-row">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="flex mr-2 h-14 w-14 m-1 rounded-full"
          />
          <div className="flex flex-col  w-56 h-12">
            <div className="flex mb-1">
              <p className="">테일러</p>
              <p className="">(24)</p>
              <p className="mx-2">소프트웨어학과</p>
            </div>

            <div className="flex space-x-3">
              <p className="flex items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(219,156,218)] text-[rgb(219,156,218)] text-sm px-2 py-1 ">
                #2학년
              </p>
              <p className="flex items-center justify-center bg-white rounded-2xl ring-2 ring-[rgb(175,173,245)] text-[rgb(175,173,245)] text-sm px-2 py-1">
                #흡연
              </p>
              <p className="flex items-center justify-center bg-white rounded-2xl ring-2  ring-[rgb(186,152,229)] text-[rgb(186,152,229)] text-sm px-2 py-1">
                #운동
              </p>
            </div>
          </div>
        </div>
        <button className="flex justify-center items-center w-11 h-16 focus:ring-2 rounded-md bg-slate-100 text-indigo-700 hover:bg-indigo-200 ">
          more
        </button>
      </div>
      <hr className="mt-3" />
    </div>
  );
};

// <p className="bg-green-200 rounded-lg text-gray-600 text-center text-base px-1 py-1">
export default Feed;
