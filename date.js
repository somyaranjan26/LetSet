
exports.getDate = function() {
    let today = new Date()
    let options = { weekday: "long", month: "long", day: "numeric"}

    return today.toLocaleDateString("en-US", options) 
}

exports.getYear = function() {
    let today = new Date()
    return today.getFullYear()
}