import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocation,
  faUser,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./card4.css";

export default function Cart4({ pet }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleAdoptClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setErrors({}); // Reset errors when closing the modal
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // All inputs are valid, submit the form and close the modal
      setShowModal(false);
      setFormData({ name: "", email: "", phone: "" }); // Clear form
    } else {
      // Set error messages for invalid fields
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="card4 px-5 rounded-2xl">
        <div className="module-border-wrap1 rounded-2xl img-wrapper z-10">
          <img
            src={pet.img}
            className="h-full w-full object-cover rounded-2xl"
            alt={pet.breed}
          />
        </div>
        <div className="mt-48 capitalize rounded-2xl text-sm text-black/70">
          <div className="flex justify-center items-center">
            <h2 className="text-xl font-bold text-purple">{pet.name}</h2>
            <span className="text-xs">({pet.breed})</span>
          </div>
          <div className="flex items-center gap-1 font-semibold mb-3 mt-2">
            <FontAwesomeIcon icon={faMapLocation} className="text-pink" />
            <p>{pet.location}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="font-semibold">Age:</p>
              <p className="bg-blue/10 text-blue p-1 rounded text-xs">
                {pet.age}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">Size:</p>
              <p className="bg-blue/10 text-blue p-1 rounded text-xs">
                {pet.size}
              </p>
            </div>
          </div>
          <div className="module-border-wrap">
            <button
              className="w-full capitalize rounded btn mt-3 p-2"
              onClick={handleAdoptClick}
            >
              Adopt
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <dialog className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40 w-screen h-screen">
          <div className="bg-white rounded-xl p-8 md:w-96 w-[90%] relative text-xs md:text-base">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Adopt {pet.name}
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name field */}
              <div className="flex flex-col">
                <div className="flex items-center border p-2 rounded">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-400 mr-2"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500 text-xs">{errors.name}</span>
                )}
              </div>

              {/* Email field */}
              <div className="flex flex-col">
                <div className="flex items-center border p-2 rounded">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-400 mr-2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
              </div>

              {/* Phone field */}
              <div className="flex flex-col">
                <div className="flex items-center border p-2 rounded">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-gray-400 mr-2"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full outline-none"
                  />
                </div>
                {errors.phone && (
                  <span className="text-red-500 text-xs">{errors.phone}</span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-2 mt-4">
                <button
                  type="submit"
                  className="bg-blue text-black py-2 px-4 rounded hover:bg-blue-600 btn mt-0"
                >
                  Send
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
}
