import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Auth(props) {
  return ( 
    <View style={styles.authScreen}>
      {/* Login button */}
      <TouchableOpacity onPress={props.onAuthenticate} style={styles.btnWrapper}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#0969da',
    borderRadius: 5,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 450,
  },
  text: {
    color: '#FFF',
  }
});
