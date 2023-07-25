import React from "react";

const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            ¿Quieres contactar conmigo?
            <br />
            ¡Hablemos!
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center text-center"></div>
          <a
            href="mailto:romeroisaiasagustin@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <button className="btn btn-lg bg-accent hover:bg-secondary-hover flex flex-col lg:gap-x-8 lg:flex-row">
              Send message
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
