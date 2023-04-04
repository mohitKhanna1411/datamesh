validateObject = obj => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj) || !Object.keys(obj).length)
        return false

    if (!('topic' in obj && 'name' in obj && 'description' in obj))
        return false

    const { topic, name, description } = obj;

    if (topic === "A") {
        if (name !== "a")
            return false;

        if (description.length <= 10 || description.length >= 100)
            return false;

    } else if (topic === "B") {
        if (name !== "x")
            return false;

        if (description.length >= 40)
            return false;

    } else
        return false


    return true;
}


module.exports = {
    validateObject
}