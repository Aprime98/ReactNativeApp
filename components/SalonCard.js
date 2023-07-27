import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS } from "../constants";

const SalonCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.imageContainer}>
      <View style={styles.image}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </View>
      <Text>SalonCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  image: {
    width: "100%",
    height: 250,
  },
  imageStyle: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
});

export default SalonCard;
