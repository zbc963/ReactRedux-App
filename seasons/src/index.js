import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDsipaly from './SeasonDisplay';
import Spinner from './Spinnner';
// setState() is the method in the React Component

class App extends React.Component{

    //javascript function, initialize the state
    // when contructor is called, it is acuatlly overwriting the constructor for props in React.Component
    // constructor(props){
    //     //super allows the React.Component(parents) constructor still be called 
    //     super(props);

    //     // here is only time we do direct assignment
    //     this.state = {
    //         lat:null,
    //         errMessage:''
    //     };

    //     // any time need to update state use setState()

    // }

    state = {
        lat:null,errorMessage:''
    }; 

    //do set and some data loading o
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            // the callback function will not be return while the contructor running untill somepoint in the future that is successfully get
            (position)=>{
                this.setState({lat:position.coords.latitude});
            },
            err => this.setState({errMessage:err.message})
        );
    }
    // good for doing the data loading if there is any state that is changed
    componentDidUpdate(){
        console.log('My Compoent is updated')
    }
    // React says we have define render!! 
    // render method will be call frequently and any Request and function should not be defined in the render method 
    // when (position) function is called succesffully , the render method will automatically rerun instantly

    renderContent(){
        if (this.state.errMessage && !this.state.lat){
            return <div>Error:{this.state.errMessage}</div>
        }

        if(!this.state.errMessage && this.state.lat){
            return <SeasonDsipaly lat={this.state.lat}/>
        }


        return (
            <Spinner message="Please accept location request"/>
        );

    }

    render(){
       return (
        <div className="border red">{this.renderContent()}</div>
       );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));