import React, {useState} from 'react';


function SearchButton ({ setFilterTerm }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
   setSearchTerm(e.target.value);
   setFilterTerm(e.target.value);
  };

  return (
    <div className='search-container'>
      <h2>Search Transactions</h2>
      <div className='search-input'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search recent transactions"
         />
         <button className='long-search-button' onClick={handleSearch}>
         🔍 Search Transactions
         </button>
       </div>
    </div>
  );
};

export default SearchButton;
