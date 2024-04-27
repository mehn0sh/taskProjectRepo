import React from "react";

const FormInput = ({ label, name, register,errors,validationSchema,type }) => {
  return (
    <div>
      <label className="my-2 block text-secondary-700" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        className="textField__input"
        {...register(name, validationSchema)}
      />
        {errors && errors[name] && (
        <span className="text-red-700 block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default FormInput;
