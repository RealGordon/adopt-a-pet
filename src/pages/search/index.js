import React, { useState, useEffect, useMemo } from 'react';
import Hero from '../../components/hero';
import { getPets } from '../../api/petfinder';
import Pet from '../../components/pet';
import { useLocation } from 'react-router-dom';

// import useLocation here

const SearchPage = () => {

  // Get the search value from useLocation() here
  const search = useLocation().search;

  const queryParams = useMemo(() => { 
    return new URLSearchParams(search);
  }, [search]);

  const [pets, setPets] = useState([]);
  const petNameToFind = queryParams.get('query')||queryParams.get('type');
  useEffect(() => {
    async function getPetsData() {
     
      const petsData = await getPets(queryParams.get('type')||'', queryParams.get('query')||'');

      setPets(petsData);
    }

    getPetsData();
  }, [queryParams]);

  return (
    <div className="page">
      <Hero displayText={`Results for ${petNameToFind}`} />

      <h3>Pets available for adoption near you</h3>

      <main>
        <div className="grid">
          {pets.map((pet) => (
            <Pet animal={pet} key={pet.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
