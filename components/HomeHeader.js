import { View, Text, Image, TextInput } from "react-native";

import { COLORS, SIZES, FONTS, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={assets.image10}
          resizeMode="contain"
          style={{ width: 55, height: 55 }}
        />

        <View
          style={{
            width: 50,
            height: 70,
          }}
        >
          <Image
            source={assets.ellipse7}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.primary,
          }}
        >
          Hello, Natachi! 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary,
            marginTop: SIZES.base / 2,
          }}
        >
          Welcome back
        </Text>
      </View>

      <View style={{ marginTop: SIZES.medium }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 22, height: 22, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Which type of braids would you like?"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
        <View
          style={{
            marginTop: SIZES.large,
          }}
        ></View>
      </View>
    </View>
  );
};

export default HomeHeader;
