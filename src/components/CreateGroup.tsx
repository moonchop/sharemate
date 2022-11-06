import { useRadio } from "../hooks/useRadio";

const CreateGroup = () => {
  const { Component: BuildingSelectComponent } = useRadio(
    "희망하는 건물을 선택해주세요.",
    "building",
    ["광교관", "율곡관", "남제관", "화홍관", "일신관", "국제학사"],
    ///user가 남자면 율곡관, 남제관, 일신관, 국제학사만
    ///user가 여자면 광교관, 화홍관, 일신관, 국제학사만.
    "row"
  );

  return (
    <div className="h-[95%] m-2 overflow-y-scroll pt-16">
      <BuildingSelectComponent />
      <p className="mt-2 ml-2 text-xl">희망하는 층수를 입력해주세요.</p>
      <div className="flex items-center justify-center mb-[100px] rounded-xl bg-gray-100 mx-2 py-4 mt-1">
        <input
          className="w-[18px] underline text-base text-coolGray-900 bg-transparent"
          id="floor"
          type="number"
          name="floor"
          placeholder="1"
        />
        <p>층</p>
      </div>

      <p className="mt-2 ml-2 text-xl">
        그룹을 표현할 해시태그를 입력해주세요<div className=""></div>
      </p>
      <div className="flex items-center justify-center rounded-xl bg-gray-100 mx-2 py-4 mt-1">
        <input
          className="w-full text-base text-coolGray-900 bg-transparent"
          id="hashtag1"
          type="text"
          name="hashtag1"
        />
      </div>
      <div className="flex items-center justify-center rounded-xl bg-gray-100 mx-2 py-4 mt-1">
        <input
          className="w-full text-base text-coolGray-900 bg-transparent"
          id="hashtag2"
          type="text"
          name="hashtag2"
        />
      </div>
      <div className="flex items-center justify-center rounded-xl bg-gray-100 mx-2 py-4 mt-1">
        <input
          className="w-full text-base text-coolGray-900 bg-transparent"
          id="hashtag3"
          type="text"
          name="hashtag3"
        />
      </div>
      <p className="my-4 mt-10 ml-2">
        간단한 그룹소개 글을 입력해주세요.(50자 이내)
      </p>
      <div className="flex items-center mb-48 justify-center rounded-xl bg-gray-100 mx-2 py-4 mt-1">
        <input
          className="w-full h-161 text-base text-coolGray-900 bg-transparent"
          id="hashtag3"
          type="text"
          name="hashtag3"
        />
      </div>
    </div>
  );
};

export default CreateGroup;
