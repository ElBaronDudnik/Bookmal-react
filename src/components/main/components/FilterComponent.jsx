import React from "react";

const Filter = () => {
    return(
        <section className="grid">
            <div className="filter">
                <span className="filter__label">Сортувати за:</span>
                <input type="radio" id="filter__option_popular" className="filter__option filter__option_popular" hidden />
                    <label htmlFor="filter__option_popular" className="filter__option">Популярністю</label>
                    <input type="radio" id="filter__option_new" className="filter__option filter__option_new" hidden />
                        <label htmlFor="filter__option_new" className="filter__option filter__option_active">Новизною</label>
            </div>
        </section>
    );
}


export default Filter