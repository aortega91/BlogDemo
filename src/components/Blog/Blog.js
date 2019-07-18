import React from 'react';
import {AppState, View, Text, FlatList} from 'react-native';

import {connect} from 'react-redux';

import {Icon} from 'react-native-elements';

import Post from '../Post/Post';
import NewPostModal from './NewPostModal';

//Global styles
import {globalStyle} from '../../globalStyles';

const {iconSize} = globalStyle.appBar;
const {accentColor} = globalStyle.themeStyle;

//Component styles
import {blogStyles} from './styles';
import {clearData, favoritePost, loadBlog} from '../../utils/redux/reducer';
import {getBlog, storeBlog} from '../../utils/storage';

const {mainView, flatList, fabContainer} = blogStyles;


class Blog extends React.Component {

  static navigationOptions = (props) => {
    return {
      title: 'Blog',
      headerLeft: (
        <Icon
          containerStyle={{marginLeft: 8}}
          name='menu'
          type='material'
          color='#fff'
          size={iconSize}
          underlayColor="rgba(0,0,0,0.1)"
          onPress={() => {
          }}/>
      ),
      headerRight: (
        <Icon
          containerStyle={{marginRight: 8}}
          name='delete'
          type='material'
          color='#fff'
          size={iconSize}
          underlayColor="rgba(0,0,0,0.1)"
          onPress={() => props.navigation.state.params.clearData()}/>
      ),
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      newPostModalActive: false,
    };

  }

  _handleAppStateChange = (nextAppState) => {
    if (nextAppState !== 'active') {
      storeBlog(JSON.stringify(this.props.blog));
    }
  };

  componentDidMount() {

    getBlog().then((result) => {

      this.props.loadBlog({blog: result});

    });

    this.props.navigation.setParams({
      clearData: this.clearData.bind(this),
    });
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  render() {

    let contentView =
      <FlatList
        style={flatList}
        data={this.props.blog}
        extraData={this.state}
        keyExtractor={(item) => JSON.stringify(item)}
        renderItem={({item, index}) =>
          <Post postData={item} isLast={index === this.props.blog.length - 1} onPressed={this.postPressed}
                onFavorite={this.favoritePressed}/>
        }
      />;

    if (this.props.blog.length === 0) {
      contentView = <Text>No hay posts que mostrar</Text>;
    }

    return (
      <View style={mainView}>
        {contentView}
        <Icon raised reverse name='add' type="material" size={30} color={accentColor}
              containerStyle={fabContainer} onPress={() => this.showModal()}/>
        <NewPostModal showModal={this.state.newPostModalActive} closeModal={this.hideModal}/>
      </View>
    );

  }

  clearData() {
    this.props.clearData();
  }

  postPressed = (postId) => {
    console.log('Post Pressed ID: ' + postId);

  };

  favoritePressed = (postId) => {
    this.props.favoritePost(postId);
  };

  showModal() {

    this.setState({newPostModalActive: true});

  }

  hideModal = () => {

    this.setState({newPostModalActive: false});

  };

}

const mapStateToProps = ({blog}) => {

  return {
    blog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearData: () => {
      dispatch(clearData());
    },
    loadBlog: (blogData) => {
      dispatch(loadBlog(blogData));
    },
    favoritePost: (postId) => {
      dispatch(favoritePost(postId));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Blog);
