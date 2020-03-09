export const createProject = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {

        const fireStore = getFirestore()
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid
        fireStore.collection('projects').add({
            
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            datePosted: new Date()
            }
            
        ).then(() => {
            dispatch({type: 'CREATE_PROJECT', project: project}); 
        }).catch((error) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', error}); 
        })
    
        
    }
} 