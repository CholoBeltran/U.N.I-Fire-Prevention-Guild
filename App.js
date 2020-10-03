import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Separator,
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ImageBackground,
  Alert,
  Dimensions,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
const Stack = createStackNavigator();
const screenHeight = Dimensions.get("window").height;
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "UNI Fire Manual",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="Manual" component={Manual}></Stack.Screen>
        <Stack.Screen name="FireDrill" component={FireDrill}></Stack.Screen>
        <Stack.Screen
          name="WebsitePhone"
          component={WebsitePhone}
        ></Stack.Screen>
        <Stack.Screen name="DosDonts" component={DosDonts}></Stack.Screen>
        <Stack.Screen
          name="LevelsOfFire"
          component={LevelsOfFire}
        ></Stack.Screen>
        <Stack.Screen name="AboutUs" component={AboutUs}></Stack.Screen>
        <Stack.Screen name="Equipments" component={Equipments}></Stack.Screen>
        <Stack.Screen
          name="FireTriangle"
          component={FireTriangle}
        ></Stack.Screen>
        <Stack.Screen name="Causes" component={Causes}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 90,
          borderRadius: 50,
          borderColor: "#FFB800",
          color: "#FFB800",
          bottom: 100,
          borderWidth: 3,
          padding: 15,
          textAlign: "center",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Fire Manual
      </Text>

      <Text
        style={{
          fontSize: 28,
          textAlign: "center",
          color: "#FFB800",
          bottom: 90,
        }}
      >
        Fire Prevention and Preparedness Guide
      </Text>

      <Text
        style={{
          fontSize: 28,
          color: "#FFB800",
          bottom: 90,
        }}
      >
        (Ulam Namin Isda)
      </Text>

      <Button
        block={true}
        style={{
          margin: 70,
          backgroundColor: "#FFB800",
          padding: 10,
          top: 100,
        }}
        onPress={() => navigation.navigate("Manual")}
      >
        <Text style={{ color: "#000", fontSize: 20 }}>Open Manual</Text>
      </Button>
    </View>
  );
}

