import React, { Component } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import fire from "../credentials/Fire";

const { width, height } = Dimensions.get("window");

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.username, this.state.password)
      .then((user) => {
        this.props.navigation.navigate("Profile");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode) {
          alert(errorMessage);
        }
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../images/sharingan.jpg")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            onChangeText={(value) => this.setState({ username: value })}
            placeholder={"Username"}
            style={styles.input}
            value={this.state.username}
          />
          <TextInput
            onChangeText={(value) => this.setState({ password: value })}
            placeholder={"Password"}
            secureTextEntry={true}
            style={styles.input}
            value={this.state.password}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Signup;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  container: {
    height: height / 1,
    justifyContent: "center",
  },
  containerView: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 35,
    height: 70,
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 5,
    paddingLeft: 25,
  },
});
