import React from "react";
import "./NotFound404.css";
import notFound from "../../Accets//not-found.jpg";

const NotFound404 = () => {
  return (
    <section className="NotFoundSection">
      <div className="notFound">
        <img src={notFound} alt="404 Not Found" />
      </div>
    </section>
  );
};

export default NotFound404;
