import Header from '../../components/Header/Header'
import * as S from './styles'

// Context
import { PokemonContext } from '../../context/PokemonContext'
import { PokemonCardContext, PokemonData } from '../../context/PokemonCardContext'
import { useContext } from 'react'

//components


import {PokemonCard} from '../../components/Card/PokemonCard'

const Home = () => {
  const { pokemons  } = useContext(PokemonContext)
  const { pokemonCart } = useContext(PokemonCardContext)


  return (
    <>
    <Header/>
    <S.ContainerCard>
      {pokemons
        .filter((pokemonList: PokemonData) => {
          if (
            pokemonCart.find(
              (pokemonPokedex) => pokemonList.id === pokemonPokedex.id
            )
          ) {
            return !pokemonList
          } else {
            return pokemonList
          }
        })
        .map((pokemon: PokemonData) => {
          return (
            <PokemonCard
              pokemon={pokemon}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              types={pokemon.types[0].type.name || 'normal'}
              id={pokemon.id}
            />
          )
        })}
    </S.ContainerCard>
    </>
  )
}

export default Home