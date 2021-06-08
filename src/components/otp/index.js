import OTPInputView from '@twotalltotems/react-native-otp-input'

<OTPInputView
  style={{ width: '80%', height: 200 }}
  pinCount={4}
  code=""
  autoFocusOnLoad={true}
  // codeInputFieldStyle={styles.borderStyleBase}
  // codeInputHighlightStyle={styles.borderStyleHighLighted}
  codeInputFieldStyle={styles.underlineStyleBase}
  codeInputHighlightStyle={styles.underlineStyleHighLighted}
  onCodeFilled={(code => {
    // console.log(`Code i s ${code}, you are good to go!`)
  })}
/>

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});