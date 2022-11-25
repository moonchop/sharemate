import request from "../../stores/Request";

export const PostGroupApi = async (params: any) =>
  await request.post("/group", params);
export const GetGroupApi = async (params: any) =>
  await request.get("/group", params);
export const GetAllGroupsApi = async () => await request.get("/groups");
export const PutGroupApi = async (params: any) =>
  await request.put("/group", params);
export const DeleteGroupApi = async (params: any) =>
  await request.delete("/group", params);

export const JoinGroupApi = async (params: any) =>
  await request.get("/join", params);
export const LeaveGroupApi = async (params: any) =>
  await request.get("/leae", params);
