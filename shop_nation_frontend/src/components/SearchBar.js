import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  myFunc = (event) => {
    this.props.handleSearchChange(document.getElementById('searchBarValue').value);
    // this.props.handleSearchChange(event.target.searchValue);
    //console.log("Clicked");
  }

  render() {
    return (
      <div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div class="input-group">
            <input
              id="searchBarValue"
              type="search"
              placeholder="What're you searching for?"
              aria-describedby="button-addon1"
              class="form-control border-0 bg-light"
              onChange={this.myFunc}
            />
            {/* <div class="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      class="btn btn-link text-primary"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </div> */}
          </div>
        </div>
      </div>
    );
  }
}
