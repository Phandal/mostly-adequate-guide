// Considering the following functions:
//
//   readfile :: String -> String -> Task Error String
//   readdir :: String -> Task Error [String]
//
// Use traversable to rearrange and flatten the nested Tasks & Maybe

// readFirst :: String -> Task Error (Maybe (Task Error String))
// const readFirst = compose(map(map(readfile('utf-8'))), map(safeHead), readdir);

// readFirst :: String -> Task Error (Maybe String)
const readFirst = compose(chain(traverse(Task.of, readfile('utf-8'))), map(safeHead), readdir);

// task error [string]
// task error (maybe string)
// task error (task error (maybe string)) instead of task error (maybe (task error string))
