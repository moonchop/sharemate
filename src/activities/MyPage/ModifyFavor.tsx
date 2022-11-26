import { useRegisterForm } from "../../hooks/useRegisterForm";
import request from "../../stores/Request";

const ModifyFavor = () => {
  const { Component: ModifyForm, state } = useRegisterForm();

  const submitHandler = () => {
    request.put("/favor", {});
  };

  return (
    <>
      <ModifyForm />
    </>
  );
};

export default ModifyFavor;
