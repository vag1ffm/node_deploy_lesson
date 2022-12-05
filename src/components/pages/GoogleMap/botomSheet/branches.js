import React from 'react';
import Branch from "./branch";

const Branches = ({setUrl}) => {
    return (
        <>
            <div className="second">
                <div className="branches">
                    <div className="left">
                        Branches <span>(23)</span>
                    </div>
                    <div className="on-the-map">
                        On the map
                    </div>
                </div>
                <div className="place_stars">

                    <Branch setUrl={setUrl}/>
                    <Branch setUrl={setUrl}/>
                    <Branch setUrl={setUrl}/>

                </div>
            </div>
        </>

    );
};

export default Branches;