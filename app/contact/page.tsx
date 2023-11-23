"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const router = useRouter();

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("sent");
    setEmailSuccess(false);
    setSending(true);
    try {
      const res = await fetch("api/send", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.id) {
        console.log(data);
        setEmailSuccess(true);
        setTimeout(() => {
          router.replace("/");
          setSending(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setSending(false);
    }
    setSending(false);
  };

  return (
    <main className="flex flex-col gap-2 w-full max-w-screen-2xl items-center dataslate_background mt-4 p-4 rounded-xl border-2 border-black">
      <h2 className="text-green-950 font-graduate text-center sm:text-xl">
        If you have any feedback or requests feel free to send me a message!
      </h2>
      <form className="flex flex-col text-green-950 border-2 border-green-950 p-2 rounded-xl">
        <div className="flex flex-wrap justify-center items-center text-center gap-1">
          <div className="w-full flex justify-between items-center">
            <label htmlFor="email" className="w-24 font-graduate">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleFormChange}
              className="border border-green-950 w-full p-1 rounded-lg"
              placeholder="Only if you want a reply"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <label htmlFor="title" className="w-24 font-graduate">
              Title:
            </label>
            <input
              type="text"
              required
              name="title"
              id="title"
              value={formData.title}
              onChange={handleFormChange}
              className="border border-green-950 w-full p-1 rounded-lg"
              placeholder="Required"
            />
          </div>
        </div>
        <textarea
          className="min-w-full border border-green-950 mt-4 placeholder-gray-400 pl-2 rounded-md"
          required
          name="message"
          id="message"
          value={formData.message}
          onChange={handleFormChange}
          rows={10}
          placeholder="Message"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="text-center font-graduate font-semibold border border-green-950 rounded-xl p-1 m-2 hover:bg-green-950 hover:text-green-50 active:bg-green-950 active:text-cyan-700"
        >
          Submit
        </button>
      </form>
      {emailSuccess ? (
        <h4 className="max-w-sm text-green-700 mt-4">
          Message sent! Thank you for your feedback. You will now be redirected
          to the front page.
        </h4>
      ) : null}
    </main>
  );
};

export default page;
