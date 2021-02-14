import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <TouchableOpacity style={props.style} onPress={() => props.func(props.txt)}>
        <Text style={styles.textBt}>{props.txt}</Text>
      </TouchableOpacity>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: ""
    };
    this.toInput = this.toInput.bind(this);
    this.getResult = this.getResult.bind(this);
    this.delete = this.delete.bind(this);
  }

  toInput(symbol) {
    var toSave = this.state.input + symbol
    var specialCharacters = ["/", "*", "-", "+"]
    if (symbol == "/" || symbol == "*" || symbol == "+" || symbol == "-") {

      for (var i = 0; i < 4; i++) {
        if (this.state.input.includes(specialCharacters[i])) {
          toSave = toSave.slice(0, -1)
        }
      }
    }
    console.log("to save", toSave)
    this.setState({
      input: toSave
    })
  }

  getResult(symbol) {
    var result = eval(this.state.input)
    this.setState({
      output: result
    })
  }

  delete(symbol) {
    var newInput = this.state.input.slice(0, -1)
    this.setState({
      input: newInput
    })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.resView}>
          <Text style={{ flex: 2, color: "#323140", fontSize: 60, textAlign: "right", lineHeight: 130 }}>{this.state.input}</Text>
          <Text style={{ flex: 2, color: "#323140", fontSize: 40, textAlign: "right" }}>{this.state.output}</Text>
        </View>
        <View style={{ flex: 6, flexDirection: "row" }}>
          <View style={{ flex: 3, backgroundColor: "#323140" }}>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <Item style={{ flex: 3 }} txt="1" func={this.toInput} />
              <Item style={{ flex: 3 }} txt="2" func={this.toInput} />
              <Item style={{ flex: 3 }} txt="3" func={this.toInput} />
            </View>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <Item style={{ flex: 3 }} txt="4" func={this.toInput} />
              <Item style={{ flex: 3 }} txt="5" func={this.toInput} />
              <Item style={{ flex: 3 }} txt="6" func={this.toInput} />
            </View>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <Item style={{ flex: 3 }} txt="7" func={this.toInput} />
              <Item style={{ flex: 3 }} txt="8" func={this.toInput} />
              <Item style={{ flex: 3 }} txt="9" func={this.toInput} />
            </View>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <Item style={{ flex: 3 }} txt="." func={this.toInput} />
              <Item style={{ flex: 3 }} txt="0" func={this.toInput} />
              <Item style={{ flex: 3 }} txt="=" func={this.getResult} />
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: "#656280" }}>
            <Item style={{ flex: 5 }} txt="C" func={this.delete} />
            <Item style={{ flex: 5 }} txt="/" func={this.toInput} />
            <Item style={{ flex: 5 }} txt="*" func={this.toInput} />
            <Item style={{ flex: 5 }} txt="-" func={this.toInput} />
            <Item style={{ flex: 5 }} txt="+" func={this.toInput} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resView: {
    backgroundColor: "#c9c4ff",
    flex: 3
  },
  darkBt: {
    backgroundColor: "#323140",
    flex: 3,
  },
  lightBt: {
    backgroundColor: "#656280",
    flex: 5
  },
  textBt: {
    fontSize: 70,
    color: "white",
    textAlign: "center"
  }
});
export default App;
