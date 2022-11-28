import InputComponent from "../../components/InputComponent";
import { useFlow } from "../../stackflow";
import CheckText from "../../components/group/CheckText";
/// 그룹 오픈 채팅방 링크     groupChatLink : string

const Report = () => {
  const { pop } = useFlow();

  return (
    <div className="h-[100%] overflow-y-scroll w-full px-6 pt-8">
      <div className="space-y-10"></div>
    </div>
  );
};

export default Report;
