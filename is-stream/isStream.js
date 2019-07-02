import stream from 'stream';

const isStream = mayBeStream => mayBeStream instanceof stream;
isStream.writable = maybeWritable => maybeWritable instanceof stream.Writable;
isStream.readable = mayBeReadable => mayBeReadable instanceof stream.Readable;
isStream.duplex = maybeDuplex => maybeDuplex instanceof stream.Duplex;
isStream.transform = mayBeTransform => mayBeTransform instanceof stream.Transform;

export { isStream };
