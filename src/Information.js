import { useEffect, useState } from "react";

const Information = () => {
  const [poke_id, setId] = useState(1);
  const [pokemon_name, setPokemonName] = useState("default");
  const [pokemon_health, setPokemonHealth] = useState(0);
  const [abilities, setAbilities] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    requestPokemon();
  }, []);

  async function requestPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke_id}/`);
    const json = await res.json();

    setPokemonName(json.name);
    console.log(pokemon_name);
    setPokemonHealth(json.base_experience);
    setImage(json.sprites.front_default);
    setAbilities(json.abilities);
    // for (var i = 0; i < parseInt(json.abilities.length); ++i) {
    //   console.log(json.abilities[i].ability);
    // }
  }

  return (
    <div>
      <div className="img_div">
        <img src={image} />
      </div>

      <table>
        <tbody>
          <tr>
            <td>
              ({poke_id}) {pokemon_name}
            </td>
            <td>{pokemon_health} HP</td>
          </tr>
          {abilities.map((ability) => (
            <tr>
              <td>{ability.ability.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={(e) => {
          e.preventDefault();
          setId(Math.floor(Math.random() * 201));
          requestPokemon();
        }}
      >
        Generate Pokemon
      </button>
    </div>
  );
};

export default Information;

// {
//     abilities,
//     base_experience,
//     forms,
//     game_indices,
//     height,
//     held_items,
//     id,
//     is_default,
//     location_area_encounters,
//     moves,
//     name,
//     order,
//     past_types,
//     species,
//     sprites,
//     stats,
//     types,
//     weight;
// }
