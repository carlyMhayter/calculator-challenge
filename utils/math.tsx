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
};
