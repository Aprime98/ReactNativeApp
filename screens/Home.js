import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

import { COLORS, salonData, SIZES, FONTS } from "../constants";
import { HomeHeader, SalonCard, FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: SIZES.small,
      }}
    >
      <FocusedStatusBar background={COLORS.gray} />
      <HomeHeader />
      <ScrollView
        style={{
          flex: 1,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            flexGrow: 1,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.small,
                color: COLORS.primary,
              }}
            >
              Explore by category
            </Text>
            <View style={{ zIndex: 0 }}>
              <FlatList
                data={salonData.hairCategroies}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      paddingTop: SIZES.base,
                      paddingRight: SIZES.base,
                    }}
                    onPress={() => {}}
                  >
                    <Image source={item.image} />
                    <Text
                      style={{
                        color: COLORS.blue,
                        fontFamily: FONTS.medium,
                        fontSize: SIZES.semiSmall,
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ columnGap: SIZES.small }}
                showsHorizontalScrollIndicator={false}
                horizontal
              />
            </View>
            <View
              style={{
                marginTop: SIZES.large,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                  color: COLORS.primary,
                }}
              >
                Order Again
              </Text>
              <FlatList
                data={salonData.ordered}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      paddingTop: SIZES.base,
                      paddingRight: SIZES.base,
                      flexDirection: "row",
                    }}
                    onPress={() => {}}
                  >
                    <Image source={item.image} />
                    <View
                      style={{
                        flexDirection: "column",
                        marginLeft: SIZES.base,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: FONTS.bold,
                          fontSize: SIZES.semiSmall,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          fontSize: SIZES.semiSmall,
                        }}
                      >
                        {item.salon}
                      </Text>
                      <View
                        style={{
                          paddingVertical: SIZES.mini,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          fontSize: SIZES.base,
                        }}
                      >
                        {item.date}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ columnGap: SIZES.small }}
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{
                  marginTop: SIZES.base,
                }}
              />
            </View>
            <View
              style={{
                marginTop: SIZES.large,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                  color: COLORS.primary,
                }}
              >
                Recommended
              </Text>
              <FlatList
                data={salonData.Recommended}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      paddingTop: SIZES.base,
                      paddingRight: SIZES.base,
                      flexDirection: "row",
                      marginBottom: SIZES.extraLarge,
                    }}
                    onPress={() => {}}
                  >
                    <Image source={item.image} />
                    <View
                      style={{
                        flexDirection: "column",
                        marginLeft: SIZES.base,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: FONTS.bold,
                          fontSize: SIZES.semiSmall,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          fontSize: SIZES.semiSmall,
                        }}
                      >
                        {item.salon}
                      </Text>
                      <View
                        style={{
                          paddingVertical: SIZES.mini,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: FONTS.medium,
                          fontSize: SIZES.base,
                        }}
                      >
                        {item.amount}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ columnGap: SIZES.small }}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                  marginTop: SIZES.base,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.small,
                  color: COLORS.primary,
                }}
              >
                Select a salon below
              </Text>
              <View>
                <FlatList
                  data={salonData.salons}
                  renderItem={({ item }) => <SalonCard data={item} />}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={{ columnGap: SIZES.small }}
                  showsVericalScrollIndicator={false}
                  style={{
                    marginTop: SIZES.base,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
});

export default Home;
