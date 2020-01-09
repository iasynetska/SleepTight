import React from 'react';

class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {clicked_index: 0};
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(selectedIndex){
        this.props.clickedButton.index = selectedIndex;
        this.props.selectMattress(this.props.buttons[this.props.clickedButton.index].category);
    }

    render() {
        let buttonsGroup = this.props.buttons.map((button, index) => {
            const classes = index === this.props.clickedButton.index ? "products-filter__btn btn_active" : "products-filter__btn";
            return <button key={index} className={classes} onClick={()=>this.clickHandler(index)}>{ button.value }</button>;
        });

        return (
            <div className="products-filter">
                { buttonsGroup }
            </div>
        );
    }
}

export default Filter;