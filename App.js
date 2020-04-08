
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

class CalcButton extends Component{

  constructor(props){
    super(props);
    this.state = {};
    this.signal = false;
    let columns = 1;
    if(props.columns){
      columns = parseInt(props.columns);
    }
    let bg = '#e0e0e0';
    if(props.bg){
      bg = props.bg;
    }
    this.styles = StyleSheet.create({
      area: {
        flex: columns,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: bg
      },
      text: {
        fontSize: 18,
      }
    })
  }
  render(){
    return (
      <TouchableOpacity style={this.styles.area} onPress={ this.props.onPress }>
        <Text style={this.styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

export default class Calculator extends Component{
  constructor(props){
    super(props);
    this.state = { result: 0 }

    this.click = this.click.bind(this);
  }

  click(button){
    if(!(this.signal && (button == '/' || button == '*' || button == '+' || button == '-' || button == '='))){
      let s = this.state
      switch(button){
        case 'C':
          s.result = '0';
          break;
        case '=':
          s.result = eval(s.result);
          break;
        default:
            s.result != '0' ? s.result = s.result + button : (button != '/' && button != '*' && button != '+' && button != '-') ? s.result = button : s.result = s.result + button;
          break;
      }
      if(button == '/' || button == '*' || button == '+' || button == '-'){ 
        this.signal = true;
      } else{
        this.signal = false;
      }
      this.setState(s);
  }
  }

  render(){
    return (
      <View style={styles.body}>
        <View style={styles.line}>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>
        <View style={styles.line}>
          <CalcButton columns="3" text="C" bg="#cccccc" onPress={() => this.click("C")} />
          <CalcButton text="/" bg="#fd9526" onPress={() => this.click("/")} />
        </View>
        <View style={styles.line}>
          <CalcButton text="7" onPress={() => this.click("7")} />
          <CalcButton text="8" onPress={() => this.click("8")} />
          <CalcButton text="9" onPress={() => this.click("9")} />
          <CalcButton text="*" bg="#fd9526" onPress={() => this.click("*")} />
        </View>
        <View style={styles.line}>
          <CalcButton text="4" onPress={() => this.click("4")} />
          <CalcButton text="5" onPress={() => this.click("5")} />
          <CalcButton text="6" onPress={() => this.click("6")} />
          <CalcButton text="-" bg="#fd9526" onPress={() => this.click("-")} />
        </View>
        <View style={styles.line}>
          <CalcButton text="1" onPress={() => this.click("1")} />
          <CalcButton text="2" onPress={() => this.click("2")} />
          <CalcButton text="3" onPress={() => this.click("3")} />
          <CalcButton text="+" bg="#fd9526" onPress={() => this.click("+")} /> 
        </View>
        <View style={styles.line}>
          <CalcButton columns="2" text="0" onPress={() => this.click("0")} />
          <CalcButton text="." onPress={() => this.click(".")} />
          <CalcButton text="=" bg="#fd9526" onPress={() => this.click("=")} />
        </View>
      </View>
    )
  }
  
};
const styles = StyleSheet.create({
  body: {
    //paddingTop: 20,
    flex: 1
  },
  line: {
    flex: 1, 
    flexDirection: 'row'
  },
  result:{
    paddingTop: 25,
    paddingRight: 25,
    backgroundColor: '#1c1c1b',
    color: 'white',
    fontSize: 50,
    flex: 1,
    textAlign: 'right'
  }
});


