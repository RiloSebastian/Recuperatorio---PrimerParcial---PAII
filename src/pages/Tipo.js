import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const Tipo = () => {
  const { descripcion } = useParams();
  const [mascotas, setmascotas] = useState([]);
  const [flag, setflag] = useState(false);
  const URL = "http://localhost:5000/mascotas";

  useEffect(() => {
    const getMascotas = async (url) => {
      try {
        setflag(false);
        const res = await fetch(url);
        const data = await res.json();
        data.forEach((mascota) => {
          setmascotas((mascotas) => {
            return data.filter((mascota) => mascota.tipo === descripcion);
          });
        });
        setflag(true);
        console.log(mascotas);
      } catch (err) {}
    };

    getMascotas(URL);
  }, []);

  return (
    <>
      {flag ? (
        mascotas.map((mascota) => <Card key={mascota.id} mascota={mascota} />)
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Tipo;
