import React from 'react';

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {clicked_index: 0};
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(selectedIndex){
        this.setState({clicked_index: selectedIndex});
        this.props.buttons.forEach( (button, index) => {
            if (index === selectedIndex) {
                button.active = true;
            } else {
                button.active = false;
            }
        });
    }

    render() {
        let buttonsGroup = this.props.buttons.map((button, index) => {
            let buttonBuilder = button.active ? (
                <button key={index} className="products-filter__btn btn_active" onClick={()=>this.clickHandler(index)}>{ button.value }</button>
            ) : (
                <button key={index} className="products-filter__btn" onClick={()=>this.clickHandler(index)}>{ button.value }</button>
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