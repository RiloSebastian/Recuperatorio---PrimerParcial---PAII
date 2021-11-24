import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const Detalle = () => {
  const [mascota, setmascota] = useState({});
  const [flag, setflag] = useState(false);
  const URL = "http://localhost:5000/mascotas";
  const { id } = useParams();

  useEffect(() => {
    const getMascotas = async (url) => {
      try {
        setflag(false);
        const res = await fetch(`${url}/${id}`);
        const data = await res.json();
        setmascota(data);
        setflag(true);
      } catch (err) {}
    };

    getMascotas(URL);
  },[]);
  
  return (
    <>
      {flag ? (
        <Card mascota={mascota} />
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Detalle;
