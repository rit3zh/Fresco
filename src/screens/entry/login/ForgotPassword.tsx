import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { LoginStyles as style } from "@/stylesheet/screens/onboarding/Login";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { GradientButton } from "@/components";
import { heightPercentageToDP } from "react-native-responsive-screen";
import OtpInput from "react-native-animated-otp-input";
import Bounceable from "@freakycoder/react-native-bounceable";
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

export function ForgotPassword(props: NativeStackHeaderProps) {
  const onPress = () =>
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Email sent",
      textBody: "Sended the email back.",
      autoClose: 1000,
    });

  const onBackPress = () =>
    props.navigation.canGoBack()
      ? props.navigation.goBack()
      : null || undefined;

  return (
    <AlertNotificationRoot>
      <SafeAreaView>
        <View style={style.headerContent}>
          <MaterialCommunityIcons
            name="star-three-points"
            size={50}
            color="white"
          />

          <View style={style.dot} />
          <View style={style.line} />
        </View>

        <View style={style.topContent}>
          <Text style={style.titleText}>Check your email ✨</Text>
          <View style={style.descriptionContainer}>
            <Text style={style.description}>
              We sent a verification link to travis@outlook.com
            </Text>
          </View>
        </View>

        <OtpInput
          otpCount={5}
          autoFocus={false}
          focusColor="#c64c49"
          inputStyle={style.masked}
        />

        <View style={style.gradientButton}>
          <GradientButton text="Log in" />
        </View>

        <View
          style={[
            style.footerContentContainer,
            {
              height: heightPercentageToDP(5),
            },
          ]}
        >
          <Text
            style={[
              style.footerContentText,
              { fontSize: 16, color: "#6c6a6a" },
            ]}
          >
            Didn't receive the email?{" "}
            <Bounceable onPress={onPress}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                Click here to resend
              </Text>
            </Bounceable>
          </Text>
        </View>
        <Bounceable onPress={onBackPress}>
          <View style={style.backContentContainer}>
            <Octicons name="arrow-left" size={25} color="white" />
            <Text style={style.backText}>Back to Log in</Text>
          </View>
        </Bounceable>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
}
