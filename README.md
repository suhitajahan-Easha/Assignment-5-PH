🚀 DevStack
DevStack is a modern and interactive web application that helps developers explore popular technologies across different categories such as Frontend, Backend, Database, Language, Styling, DevOps, and Tools

🌐 Live: https://devstack-assignment-5-ph.netlify.app/

🛠️ Technologies Used
⚛️ React
🎨 Tailwind CSS
🟨 JavaScript
🌐 HTML5
📦 JSON 
🚀 Netlify

✨ Features
🔍 Explore technologies by category
⭐ View technology ratings, difficulty, and details
🧩 Add technologies to your personal stack






Question Answer:
i.What is JSX, and why is it used in React?

 JSX stands for JavaScript XML. It allows us to write HTML-like syntax directly inside JavaScript.

For example:

const App = () => {
  return <h1>Hello</h1>;
};

JSX makes React code easier to read and write because we can describe the UI structure directly inside our JavaScript code.

JSX is not actually HTML. React uses a compiler such as Babel to convert JSX into regular JavaScript.


ii. What is the difference between props and state?
The main difference is from where the data come from and who can change .
Props is used to pass data from parent to child component in react.Child component recieve the data and can use it but child component cant modify the data.
For example:
Inside parent component

<Technology name="React" />

Inside child component

const Technology = ({ name }) => {
  return <h2>{name}</h2>;
};

State use as a variable inside the component.we use react useState hook to use the state.State can change during the application's lifetime.When any state change react re-render the component.

Example
const [count, setCount] = useState(0);

here in the example the count value set as 0 first ,through setCount we can set the value depending on any condition.

so,Props are used to receive data from a parent, while state is used to manage data that can change inside a component.

iii.What does the useState hook do, and where did you use it in this project?
useState is a React Hook that allows a functional component to store and update data.
in this project i use this useState in AllTechnologies component as lift state up,because i have to use this state from multiple component.and send this state to devStackcard component as props.

const [techSelected,setTechSelected]=useState([])

Here:

=>techSelected is the current state.
=>setTechSelected is the function used to update the state.
=>[] is the initial value.
In this project, useState was used to manage the selected technologies/stack. When the user adds or removes a technology,i update the state using setTechSelected().

For example:

setTechSelected([...techSelected, Tech]);

This updates the selected techSelected and causes React to update the UI.


iv.What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component.
A side effect is something that happens outside the normal rendering process, such as:
1.Fetching data
2.Calling an API
3.Loading JSON data

For example:

useEffect(() => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => setTechnologies(data));
}, []);
The empty dependency array [] means the effect runs when the component mounts.
v.Why does every item in a .map() list need a unique key prop?
unique key is needed in map or any array function because the key helps React to identify which item has changed, been added, or been removed.
For example :

data.map((Tech)=>{ return <DevStackCard Tech={Tech} key={Tech.id} ></DevStackCard>})

in this project i use map function many times where i use key prop and as key prop value i use tech id which is unique so that
React may not have difficulty efficiently updating the list and wont show a warning in the console.

vi.What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means displaying different UI depending on a condition.it allows us to show or hide UI based on the current state or another condition.In this project i use conditional rendering multiple times.
For Example: {isSelected ? "✓ Selected" : " + Add to Stack"} 
here first declare a state isSelected and updated its value using handle function ,when isSelected is true the Selected will be render on the ui if false Add to Stack will be render .

vii.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

To pass data from parent component to a child we use props .
For example:
From Alltechnologies paren component to child DevStackcard component.

<DevStackCard Tech={Tech} key={Tech.id} ></DevStackCard>

DevStackCard component recieve this props and  can use it.

const DevStackCard = ({ Tech}) => 

{
  return <h1>{Tech.name}</h1>
  
}

On the other hand ,
React follows one-way data flow, so a child doesn't directly change the parent's state.Instead, the parent passes a function as a prop to the child.
A child communicates with its parent by receiving a callback function through props and calling that function when an event occurs.

for example the parent:

const handleAdd = (technology) => {
  setStack([...stack, technology]);
};

<TechnologyCard onAdd={handleAdd} />

The child can then call that function:

const TechnologyCard = ({ onAdd }) => {
  return (
    <button onClick={() => onAdd("React")}>
      Add React
    </button>
  );
};

