/**
 * MyActivity.tsx
 */
 import { ActivityComponentType } from "@stackflow/react";
 import { AppScreen } from "@stackflow/basic-ui";
 import User from '../User';
 import BottomNav from "../components/BottomNav";
 
 const MyActivity : ActivityComponentType = () => {
   
   return (
     <AppScreen
       theme="android"
       appBar={{
         title: "ShareMate",
       }}
     >
       <div>
         <User/>
         <User/>
       </div>

    <BottomNav />
     </AppScreen>
   );
 };
 
 export default MyActivity;