import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import "./PokemonDetails.css";
import { useNavigate } from "react-router-dom";

const PokemonDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [pokemonDetails, setPokemonDetails] = useState({});

  // Parseo manual de query params
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name"); // Query param
  const image = searchParams.get("image"); // Query param
  const typeOne = searchParams.get("typeOne"); // Query param

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}?name=${name}&image=${image}&typeOne=${typeOne}` // Query param
        );
        setPokemonDetails(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, name]);

  const goBack = () => {
    navigate("/");
  }



  return (
    <>
      <div className="pokemon-details-card">
        <div className="details-header">
         <button type="button" className="back-btn" onClick={goBack}>←</button>
          <h1>{pokemonDetails.name}</h1>
          <span className="pokemon-id">#{String(id).padStart(3, "0")}</span>
        </div>
        <div className="details-bg"></div>
        <img
          className="details-img"
          src={pokemonDetails.sprites?.front_default}
          alt={pokemonDetails.name}
        />
        <div className="details-types">
          {pokemonDetails.types?.map((t) => (
            <span
              className={`type-badge type-${t.type.name}`}
              key={t.type.name}
            >
              {t.type.name}
            </span>
          ))}
        </div>
        <div className="details-section about">
          <div className="section-title">About</div>
          <div className="about-row">
            <div>
              <span className="about-icon">⚖️</span>
              <div>{pokemonDetails.weight / 10} kg</div>
              <div className="about-label">Weight</div>
            </div>
            <div>
              <span className="about-icon">📏</span>
              <div>{pokemonDetails.height / 10} m</div>
              <div className="about-label">Height</div>
            </div>
            <div>
              <div>
                {pokemonDetails.abilities
                  ?.map((a) => a.ability.name)
                  .join(", ")}
              </div>
              <div className="about-label">Moves</div>
            </div>
          </div>
        </div>
        <div className="details-section stats">
          <div className="section-title">Base Stats</div>
          <div className="stats-list">
            {pokemonDetails.stats?.map((stat) => (
              <div className="stat-row" key={stat.stat.name}>
                <span className="stat-name">
                  {stat.stat.name.toUpperCase()}
                </span>
                <span className="stat-value">
                  {String(stat.base_stat).padStart(2, "0")}
                </span>
                <div className="stat-bar-bg">
                  <div
                    className="stat-bar"
                    style={{ width: `${stat.base_stat / 2}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
