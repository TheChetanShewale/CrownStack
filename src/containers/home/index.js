import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  ActivityIndicator,
  Text,
  RefreshControl,
  FlatList,
  StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';
import {fetchSongs} from './actions';
import {getIsLoading, getIsRefreshing, getList} from './reducer';
import {SCREEN_BACKGROUND, DIVIDER} from '../../../assets/colors';
import SongItem from './components/SongItem';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSongs());
  }

  render() {
    return (
      <SafeAreaView style={styles.parentContainer}>
        {this.props.isLoading ? (
          <View style={styles.progressContainer}>
            <ActivityIndicator animating={true} size={'large'} />
            <Text style={styles.loading}>Please Wait...</Text>
          </View>
        ) : (
          <FlatList
            style={styles.list}
            data={this.props.list}
            keyExtractor={(_, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={() => <View style={styles.separator} />}
            refreshControl={
              <RefreshControl
                refreshing={this.props.isRefreshing}
                onRefresh={() => this.props.dispatch(fetchSongs())}
              />
            }
            renderItem={({item}) => {
              return (
                <SongItem
                  data={item}
                  onPress={() =>
                    this.props.navigation.navigate('details', {song: item})
                  }
                />
              );
            }}
          />
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  isRefreshing: getIsRefreshing(state),
  list: getList(state),
});

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: SCREEN_BACKGROUND,
  },
  progressContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    marginTop: 10,
  },
  list: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  separator: {
    height: 2,
    backgroundColor: DIVIDER,
  },
});

export default connect(mapStateToProps)(Home);
