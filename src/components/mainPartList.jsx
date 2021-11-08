import React from "react";
class MainPartList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="layer col-12">
          <div className="layer-1">
            <h3>Amount</h3>
            <input
              type="number"
              min="0"
              placeholder="0"
              id="input"
              defaultValue="1"
            />
          </div>
          <div className="layer-2">
            <h3>From</h3>
            <input
              list="From"
              name="browser"
              id="From_currency"
              placeholder="Choose Currency"
              autoComplete="off"
            />
            <p id="From_wrong">From value is wrong</p>
            <datalist id="From">
              {data.map((list) => {
                return <option key={list[0]} value={list[0]} />;
              })}
            </datalist>
          </div>
          <div className="swap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 17"
              aria-hidden="true"
              className="swap_icon"
              // onClick={this.props.onSwap}
              onClick={() => {
                this.props.onSwap();
                this.props.handleInput();
              }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="layer-3">
            <h3>To</h3>
            <input
              list="To"
              name="browser"
              id="To_currency"
              placeholder="Choose Currency"
              autoComplete="off"
            />
            <p id="To_wrong">To value is wrong</p>
            <datalist id="To">
              {data.map((list) => {
                return <option key={list[0]} value={list[0]} />;
              })}
            </datalist>
          </div>
        </div>
        <div className="convert_button">
          <button onClick={this.props.handleInput} id="btn">
            Convert
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPartList;
