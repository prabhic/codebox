var path = require("path");

module.exports = {
    id: "ruby",
    name: "Ruby",

    detector: path.resolve(__dirname, "detector.sh"),
    runner: [
        {
            id: "run",
            script: path.resolve(__dirname, "run.sh")
        }
    ]
};