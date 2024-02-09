import React, { useState } from "react";
import { createNewPlayer } from "../API";
import { useNavigate } from "react-router-dom";

const NewPlayerForm = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewPlayer(name, breed, status, imageUrl);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Breed:
          <input type="text" name="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          Status:
          <input type="text" name="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <label>
          URL:
          <input type="url" name="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <button type="submit">Add dog</button>
      </form>
    </>
  );
};

export default NewPlayerForm;

