import React from "react";
import "./styles/styles.css";
class Searchbar extends React.Component {
  state = {
    term: "Default text"
  };
  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="App">
        <div>
          <form onSubmit={this.handleSubmit} className="form">
            <div className="field">
              <label htmlFor="video-search">Video Search</label>
              <input
                className="rounded"
                onChange={this.handleChange}
                name="video-search"
                type="text"
                value={this.state.term}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Searchbar;
