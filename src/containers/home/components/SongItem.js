import React from 'react';
import {View, Image, Text, StyleSheet, TouchableHighlight} from 'react-native';

import {withNavigation} from 'react-navigation';

//Using a functional component, because this will be a child component with only receiving the props.
function SongItem(props) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="white"
      onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          style={styles.thumbnail}
          source={{uri: props.data.artworkUrl100}}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText} numberOfLines={2}>
            {props.data.trackName
              ? props.data.trackName
              : 'Track Name Unavailable'}
          </Text>
          <View style={styles.artistTimeContainer}>
            <Text
              style={{...styles.detailsText, ...styles.bold}}
              numberOfLines={2}>
              {props.data.artistName
                ? props.data.artistName
                : 'Artist Unavailable'}
            </Text>
            <Text style={{...styles.detailsText, ...styles.time}}>
              {props.data.playTime}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
  },
  detailsText: {
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  artistTimeContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  time: {
    marginLeft: 10,
  },
});

export default withNavigation(SongItem);
