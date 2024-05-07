export { getTree }
async function getTree(text, filetype, options) {
    const { parser } = await import(`@lezer/${filetype}`)
    const fn = options ? parser.configure(options) : parser
    const tree = fn.parse(text)
    return tree
}

