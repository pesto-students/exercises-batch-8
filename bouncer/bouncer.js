
function bouncer(args) {
  return args.filter(arg => Boolean(arg));
}

export {
  bouncer,
};
