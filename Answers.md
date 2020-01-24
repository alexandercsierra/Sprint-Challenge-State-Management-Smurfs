1. What problem does the context API help solve?

Context API helps to solve the problem of prop drilling. I.E., passing props down through components that will not ultimately use them so that the children of those components can utilize those props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store holds any state that isn’t specific to a single component. It initializes state with a reducer. The reducer handles any incoming actions and returns a new state based on what those actions were. Actions are functions that return an object containing the type of action and sometimes a payload to send to the reducer. The store is known as a single source of truth because state is stored and modified within it.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state shared among different components in an application. State that more than one component may need access to. Component state is specific to and contained within that component. If different components across multiple component trees need access to the same piece of state, it should probably be application state. But something like controlling an input can be done locally, since we wouldn’t want the reducer to run with every keystroke.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to write a function which returns a function. It allows the actions to happen asynchronously.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

useContext was the most straightforward. I’m sure redux has its uses that we will discover down the line in a real job, but right now, trying to learn it in two days was very difficult and overly complex for the task at hand. So I’m satisfied with useContext.
