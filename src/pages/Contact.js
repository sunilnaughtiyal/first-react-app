import React, { useState, useEffect } from "react";
import "./Contact.css";
import { supabase } from "./supabaseClient"; // Ensure this is correctly configured

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Query",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setFormError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    const validationErrors = validate();

    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xeozzjrz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setFormError("Failed to submit via Formspree.");
        return;
      }

      // Insert into Supabase
      const { error: insertError } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (insertError) {
        console.error("Supabase insert error:", insertError);

        // Custom error messages for unique constraint violations
        let newErrors = {};
        if (
          insertError.message.includes('duplicate key value') &&
          insertError.message.includes('"contacts_email_key"')
        ) {
          newErrors.email = "This email is already registered. Please use another.";
        }

        if (
          insertError.message.includes('duplicate key value') &&
          insertError.message.includes('"contacts_phone_key"')
        ) {
          newErrors.phone = "This phone number is already registered. Please use another.";
        }

        if (Object.keys(newErrors).length > 0) {
          setErrors((prev) => ({ ...prev, ...newErrors }));
        } else {
          setFormError("Failed to save in database.");
        }

        return;
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Feedback",
        message: "",
      });
    } catch (error) {
      console.error("Unexpected error:", error);
      setFormError("Unexpected error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {submitted && <div className="success">Message sent successfully!</div>}
      {formError && <div className="error">{formError}</div>}

      <form onSubmit={handleSubmit}>
        <label>
          Name*
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Phone*
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label>
          Subject
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="Feedback">Feedback</option>
            <option value="Query">Query</option>
            <option value="Support">Support</option>
          </select>
        </label>

        <label>
          Message*
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
