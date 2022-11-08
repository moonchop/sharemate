import { useRadio } from "../hooks/useRadio";
import InputComponent from "./InputComponent";
import { useFlow } from "../stackflow";
///그룹 생성 시 정보
/// 기숙사 건물 building
/// 기숙사 층수 floor
/// 해시태그 3개 hashtag1 hashtag2 hashtag3
/// 그룹 간단 소개글 groupIntro
/// 희망 룸메이트 스트링 mateIntro1 mateIntro2 mateIntro3 mateIntro4 mateIntro5
const CreateGroup = () => {
  const { pop } = useFlow();
  return (
    <div className="h-[95%] m-2 pb-28 overflow-y-scroll pt-16">
      <p className="mt-2 ml-2 text-xl">입사를 희망하는 건물을 입력해주세요.</p>
      <InputComponent placeholder="광교관" id="building" />
      <p className="mt-20 ml-2 text-xl">희망하는 층수를 입력해주세요.</p>
      <div className="flex items-center justify-center mb-[100px] rounded-xl bg-gray-100 mx-2 py-4 mt-1">
        <input
          className="w-[30px] text-center text-lg text-coolGray-900 bg-transparent placeholder-slate-300"
          id="floor"
          type="number"
          name="floor"
          placeholder="1"
          onChange={(e) => sessionStorage.setItem(e.target.id, e.target.value)}
        />
        <p>층</p>
      </div>
      <p className="mt-20 ml-2 text-xl">몇인실을 희망하시나요?</p>
      <div className="flex items-center justify-center mb-[100px] rounded-xl bg-gray-100 mx-2 py-4 mt-1">
        <input
          className="w-[30px] text-center text-lg text-coolGray-900 bg-transparent placeholder-slate-300"
          id="room"
          type="number"
          name="room"
          placeholder="4"
          onChange={(e) => sessionStorage.setItem(e.target.id, e.target.value)}
        />
        <p>인실</p>
      </div>

      <p className="mt-2 ml-2 text-xl">
        그룹을 표현할 해시태그를 입력해주세요.<div className=""></div>
      </p>
      <InputComponent placeholder="조용한편" id="hashtag1" />
      <InputComponent placeholder="동갑희망" id="hashtag2" />
      <InputComponent placeholder="비흡연자" id="hashtag3" />

      <p className="mt-20 ml-2 text-xl">간단한 그룹 소개글을 입력해주세요.</p>
      <InputComponent
        placeholder="동갑내기 친구들과 편하고 즐겁게 지내고 싶어요."
        id="groupIntro"
      />

      <p className="mt-20 ml-2 text-xl">어떤 룸메이트를 희망하시나요?</p>
      <InputComponent placeholder="22살이었으면 좋겠어요." id="mateIntro1" />
      <InputComponent placeholder="비흡연자가 좋아요." id="mateIntro2" />
      <InputComponent
        placeholder="성격이 외향적이었으면 좋겠어요."
        id="mateIntro3"
      />
      <InputComponent
        placeholder="깔끔한 편이었으면 좋겠어요."
        id="mateIntro4"
      />
      <InputComponent
        placeholder="음식은 방 밖에서 먹는 게 좋아요."
        id="mateIntro5"
      />

      <button
        onClick={() => pop()}
        className={
          "flex justify-center item-center w-[90%] h-[44px] pt-3 my-10 mx-6 ring-2 ring-[#ab82e0] text-[#ab82e0] text-lg rounded-md shadow-button"
        }
      >
        그룹 생성하기
      </button>
    </div>
  );
};

export default CreateGroup;
