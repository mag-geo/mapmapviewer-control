/** 配列 `A` と配列 `B` の共通部分を求める関数 */
export const intersectionOf = <T>(
  A: T[] | undefined,
  B: T[] | undefined
): T[] => (A || []).filter((a) => (B || []).includes(a));

/** 配列 `A` から配列 `B` を引いた差を求める関数 */
export const complementOf = <T>(A: T[] | undefined, B: T[] | undefined): T[] =>
  (A || []).filter((a) => !(B || []).includes(a));
