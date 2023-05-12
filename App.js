import { NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from '@expo/vector-icons';
//createBottomTabsNavigator
import Movie from "./components/Movie";
import Serie from "./components/Serie";
import Documentario from "./components/Documentario";

const Menu = createDrawerNavigator().Navigator;
const ItensMenu = createDrawerNavigator().Screen;

export default function App() {
  return (
    
    <NavigationContainer>
        <Menu screenOptions={{
          drawerStyle: {
            backgroundColor: "#000000",
          },
          drawerLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          drawerActiveBackgroundColor: "white",
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#FF1493",
          drawerLabelPosition: "#FFFAFA"
        }}
        >
          <ItensMenu name="Movie" component={Movie}
            options={{
              tabBarIcon: <AntDesign name="check" size={10} color='black' />,
              tabBarBadge: 4,
            }}
          />
          <ItensMenu name="Serie" component={Serie}/>
          <ItensMenu name="Documentario" component={Documentario}/>
        </Menu>
    </NavigationContainer>
  );
}