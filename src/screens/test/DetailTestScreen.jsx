import {Card, ScrollView, Separator, SizableText, XStack, YStack} from "tamagui";
import LogoCard from "../../components/LogoCard";
import Icon from "../../../assets/icon.png";
import NoteChip from "../../components/NoteChip";
import PrimaryButton from "../../components/button/PrimaryButton";
import CustomAccordion from "../../components/CustomAccordion";
import QuotaRow from "../../components/QuotaRow";
import CustomSheet from "../../components/CustomSheet";
import {useState} from "react";
import SecondaryButton from "../../components/button/SecondaryButton";
import CustomToast from "../../components/CustomToast";
import {ToastViewport, useToastController} from "@tamagui/toast";

const DetailTestScreen = ({}) => {
    const [openSheet, setOpenSheet] = useState(false)
    const toast = useToastController()

    return (
        <>
            <CustomToast
                backgroundColor={"#eff4ff"}
                borderColor={"deepskyblue"}
                iconColor={"deepskyblue"}
            />

            <ScrollView backgroundColor={"white"} showsVerticalScrollIndicator={false}>
                <YStack
                    flex={1}
                    backgroundColor={"white"}
                    paddingHorizontal={"$3"}
                    paddingTop={"$1"}
                    paddingBottom={"$3"}
                    gap={"$3"}>
                    <Card
                        gap={"$3"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        padding={"$3"}
                        borderWidth={"$0.5"}
                        borderRadius={"$11"}
                        borderColor={"lightgrey"}
                        backgroundColor={"white"}>
                        <XStack width={"25%"}>
                            <LogoCard icon={Icon}/>
                        </XStack>
                        <YStack gap={"$1"} alignItems={"center"}>
                            <SizableText style={{fontFamily: 'PoppinsBold'}} size={'$7'}>Company</SizableText>
                            <SizableText
                                style={{fontFamily: 'PoppinsRegular'}}
                                size={'$5'}
                                color={"gray"}>
                                Role
                            </SizableText>
                        </YStack>
                        <Separator width={"100%"} borderWidth={"$0.5"}/>
                        <YStack gap={"$1"} alignItems={"center"}>
                            <SizableText
                                style={{fontFamily: 'PoppinsRegular'}}
                                size={'$5'}
                                color={"gray"}>
                                Placement Place
                            </SizableText>
                            <SizableText
                                style={{fontFamily: 'PoppinsRegular'}}
                                size={'$5'}
                                color={"deepskyblue"}>
                                28 Aug 2024
                            </SizableText>
                            <XStack gap={"$2"}>
                                <NoteChip text={"All"} color={"gray"}/>
                                <NoteChip text={"Min. S1"} color={"gray"}/>
                            </XStack>
                        </YStack>
                    </Card>
                    <CustomAccordion
                        title={"Quota"}
                        content={
                            <YStack flex={1}>
                                <XStack flex={1} justifyContent={"space-between"} width={"100%"}>
                                    <SizableText
                                        style={{fontFamily: 'PoppinsRegular'}}
                                        size={'$5'}>
                                        Total Quota
                                    </SizableText>
                                    <SizableText
                                        style={{fontFamily: 'PoppinsRegular'}}
                                        size={'$5'}>
                                        20 Slots
                                    </SizableText>
                                </XStack>
                                <Separator width={"100%"} borderWidth={"$0.5"} marginVertical={"$2"}/>
                                <YStack flex={1} gap={"$1"}>
                                    <QuotaRow batch={"Batch 14 Jakarta"} available={"Not Available"} color={"red"}/>
                                    <QuotaRow batch={"Batch 15 Jakarta"} available={"Available: 15"}
                                              color={"deepskyblue"}/>
                                    <QuotaRow batch={"Batch 18 Online"} available={"Not Available"} color={"red"}/>
                                    <QuotaRow batch={"Batch 1 Malang"} available={"Available : 5"}
                                              color={"deepskyblue"}/>
                                    <QuotaRow batch={"Batch 2 Malang"} available={"Available : 7"}
                                              color={"deepskyblue"}/>
                                </YStack>
                            </YStack>
                        }
                    />
                    <CustomAccordion
                        title={"Notes"}
                        content={
                            <SizableText
                                style={{fontFamily: 'PoppinsRegular'}}
                                size={'$5'}
                                color={"black"}>
                                Cold showers can help reduce inflammation, relieve pain, improve
                                circulation, lower stress levels, and reduce muscle soreness and fatigue.
                            </SizableText>
                        }
                    />
                </YStack>
            </ScrollView>

            <XStack
                position={"fixed"}
                bottom={0}
                left={0}
                right={0}
                alignSelf={"flex-end"}
                backgroundColor={"white"}
                padding={"$3"}
                paddingBottom={"$5"}
                borderTopColor={"lightgrey"}
                borderTopWidth={"$0.5"}>
                <PrimaryButton title={"Apply"} onPress={() => setOpenSheet(true)}/>
            </XStack>

            <CustomSheet
                title={"Apply Test"}
                onOpenChange={setOpenSheet}
                open={openSheet}
                content={
                    <YStack flex={1} alignItems={"center"} margin={"$3"} marginTop={0} gap={"$3"}>
                        <SizableText
                            style={{fontFamily: 'PoppinsRegular'}}
                            size={'$5'}>
                            Are you sure you want to apply?
                        </SizableText>
                        <XStack flex={1} width={"100%"} gap={"$3"}>
                            <SecondaryButton title={"Cancel"} onPress={() => setOpenSheet(false)}/>
                            <PrimaryButton
                                title={"Yes, Apply"}
                                onPress={() => {
                                    setOpenSheet(false)
                                    toast.show('Successfully saved!', {
                                        message: "Don't worry, we've got your data.",
                                        native: false,
                                    })
                                }}
                            />
                        </XStack>
                    </YStack>
                }
            />
        </>
    )
}

export default DetailTestScreen