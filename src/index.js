const classmany = (...args) => {
  const filteredClasses = args.flat().filter(Boolean);
  let classes = [];

  const typeArgs = {
    string: (arg) => {
      classes.push(arg);
    },
    object: (arg) => {
      for (const key in arg) {
        arg[key] && classes.push(key);
      }
    },
  };

  for (const item of filteredClasses) {
    if (typeArgs[typeof item]) {
      typeArgs[typeof item](item);
    }
  }

  return classes.join(" ");
};
