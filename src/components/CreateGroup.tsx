import InputComponent from "./InputComponent";
import { useFlow } from "../stackflow";
import { useState } from "react";
import { GroupApi } from "../utils/api/auth";
/// 그룹 생성 시 정보
/// =================
/// 기숙사 건물             building : string       ex] "광교관"
/// 몇인실인지              room : number           ex] 4   (4인실 희망하는 경우)
/// 해시태그 3개            hashtag : string[3]     ex] "조용한편", "청결중요", "아래층희망"
/// 그룹 간단 소개글         groupIntro : string     ex] "동갑내기 친구들과 편하고 즐겁게 지내고 싶어요."
/// 희망 룸메이트 스트링      mateIntro : string[5]   ex] "성격이 외향적이었으면 좋겠어요.", "4층을 희망하고 있어요."
/// 그룹 오픈 채팅방 링크     groupChatLink : string

const CreateGroup = () => {
  const { pop } = useFlow();
  const [groupForm, setGroupForm] = useState({});
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    if (name === "hashtag" || name === "wishList") {
      console.log("list");
    } else {
      setGroupForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const GroupSubmit = () => {
    console.log("sdfusd");
    console.log(groupForm);
    //groupForm 데이터 포스트해야함
    GroupApi(groupForm);
    pop();
  };

  return (
    <div className="h-[95%] m-2 pb-28 overflow-y-scroll pt-10">
      <div className="text-3xl m-2 pb-10">그룹 생성</div>
      <p className="mt-2 ml-2 text-xl">입사를 희망하는 건물을 입력해주세요.</p>
      <InputComponent
        placeholder="광교관"
        id="building"
        onChange={changeHandler}
      />

      <p className="mt-20 ml-2 text-xl">몇인실을 희망하시나요?</p>
      <div className="flex items-center justify-center mb-[100px] rounded-xl bg-gray-100 mx-2 py-4 mt-1">
        <input
          className="w-[30px] text-center text-lg text-coolGray-900 bg-transparent placeholder-slate-300"
          id="maxNum"
          type="number"
          name="maxNum"
          placeholder="4"
          onChange={changeHandler}
        />
        <p>인실</p>
      </div>

      <p className="mt-2 ml-2 text-xl">
        그룹을 표현할 해시태그를 입력해주세요.
      </p>
      <InputComponent
        placeholder="조용한편"
        id="hashtag"
        onChange={changeHandler}
      />
      <InputComponent
        placeholder="동갑희망"
        id="hashtag"
        onChange={changeHandler}
      />
      <InputComponent
        placeholder="비흡연자"
        id="hashtag"
        onChange={changeHandler}
      />

      <p className="mt-20 ml-2 text-xl">간단한 그룹 소개글을 입력해주세요.</p>
      <InputComponent
        placeholder="동갑내기 친구들과 편하고 즐겁게 지내고 싶어요."
        id="groupIntro"
        onChange={changeHandler}
      />

      <p className="mt-20 ml-2 text-xl">어떤 룸메이트를 희망하시나요?</p>
      <InputComponent
        placeholder="22살이었으면 좋겠어요."
        id="wishList"
        onChange={changeHandler}
      />
      <InputComponent
        placeholder="비흡연자가 좋아요."
        id="wishList"
        onChange={changeHandler}
      />
      <InputComponent
        placeholder="성격이 외향적이었으면 좋겠어요."
        id="wishList"
        onChange={changeHandler}
      />
      <InputComponent
        placeholder="깔끔한 편이었으면 좋겠어요."
        id="wishList"
        onChange={changeHandler}
      />
      <InputComponent
        placeholder="음식은 방 밖에서 먹는 게 좋아요."
        id="wishList"
        onChange={changeHandler}
      />

      <p className="mt-20 ml-2 text-xl">
        그룹 오픈 채팅방 링크를 입력해주세요.
      </p>
      <div className="flex items-center justify-center mb-[100px] rounded-xl bg-gray-100 mx-2 py-4 mt-1">
        <input
          className="w-[80%] text-center text-lg text-coolGray-900 bg-transparent placeholder-slate-300"
          id="groupChatLink"
          type="text"
          name="groupChatLink"
          onChange={changeHandler}
        />
      </div>

      <button
        onClick={GroupSubmit}
        className={
          "flex justify-center item-center text-center w-[90%] h-[44px] pt-2 my-10 mx-6 ring-2 ring-[#ab82e0] text-[#ab82e0] text-lg rounded-md shadow-button"
        }
      >
        그룹 생성하기
      </button>
    </div>
  );
};

export default CreateGroup;