function Manual({ navigation }) {
  return (
    <Container>
      <ScrollView style={styles.gridView}>
        <TouchableOpacity onPress={() => navigation.navigate("FireDrill")}>
          <View style={styles.itemContainer}>
            <Image
              source={require("./assets/Images/1.png")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
            <Text style={styles.itemName}>Fire Hazard Guide</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("WebsitePhone")}>
          <View style={styles.itemContainer}>
            <Image
              source={require("./assets/Images/2.png")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
            <Text style={styles.itemName}>Website and Phone Numbers</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("DosDonts")}>
          <View style={styles.itemContainer}>
            <Image
              source={require("./assets/Images/3.png")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
            <Text style={styles.itemName}>Dos and Donts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LevelsOfFire")}>
          <View style={styles.itemContainer}>
            <Image
              source={require("./assets/Images/4.png")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
            <Text style={styles.itemName}>Levels of Fire</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AboutUs")}>
          <View style={styles.itemContainer}>
            <Image
              source={require("./assets/Images/5.png")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
            <Text style={styles.itemName}>About Us</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

function FireDrill({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/firefire.jpg")}
      style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
            borderColor: "#FFB800",
            color: "#FFB800",
            bottom: 10,
            borderRadius: 10,
            textAlign: "center",
          }}
        >
          Fundamentals
        </Text>

        <Button
          block={true}
          style={{
            margin: 80,
            backgroundColor: "#FFB800",
            marginBottom: 3,
            top: 80,
          }}
          onPress={() => navigation.navigate("Causes")}
        >
          <Text style={{ color: "#000", fontSize: 20 }}>
            Common Causes of Fire
          </Text>
        </Button>

        <Button
          block={true}
          style={{
            margin: 80,
            backgroundColor: "#FFB800",
            marginBottom: 3,
            top: 80,
          }}
          onPress={() => navigation.navigate("Equipments")}
        >
          <Text style={{ color: "#000", fontSize: 20 }}>Equipments</Text>
        </Button>

        <Button
          block={true}
          style={{
            margin: 80,
            backgroundColor: "#FFB800",
            marginBottom: 3,
            top: 80,
          }}
          onPress={() => navigation.navigate("FireTriangle")}
        >
          <Text style={{ color: "#000", fontSize: 20 }}>Fire Triangle</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}

function WebsitePhone() {
  return (
    <Container>
      <Content>
        <View>
          <Separator bordered>
            <Text style={{ fontWeight: "bold", fontSize: 30, margin: 10 }}>
              PHONE NUMBERS
            </Text>
          </Separator>
          <ListItem>
            <Text>ABRA PROVINCIAL OFFICE "0995 103 6259"</Text>
          </ListItem>
          <ListItem>
            <Text>BANGUED FIRE STATION "0906 675 2272"</Text>
          </ListItem>
          <ListItem>
            <Text>BUCAY FIRE STATION "0927 378 8391"</Text>
          </ListItem>
          <ListItem>
            <Text>DOLORES FIRE STATION "0927 160 2118"</Text>
          </ListItem>
          <ListItem>
            <Text>LA PAZ FIRE STATION "0905 193 8164"</Text>
          </ListItem>
          <ListItem>
            <Text>PEÑARRUBIA FIRE STATION "0945 110 7211"</Text>
          </ListItem>
          <ListItem>
            <Text>PIDIGAN FIRE STATION "0995 653 7210"</Text>
          </ListItem>
          <ListItem>
            <Text>SAL-LAPADAN FIRE STATION "0926 314 7439"</Text>
          </ListItem>
          <ListItem>
            <Text>SAN QUINTIN FIRE STATION "0995 982 2199"</Text>
          </ListItem>
          <ListItem>
            <Text>TAYUM FIRE STATION "0997 264 5667"</Text>
          </ListItem>
          <ListItem>
            <Text>VILLAVICIOSA FIRE STATION "0977 213 8853"</Text>
          </ListItem>
          <ListItem>
            <Text>APAYAO PROVINCIAL OFFICE "0927 923 0720"</Text>
          </ListItem>
          <ListItem last>
            <Text>LICUAN BAAY FIRE STATION "0945 457 7351"</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{ fontWeight: "bold", fontSize: 30, margin: 10 }}>
              WEBSITES
            </Text>
          </Separator>
          <ListItem>
            <Text>car.bfp.gov.ph</Text>
          </ListItem>
          <ListItem>
            <Text>ppsc.gov.ph</Text>
          </ListItem>
          <ListItem>
            <Text>bfpr3.com/bulacan-corner/</Text>
          </ListItem>
          <ListItem>
            <Text>
              cebucity.gov.ph/department-and-offices/bureau-of-fire-protection/
            </Text>
          </ListItem>
          <ListItem>
            <Text>cdn.ymaws.com</Text>
          </ListItem>
          <ListItem>
            <Text>tfsti.com</Text>
          </ListItem>
          <ListItem>
            <Text>tuv.com/philippines/en/fire-protection-training.html</Text>
          </ListItem>
          <ListItem>
            <Text>megaprecisioncorp.com</Text>
          </ListItem>
          <ListItem last>
            <Text>palmer-asia.com/fire-systems.html</Text>
          </ListItem>
        </View>
      </Content>
    </Container>
  );
}

function DosDonts() {
  return (
    <ScrollView style={{ flex: 1, resizeMode: "cover" }}>
      <Container>
        <Grid style={{ flex: 1 }}>
          <Col style={{ backgroundColor: "#FFB800" }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                margin: 5,
                marginHorizontal: 5,
              }}
            >
              FIRE SAFETY DOS
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~Keep smoke detectors in good working order. Check your Smoke
              detectors at least twice a year. A good way to remember is by
              checking them when the time changes due to daylight savings.
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~Have an escape plan and have multiple escape routes. Practice
              multiple times a year, especially with young children.
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~Teach children about the dangers of playing with lighters and
              matches. Seek to enroll them in a fire safety class. There are
              several available free of charge or for a minimal fee. Your local
              fire station is a wonderful place to bring your children to learn
              about fire safety, meet some of the local firefighters, and get to
              see the trucks.
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~If you notice any electrical malfunctions in your home, have them
              examined immediately by a certified electrician. If you wait, it
              could be too late. With this in mind, if you own an older home
              with an outdated electrical system, have it updated ASAP. The old
              knob and tube electrical systems are unable to handle the
              electrical load of today’s electronics.
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
          </Col>
          <Col style={{ backgroundColor: "#f4511e" }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                margin: 10,
                textAlign: "justify",
              }}
            >
              FIRE SAFETY DONTS
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~Don’t try to extinguish the fire yourself and then call 911. Call
              911 immediately. Fires double in size every minute.
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~Don’t try to be a hero. If the fire is too large EVACUATE!! If
              you have practiced your escape plans everyone will make it out
              safely.
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~Don’t re-enter your home once you have evacuated.
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~Don’t put space heaters within 3 feet of combustibles. Typical
              combustibles include bedding, curtains, clothes, books, and
              furniture. Never leave space heaters unattended or left on in the
              room where you are sleeping.
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~Don’t leave cooking food unattended and DO NOT use water on a
              cooking fire. If you are cooking with oil or grease, smother the
              fire with a lid or use an extinguisher specifically designed for
              cooking materials. DO NOT smack at the fire with a dishtowel, this
              will cause oil or grease to splash around and cause the fire to
              spread!
            </Text>
            <Text
              style={{
                fontSize: 20,
                margin: 2,
                textAlign: "justify",
                marginHorizontal: 5,
              }}
            >
              ~~~~~~~~~~~~~~~~~~~~~
            </Text>
          </Col>
        </Grid>
      </Container>
    </ScrollView>
  );
}

function LevelsOfFire() {
  return (
    <Container>
      <ScrollView style={styles.gridView}>
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 5,
              paddingTop: 10,
              paddingHorizontal: 10,
              height: 250,
            }}
          >
            <Image
              source={require("./assets/1.jpg")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 5,
              paddingTop: 10,
              paddingHorizontal: 10,
              height: 350,
            }}
          >
            <Image
              source={require("./assets/2.jpg")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 5,
              paddingTop: 10,
              paddingHorizontal: 10,
              height: 300,
            }}
          >
            <Image
              source={require("./assets/3.jpg")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 5,
              paddingTop: 10,
              paddingHorizontal: 10,
              height: 350,
            }}
          >
            <Image
              source={require("./assets/4.jpg")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

function AboutUs() {
  return (
    <Container>
      <ScrollView style={{ flex: 1, backgroundColor: "#666" }}>
        <View
          style={{ justifyContent: "center", alignItems: "center", margin: 10 }}
        >
          <Image
            source={require("./assets/logouni.png")}
            style={{ height: 200, width: "70%", resizeMode: "cover" }}
          ></Image>
        </View>
        <View
          style={{ margin: 20, backgroundColor: "#FFB800", borderRadius: 5 }}
        >
          <Text style={styles.titleText}> We Are U.N.I.</Text>
          <Text style={styles.titleTextSub}>(Ulam Namin Isda)</Text>
        </View>
        <View
          style={{
            height: 600,
            marginTop: 50,
            marginHorizontal: 20,
            backgroundColor: "#FFB800",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text style={styles.titleTextSub}> Members: </Text>
          <Grid style>
            <Row style={{ alignItems: "center" }}>
              <ImageBackground
                source={require("./assets/cholo2.png")}
                style={styles.personImage}
              >
                <Text style={styles.contentText}>Pocholo Beltran</Text>
              </ImageBackground>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <ImageBackground
                source={require("./assets/merin2.png")}
                style={styles.personImage}
              >
                <Text style={styles.contentText}>Jan Kyle Merin</Text>
              </ImageBackground>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <ImageBackground
                source={require("./assets/hero2.jpg")}
                style={styles.personImage}
              >
                <Text style={styles.contentText}>Hero Misa</Text>
              </ImageBackground>
            </Row>
          </Grid>
        </View>
      </ScrollView>
    </Container>
  );
}

function Equipments({ navigation }) {
  return (
    <Container>
      <ScrollView style={styles.gridView}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "info",
              "A fire extinguisher is an active fire protection device used to extinguish or control small fires, often in emergency situations."
            );
          }}
        >
          <View style={styles.itemContainer}>
            <Image
              source={require("./assets/extinguisher.jpg")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
            <Text style={styles.itemName}>Fire Extinguisher</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Info",
              "Sprinkler system, in fire control, a means of protecting a building against fire by causing an automatic discharge of water, usually from pipes near the ceiling."
            );
          }}
        >
          <View style={styles.itemContainer}>
            <Image
              source={require("./assets/sprinkler.jpg")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
            <Text style={styles.itemName}>Sprinkler</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Info",
              "A smoke alarms is an electronic fire-protection device that automatically senses the presence of smoke, as a key indication of fire, and sounds a warning to building occupants."
            );
          }}
        >
          <View style={styles.itemContainer}>
            <Image
              source={require("./assets/firealarm.jpg")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
            <Text style={styles.itemName}>Smoke Alarms</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Info",
              "A carbon monoxide detector or CO detector is a device that detects the presence of the carbon monoxide (CO) gas to prevent carbon monoxide poisoning."
            );
          }}
        >
          <View style={styles.itemContainer}>
            <Image
              source={require("./assets/Carbon.jpg")}
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
            />
            <Text style={styles.itemName}>Carbon Monoxide Alarms</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

