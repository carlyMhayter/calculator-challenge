export function add({ x, y }: Props) {
  const floatSum =
    parseFloat(x === "" ? "0" : x) + parseFloat(y === "" ? "0" : y);
  const string = floatSum.toString();

  return string;
}

interface Props {
  x: string;
  y: string;
}

interface ObjectFunction {
  [add: string]: Function;
}

export const mathFunctions: ObjectFunction = {
  add: ({ x, y }: Props) => {
    const floatSum =
      parseFloat(x === "" ? "0" : x) + parseFloat(y === "" ? "0" : y);
    const string = floatSum.toString();

    return string;
  },
  sub: ({ x, y }: Props) => {
    if (x === "") {
      return y;
    }
    const floatSub = parseFloat(x) - parseFloat(y === "" ? "0" : y);
    const string = floatSub.toString();
    return string;
  },

  mult: ({ x, y }: Props) => {
    if (x === "") {
      return y;
    }
    const floatMult =
      parseFloat(x === "" ? "0" : x) * parseFloat(y === "" ? "0" : y);
    const string = floatMult.toString();

    return string;
  },
  div: ({ x, y }: Props) => {
    if (x === "") {
      return y;
    }
    const floatDiv =
      parseFloat(x === "" ? "0" : x) / parseFloat(y === "" ? "0" : y);
    const string = floatDiv.toString();

    return string;
  },
};
