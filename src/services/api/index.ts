import axios from 'axios';
import {OPEN_AI_KEY, OPEN_AI_URL} from '@env';

export const getAnswer = async (question: string) => {
  try {
    const res = await axios.post(
      OPEN_AI_URL,
      {
        prompt: question,
        temperature: 0.5,
        max_tokens: 256,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPEN_AI_KEY}`,
        },
      },
    );
    return res?.data?.choices[0].text;
  } catch (e) {
    console.error(e);
    return 'Something went wrong☹️';
  }
};

export const getTranslatedText = async (query: string, language: string) => {
  try {
    const res = await axios.post(
      OPEN_AI_URL,
      {
        prompt: `Translate this into ${language} \n ${query}`,
        temperature: 0.3,
        max_tokens: 256,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPEN_AI_KEY}`,
        },
      },
    );
    return res?.data?.choices[0].text;
  } catch (e) {
    console.error(e);
    return 'Something went wrong☹️';
  }
};
