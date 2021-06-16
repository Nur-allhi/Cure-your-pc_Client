import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddPackageCard.css";
import axios from "axios";

const AddPackageCard = () => {
  const [imageUrl, setImageUrl] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "cea9da290a58ca8c40076a3b0c37947d");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const newPackage = {
      name: data.title,
      price: data.price,
      description: data.description,
      catagory: data.catagory,
      imageUrl: imageUrl,
    };
    fetch("http://localhost:5000/addPackage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPackage),
    }).then((res) => console.log("Added", res));
  };

  return (
    <div className="package-add">
      <h4>Add Service To Store</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Service Name"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title is required</span>} <br />
        <input placeholder="price" {...register("price", { required: true })} />
        {errors.price && <span>Price is required</span>}
        <br />
        <input placeholder="Service Description" {...register("description")} />
        <br />
        <input placeholder="Catagory" {...register("catagory")} />
        <br />
        <input onChange={handleImageUpload} type="file" />
        <br />
        <small>Wait few seconds to upload the image then click ADD</small>
        <br />
        <button type="submit">Add to store</button>
      </form>
    </div>
  );
};

export default AddPackageCard;
