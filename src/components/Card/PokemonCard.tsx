import React from 'react'
import * as S from './stylesCard'
import { useContext } from 'react'
//@ts-ignore
import pokebola from '../../assets/pokebola.png'
//@ts-ignore
import pokeBolaSemFundo from '../../assets/pokeBolaSemFundo.png'
import { getTypeImageByType } from '../../assets/vector/getTypesPokemonImg'
import { PokemonCardContext, PokemonData } from '../../context/PokemonCardContext'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


export const PokemonCard = ({ name, image, types, id, pokemon }:
  {
    pokemon: PokemonData
    name: string
    image: string
    types: string
    id: number
  }) => {

  const { addToPokemon, removePokemon, removeAllClearPokemon } = useContext(PokemonCardContext)
  const location = useLocation();

  const handleButtonClick = () => {
    if (location.pathname === '/') {
      addToPokemon(pokemon);
    } else if (location.pathname === '/pokedexPage') {
      removePokemon(pokemon.id);
    }
  };
  

  // const navigate = useNavigate()

  return (
    <S.CardContainer>
      <S.Card
        key={''}
        name={''}
        types={types}
      >
        <div className="imgBx">
          <img
            src={image}
            alt="Pokemon sprites"
          />
        </div>

        <S.CardPokeImg
          // onClick={() => goToPokemonDetailPage(navigate, name, types, id)}
          src={pokeBolaSemFundo} alt="Pokebola Sem fundo" />

        <div className="contentBx">
          <S.CardtextName>{name}</S.CardtextName>
          <div className="size">
            <S.CardPokeTypes>
              {types.split(' ').map((type, index) => (

                <span key={index} className="type">
                  <S.CardTypesImg src={getTypeImageByType(type)} alt={type} />
                  {/* {types} */}
                </span>

              ))}
            </S.CardPokeTypes>
          </div>
          <img
            onClick={() => handleButtonClick()}
            className="pokebola"
            src={pokebola}
            alt="Pokebola"
          />
        </div>
      </S.Card>
    </S.CardContainer>
  )
}


