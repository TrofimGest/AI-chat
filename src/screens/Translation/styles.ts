import {StyleSheet} from 'react-native';
import {WIDTH} from '../Conversation/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginHorizontal: 10,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 14,
    fontWeight: '700',
    color: 'black',
  },
  translatedText: {
    fontWeight: '500',
    fontSize: 18,
    color: 'black',
    textAlign: 'left',
    alignSelf: 'flex-start',
    letterSpacing: 0.4,
  },
  scrollView: {
    margin: 10,
  },
});
