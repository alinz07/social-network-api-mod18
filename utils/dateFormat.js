const dayjs = require("dayjs");

module.exports = (date) => {
    return `${dayjs(date).format("MM/DD/YYYY h:ma")}`;
};
