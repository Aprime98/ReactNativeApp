import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Home from "./screens/Home";
import Favourite from "./screens/Favourite";
import Search from "./screens/Search";
import Inbox from "./screens/Inbox";

const Stack = createStackNavigator();
const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          marginBottom: 3,
          paddingVertical: 1,
          borderRadius: 50,
          backgroundColor: "#fff",
        },
        tabBarItemStyle: {
          marginTop: 1,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Favourite") {
            iconName = "heart";
          } else if (route.name === "Inbox") {
            iconName = "mail";
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Inbox" component={Inbox} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Search" component={HomeTabs} />
        <Stack.Screen name="Favourite" component={HomeTabs} />
        <Stack.Screen name="Inbox" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
