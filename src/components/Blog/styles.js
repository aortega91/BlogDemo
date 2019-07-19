import {StyleSheet} from 'react-native'

export const blogStyles = StyleSheet.create({
  mainView: {height: '100%', backgroundColor: '#EEEEEE'},
  emptyListView: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {color: 'grey', fontSize: 20, fontWeight: 'bold'},
  flatList: {paddingBottom: 14},
  fabContainer: {position: 'absolute', right: 4, bottom: 4},
});
