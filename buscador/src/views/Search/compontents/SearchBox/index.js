import {  useEffect, useState } from "react";
import "./style.css";


export const SearchBox = ({ onSearch, onClose }) => {
    const [searchText, updateText] = useState("");


    const handldeCloseClick = (_event) => {
        updateText("");
        onClose();
    }

    return (
        <div className="search-box-container">
            <h3 className="search-box-title">Buscador Personal</h3>
            <div className="search-box-buttons">
                <label>
                    <input
                        value={searchText}
                        onChange={({ target: { value } }) => updateText(value)}
                        className="search-box-input"
                    ></input>
                </label>
                <button onClick={ () =>  {  onSearch(searchText) }  }>buscar</button>
                <button onClick={handldeCloseClick}>cerrar</button>

            </div>
        </div>
    )


}