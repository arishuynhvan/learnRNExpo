# React Native

## Run app

### Expo Android client

- Very hard to refresh, it rarely updates correctly the new UI and looks as if there are errors.
- Cannot be a reliable source for testing react native app since it still requires verification against an android simulator or browser

### Run in web browser

- Interacting with the React Native app in web browser can only be debugged using the developer tools on the browser and not in the terminal itself.

# React

## Hook

```
The state of these components is completely independent. Hooks are a way to reuse stateful logic, not state itself.
```

Stateful logic is any code that uses state. In the case of hook, it's the behavior created with one or more hooks.

# Javascript

## Spread

Example
```JS
[...goalList, enteredGoal]
```
Add a new element into the snapshot of the current state of the structure prior to update (but not 100% sure that it's immediately prior)

TODO: Read up on Spread (YDKJS)

To ensure that the snapshot of the ```[goalList]``` is of the immediate current state, use this instead:

```JS
goalList => [...goalList, enteredGoal]
```

## Map and React Component

TODO: Read up how map can magically render a React Component for each item in its list

## Exercise 1

TODO: figure how to update the input text to display placeholder text after every press on ```ADD``` button