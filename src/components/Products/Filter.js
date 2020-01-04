import React from 'react';

class Filter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let buttonsGroup = this.props.buttons.map((button, index) => {
            let buttonBuilder = button.active ? (
                <button key={index} className="products-filter__btn btn--active">{ button.value }</button>
            ) : (
                <button key={index} className="products-filter__btn">{ button.value }</button>
            );

            return buttonBuilder;
        });

        return (
            <div className="products-filter">
                { buttonsGroup }
            </div>
        );
    }
};

export default Filter;