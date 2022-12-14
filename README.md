# Rakotonirina_JeanSebastien_13_03072022
## Openclassrooms P13 : Use an API for Bank user account with React
# Expected Skills :
- Implement a state manager in a React application
- Interact with an API (Application Programming Interfatce)
- Model an API
- Authenticate to an API

# Installation
1. Unzip the 2 repository or fork
2. in each directory (fronten and backend), type npm install in vscode terminal console
3. follow instructions below

## 1. Backend 
Project #10 - Argent Bank API
You can see instructions about the backend [here](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)
- Don't forget to type npm start to launch the backend server

## 2. Frontend
  In the frontend directory, type npm start to start the frontend server
  
# Implement a state manager in a React application
I use the Redux library, so according to the frontend package.json : 

  <div style="width:100%;margin:0 auto">
    <img src="./img/packageJson.PNG" alt="frontend json package image" />
  </div>
  
I installed 
   - "redux": "^4.2.0", the state manager
   - "redux-devtools-extension": "^2.13.9", Dev tools for chrome
   - "redux-state-sync": "^3.1.4", A middleware for redux to sync state in different tabs
   - "redux-thunk": "^2.4.1", Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action.
    
 Middleware (intergiciel in french) is like a bridge between the others applications, tools, bdd to give unified services at users.
 
 # Implementation
   <div style="width:100%;margin:0 auto">
    <img src="./img/indexAtTheRootDir.PNG" alt="frontend json package image" />
  </div>

First, we need to create the store with createStore redux function, then we wrap the App component by Provider component wich contains the store in its props, and then the magic happens. 

1. Actions

We have all actions needed for this app inside ./src/actions/index.jsx

For example, 

export const showForm = () => {

    return {
    
        type: 'SHOWFORM'
        
    }
    
}

  2. Reducers ./src/reducers/showFormReducer.jsx

  Each action normally has got a specific reducer function

  const showFormReducer = (state=true, action) => {

    switch(action.type){
    
        case 'SHOWFORM':
        
            return !state 
            
        default:
        
            return state
            
    }
    
}

export default showFormReducer

  3. Combine reducers

   <div style="width:100%;margin:0 auto">
    <img src="./img/combineReducers.PNG" alt="frontend json package image" />
  </div>

  4. useSelector used to get datas from the store and dispatch actions to store them
   
   <div>
    <img src="./img/UserProfilePart1.PNG" alt="frontend sign-in component header side image" />
  </div>
  
    We import showFrom from ./src/actions/index.jsx, and showFormState comes from useSelector (the store).
  
  <div>
    <img src="./img/UserProfilePart2.PNG" alt="frontend sign-in component return side package image" />
  </div>
  
    We use dispatch(showForm()) in the handleClick function to fire the action.
    
  <div>
    <img src="./img/UserProfilePart3.PNG" alt="frontend sign-in component return side package image" />
  </div>
    
    Finally, with this ternary showFormState ? firstName + ' ' + lastName + ' !' : etc... , we have the final state depends on the click edit name button.

# Model an API

Thanks to Postman, I can easely build my swagger (openapi new version of swagger).

  <div>
    <img src="./img/postman.PNG" alt="Swagger" />
  </div>

openApi is a way to "draw" or model (modelize?) the API.

  <div>
    <img src="./img/openApi.png" alt="Swagger" />
  </div>

This is a kind of schema about what are the possible requests we can send to the API or/and possible responses from the API
