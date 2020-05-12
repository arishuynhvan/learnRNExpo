# UI Component Basics

## View

By default, it only takes as much space as its child requires

## Flexbox

### Axes

For any (flex) direction, there are 2 pairs of axes: main and cross axes

E.g. 
- flexDirection: 'row'
  - Main axis: left-right
  - Cross-axis: top-bottom
- flexDirection: 'column'
  - Main axis: top-bottom
  - Cross-axis: left-right

For reverse directions, both main and cross axes are reverse

### justifyContent vs alignItems

- justifyContent -> align along the main axis
- alignItems -> align along the cross-axis

### Flex

- flex: 1 -> take as much space as it can get 
- flex numbers of the siblings of the same parents are relative to each other. They can help 