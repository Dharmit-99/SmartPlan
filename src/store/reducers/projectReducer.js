const initState = {
    projects: [
        {id: '1', title: "Clean room" , content: "content 1"},
        {id: '2', title: "Do some coding" , content: "content 2"},
        {id: '3', title: "Wash clothes" , content: "content 3"},
        {id: '4', title: "Go Shopping" , content: "content 4"},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("ERROR:", action.error)
            return state;
        default: 
            return state;
    }
    
}

export default projectReducer;