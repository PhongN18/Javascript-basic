import { TYPE_LOG } from "./moduleConstants.js"

function logger(log, type = TYPE_LOG) {
    console[type] (log)
}

// Can only export default 1 time in a module
export default logger