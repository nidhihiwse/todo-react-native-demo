import { StyleSheet,ImageBackground, Text, View, TouchableOpacity } from 'react-native';

export default function Auth(props) {
  return ( 
    <View style={styles.container}>
      {/* Login button */}
      <View style={styles.authScreen}>
        <Text style={styles.heading}>To do List demo app!</Text>
        <TouchableOpacity onPress={props.onAuthenticate} style={styles.btnWrapper}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authScreen: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32,
  },
  btnWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#0969da',
    borderRadius: 5,
    marginTop: 20,
  },
  loginText: {
    color: '#FFF',
  }
});
