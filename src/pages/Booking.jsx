import { useState } from "react";
import { supabase } from "../lib/supabase";
import BackButton from "../components/Common/BackButton";

const Booking = () => {
  const [formData, setFormData] = useState({
    product_name: "",
    customer_name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const { error } = await supabase
      .from("bookings")
      .insert([formData]);

    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setFormData({
        product_name: "",
        customer_name: "",
        phone: "",
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
        <BackButton />
      <h2 className="text-2xl font-bold mb-8">Book a Product</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <input
          type="text"
          name="product_name"
          placeholder="Product Name"
          value={formData.product_name}
          onChange={handleChange}
          required
          className="border rounded px-4 py-2"
        />

        <input
          type="text"
          name="customer_name"
          placeholder="Your Name"
          value={formData.customer_name}
          onChange={handleChange}
          required
          className="border rounded px-4 py-2"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border rounded px-4 py-2"
        />

        <textarea
          name="message"
          placeholder="Additional message (optional)"
          value={formData.message}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white py-2 rounded hover:opacity-90 transition"
        >
          {loading ? "Submitting..." : "Submit Booking"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-4">
          Booking submitted successfully!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 mt-4">
          Something went wrong. Try again.
        </p>
      )}
    </section>
  );
};

export default Booking;
