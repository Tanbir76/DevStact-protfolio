
* Name of project : DevStack Protfolio
* Technology : I am use a 1.Vite 
                          2. React.js
                          3.Tailwind CSS, DaisyUI
                          4.TypeScript / JavaScript (ES6+)
                          5. React-Toastify (NPM Package)
                            
* Discription: I am absolute begginer web devloper learner. I was creating my frist React typeScript project a DevStack-protfolio web-site . That was makes us a serius learning improvement for web developer .

* Feature: 1.Stack card select a one time & showing a towst in a bottom-left  .
           2.store stack card delete indiviule.
           3. Remove All button click this should be all sellect card clear in a store Stack card .
           
1. explain it theis question and simple?

JSX Stands for JavaScript XML. It is spacial syntex used by React and      also easier to writing in HTML inside a JavaScript . Normally javascript  dosn't understand in HTML  directly. 
   * JSX makes React code easier to read and write .

2. What is the difference between props and state?
 Answer:
 * Props- data paseed from parend to child,  use to sent data and read only.
 * State- data manage inside a component , use to chinging data and changes.


3. What does the `useState` hook do, and where did you use it in this project?
 Answer:
useState is a React hook thats  a component store and changing data. example: 
const [count, setCount] = useState(0);
this case useState changes a count and updating a count for setCoun.So usestate is uses for a state updating and setdata for a when  i am changes . 


4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
 Answer:
useEffect is used to perform a task after the component renders.
I used useEffect to load the JSON data when the component start.


5. Why does every item in a `.map()` list need a unique `key` prop?
Answer:
 Uniqe key is also set component uniqe stracture for a repplaying for data for a map() . If an item is added, removed, or changed, React can quickly understand which item changed. 
 
 
6. What is conditional rendering? Show one place you used it (example: the empty stack message).
 Answer:
Conditional rendering is showing something only when a condition is true;
for example:
<!-- {cardItems.length === 0 && (
  <p>stack is empty</p>
)} -->
 


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
 Answer:
Fastly i was creating a function ans paramiter should be pass a props for a child and child component it was click it it makes a parent handle it .
for example:
<!-- function App() {

  function handleAdd(item) {
  }
  return <Child onAdd={handleAdd} />;

}
function Child({ onAdd }) {
  const item = "banana";
  return (
    <button onClick={() => onAdd(item)}>Add </button>
  );
} -->


7. Answer:
 This are the six quesion should be depending or anthor question . 
 React project starting initially i use project run and set data for a browsor in JSON formate in a react project .then i was use in async in app() and promise should be await in a data for a fatching or useEffect and  then use hook for uses data  for calling in a async data .Thin data is  store and map() for a child component and add a uniqe key for a each component and display it .