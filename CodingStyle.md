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