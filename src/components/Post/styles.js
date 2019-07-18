import {StyleSheet} from 'react-native';

export const postStyles = StyleSheet.create({
  cardStyle: {backgroundColor: '#F5F5F5'},
  cardActionStyle: {
    top: -48, marginBottom: -60, alignSelf: 'flex-end', zIndex: 3,
  },
  detailsContainerStyle: {marginBottom: 16, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'},
  userNameStyle: {fontSize: 15, color: '#00ACC1'},
  dateStyle: {fontSize: 13, color: '#757575'},
});
