import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { FocusedStatusBar } from "../components";
import { COLORS, salonData, SIZES, FONTS, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const data = ["All orders", "On delivery", "Delivered"];

const Search = () => {
  const navigation = useNavigation();
  const [activeStateType, setActiveStateType] = useState("All Orders");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: SIZES.small,
        backgroundColor: COLORS.white,
      }}
    >
      <FocusedStatusBar background={COLORS.white} />
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={assets.back}
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>

          <View style={{}}>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.font,
                color: COLORS.primary,
              }}
            >
              Your Orders
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.upperSpace,
          {
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.lightGray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          },
        ]}
      >
        <Image
          source={assets.search}
          resizeMode="contain"
          style={{ width: 22, height: 22, marginRight: SIZES.base }}
        />
        <TextInput
          placeholder="Search for your order"
          style={{ flex: 1 }}
          onChangeText={() => {}}
        />
      </View>
      <View style={styles.upperSpace}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                paddingVertical: SIZES.small / 2,
                paddingHorizontal: SIZES.small,
                borderRadius: SIZES.medium,
                borderWidth: 1,
                backgroundColor:
                  activeStateType === item
                    ? COLORS.lightGray
                    : COLORS.transparent,
              }}
              onPress={() => {
                setActiveStateType(item);
                navigation.navigate(`/search/${item}`);
              }}
            >
              <Text
                style={{
                  color:
                    activeStateType === item ? COLORS.blue : COLORS.primary,
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.small,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text>here</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  upperSpace: {
    marginTop: SIZES.extraLarge,
  },
});

export default Search;
