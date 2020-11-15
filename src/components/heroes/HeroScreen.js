import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'


export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();
  const hero = getHeroById(heroeId);

  if (!hero) {
    return <Redirect to="/" />
  }
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const handleReturn = () => {
    if (publisher === 'Marvel Comics') {
      history.push('/marvel')
    } else {
      history.push('/dc');
    }
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter ego:</strong> {alter_ego}
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> {publisher}
          </li>
          <li className="list-group-item">
            <strong>First appareance:</strong> {first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>
        <button
          onClick={handleReturn}
          className="btn btn-outline-info"
        >
          Return
          </button>
      </div>
    </div>
  )
}
