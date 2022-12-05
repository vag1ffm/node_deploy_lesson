import React from 'react';
import Menu from "../../help/menu";
import FilterSearch from "../../help/filter-search";
import {Route, Routes} from "react-router-dom";
import SearchFilter from "./searchFilter";
import Header from "../../help/header";

const Search = () => {


    return (
        <>
            <Header page={'search'}/>
            <main className="search">
                <FilterSearch/>
                <Routes>
                    <Route path={'/:page'} element={<SearchFilter/>}/>
                </Routes>
            </main>
            <Menu page={'search'}/>
        </>
    );
};

export default Search;