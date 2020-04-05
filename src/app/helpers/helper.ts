const convertKey = (key: string): string => {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, (value: string) => value.toUpperCase());
};

export const isObject = (source: any): boolean => {
  return source instanceof Object && !isArray(source);
};
export const isArray = (source: any): boolean => {
  return Array.isArray(source);
};

export const toHumanizeCase = (source: any) => {
  if (isObject(source)) {
    const destination = {};
    Object.keys(source).forEach((key) => {
      destination[convertKey(key)] = toHumanizeCase(source[key]);
    });
    return destination;
  } else if (isArray(source)) {
    return source.map((value: any) => {
      return toHumanizeCase(value);
    });
  }
  return source;
};

export const flattenSource = (source: any) => {
  const destination = {};
  source.map((value: { [x: string]: any }) =>
    Object.keys(value).forEach((key) => {
      destination[key] = isArray(value[key]) ? flattenSource(value[key]) : value[key];
    })
  );
  return destination;
};
