import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    alert("Message sent!");
  };

  return (
    <div className="section">
      <h2 className="section-title">Contact Mii</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <br /><br />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <textarea placeholder="Your Message" required />
        <br /><br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;