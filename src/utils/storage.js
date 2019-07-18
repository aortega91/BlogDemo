import AsyncStorage from '@react-native-community/async-storage';
import {Post} from '../models/Post';

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

        blogObject.push(Post.getInstance(element));
      });

      return blogObject;
    }
  } catch (e) {
    console.log('READING FROM STORAGE ERROR: ' + e);
  }
};
