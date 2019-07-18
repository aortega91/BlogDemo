const dummyContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac odio sem. Praesent pretium tempor' +
  ' turpis, id commodo mauris ornare et. Praesent lobortis lorem ac varius volutpat. Praesent varius elementum egestas. Donec' +
  ' ut posuere nisl. Cras id ipsum nisi. Aliquam ultricies est neque, at rhoncus diam posuere vulputate.';

export class Post {

  id = 0;
  title = '';
  subtitle = '';
  content = '';
  date = '';
  imageId = '';
  favorite = false;
  comments = [];

  constructor(title, subtitle, content, date, imageId) {
    this.title = title.length === 0 ? 'No title' : title;
    this.subtitle = subtitle.length === 0 ? 'No Subtitle' : subtitle;
    this.content = content.length === 0 ? dummyContent : content;
    this.date = date;
    this.imageId = imageId;
  }

  static getInstance(dataObject) {

    let {id, title, subtitle, content, date, imageId, favorite, comments} = dataObject;

    let newInstance = new Post(title, subtitle, content, date, imageId);

    newInstance.setId(id);
    newInstance.setFavorite(favorite);
    newInstance.setComments(comments);

    return newInstance;

  }

  setComments(comments) {
    this.comments = comments;
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

}
