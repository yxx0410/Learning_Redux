# reducer
functional programming
## generate reducer
1. pure, immutable
2. use creator to avoid boilerplate

## reducer concept
1. (old,action)=>new
2. pure
3. non-mutation on state, always generate new
4. thinking state and state structure
5. state composition = reducer composition
6. higher order reducers
7. initial state

### pure
0. function's output is predictably determined by input, same input always result same output
1. avoid side-effect like http request, accessing variable ouside,mutating object input,obtain user input,query dom
2. non-dependencies on outside mutatble variables
3. use local context variable like arguments or local variable

### high order reducers
functional programming
code as data function to be parameter 
1. function can be input to other functions,
2. function can output new function

### reducer composition
0. functions composed into function to take multiple input and result output
1. compose reducers to output whole state tree

## immutable
object variable in js is store reference not actual value which is stored in memory
mutate an object will cause to change every object have same reference
so, generate new object instead mutate an object all the time.
use ... or object.assign to generate new instead of object1=object2, or object.xxx = xxx

## state structure
1. normalizing data in state like a database with id
2. splitting relational data into divided tables

