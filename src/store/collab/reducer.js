const reducer = ( state = {}, action ) => {
	switch ( action.type ) {
		case 'SET_COLLAB_YJS_DOC': {
			return { ...state, yDoc: action.doc };
		}
	}

	return state;
};

export default reducer;
