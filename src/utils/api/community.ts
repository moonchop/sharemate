import request from "../../stores/Request";

export const PostAllApi = async () => await request.get("/posts");
export const PostDetailApi = async (num: number) =>
  await request.get("/post", { params: { num } });
export const PostDeleteApi = async (postId: number) =>
  await request.delete("/posts", { params: { postId } });
export const PostCreateApi = async (params: any) =>
  await request.post("/post", params);
