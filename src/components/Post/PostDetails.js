import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';

import {connect} from 'react-redux';
import {addComment, favoritePost, getPosts} from '../../utils/redux/reducer';
import {Avatar, Divider, Icon, Image, Input} from 'react-native-elements';


import {getImageAsset} from './utils';
import moment from 'moment';
import {Comment} from '../Comment/Comment';
import {CommentObject} from '../../models/CommentObject';

import {postDetailsStyles} from './styles';

const {
  mainContainerStyle, headerContainerStyles, headerImageStyles, authorInfoContainerStyles,
  authorNameOverlayStyles, authorAvatarStyles, authorNameStyle, postBodyStyle,
  postDateStyle, postTitleStyle, postContentStyle, postSubtitleStyle,
  postCommentsLabelStyle, newCommentContainerStyle,
} = postDetailsStyles;

import {globalStyle} from '../../globalStyles';

const {emptyListView, emptyListText} = globalStyle.emptyList;

class PostDetails extends React.Component {

  static navigationOptions = (props) => {
    return {
      title: 'Post',
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      comments: 0,
      newComment: '',
    };
  }


  componentDidMount() {
    this.props.getPosts();
  }

  render() {

    const {id, title, subtitle, author, content, imageId, date, favorite, comments} = this.props.postData;

    let commentView = <FlatList
      style={{marginTop: 20}}
      data={comments}
      extraData={this.state}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item, index}) =>
        <Comment data={item} isLast={index === comments.length - 1}/>
      }
    />;

    if (comments.length === 0) {
      commentView =
        <View style={emptyListView}><Text style={emptyListText}>No hay comentarios que mostrar</Text></View>;
    }


    return (

      <View style={mainContainerStyle}>
        <ScrollView>
          <View>
            <View style={headerContainerStyles}>
              <Icon
                containerStyle={{position: 'absolute', top: 16, right: 16, zIndex: 2}}
                name={favorite ? 'favorite' : 'favorite-border'}
                underlayColor="rgba(0,0,0,0.0)"
                type='material'
                color='#F44336'
                size={45}
                onPress={() => {
                  this.favoritePressed(id);
                }}/>
              <Image
                source={getImageAsset(imageId)}
                style={headerImageStyles}
              />
              <View style={authorInfoContainerStyles}>

                <View style={authorNameOverlayStyles}>

                </View>
                <Avatar
                  containerStyle={authorAvatarStyles}
                  rounded
                  size={60} source={{uri: 'https://picsum.photos/500'}}/>

                <Text style={authorNameStyle}>{author}</Text>

              </View>
            </View>
            <View style={postBodyStyle}>

              <Text
                style={postDateStyle}>{moment(date).format('DD/MM/YYYY')}</Text>

              <Text style={postTitleStyle}>
                {title}
              </Text>

              <Text style={postSubtitleStyle}>
                {subtitle}
              </Text>

              <Text style={postContentStyle}>
                {content}
              </Text>


              <Divider style={{height: 2}}/>

              <Text style={postCommentsLabelStyle}>
                Comentarios:
              </Text>

              {commentView}

            </View>
          </View>
        </ScrollView>
        <View style={newCommentContainerStyle}>
          <Input
            containerStyle={{flex: 6}}
            placeholder='Agrega un comentario'
            value={this.state.newComment}
            onChangeText={(newComment) => this.setState({newComment})}
          />
          <Icon
            containerStyle={{flex: 1}}
            reverse
            raised
            name='send'
            type='material'
            color={globalStyle.themeStyle.accentColor}
            size={20}
            onPress={() => {
              this.addComment(id);
            }}/>
        </View>
      </View>
    );
  }

  favoritePressed = (postId) => {
    this.props.favoritePost(postId);
  };

  addComment = (postId) => {

    this.setState({
      comments: this.state.comments++,
    });

    this.props.addComment(postId, new CommentObject(this.state.newComment));

    this.setState({newComment: ''});

  };

}

const mapStateToProps = (state, ownProps) => {

  const {navigation} = ownProps;
  const postId = navigation.getParam('postId', 0);

  const postData = state.blog[postId - 1];
  const {favorite, comments} = postData;

  return {
    postData,
    favorite,
    comments,
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    },
    favoritePost: (postId) => {
      dispatch(favoritePost(postId));
    },
    addComment: (postId, comment) => {
      dispatch(addComment(postId, comment));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
