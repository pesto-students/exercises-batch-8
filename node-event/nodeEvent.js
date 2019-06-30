const EventEmitter = require('events');

class EventEmitterExtended extends EventEmitter {}
const emitter = new EventEmitterExtended();
emitter.on('error', (error) => {
  console.log('Error ocurred:', error);
});

emitter.on('event', (...args) => {
  console.log('Inside first event listener', args);
});

emitter.on('event', (...args) => {
  console.log('Inside second event listener', args);
});

function nodeEvent(str) {
  if (typeof str !== 'string') {
    emitter.emit('error', new Error(`Expected string, found ${typeof str}`));
  } else {
    emitter.emit('event', str);
  }
}

export {
  nodeEvent,
};
