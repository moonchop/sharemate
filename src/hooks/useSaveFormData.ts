import { useEffect } from "react";

export const useSaveFormData = (formName: string) => {
  const setData = (data: Object) => {
    Object.keys(data).forEach(function (key) {
      sessionStorage.setItem(key, data[key]);
    });
    // sessionStorage.setItem(formName, JSON.stringify(data));
  };

  useEffect(() => {
    const data = sessionStorage.getItem(formName);
    if (data === null) return;
    Object.entries(JSON.parse(data)).map(([key, value]) => {
      const element = document.getElementById(key);
      if (element !== null) (element as any).value = value;
    });
  });

  return { setData };
};
