import BoardComponent from "./BoardListItem";

export interface IBoard {
  id: number;
  username: string;
  title: string;
  preview?: string;
}

const CommunityFeed = () => {
  return (
    <div>
      <BoardComponent
        id={1}
        username="정희수"
        title="제목입니다"
        preview="미리보기 글입니다."
      />
      <BoardComponent id={1} username="정희수" title="제목입니다" />
    </div>
  );
};

export default CommunityFeed;
