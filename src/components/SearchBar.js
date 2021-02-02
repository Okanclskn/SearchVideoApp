import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }
  getInputSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchvideorequest(this.state.searchTerm);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.getInputSearchTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
