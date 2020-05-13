# Style prop of Components

## Camel case ✅

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

## Splitting components

- Each word in the name of a component file should start with a capital letter (SentenceCase instead of camelCase)
- 1 file/ component
- Split meaningfully, when the component is between half and 1 full screen (readable font size)
- Move all the logic to the components as much as possible. If there is a need to bind a function with a property in a child component, don't do the binding in ```App.js``` level, but pass the data down via ```props```.

## Git commits

Start with an infinitive verb. 

Imagine answering "Why should I add this commit?"
 
-> "To..." + <your_commit_message>, e.g. ```Fix bug #1```

## Warnings

Treat them as errors & fix before push!

