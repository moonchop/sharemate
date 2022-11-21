import { useEffect } from "react";

export const useSaveFormData = (formName: string) => {
  const setData = (data: any) => {
    sessionStorage.setItem(formName, JSON.stringify(data));
  };

  const getData = () => JSON.parse(sessionStorage.getItem(formName) ?? "{}");

  useEffect(() => {
    const data = sessionStorage.getItem(formName);
    if (data === null) return;
    Object.entries(JSON.parse(data)).map(([key, value]) => {
      const element = document.getElementById(key);
      if (element !== null) (element as any).value = value;
    });
  });

  return { setData, getData };
};
