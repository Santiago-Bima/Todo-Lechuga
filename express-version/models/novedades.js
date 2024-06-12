var pool=require('./bd');

async function getNovedades(){
    var query="SELECT * FROM novedades order by id desc";
    var rows=await pool.query(query);
    return rows;
}

async function insertNovedad(titulo, cuerpo){
    try{
        var query="INSERT INTO novedades (titulo, cuerpo) VALUES (?,?)";
        var rows=await pool.query(query,[titulo, cuerpo]);
        return rows;
    }catch(e){
        console.log(e);
        throw e;
    }
}

async function deleteNovedad(id){
    var query="delete FROM novedades where id=?";
    var rows=await pool.query(query, [id]);
    return rows;
}

async function getNovedadById(id){
    var query="SELECT * FROM novedades where id=?";
    var rows=await pool.query(query, [id]);
    return rows[0];
}

async function updateNovedad(obj, id){
    try{
        var query="update novedades set ? where id=?";
        var rows=await pool.query(query,[obj, id]);
        return rows;
    }catch(e){
        console.log(e);
        throw e;
    }
}

module.exports={getNovedades, insertNovedad, deleteNovedad, getNovedadById, updateNovedad};