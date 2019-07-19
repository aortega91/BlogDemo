import moment from 'moment';
import {dummyComment, getRandomUserName} from '../utils/placeholders';

export class CommentObject {

  id = 0;
  user = '';
  content = '';
  date = '';

  constructor(content) {
    this.user = getRandomUserName();
    this.content = content === '' ? dummyComment : content;
    this.date = moment().format();
  }

  static getInstance(dataObject) {

    let {id, user, content, date} = dataObject;

    let newInstance = new CommentObject(content);

    newInstance.setId(id);
    newInstance.setUser(user);
    newInstance.setDate(date);

    return newInstance;

  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setUser(user) {
    this.user = user;
  }

  setDate(date) {
    this.date = date;
  }


}
