# Sudoku-Master

Sudoku-Master is a program that can solve [Sudoku](https://en.wikipedia.org/wiki/Sudoku) grids using human and logical
techniques. It is written in [TypeScript](https://www.typescriptlang.org/) so that it can be easily integrated in other
applications as a library, either on the server side with [Node.js](https://nodejs.org/en/) or on the client side using
web browsers or native applications ([Electron](https://www.electronjs.org/), [React Native](https://reactnative.dev/)
or any other framework powered by JavaScript). It is designed to comply with the
[functional programming](https://en.wikipedia.org/wiki/Functional_programming) principles, in order to avoid mutating
data or cause any side-effects.

## Features

- [x] Parses a string representation of a grid into the program.
- [x] Serializes a grid from the program into a string representation.
- [x] Determines whether the digits in a grid are valid according to the constraints of the game.
- [x] Fills every empty cells with their candidates.
- [x] Solves a grid using a [backtracking algorithm](http://sudopedia.enjoysudoku.com/Backtracking_Algorithms.html):
  - [x] [Depth-first search algorithm](https://en.wikipedia.org/wiki/Depth-first_search).
- [x] Indicates the cells that can be [solved](http://sudopedia.enjoysudoku.com/Cell.html#Cell_Status):
  - [x] [Full House](http://sudopedia.enjoysudoku.com/Full_House.html)
  - [x] [Last Digit](http://sudopedia.enjoysudoku.com/Last_Digit.html)
  - [x] [Naked Single](http://sudopedia.enjoysudoku.com/Naked_Single.html)
  - [x] [Hidden Single](http://sudopedia.enjoysudoku.com/Hidden_Single.html)
- [ ] Indicates the candidates that can be [eliminated](http://sudopedia.enjoysudoku.com/Eliminate.html):
  - [ ] [Intersections](http://sudopedia.enjoysudoku.com/Intersection.html):
    - [x] [Locked Candidates](http://sudopedia.enjoysudoku.com/Locked_Candidates.html)
          ([Pointing](http://sudopedia.enjoysudoku.com/Locked_Candidates.html#Type_1_.28Pointing.29) and
          [Claiming](http://sudopedia.enjoysudoku.com/Locked_Candidates.html#Type_2_.28Claiming_or_Box-Line_Reduction.29))
    - [x] [Locked Pair](http://sudopedia.enjoysudoku.com/Locked_Pair.html) and
          [Locked Triple](http://sudopedia.enjoysudoku.com/Locked_Triple.html)
    - [ ] [Almost Locked Candidates](http://sudopedia.enjoysudoku.com/Almost_Locked_Candidates.html)
  - [x] [Subsets](http://sudopedia.enjoysudoku.com/Subset.html):
    - [x] [Naked Subset](http://sudopedia.enjoysudoku.com/Naked_Subset.html)
          ([Pair](http://sudopedia.enjoysudoku.com/Naked_Pair.html),
          [Triple](http://sudopedia.enjoysudoku.com/Naked_Triple.html)
          and [Quadruple](http://sudopedia.enjoysudoku.com/Naked_Quad.html))
    - [x] [Hidden Subset](http://sudopedia.enjoysudoku.com/Hidden_Subset.html)
          ([Pair](http://sudopedia.enjoysudoku.com/Hidden_Pair.html),
          [Triple](http://sudopedia.enjoysudoku.com/Hidden_Triple.html) and
          [Quadruple](http://sudopedia.enjoysudoku.com/Hidden_Quad.html))
  - [ ] [Fish](http://sudopedia.enjoysudoku.com/Fish.html):
    - [x] Basic Fish ([X-Wing](http://sudopedia.enjoysudoku.com/X-Wing.html),
          [Swordfish](http://sudopedia.enjoysudoku.com/Swordfish.html) and
          [Jellyfish](http://sudopedia.enjoysudoku.com/Jellyfish.html))
    - [ ] [Finned Fish](http://sudopedia.enjoysudoku.com/Finned_Fish.html)
    - [ ] [Sashimi Fish](http://sudopedia.enjoysudoku.com/Sashimi_Fish.html)
    - [ ] etc.
  - [ ] [Coloring](http://sudopedia.enjoysudoku.com/Coloring.html)
  - [ ] [Chains](http://sudopedia.enjoysudoku.com/Chain.html) and [Loops](http://sudopedia.enjoysudoku.com/Loop.html)
  - [ ] Wings ([XY-Wing](http://sudopedia.enjoysudoku.com/XY-Wing.html),
        [XYZ-Wing](http://sudopedia.enjoysudoku.com/XYZ-Wing.html),
        [WXYZ-Wing](http://sudopedia.enjoysudoku.com/WXYZ-Wing.html)
        and [W-Wing](http://sudopedia.enjoysudoku.com/W-Wing.html))
  - [ ] etc.

## Functional programming

This program is used as a sandbox to try functional programming (FP) in TypeScript.

#### What is it?

FP is a [programming paradigm](https://en.wikipedia.org/wiki/Programming_paradigm) in which the flow of the program is
passed into [pure functions](https://en.wikipedia.org/wiki/Pure_function) instead of relying on objects like in
[object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) (OOP, which is a paradigm
opposed to FP). The main motivation is to make the code easier to understand, more predictable, and well tested. In
order to satisfy these goals, FP defines some concepts to eliminate any possible
[side effects](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>).

#### How does it work?

FP relies on several concepts that aim to enforce building a software by describing _what_ to do, using a structure and
elements that expresses the logic of a computation, instead of _how_ to do it with algorithms detailing explicitly every
step. It is said to be [declarative](https://en.wikipedia.org/wiki/Declarative_programming) because it abstracts the
**flow control** (how things are done) to focus on the **data flow**.

1. The first and probably most important elements are the **pure functions**. A pure function returns always the same
   result for the data that was pased to it as arguments, it doesn't rely on data outside of its scope and it doesn't
   change the state of any variable or mutable references (objects and arrays). These properties make it really to use
   [unit testing](https://en.wikipedia.org/wiki/Unit_testing) with these functions, and ensure the caller that it will
   always get the right result no matter what happend before and the current state of the program.
   ```typescript
   // This is an impure function:
   let size = 0;
   function incrementSize(inc) {
     size += inc;
   }
   // This is the proper way to do it with a pure function:
   function add(x, y) {
     return x + y;
   }
   ```
2. Speaking of [state](https://en.wikipedia.org/wiki/Program_state), it is important for the program to avoid changing
   the value of its variables and for its data to be [immutable](https://en.wikipedia.org/wiki/Immutable_object) (their
   state cannot be modified after being created). To ensure that, every variable must be declared as constant and all
   the mutable data (objects and arrays for instance) need to be readonly. Moreover, the state must stay in its local
   context and never be shared to other parts of the program.
   ```typescript
   // This variable is not constant and can change unexpectedly
   let size: number = 0;
   // This is a constant so we know that it will keep the same state
   const size: number = 0;
   // The data in this array and object can easily be modified when it is passed into a function
   const primeNumbers: number[] = [2, 3, 5, 7, 11];
   const options: { isMutable: boolean } = { isMutable: true };
   // With TypeScript it is possible to ensure that their data never change
   const primeNumbers: readonly number[] = [2, 3, 5, 7, 11];
   const options: { readonly isMutable: boolean } = { isMutable: false };
   ```
3. The compiler must reject every possible false positive errors. In JavaScript, this is done with the use of a typing
   mechanism like TypeScript (which is used in this project).
4. Another difference of FP is the use of [expressions](<https://en.wikipedia.org/wiki/Expression_(computer_science)>)
   instead of [statements](<https://en.wikipedia.org/wiki/Statement_(computer_science)>). A statement is an element in
   the program that is executed and that does not return a result (e.g. assigning a value to a variable, checking a
   condition with an `if` or a `switch`, repeating an action inside a `for` or a `while` loop); whereas an expression is
   an element that is evaluated to determine a value that it must return to the caller (using only constants, functions
   and operators). Therefore, in FP, we need to use specific functions to replace statements (e.g. we can loop through
   an array with `map`, use `filter` to reject some of the elements, apply `reduce` to aggregate some results, etc.).
   ```typescript
   // These are example of statemens:
   const evenNumbersDoubled = [];
   for (let i = 0; i < 10; i++) {
     // Loop
     let result = i;
     if (i % 2 === 0) {
       // Condition
       result = result * 2; // Variable assignement
       evenNumbers.push(result); // Data mutation
     }
   }
   // Instead we must use expressions:
   const evenNumbersDoubled = Array(10)
     .keys()
     .filter((i) => i % 2 === 0)
     .map((i) => i * 2);
   ```
5. [Function composition](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>) is a mechanism that
   combines several simple general functions into a more specialized complicated one.
   ```typescript
   // Composition of functions (evaluates functions from right to left in the argument list)
   function compose(f1, f2) {
     return function (x) {
       return f1(f2(x));
     };
   }
   // Describe simple general functions
   function divideBy2(x) {
     return x / 2;
   }
   function isEven(x) {
     return x % 2 === 0;
   }
   // Compose a specific function
   const isDivisionEven = compose(
     isEven, // This is executed last
     divideBy2, // This is executed first
   );
   isDivisionEven(4); // Equivalent to isEven(divideBy2(4)) => divideBy2(4) = 2 => isEven(2) => true
   // => true
   isDivisionEven(10); // Equivalent to isEven(divideBy2(10)) => divideBy2(10) = 5 => isEven(5) => false
   // => false
   ```
6. Other rules apply for FP, like currying or monads, but the one listed above are the most important to begin with.

In this project we ensure to comply with these rules as much as possible with the use of some external libraries:

1. [`TypeScript`](https://github.com/microsoft/TypeScript) is used to avoid making typing errors.
2. [`eslint-plugin-functional`](https://github.com/jonaskello/eslint-plugin-functional/) is a set of rules that analyzes
   the code in order to detect violations of FP principles, these rules can be categorized like this: no mutation, no
   object-orientation, no statements, no exceptions and require currying.
3. [`ramda`](https://github.com/ramda/ramda) is a library that allows to evaluate data without the use of statements or
   mutations, in a pure functional approach. The [`remeda`](https://github.com/remeda/remeda) library is quite similar
   but with a focus on performance through lazy evaluation (that is not supported by ramda yet).

#### Why bothering with this?

FP is difficult to learn for a beginner as the declarative approach is quite the opposite from what we learn with
[imperative](https://en.wikipedia.org/wiki/Imperative_programming) programs (like in OOP). Moreover, FP does not make a
program more performant, it is probably the opposite as it is better to use standard (imperative) mechanisms in order to
optimise every step of the program. Also, the constraints of FP also makes it often harder to describe the logic using a
chain of general expressions rather than simply detailing each step with straightforward statements.

So why using FP for this project?

FP is growing in popularity as we can see with the usage of the [Redux](https://redux.js.org/) library that allows to
manage the state of web applications in a FP style (without doing mutations). Its goals are to **behave consistently**
and to be **easy to test**. In fact, a lot of softwares are using some of the FP principles to avoid some flaws
encountered with other approaches:

- Difficulty to spot an error when it is caused by an unpredictable side effect, that can sometime be hidden deeper in
  the control flow.
- Using data that is shared among several parts of the systems, all of which being able to modify it in parallel.
- The increasing use of [mocks](https://en.wikipedia.org/wiki/Mock_object),
  [stubs](https://en.wikipedia.org/wiki/Test_stub), spies, dummies and other isolation mechanisms in unit frameworks for
  systems that are too dependent on the state of other parts of the program.
- etc.

This project is using FP in order to avoid these errors but most importantly it is a sandbox to evaluate the feasbility
of building a software with complex pattern-recognition logics with all of these constraints, and to understand the
advantages and limitations.

## License

[MIT](https://github.com/VAdri/sudoku-master/blob/master/LICENSE)
