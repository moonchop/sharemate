import request from "../../stores/Request";

export const PostAllApi = async () => await request.get("/posts");
export const PostDetailApi = async (postID: number) =>
  await request.delete("/post", { params: { postID } });
export const PostDeleteApi = async (postId: number) =>
  await request.delete("/posts", { params: { postId } });
export const PostCreateApi = async (params: any) =>
  await request.post("/post", params);
