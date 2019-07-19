import {StyleSheet} from 'react-native';
import {globalStyle} from '../../globalStyles';
const {darkGray, accentColor, clearBackground} = globalStyle.themeStyle;

export const postStyles = StyleSheet.create({
  cardStyle: {backgroundColor: clearBackground},
  cardActionStyle: {
    top: -48, marginBottom: -60, alignSelf: 'flex-end', zIndex: 3,
  },
  detailsContainerStyle: {marginBottom: 16, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'},
  userNameStyle: {fontSize: 15, color: accentColor},
  dateStyle: {fontSize: 13, color: darkGray},
});


export const postDetailsStyles = StyleSheet.create({

  mainContainerStyle: {flex: 1, height: '100%'},
  headerContainerStyles: {height: 230},
  headerImageStyles: {width: '100%', height: '100%'},
  authorInfoContainerStyles: {flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', top: -30},
  authorNameOverlayStyles: {position: 'absolute', backgroundColor: 'rgba(0,0,0,0.3)', height: '100%', width: '100%'},
  authorAvatarStyles: {marginRight: 10, marginLeft: 16, zIndex: 3},
  authorNameStyle: {top: -15, color: 'white', fontWeight: 'bold', fontSize: 20},
  postBodyStyle: {flex: 2, zIndex: 2, backgroundColor: clearBackground, paddingTop: 25},
  postDateStyle: {
    alignSelf: 'flex-end',
    fontSize: 18,
    color:  darkGray,
    marginRight: 16,
  },
  postTitleStyle: {
    marginTop: 18,
    marginHorizontal: 16,
    alignSelf: 'flex-start',
    fontSize: 30,
    fontWeight: 'bold',
  },
  postSubtitleStyle: {
    marginTop: 15,
    marginHorizontal: 16,
    alignSelf: 'flex-start',
    color: darkGray,
    fontSize: 22,
    fontWeight: 'bold',
  },
  postContentStyle: {
    marginTop: 16,
    marginBottom: 40,
    marginHorizontal: 16,
    alignSelf: 'flex-start',
    fontSize: 20,
    textAlign: 'justify',
  },
  postCommentsLabelStyle: {
    marginTop: 6,
    marginHorizontal: 16,
    alignSelf: 'flex-start',
    color: darkGray,
    fontSize: 18,
    fontWeight: 'bold',
  },
  newCommentContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: clearBackground,
    padding: 2,
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
});
