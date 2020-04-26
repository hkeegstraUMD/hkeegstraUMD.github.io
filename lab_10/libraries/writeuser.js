import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function writeUser(username, zipcode, interests, dbSettings) {
    console.log(`touched username ${username}, zip code ${zipcode}, interests ${interests}`);
    const db = await open(dbSettings)
    await db.exec('CREATE TABLE IF NOT EXISTS user (name, zipcode, interests)');
    await db.exec(`INSERT INTO user VALUES ("${username}", "${zipcode}", "${interests}")`);
    const result = await db.each('SELECT * FROM user', (err) => {
        console.log('writeuser', err);
    });
    console.log('Expected result', result);
    return result;
  }
  
export default writeUser;

//   import writeUser from "./libraries/writeuser";

// 