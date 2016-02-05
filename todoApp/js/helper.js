function debug(options){
  if (!(options && options.model)) {
    throw new Error("model is not specified")
  }
}
