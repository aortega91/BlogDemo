import {StyleSheet} from 'react-native';
import {globalStyle} from '../../globalStyles';

const {accentColor} = globalStyle.themeStyle;

export const commentStyles = StyleSheet.create({
  commentContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 16,
  },
  userNameStyle: {flex: 1, marginBottom: 2, color: accentColor, fontSize: 16, fontWeight: 'bold'},
  commentContentStyle: {flex: 3, marginBottom: 4},
  commentDateStyle: {flex: 1, color: 'gray', fontSize: 13},
  commentDividerStyle: {marginVertical: 12, height: 1.5, backgroundColor: '#BDBDBD'}
});
