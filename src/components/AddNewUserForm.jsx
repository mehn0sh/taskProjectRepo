import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

const AddNewUserForm = ({
  onClose,
  userToEdit = {},
  setisAddNewUserOpen = {},
  setusersList,
  setisEdit = {},
  usersList,
  BASE_URL,
}) => {
  const { id: editId } = userToEdit;
  const editMode = Boolean(editId);
console.log(userToEdit);
  const { name, lastName, code,id } = userToEdit;
  let editValues = {};
  if (editMode) {
    editValues = {
      id,
      name,
      lastName,
      code,
    };
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });
  let onSubmit = async (data) => {
    if (editMode) {
      axios
        .put(`${BASE_URL}/${editId}`, {
          ...data,
          lat: 61,
          lng: 8,
        })
        .then((response) => {
          setusersList(
            usersList.map((user) =>
              user.id === userToEdit.id ? response.data : user
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
      setisEdit(false);
    } else {
      const newUser = {
        id: data.length + 1,
        name: data.name,
        lastName: data.lastName,
        code: data.code,
        lat: 33,
        lng: 34,
      };
      try {
        const response = await fetch(
          BASE_URL,
          {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
      } catch (error) {
        console.log("cannot add user");
      }
      setusersList([...usersList, newUser]);
      setisAddNewUserOpen(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="نام"
        name="name"
        type="text"
        register={register}
        validationSchema={{
          required: "نام خود را وارد کنید",
          minLength: {
            value: 3,
            message: "حداقل تعداد کاراکتر ها باید 3 عدد باشد",
          },
        }}
        errors={errors}
      />
      <FormInput
        label="نام خانوادگی"
        name="lastName"
        register={register}
        type="text"
        validationSchema={{
          required: "نام خانوادگی خود را وارد کنید",
          minLength: {
            value: 3,
            message: "حداقل تعداد کاراکتر ها باید 3 عدد باشد",
          },
        }}
        errors={errors}
      />
      <FormInput
        label="کد ملی"
        name="code"
        register={register}
        type="text"
        validationSchema={{
          required: "کد ملی خود را وارد کنید",
          minLength: {
            value: 10,
            message: " تعداد کاراکتر ها باید 10 عدد باشد",
          },
          maxLength: {
            value: 10,
            message: " تعداد کاراکتر ها باید 10 عدد باشد",
          },
        }}
        errors={errors}
      />
      <div className="flex justify-between items-center gap-x-12 my-6">
        <button type="submit" className="btn btn--primary flex-1">
        {editMode ? "ویرایش":"افزودن"}
        </button>
        <button className="btn btn--danger py-3 flex-1" onClick={onClose}>
          بستن

        </button>
      </div>
    </form>
  );
};

export default AddNewUserForm;
