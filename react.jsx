import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state ={clicked: false}
    }

    render(){
        const {clicked} = this.state

        if(clicked) {
            return 'Clicked'
        }

        return (
            <button  onClick={()=>{state:{clicked: true}}}>Click me</button>
        )
    }
    

}

function App() {
    return(
        <>
        <div>App</div>
        </>
    )
}

export default App;