## Data Types

- to compile run tsc
- data type in ts
  - number
  - string
  - boolean
  -

```ts
function add(n1: number, n2: number) {
	return n1 + n2;
}
```

- object

```ts
const person: {
	name: string;
	age: number;
} = {
	name: "aliff",
	age: 30,
};
```

- array / string[]
- tuple (fixed length array)
  - eg key: [number.string]
  - but can push element to tupple
- enum

```ts
enum Role {
	ADMIN = 1,
	READ_ONLY,
}

const person = {
	name: "aliff",
	age: 30,
	role: 4,
};
```

## Union type

- two type in for one variable

```ts
function combine(n1: number | string, n2: number | string) {
	//logic here
	return;
}
```

## Literal type

```ts
function combine(
	n1: number | string,
	n2: number | string,
	resultConversion: "as-number" | "as-text"
) {
	//logic here
	return;
}
```

## alias type

```ts
type Combinable = number | string;

function combine(
	n1: Combinable,
	n2: Combinable,
	resultConversion: "as-number" | "as-text"
) {
	//logic here
	return;
}
```

# Function

- function is a type

```ts
let combineValues: (a: number, b: number) => number;
```

## Function callback

```ts
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n1;
	cb(result);
}

addAndHandle(10, 20, (result) => {
	console.log(result);
});
```

### unknown type

- unknows cannot be assign to other type
- unknown can hold any value but more strict

### never type

- eg
  - function that handle error
  - infinite loop
