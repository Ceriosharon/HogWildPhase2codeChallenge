import React, { useState } from "react";

function AddHogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog({ ...formData, weight: parseFloat(formData.weight) });
    setFormData({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      "highest medal achieved": "",
      image: "",
    });
  };

  return (
    <form className="ui form segment" onSubmit={handleSubmit}>
      <h2>Add a New Hog</h2>
      <div className="field">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="field">
        <input
          name="specialty"
          placeholder="Specialty"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <input
          name="weight"
          type="number"
          placeholder="Weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>
          Greased:
          <input
            name="greased"
            type="checkbox"
            checked={formData.greased}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="field">
        <input
          name="highest medal achieved"
          placeholder="Highest Medal Achieved"
          value={formData["highest medal achieved"]}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <button className="ui button" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default AddHogForm;
