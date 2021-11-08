import React from "react";
import MainPart from "./mainPart";
import NavBar from "./navBar";

class ExchangeRate extends React.Component {
  state = {
    price: [],
    DataisLoaded: false,
  };
  componentDidMount() {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=1f4cc16cf8d1635283c258016c2aa788"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          price: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    if (this.state.DataisLoaded === true) {
      const value = this.state.price.rates;
      const value1 = Object.entries(this.state.price.rates);
      return (
        <React.Fragment>
          <NavBar />
          <MainPart data={value1} checkData={value} />
        </React.Fragment>
      );
    }
    return false;
  }
}

export default ExchangeRate;
