import {Input, SizableText, XStack, YStack} from "tamagui";
import {FontAwesome6} from "@expo/vector-icons";
import {Controller} from "react-hook-form";
import {useState} from "react";

const CustomInput = ({name, control, icon, placeholder, error, editable}) => {
    const [isFocused, setIsFocused] = useState(false);

    const getIconColor = (value, isFocused) => {
        if (isFocused) {
            return 'dodgerblue';
        } else if (value && editable) {
            return 'black';
        } else {
            return 'grey';
        }
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
                <YStack>
                    <XStack alignItems={"center"}>
                        <YStack position={"absolute"} zIndex={1} left={"$5"}>
                            <FontAwesome6
                                name={icon}
                                size={16}
                                color={getIconColor(value, isFocused)}
                                solid/>
                        </YStack>
                        <Input
                            editable={editable}
                            fontFamily={"PoppinsRegular"}
                            fontSize={"$5"}
                            size={"$5"}
                            focusStyle={{
                                borderColor: "dodgerblue",
                                backgroundColor: 'rgba(0, 191, 255, 0.05)'
                            }}
                            borderRadius={"$5"}
                            borderColor={"white"}
                            paddingLeft={"$9"}
                            width={"100%"}
                            placeholder={placeholder}
                            onChangeText={onChange}
                            onBlur={(event) => {
                                onBlur(event)
                                setIsFocused(false)
                            }}
                            onFocus={() => {
                                setIsFocused(true)
                            }}
                            value={value}
                            color={editable ? "black" : "gray"}/>
                    </XStack>
                    {error && (
                        <SizableText left={"$5"} marginTop={"$1"} fontSize={"$3"} color={"red"}>
                            {error.message}
                        </SizableText>
                    )}
                </YStack>
            )}
        />
    )
}

export default CustomInput