import React, { Component } from "react";
import { SEARCH_RESULT_PLACEHOLDER } from "../constants";

class SearchResult extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="result"> {SEARCH_RESULT_PLACEHOLDER} </div>
      </div>
    );
  }
}

export default SearchResult;
