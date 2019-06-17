function templateTagFunction(args) {
  callTemplateTagFunction`${args}`;

  function callTemplateTagFunction(argument) {
    return argument.filter(element => element === '"' || '>' || '<' || '&');
  }
}

export { templateTagFunction };
