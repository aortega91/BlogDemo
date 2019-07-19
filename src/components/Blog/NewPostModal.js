import React from 'react';
import {ScrollView, View} from 'react-native';

import {TextField} from 'react-native-material-textfield';
import {Button} from 'react-native-elements';

import {connect} from 'react-redux';

import Modal from 'react-native-modal';
import {PostObject} from '../../models/PostObject';

import {addPost} from '../../utils/redux/reducer';

class NewPostModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      content: '',
    };

  }

  getRandomImageIndex(){

    return Math.floor(Math.random() * 4) + 1;

  }

  savePost() {

    const {title, subtitle, content} = this.state;

    let newPost = new PostObject(title, subtitle, content, this.getRandomImageIndex() );

    this.props.addPost(newPost);

    this.setState({
      title: '',
      subtitle: '',
      content: '',
    });

    this.props.closeModal()

  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Modal isVisible={this.props.showModal} animationInTiming={500} animationOutTiming={500}>
          <View style={{padding: 12, backgroundColor: '#fff'}}>
            <ScrollView>
              <TextField
                label='Titulo'
                value={this.state.title}
                onChangeText={(title) => this.setState({title})}
              />
              <TextField
                label='Subtitulo'
                value={this.state.subtitle}
                onChangeText={(subtitle) => this.setState({subtitle})}
              />
              <TextField
                label='Contenido'
                value={this.state.content}
                onChangeText={(content) => this.setState({content})}
              />

            </ScrollView>

            <View style={{felx: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff'}}>
              <Button
                title="Guardar"
                type="clear"
                titleStyle={{color: 'green'}}
                onPress={() => {
                  this.savePost();
                }}
              />
              <Button
                title="Cancelar"
                type="clear"
                titleStyle={{color: 'red'}}
                onPress={() => this.props.closeModal()}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postData) => {
      dispatch(addPost(postData));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewPostModal);
