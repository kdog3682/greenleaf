export {
    createState,
}
import {getTree} from "../shared/getTree.js"
import {getStatef, getTextAndFiletype} from "../shared/utilities.js"

async function createState(x, options) {
    const { text, filetype } = getTextAndFiletype(x)
    const getText = getStatef(text, 'text')

    const tree = await getTree(text, filetype, options)
    const node = tree.topNode

    return {
        getText,
        tree,
        node,
        create: (node) => ({ node, getText }),
    }
}

