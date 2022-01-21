// Задача состоит в том что написать калькулято для натуральных чисел, но только на типах!
// Ниже приведена заготовка
// Хочется поддержки сложения и вычитания, если хочется еще челленджа, то деление и умножение
// Из-за ограничений глубины вычислений поддержать все натуральные числа не получится, это нормально

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TypeNumber<N, T extends true[] = []> = T['length'] extends N ? T : TypeNumber<N, [true, ...T]>;

type Equals<A, B> = A extends B ? (B extends A ? "success" : never) : never;

type Add<A, B> = [...TypeNumber<A>, ...TypeNumber<B>]['length'];
type Subtract<A, B> = [...TypeNumber<A>] extends [...TypeNumber<B>, ...infer R] ? R["length"] : 0;

export type OnePlusOneTest = Equals<Add<1, 1>, 2>;
export type TwoMinusOneTest = Equals<Subtract<2, 1>, 1>;
