var pool=require('./bd');
var md5=require('md5');

async function getUsersByEmailAndPsw(email,psw){
    try{
        var query='SELECT * FROM usuarios WHERE email=? AND password=? limit 1';
        var rows=await pool.query(query, [email,md5(psw)]);
        return rows[0];
    } catch(e){
        throw e;
    }
}

async function insertUser(user,email,psw){
    try{
        var query='INSERT INTO usuarios(user,email,password) VALUES(?,?,?)';
        var rows=await pool.query(query, [user,email,md5(psw)]);
        return rows[0];
    }catch(e){
        throw e;
    }
}

module.exports={ 
    getUsersByEmailAndPsw 
    ,insertUser
};
