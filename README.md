Isomorphic web framework for React and Redux.

Basic principles:
- Convention over configuration. Everything is working out of the box.
- Targeted on buildin SPA and isomorphic applications.
- Components dispatch events.
- Events are processed in dispatcher.
- Dispatcher is an independent entity. It's a hashmap, where the key is an event name, the value is a handler. 
- Event handler (action) generates a new app state.
- State is immutable, one instane of the app has only one state.
- Sate is passed into the root component, it's parts are passed to child components as props.
- Each component has an access to the context, components use it to interact with the outer world.
- Context is able to dipathc message and construct app urls.
- App context is implemented using React context. 
- All async task are implemented using promises.

Project generator (`drug-cli`):
- Is installed globally.
- Fetches the template of a new project from GitHub (`drug init` or `drug create my-app`) 
- It is possible to specify the version of app template you wish to create project from.
- Templates of the generators are in the project folder, you can customize them.


url -> action -> state -> vdom