function Causes({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("./assets/apoy.jpg")}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            borderColor: "#FFB800",
            color: "#FFB800",
            top: 10,
            textAlign: "center",
          }}
        >
          Common Causes of Fire
        </Text>
        <View style={{ margin: 20, top: 20 }}>
          <View>
            <Text
              style={{
                color: "#000",
                marginTop: 10,
                width: "100%",
                backgroundColor: "#eee",
                opacity: 0.75,
                bottom: 40,
                fontSize: 30,
                borderRadius: 8,
                padding: 10,
                textAlign: "justify",
              }}
            >
              CANDLES. Candles look and smell pretty, but if left unattended
              thay can cause a room to easily burst into flames. Keep candles
              away from any obviously flammable items such as books and tissue
              boxes.
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#000",
                marginTop: 10,
                width: "100%",
                backgroundColor: "#eee",
                opacity: 0.75,
                bottom: 40,
                fontSize: 30,
                borderRadius: 8,
                padding: 10,
              }}
            >
              CURIOUS CHILDREN. Kids can cause a fire out of curiosity, to see
              what would happen if they set fire to an object. Always keep your
              matches, lighters, and torches in places that your children can't
              reach.
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#000",
                marginTop: 10,
                width: "100%",
                backgroundColor: "#eee",
                opacity: 0.75,
                bottom: 40,
                fontSize: 30,
                borderRadius: 8,
                padding: 10,
              }}
            >
              FLAMMABLE LIQUIDS. Fuels, solvents, cleaning agents, thinners,
              adhesives, paints, and other liquids can ignite or explode if
              stored improperly. Always store flammable liquids in approved
              containers in a cool, ventilated area outside your home.
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#000",
                marginTop: 10,
                width: "100%",
                backgroundColor: "#eee",
                opacity: 0.75,
                bottom: 40,
                fontSize: 30,
                borderRadius: 8,
                padding: 10,
              }}
            >
              SMOKING. A cigarette that is not put out properly can cause a
              flame, as the butt may stay alit for a few hours. Check for
              cigarette embers or butts that can cause furniture to burst into
              flames. If someone in your home smokes, always use large and deep
              ashtrays and place them away from materials that burn easily.
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: "#000",
                marginTop: 10,
                width: "100%",
                backgroundColor: "#eee",
                opacity: 0.75,
                bottom: 40,
                fontSize: 30,
                borderRadius: 8,
                padding: 10,
              }}
            >
              DRIED LEAVES. You should immediately dispose of dried leaves, wood
              shavings, and other items alike as these may easily catch fire.
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: "#000",
                marginTop: 10,
                width: "100%",
                backgroundColor: "#eee",
                opacity: 0.75,
                bottom: 40,
                fontSize: 30,
                borderRadius: 8,
                padding: 10,
              }}
            >
              FAULTY ELECTRICAL WIRINGS. Another leading cause of fire is faulty
              electrical wiring. Hire a liscensed electrician to check your
              electrical installations regularly. Ask him to repair or replace
              frayed or faulty wiring and fixtures.
            </Text>
          </View>
        </View>

        <Button
          block={true}
          style={{ margin: 70, backgroundColor: "#FFB800" }}
          onPress={() => navigation.navigate("Manual")}
        >
          <Text style={{ color: "#000", fontSize: 20 }}>Back to Manual</Text>
        </Button>
      </ImageBackground>
    </ScrollView>
  );
}

