import { pipe, purry, reduce } from "remeda";

type CountReturn<T> = {
  readonly value: T;
  readonly count: number;
};

const _count = <T>(list: readonly T[]): readonly CountReturn<T>[] => {
  return pipe(
    list,
    reduce((acc: readonly CountReturn<T>[], item) => {
      const index = acc.findIndex((result) => result.value === item) || 0;
      const newCount = {
        value: item,
        count: (acc[index]?.count || 0) + 1,
      };
      return [...acc.filter((_, i) => i !== index), newCount];
    }, []),
  );
};

export function count<T>(list: readonly T[]): readonly CountReturn<T>[];
export function count<T>(): (list: readonly T[]) => readonly CountReturn<T>[];

// eslint-disable-next-line functional/functional-parameters,@typescript-eslint/explicit-function-return-type
export function count() {
  // eslint-disable-next-line prefer-rest-params,functional/functional-parameters
  return purry(_count, arguments);
}
