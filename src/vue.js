
const html = `
<script abc = 1 setup>
function foo() {
    \`
        <p>hi</p>
    \`
}</script>

------------------------------------------------------------
<script abc = 1 setup>
    const a = \`
        <p>start of internal html</p>
        <p>end of internal html</p>
    \`
</script>
`
// const state = await createState(html)
// traverseBlue(state)

const { parser: javascriptParser } = await import(
    `@lezer/javascript`
)
import {parseMixed} from "@lezer/common"


const javascriptConfig = {
    wrap: parseMixed((node, input) => {
        if (node.name == 'TemplateString') {
        const text = getStatef(input.string, 'text')(node)
        const html = text.slice(1, -1).trim()
            if (html.startsWith('<') && html.endsWith('>')) {
        return node.name == "TemplateString" ? {parser: nestedHtmlParser} : null
            }
        // console.log("text", text)
            // throw ''
        }
    }),
    strict: true,
}
const nestedJavascriptParser = javascriptParser.configure(javascriptConfig)
// const { parser: cssParser } = await import(`@lezer/css`)
const { parser: htmlParser, configureNesting } = await import(`@lezer/html`)
// console.log(parseMixed.toString())
// throw configureNesting.toString()

const tags = [
    {
        tag: "script",
        attrs(attrs) {
            if ('src' in attrs) {
                return false
            }
            return true
        },
        parser: nestedJavascriptParser,
    },
    {
        tag: "style",
        attrs(attrs) {
            return true
        },
        // parser: cssParser,
    },
]

const text = getLast(dashSplit(smartDedent5(html.trim())))
const htmlConfig = {
    wrap: configureNesting(tags),
    dialect: "selfClosing",
    strict: true,
}
const nestedHtmlParser = htmlParser.configure(htmlConfig)
const tree = nestedHtmlParser.parse(text)
viewTree(tree.topNode, text)

// yeah ...
// on the one hand ... use it for code actions (removeing unused dependencies)
// on the other hand ... use it for formatting (prettier)
//
// this file works ...
