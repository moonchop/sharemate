import "./BottomNav.css";
import { useFlow } from "../stackflow";

const BottomNav = () => {
  const { replace } = useFlow();

  return (
    <nav className="wrapper">
      <div onClick={() => replace("Main", {})}>개인</div>
      <div onClick={() => replace("Group", {})}>그룹</div>
      <div onClick={() => replace("Community", {})}>커뮤니티</div>
      <div onClick={() => replace("MyPage", {})}>내정보</div>
    </nav>
  );
};

export default BottomNav;
