import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" required placeholder="abc" />
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input type="text" required placeholder="abc@gmail.com" />
          </div>
          <div>
            <label htmlFor="name">Message</label>
            <input type="text" required placeholder="Tell your query..." />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
