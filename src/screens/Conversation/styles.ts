import {Dimensions, StyleSheet} from 'react-native';

export const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    width: WIDTH,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: WIDTH - 20,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 14,
    fontWeight: '700',
    color: 'black',
  },
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 999,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 60,
    width: WIDTH,
  },
  sent: {
    backgroundColor: '#04DE71',
    alignSelf: 'flex-end',
  },
  received: {
    backgroundColor: '#2094FA',
    alignSelf: 'flex-start',
  },
  chatBubble: {
    borderRadius: 20,
    paddingVertical: 12,
    marginBottom: 8,
    maxWidth: WIDTH / 2 + 80,
    paddingHorizontal: 16,
  },
  msgText: {
    fontWeight: '500',
    color: '#FFF',
    letterSpacing: 0.2,
  },
  typingLoader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 20,
  },
});
