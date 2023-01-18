import "./style.css";

export const SearchResults = ({ results = [] }) => {
    return (
        <div>
            {
                results.map((element) => {
                    return (
                        <div  className="search-results-container" key={element.id}>
                            {element.name}
                            <p></p>
                            {element.email}
                        </div>
                    )
                })
            }

        </div>


    );
}