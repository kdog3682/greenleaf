
import {
    traverse,
    getState,
    viewNode,
    iterateTopLevel,
    traverseBare,
    simpleTraverse,
    collectImports,
    is,
    evalTraversal,
    traverseWithEnvironmentAndRef,
    traverseJavascript,
    simpleCodeLibrary,
    iterateNode,
    findChildNodeRecursively,
    Environment,
    traverseJson,
    findallChildNodes,
    jsonTraversal,
    stringBuilder,
    isContentNode,
    iterateTree,
    getChildNodes,
    findChildNode,
    viewTree,
    traverseBlue,
    getNameNode,
    getStatef,
    setupState,
} from '../functions.js'

export {
    scriptSetupFormatter,
}

function scriptSetupFormatter(node, getText) {
    return getText(node)
}

// const args = await setupState(s)
// console.log(scriptSetupFormatter(...args))