function FireTriangle({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#95190C",
      }}
    >
      <Text
        style={{
          fontSize: 30,

          borderColor: "#FFB800",
          color: "#FFB800",
          bottom: 200,

          textAlign: "center",
        }}
      >
        Fire Triangle
      </Text>
      <Image
        source={require("./assets/firetriangle.png")}
        style={{
          height: 450,
          width: 450,
          justifyContent: "center",
          bottom: 70,
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#FFB800",
          bottom: 20,
        }}
      >
        FIRE TRIANGLE
      </Text>
      <Text style={{ color: "#FFB800", fontSize: 25, textAlign: "center" }}>
        The fire triangle or combustion triangle is a simple model for
        understanding the necessary ingredients for most fires. The triangle
        illustrates the three elements a fire needs to ignite: heat, fuel, and
        an oxidizing agent. A fire naturally occurs when the elements are
        present and combined in the right mixture.
      </Text>

      <Button
        block={true}
        style={{ margin: 70, backgroundColor: "#FFB800", marginBottom: 3 }}
        onPress={() => navigation.navigate("Manual")}
      >
        <Text style={{ color: "#000", fontSize: 20 }}>Back to Manual</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#95190C",
    alignItems: "center",
    justifyContent: "center",
  },
  gridView: {
    flex: 1,
  },

  itemContainer: {
    borderRadius: 5,
    paddingTop: 10,
    paddingHorizontal: 10,
    height: 250,
  },

  itemName: {
    fontSize: 24,
    color: "#000",
    fontWeight: "600",
    textAlign: "center",
    bottom: 40,
    width: "100%",
    backgroundColor: "#eee",
    opacity: 0.75,
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 58,
    borderColor: "#FFB800",
    color: "#555",
    textAlign: "center",
    fontWeight: "bold",
  },
  titleTextSub: {
    fontSize: 28,
    borderColor: "#FFB800",
    color: "#555",
    textAlign: "center",
    fontWeight: "bold",
  },
  personImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 5,
    resizeMode: "cover",
  },
  contentText: {
    fontSize: 24,
    fontWeight: "bold",
    borderColor: "#eee",
    borderWidth: 2,
    padding: 10,
    color: "#eee",
    borderRadius: 5,
    textAlign: "center",
  },
});
