const postCssPE = require("postcss-preset-env")

module.exports = {
    plugins: [
        postCssPE({
            stage: 0
        })
        
    ]
}