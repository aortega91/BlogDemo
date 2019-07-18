import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {Card, Icon, Avatar} from 'react-native-elements';


import {postStyles} from './styles';
import {connect} from 'react-redux';

const {cardStyle, cardActionStyle, detailsContainerStyle, userNameStyle, dateStyle} = postStyles;

class Post extends React.Component {

  getImageAsset(imageId) {

    switch (imageId) {

      case 1:
        return require('../../assets/md-background-1.jpg');
      case 2:
        return require('../../assets/md-background-2.jpg');
      case 3:
        return require('../../assets/md-background-3.png');
      case 4:
        return require('../../assets/md-background-4.png');
    }

  }

  render() {

    const {id, title, subtitle, content, date, imageId, favorite} = this.props.postData;

    return (
      <TouchableHighlight underlayColor={'rgba(0,0,0,0.0)'}
                          onPress={() => {
                            this.props.onPressed(id);
                          }}>
        <Card
          featuredTitle={title}
          featuredSubtitle={subtitle}
          image={this.getImageAsset(imageId)}
          containerStyle={{marginBottom: this.props.isLast ? 60 : 0, ...cardStyle}}
        >
          <Icon
            containerStyle={cardActionStyle}
            reverse
            raised
            name={favorite ? 'favorite' : 'favorite-border'}
            type='material'
            color='#F44336'
            size={26}
            onPress={() => {
              this.props.onFavorite(id);
            }}/>
          <View style={detailsContainerStyle}>
            <Avatar rounded size={36} source={{uri: 'https://picsum.photos/200/300'}}/>
            <View style={{marginLeft: 8}}>
              <Text style={userNameStyle}>
                Usuario
              </Text>
              <Text style={dateStyle}>
                {date}
              </Text>
            </View>
          </View>
          <Text numberOfLines={3} style={{marginBottom: 12}}>
            {content}
          </Text>
        </Card>
      </TouchableHighlight>

    );
  };
}

const mapStateToProps = (state, ownProps) => {

  let {favorite} = ownProps.postData;

  return {
    favorite,
  };
};

//TODO CREATE POST DETAILS COMPONENT, https://dribbble.com/shots/1932736-Mobile-Blog-Layout-Visual-Design

export default connect(mapStateToProps, null)(Post);
