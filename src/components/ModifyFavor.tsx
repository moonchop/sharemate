import { useRegisterForm } from "../hooks/useRegisterForm";

const ModifyFavor = () => {
  const { Component: ModifyForm, state } = useRegisterForm();
  return (
    <>
      <ModifyForm />
    </>
  );
};

export default ModifyFavor;
