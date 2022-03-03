import React, { useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import useHistory here.
const onSearchHandler = (e) => {
  e.preventDefault();

  /*const searchQuery = new URLSearchParams({
    name: onSearchHandler.searchTerm
  }).toString();*/
  const searchQuery =e.target.search.value;
  const {setSearchTerm,location,navigate}=onSearchHandler;
  const category=Array.prototype.reduce.call(e.target.category,(a,b)=>{
    return a.checked?a.value:b.value;
  });
  const filter={[category]:searchQuery};
setSearchTerm(filter)
if (location.pathname==='/search')return;
const query='?'+new URLSearchParams(filter).toString();
  navigate('/search'+query)
  // imperatively redirect with history.push()
};
const Search = () => {

  // get the history object here
  const [searchTerm , setSearchTerm]=useSearchParams()
 onSearchHandler.navigate=useNavigate();
 onSearchHandler.location=useLocation();
 // const searchInputRef = useRef();
//onSearchHandler.searchTerm =searchTerm; 
onSearchHandler.setSearchTerm=setSearchTerm;

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <div style={{float:"right"}}>
        <div>
      <input required  name="search" type="text" className="search" 
       defaultValue={searchTerm.get('searchQuery')||''}/>
      <button style={{float:"right"}} type="submit" className="search-button">
        🔎
      </button>
      </div>
      <div className='tooltip' style={{float:"right",margin:4}}>
     <input id="1category" name='category' type="radio" value="type" required />
     <label className='w3-margin-right'  htmlFor='1category'>Pet Type</label>
    
      <input id="2category" name="category" type="radio" value="query" />
      <label htmlFor='2category'>Location/Name</label>
      <p className='tooltiptext w3-blue'>search by pet name: eg. shuri, gia.
       or search by location abbreviation: NY for New York, IN for indiana , etc,
      or search by animal type: dog, cat, rabbit , etc </p>
      </div></div>
    </form>
  );
};

export default Search;
