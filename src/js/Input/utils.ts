export enum CASE_TYPES {
  UPPERCASE = 'upper',
  LOWERCASE = 'lower',
}

export const cx = (...params: Array<any>) => {
  const classes = [];
  for (let i = 0; i < params.length; i += 1) {
    const arg = params[i];
    if (!arg) continue;
    const argType = typeof arg;
    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner: string = cx.apply(null, arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      for (const key in arg) {
        if ({}.hasOwnProperty.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(' ');
};

export const getRandomId = () => {
  return Math.random().toString(36).slice(-8);
};

export const getAlphanumeric = (v: string) => {
  let res = '';
  String(v)
    .split('')
    .forEach(i => {
      const charCode = i.toLowerCase().charCodeAt(0);
      if ((charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122)) {
        res += i;
      }
    });
  return res;
};

export const getAlpha = (v: string) => {
  let res = '';
  String(v)
    .split('')
    .forEach(i => {
      const charCode = i.toLowerCase().charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) {
        res += i;
      }
    });
  return res;
};

export const getNumeric = (v: string) => {
  let res = '';
  v.split('').forEach(i => {
    const charCode = i.toLowerCase().charCodeAt(0);
    if (charCode >= 48 && charCode <= 57) {
      res += i;
    }
  });
  return res;
};

export const getCased = (v: string, type: string) => {
  if (type) {
    switch (type) {
      case CASE_TYPES.UPPERCASE:
        return v.toUpperCase();
      case CASE_TYPES.LOWERCASE:
        return v.toLowerCase();
    }
  } else {
    return v.toUpperCase();
  }
};

export const getClassName = (className: string) => `RCI-${className}`;

export const isAndroid = () => {
  if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
    return false;
  }
  return /(android)/i.test(navigator.userAgent);
};
