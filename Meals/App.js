import { StatusBar } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourite from "./screens/Favourite";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white", //font color of the title
        sceneContainerStyle: { backgroundColor: "#3f2f25" }, //background color of the screens
        drawerContentStyle: { backgroundColor: "#3f2f25" }, //background color of the drawer
        drawerInactiveTintColor: "white", //inactive text color
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        //this name is used for the purpose of screen navigation
        //by default react native sets it to title of the screen
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={Favourite}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
          //this options will be set default to all the screens
          //screen specific options can also be set by options property
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route,navigation})=>{
            //   const catId=route.params.id;
            //   return {
            //     title:catId,
            //   }
            // }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
            options={{
              headerStyle: { backgroundColor: "#FFB84C" },
              contentStyle: { backgroundColor: "#898121" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
