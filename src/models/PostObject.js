import {dummyPostData, getRandomUserName} from '../utils/placeholders';
import {CommentObject} from './CommentObject';
import moment from 'moment';

export class PostObject {


  id = 0;
  title = '';
  subtitle = '';
  author ='';
  content = '';
  date = '';
  imageId = '';
  favorite = false;
  comments = [];

  constructor(title, subtitle, content, imageId) {
    this.title = title.length === 0 ? dummyPostData.title : title;
    this.subtitle = subtitle.length === 0 ? dummyPostData.subtitle : subtitle;
    this.author = getRandomUserName();
    this.content = content.length === 0 ? dummyPostData.content : content;
    this.date = moment().format();
    this.imageId = imageId;
  }

  static getInstance(dataObject) {

    let {id, title, subtitle, author, content, date, imageId, favorite, comments} = dataObject;

    let newInstance = new PostObject(title, subtitle, content, imageId);

    newInstance.setId(id);
    newInstance.setAuthor(author);
    newInstance.setDate(date);
    newInstance.setFavorite(favorite);
    newInstance.setComments(comments);

    return newInstance;

  }

  setComments(comments) {

    let parsedCommentArray = [];

    comments.forEach((element) => {

      parsedCommentArray.push(CommentObject.getInstance(element));

    });

    this.comments = [...parsedCommentArray];

  }

  setFavorite(favorite) {
    this.favorite = favorite;
  }

  getFavorite() {
    return this.favorite;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setAuthor(value) {
    this.author = value;
  }

  setDate(value) {
    this.date = value;
  }

}
