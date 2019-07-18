export const LOAD_BLOG = 'load_blog_action_type';
export const ADD_POST = 'add_post_action_type';
export const FAVORITE_POST = 'favorite_post_action_type';
export const CLEAR_DATA = 'clear_data_action_type';


const initialState = {blog: []};

const reducer = (state = initialState, action) => {

  let newState = {...state};

  switch (action.type) {

    case LOAD_BLOG:
      newState = action.blogData;
      return newState;

    case FAVORITE_POST:

      let postElement = newState.blog[action.postId - 1];
      let {favorite} = postElement;

      postElement.favorite = !favorite;

      return newState;

    case ADD_POST:

      if (newState.blog.length === 0) {
        action.postData.setId(1);
      } else {
        let lastItemIndex = newState.blog[newState.blog.length - 1].getId();
        action.postData.setId(lastItemIndex + 1);
      }

      newState.blog.push(action.postData);

      return newState;

    case CLEAR_DATA:
      newState = {blog: []};
      return newState;

    default:
      return newState;
  }

};

export const loadBlog = (blogData) => {
  return {type: LOAD_BLOG, blogData};
};

export const addPost = (post) => {
  return {type: ADD_POST, postData: post};
};

export const favoritePost = (postId) => {
  return {type: FAVORITE_POST, postId};
};

export const clearData = () => {
  return {type: CLEAR_DATA};
};

export default reducer;


