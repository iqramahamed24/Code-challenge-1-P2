import React, {useState} from "react"

function SearchButton ({searchWord, searchChange}) {
    return (
        <div>
            <h2>Search Transactions</h2>
            <input 
            type= "text"
            value= {searchWord}
            onChange={searchChange}
            placeholder="Search transaction"
            />
        </div>
    );
}

export default SearchButton;
