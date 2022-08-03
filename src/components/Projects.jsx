import React from "react";

const Project = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 ">
          <a class="flex flex-col items-center text-center" href="https://food-pi-git-main-tiin24.vercel.app/">
            <img
              className="rounded-2xl"
              src="https://www.cocinatis.com/media/photologue/photos/cache/dieta-equilibrada-plato-completo-y-sano_large_16x9.jpg"
              alt=""
              width="30%"
              height='30%'
            />
          </a>
        </div>
        <p className="capitalize text-accent text-sm mb-3">
          Full-Stack web Debelop
        </p>
        <h3 className="text-2xl font-semibold capitalize mb-3">PI-Food</h3>
        <p className="text-base max-w-md">
        Desarrollo de aplicación Web (SPA), utilizando principalmente tecnologías como: React, Redux, PostgreSQL, nodeJS, etc.
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="mb-8 ">
          <a class="flex flex-col items-center text-center" href="https://food-pi-git-main-tiin24.vercel.app/">
            <img
              className="rounded-2xl"
              src="https://firebasestorage.googleapis.com/v0/b/greenshop-fa359.appspot.com/o/Proyecto%20final.png?alt=media&token=517479c2-5e7b-40e9-a793-a4ac294ef933"
              alt=""
              width="30%"
              height='30%'
            />
          </a>
        </div>
        <p className="capitalize text-accent text-sm mb-3">
          Full-Stack web Debelop
        </p>
        <h3 className="text-2xl font-semibold capitalize mb-3">Green Shop</h3>
        <p className="text-base max-w-md">
        Desarrollo de un E.Comerce, utilizando principalmente tecnologías como: React, Redux, PostgreSQL, nodeJS, JWT,Firebase.
        </p>
      </div>
    </div>
  );
};

export default Project;
