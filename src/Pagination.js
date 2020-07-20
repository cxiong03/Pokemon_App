import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage }) {
    return (
        <div>
            {/* make a check that says if we have a goToPrevPage function then render
            everything after the && -- in javascript if false don't run anyting*/}
            {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
            {goToNextPage && <button onClick={goToNextPage}>Next</button>}
        </div>
    )
}
