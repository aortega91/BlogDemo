import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {Card, Icon, Avatar} from 'react-native-elements';

import {postStyles} from './styles';
import {connect} from 'react-redux';

import {getImageAsset} from './utils';
import moment from 'moment';

const {cardStyle, cardActionStyle, detailsContainerStyle, userNameStyle, dateStyle} = postStyles;



class Post extends React.Component {


  render() {

    const {id, title, subtitle, author, content, date, imageId, favorite} = this.props.postData;

    return (
      <TouchableHighlight underlayColor={'rgba(0,0,0,0.0)'}
                          onPress={() => {
                            this.props.onPressed(id);
                          }}>
        <Card
          featuredTitle={title}
          featuredSubtitle={subtitle}
          image={getImageAsset(imageId)}
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
                {author}
              </Text>
              <Text style={dateStyle}>
                {moment(date).format('DD/MM/YYYY')}
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

export default connect(mapStateToProps, null)(Post);
