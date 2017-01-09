import { createStore, compose } from 'redux'

import rootReducer from 'reducers'


const store = createStore(
        rootReducer,
        compose(
            window.devToolsExtension && process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : f => f
        )
    )

export default store
