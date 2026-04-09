const mongoose = require('mongoose');
require('dotenv').config({ path: '../backend/.env' });

const uri = process.env.mongodb_url;
console.log('Testing URI:', uri);

mongoose.connect(uri, {
    dbName: 'company_calendar',
    serverSelectionTimeoutMS: 5000
})
.then(() => {
    console.log('✅ Success!');
    process.exit(0);
})
.catch(err => {
    console.error('❌ Error details:');
    console.error(err);
    process.exit(1);
});
