const socket = require("../socket.io");
const dotProp = require("dot-prop");

const io = socket();

let state = {
  user: null,
  stream: null,
  chat: {
    connecting: false,
    connected: false,
    registered: false,
    joinedChannels: [],
  },
};

function get(key = null, defaultValue = null) {
  return key ? dotProp.get(state, key, defaultValue) : { ...state };
}

function set(key, value) {
  dotProp.set(state, key, value);
  const rootKey = key.split(".").shift();
  io.emit(`twitch.state.${rootKey}`, get(rootKey));
}

// function update(newState) {
//   state = { ...state, ...newState };
//   io.emit("twitch.state", state);
// }

module.exports = { get, set };
