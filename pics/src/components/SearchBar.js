import React from 'react';


class SearchBar extends React.Component{

    //event is a javascript object, which is about info of the event that js just occured
    state = {term:'Hi there'};


    onFormSubmit= (event)=>{
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

/* onInputChange is callback function, if it is onInputChange(), it will be call whenever the whole component is rendered, without () */
/* we are passing a reference function to the  input element. Input can call the function when sometime the input is changed */
    render(){
        return(
            <div className="ui segment"> 
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* input tag here is uncontrolled event element */}
                        <input type="text" value={this.state.term} onChange={e=>this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;