import React from 'react';
import {View} from 'react-native';
import {Text, Divider, Avatar} from 'react-native-elements';
import moment from 'moment';

import {commentStyles} from './styles';
const {commentContainerStyle, userNameStyle, commentContentStyle,
  commentDateStyle, commentDividerStyle} = commentStyles;


export class Comment extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {

    const {user, content, date} = this.props.data;

    let finalView = <View style={{marginBottom: 20}}/>;

    if(!this.props.isLast)
      finalView = <Divider style={commentDividerStyle}/>;


    return (
      <View style={{marginBottom: 0}}>
        <View style={commentContainerStyle}>
          <Avatar rounded size={40} source={{uri: 'https://picsum.photos/100'}} containerStyle={{marginRight: 10}}/>

          <View style={{marginRight: 30}}>
            <Text style={userNameStyle}>{user}</Text>
            <Text style={commentContentStyle}>{content}</Text>
            <Text style={commentDateStyle}>{moment(date).fromNow()}</Text>
          </View>
        </View>
        {finalView}
      </View>
    );

  }

}
