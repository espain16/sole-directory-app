"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useEffect } from "react";

const shoeSchema = yup.object({
  shoeName: yup.string().required("Shoe name is required."),
  shoeColor: yup.string(),
  quantity: yup
    .number()
    .positive()
    .integer()
    .required("Quantity is required.")
    .transform((value) => (isNaN(value) ? undefined : parseInt(value, 10))),
});

function ShoeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(shoeSchema),
  });

  //can an successful add message be displayed when this happens
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {
    const shoeData = {
      shoeName: data.shoeName,
      shoeColor: data.shoeColor,
      quantity: data.quantity,
    };
    console.log("Attempting to submit:", shoeData);
    try {
      const response = await axios.post("/api/shoes/submit-form", shoeData);
      console.log("Shoe data submitted successfully", response.data);
    } catch (error) {
      console.log("Error submitting form data:", error);
    }
  };

  console.log("isValid", isValid);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Add your shoe 👟</h2>
      <div>
        <label htmlFor="shoeName">Shoe Name:</label>
        <input
          {...register("shoeName", { required: true, minLength: 4 })}
          name="shoeName"
        />
        {errors.shoeName && <p>{errors.shoeName.message}</p>}
      </div>
      <div>
        <label htmlFor="colorTheme">Shoe Color:</label>
        <input {...register("colorTheme")} name="colorTheme" />
      </div>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input {...register("quantity", { required: true })} type="number" />
        {errors.quantity && <p>{errors.quantity.message}</p>}
      </div>

      <button type="submit">Add shoe</button>
    </form>
  );
}

export default ShoeForm;

// should clear the form after form submission
// should add a success message
