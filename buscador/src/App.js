import { useState } from 'react';
import './App.css';
import { SearchBox } from "./views/Search/compontents";
import users from "./data/users.json"
import { SearchResults } from './views/Search/compontents/SearchResults';

function App() {
  const [isAtTop, setIsAtTop] = useState(false)
  const usersData = users;
  const [results, updateResults] = useState([]);

  const handleClose = ( )  => {
    updateResults([]);
    setIsAtTop(false);
  };
  
  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    if (usersData?.length && searchText) {
      const searchTextLowerCase = searchText.toLowerCase();
      const filterData = usersData.filter( (element) => {
        return ( 
          element.name.toLowerCase().includes(searchTextLowerCase) ||
          element.phone.toLowerCase().includes(searchTextLowerCase) ||
          element.username.toLowerCase().includes(searchTextLowerCase) ||
          element.email.toLowerCase().includes(searchTextLowerCase)
        )});
      updateResults(filterData);
    }    
  }


  return (
    <div className= {`search ${isAtTop ? "search--top": "search--center" }` }>
      <SearchBox onSearch={handleSearchClick} onClose = {handleClose} />
      <SearchResults results={results} ></SearchResults>
    </div>
    
  );
}

export default App;
