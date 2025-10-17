import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 

  return (
   
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
      
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
