import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    // read up on 'javascript this', 'javascript constructor bind' and 'javascript arrow functions and this/bind'
    onFormSubmit = e => {
        e.preventDefault();

        // when using props in class based components, the difference is first nowhere to pass as a function parameter 
        // but more importantly and as a consequence,the use of the 'this' reference keyword
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={ this.onFormSubmit } className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' value={ this.state.term } onChange={ (e) => this.setState({ term: e.target.value }) } />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;