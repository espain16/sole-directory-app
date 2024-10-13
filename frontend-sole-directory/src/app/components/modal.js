"use client";
import { useForm } from "react-hook-form";
import "../styles/shoe.css";

function Modal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    return parseInt(data.quantity);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Add your shoe 👟</h2>
      <label htmlFor="shoeName">Shoe Name:</label>
      <input
        {...register("shoeName", { required: true, minLength: 4 })}
        name="shoeName"
      />
      <label htmlFor="colorTheme">Shoe Color:</label>
      <input {...register("colorTheme")} name="colorTheme" />
      <label htmlFor="quantity">Quantity</label>
      <input {...register("quantity", { required: true })} type="number" />
      <button type="submit">Add shoe</button>
    </form>
  );
}

export default Modal;
