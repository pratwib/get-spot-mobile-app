import TestDetailScreen from "../screens/test/TestDetailScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SizableText, YStack} from "tamagui";
import {TouchableOpacity} from "react-native";
import {FontAwesome6} from "@expo/vector-icons";

const TestStack = createNativeStackNavigator();

const TestNavigator = () => {
    return (
        <TestStack.Navigator>
            <TestStack.Screen
                name="TestDetail"
                component={TestDetailScreen}
                options={{
                    headerTitle: () => (
                        <SizableText
                            size={"$7"}
                            style={{fontFamily: "PoppinsBold"}}>
                            Details
                        </SizableText>
                    ),
                    headerShadowVisible: false,
                    headerRight: () => (
                        <YStack>
                            <TouchableOpacity>
                                <FontAwesome6 name={"bookmark"} size={24}/>
                            </TouchableOpacity>
                        </YStack>
                    ),
                }}
            />

        </TestStack.Navigator>
    );
};

export default TestNavigator;