module.exports = {
    website: {
        assets: "./assets",
        js: [
            "file.js"
        ],
        css: [
            "file.css"
        ]
    },
    blocks: {
        file: {
            process: function (block) {
                return "<div class='markdown-tabs'>" + "123" + "</div>";
            }
        }
    }
};
