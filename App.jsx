import React from 'react';
import Button from './Button';

class Button extends React.Component {
    constructor(props){
    this.state = {clicked:false}
}

    render(){
        const { clicked } = this.state;
        if (clicked){
            return 'Clicked'
        }

        return (
            <button onClick={() => this.setState({clicked:true})}></button>
        )
    }
}

export default Button;
