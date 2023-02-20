import {
  View,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {getTranslatedText} from '../../services/api';
import styles from './styles';

export const Translation: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [language, setLanguage] = useState<string>('English');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [items, setItems] = useState([
    {label: 'English', value: 'english'},
    {label: 'Russian', value: 'russian'},
    {label: 'French', value: 'french'},
    {label: 'Mandarin', value: 'mandarin'},
    {label: 'Spanish', value: 'spanish'},
  ]);

  const translateText = useCallback(async () => {
    setLoading(true);
    setText('');
    const result = await getTranslatedText(text, language);
    setTranslatedText(result);
    setLoading(false);
  }, [text, language]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <DropDownPicker
          open={open}
          items={items}
          value={language}
          setOpen={setOpen}
          setValue={setLanguage}
          setItems={setItems}
          dropDownDirection="BOTTOM"
          listMode="MODAL"
          style={styles.input}
        />
      </View>
      {loading ? (
        <ActivityIndicator size={'large'} color={'#2094FA'} />
      ) : (
        <ScrollView
          keyboardDismissMode="interactive"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}>
          <Text style={styles.translatedText}>{translatedText || ''}</Text>
        </ScrollView>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          blurOnSubmit
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          keyboardAppearance={'dark'}
          keyboardType={'web-search'}
          placeholder="Enter text to translate..."
          style={styles.input}
          value={text}
          onChangeText={setText}
          onSubmitEditing={translateText}
          placeholderTextColor={'#1116'}
        />
      </View>
    </View>
  );
};
