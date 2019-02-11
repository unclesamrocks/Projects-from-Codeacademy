import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTermChange(e){
        this.setState({
            term: e.target.value
        })
    }

    handleLocationChange(e){
        this.setState({
            location: e.target.value
        })
    }

    getSortByClass (sortByOption){
        return this.state.sortBy === sortByOption ? 'active' : '';
    }

    handleSortByChange(sortByOption){
        this.setState({
            sortBy: sortByOption
        })
    }

    handleSearch(e){
        // in App.js -> searchYelp(term, location, sortBy)
        const term = this.state.term ? this.state.term : '';
        const location = this.state.location ? this.state.location : 'NY';
        const sortBy = this.state.sortBy;
        this.props.searchYelp(term, location, sortBy);
        // e.preventDefault(); - useful if we use <a> instead of <button>
    }
    
    /* onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
    This will allow us to both bind to the current value of this (as we usually do in the constructor()) but also bind the current sortByOptionValue as the first argument to the method call, ensuring the method is called with the appropriate value when clicked. */
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption=>{
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>;
        });
    }
    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <button onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;