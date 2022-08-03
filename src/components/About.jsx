import React from "react";
import { Link } from "react-scroll";

function About() {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Isaias Agustin Romero
              </h2>
              <p className="mb-4 text-accent">Frontend Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                👋🏻 ¡Hola! Soy Agustin, Desarrollador Full Stack residente en
                Buenos Aires, Argentina. Amante de la programación y el mundo IT
                en general, actualmente esoty en búsqueda de mi primera
                experiencia laboral como desarrolador web 👶🏽.
                <br />
                Mi Stack : HTML, CSS, JAVASCRIPT, REACT.JS, REDUX, NODE.JS,
                EXPRESS, SQL, POSTGRESQL
                <br />
                Soy una persona autónoma y proactiva, esa ventaja me llevó a
                realizar cursos de programación donde note que realmente me
                gusta y puedo pasar horas y horas.
                <br />
                👨🏽‍💻 Me encantaría formar parte de una empresa donde pueda aplicar
                todos mis conocimientos y, al mismo tiempo, que me permita
                desarrollarme profesionalmente. ¡Gracias por tomarte el tiempo
                de leerme! Espero tener la oportunidad de trabajar juntos.
                Escríbeme 👇 📧 romeroisaiasagustin@gmail.com Saludos! 🤗
              </p>
            </div>
            <Link
              to="contact"
              activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='transition-all duration-300'>
              <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
