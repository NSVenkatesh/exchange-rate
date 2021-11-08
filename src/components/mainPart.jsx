import React from "react";
import MainPartList from "./mainPartList";
import MainPartHeader from "./mainPartHeader";
import MainPartResult from "./mainPartResult";
import $ from "jquery";

class MainPart extends React.Component {
  handleInput = () => {
    const { checkData } = this.props;
    $("#unitreverse").hide();
    $("#To_currency,#From_currency").css("border-color", "gray");
    $("#To_wrong,#From_wrong").html("some value").css("opacity", "0");
    const From = $("#From_currency").val().toUpperCase();
    const To = $("#To_currency").val().toUpperCase();
    const input = $("#input").val();
    if ((From, To === "")) {
      alert("Please Choose Currency values");
      return false;
    }
    if (checkData[From] === undefined || checkData[To] === undefined) {
      if (checkData[From] === undefined) {
        $("#From_currency").css("border-color", "red");
        $("#From_wrong")
          .html(From + " is not a currency type")
          .css("opacity", "1");
      }
      if (checkData[To] === undefined) {
        $("#To_currency").css("border-color", "red");
        $("#To_wrong")
          .html(To + " is not a currency type")
          .css("opacity", "1");
      }
      // return false;
    }
    const Fromvalue = checkData[From];
    const Tovalue = checkData[To];
    const basevalue = checkData.EUR;
    const Fromvaluecorrected = basevalue / Fromvalue;
    const unitresult = Tovalue * Fromvaluecorrected;
    const Tovaluecorrected = basevalue / Tovalue;
    const unitreverse = Fromvalue * Tovaluecorrected;
    const resultvalue = Tovalue * Fromvaluecorrected * input;
    $("#inputvalue").html(input + " " + From + " = ");
    $("#result").html(resultvalue.toFixed(4) + " " + To);
    if (input !== 1) {
      $("#unitreverse")
        .html("1 " + From + " = " + unitresult.toFixed(4) + " " + To)
        .show();
    }
    $("#unit").html("1 " + To + " = " + unitreverse.toFixed(4) + " " + From);
  };
  onSwap = () => {
    const val1 = $("#From_currency").val();
    const val2 = $("#To_currency").val();
    $("#From_currency").val(val2);
    $("#To_currency").val(val1);
  };

  render() {
    return (
      <div className="content container col-10">
        <MainPartHeader />
        <MainPartList
          data={this.props.data}
          handleInput={this.handleInput}
          onSwap={this.onSwap}
        />
        <MainPartResult />
      </div>
    );
  }
}

export default MainPart;
