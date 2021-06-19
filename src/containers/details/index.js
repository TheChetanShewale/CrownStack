import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {DIVIDER} from '../../../assets/colors';

//Using a functional component here, because the props will be supplied from the parent container
//and we are not going to have any data processing methods here.
export default function Details(props) {
  let song = props.navigation.getParam('song');
  return (
    <SafeAreaView style={styles.parentContainer}>
      <ScrollView>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={{uri: song.artworkUrl100}} />
          <Text style={{...styles.text, ...styles.bold, ...styles.textMargin}}>
            {song.trackName ? song.trackName : 'Track Name Unavailable'}
          </Text>
        </View>
        {row('Artist Name:', song.artistName)}
        {row('Play Time:', song.playTime)}
        {row('Genre:', song.primaryGenreName)}
        {row('Release Date:', song.convertedReleaseDate)}
        {row('Description:', song.shortDescription)}
      </ScrollView>
    </SafeAreaView>
  );
}

//A generic function to return row component to show details,
//this avoids repetation of hardcoded nested components in above method
const row = (rowHeading, rowDescription) => {
  return (
    <View style={styles.row}>
      <Text style={{...styles.text, ...styles.bold, ...styles.half}}>
        {rowHeading}
      </Text>
      <Text style={{...styles.text, ...styles.half}}>
        {rowDescription ? rowDescription : 'Unavailable'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  thumbnailContainer: {
    paddingVertical: 25,
    alignItems: 'center',
    borderBottomColor: DIVIDER,
    borderBottomWidth: 2,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
  },
  textMargin: {
    marginTop: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: DIVIDER,
    paddingVertical: 20,
    paddingLeft: '15%',
    justifyContent: 'space-evenly',
  },
  half: {
    flex: 0.5,
  },
});
