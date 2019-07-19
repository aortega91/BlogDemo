import AsyncStorage from '@react-native-community/async-storage';
import {PostObject} from '../models/PostObject';

const POSTS_STORAGE_KEY = 'posts_storage_key';

export const storeBlog = async (dataToSave) => {
  try {
    await AsyncStorage.setItem(POSTS_STORAGE_KEY, dataToSave);
  } catch (e) {
  }
};


export const getBlog = async () => {
  try {
    const value = await AsyncStorage.getItem(POSTS_STORAGE_KEY);
    if (value !== null) {

      let blogObject = [];
      let objectData = JSON.parse(value);

      objectData.forEach((element) => {

        blogObject.push(PostObject.getInstance(element));
      });

      return blogObject;
    } else {
      return [];
    }
  } catch (e) {
    console.log('READING FROM STORAGE ERROR: ' + e);
  }
};
