import React from "react";
import { useForm } from "react-hook-form";
import "./AddTestimonials.css";

const AddTestimonials = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const customerReview = {
      name: data.customerName,
      review: data.review,
    };
    console.log(customerReview);
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customerReview),
    }).then((res) => {
      console.log("added bhai darna mat", res);
    });
  };

  return (
    <div className="review-conatiner">
      <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Your name" {...register("customerName")} />
        <br />

        <textarea
          {...register("review")}
          placeholder="Your review"
          className="review-area"
        ></textarea>
        {/* <input
          placeholder="Your review about service"
          {...register("review")}
        /> */}
        <br />
        <button type="submit">Add review</button>
      </form>
    </div>
  );
};

export default AddTestimonials;