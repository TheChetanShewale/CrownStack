//utils.js - adding all the utility functions here
//convert the track milliseconds to user readable play time format
export function msToTime(ms) {
  const hours = Math.floor(ms / 1000 / 60 / 60);
  const minutes = Math.floor((ms / 1000 / 60 / 60 - hours) * 60);
  const seconds = Math.floor(
    ((ms / 1000 / 60 / 60 - hours) * 60 - minutes) * 60,
  );

  if (seconds === 0) {
    return '';
  } else if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  } else if (minutes === 0 && seconds > 0) {
    return `${seconds}s`;
  } else if (minutes > 0 && seconds > 0) {
    return `${minutes}m ${seconds}s`;
  }
}

//convert the release date coming from server in user readable date format
export function getReleaseDate(serverDate) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  if (serverDate) {
    const date = new Date(serverDate);
    return `${date.getDate()} - ${
      months[date.getMonth()]
    } - ${date.getFullYear()}`;
  } else {
    return 'Unavailable';
  }
}
