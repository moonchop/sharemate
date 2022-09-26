import "./BottomNav.css";
import { useFlow } from "../stackflow";

type Navigate_Type = 'Main'|'Group'|'Community'|'MyPage';

const NAVIGATE_OBJ = [
  {action: 'Main', content: '개인'},
  {action:'Group',content:'그룹'},
  {action:'Community',content:'커뮤니티'},
  {action: 'MyPage',content:'내정보'},
];


const BottomNav = () => {
  const { replace } = useFlow();

  return (
    <nav className="wrapper">
      {
        NAVIGATE_OBJ.map(({action,content})=>
        (<div key={action} onClick={() => replace(action as Navigate_Type, {})}>{content}</div>))
      }
    </nav>
  );
};

export default BottomNav;


