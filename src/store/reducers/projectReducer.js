const initialState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu'},
        {id: '2', title: 'help me find peach', content: 'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu'},
        {id: '3', title: 'help me find peach', content: 'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiu'}
    ]
}

export const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            return [...state]
    }
}