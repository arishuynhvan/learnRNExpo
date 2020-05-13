# Style prop of Components

## Camel case

e.g. borderColor

## Quoted CSS name

e.g. "border-color"

## Inline style 

Styles are set up directly inside the components -> bad :(

=> Use StyleSheet object!

## StyleSheet object

- Good for future optimization
- JS compiler can validate stylesheet to avoid silent errors
- Shareable among different components

## Formatting style
- Prettier (now)
- Babel

## Latest features of React

- Must use the stable ones: [Hook](https://www.youtube.com/watch?v=dpw9EHDh2bM) => useState, useContext, useEffect
- Adhere to their rules, e.g [Hook rule](https://reactjs.org/docs/hooks-rules.html)

## Event-handling Functions

- All should be declared as a ```const``` variable and use functional programming JFX syntax (TODO: add an explanation for this!)

## Warnings

Treat them as errors & fix before push!