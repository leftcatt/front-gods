export const getServerSideProps = async () => {
    const fs  = require('fs');

const rawdata = fs.readFileSync('../../util/data.json');
const data = JSON.parse(rawdata);

console.log(data.length)

module.exports = data;


};


