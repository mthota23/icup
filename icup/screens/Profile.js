import React, { Component } from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Button,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={require("../images/mochi_pic.jpg")}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title
                style={
                  (styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  })
                }
              >
                Mochi Nguyen
              </Title>
              <Caption style={styles.caption}>@mochi-puppy</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              Austin, Texas
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              +1 512 777 7777
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="calendar-account-outline" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>Mar 2020</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              mochi-nguyen@gmail.com
            </Text>
          </View>

          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {
                  borderRightColor: "#dddddd",
                  borderRightWidth: 1,
                },
              ]}
            >
              <Title>$140</Title>
              <Caption>Outstanding Balance</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>12</Title>
              <Caption>Gallery Images</Caption>
            </View>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  name="calendar-account-outline"
                  color="#FF6347"
                  size={25}
                />
                <Text style={styles.menuItemText}>Past Visits</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="card-bulleted-outline" color="#FF6347" size={25} />
                <Text style={styles.menuItemText}>Insurance Information</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="account-check-outline" color="#FF6347" size={25} />
                <Text style={styles.menuItemText}>Support</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="settings-outline" color="#FF6347" size={25} />
                <Text style={styles.menuItemText}>Settings</Text>
              </View>
            </TouchableRipple>
          </View>
          <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox]}>
              <Title>Gallery</Title>
              <Caption>Tap Image to Expand</Caption>
            </View>
            <View style={styles.galleryBox}>
              <Icon name="checkbox-blank-outline" color="#FF6347" size={25} />
              <Icon name="checkbox-blank-outline" color="#FF6347" size={30} />
              <Icon name="checkbox-blank-outline" color="#FF6347" size={40} />
              <Icon name="checkbox-blank-outline" color="#FF6347" size={30} />
              <Icon name="checkbox-blank-outline" color="#FF6347" size={25} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  galleryBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Profile;
