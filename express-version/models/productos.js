var pool=require('./bd');

async function getProdType(){
    var query="SELECT * FROM tipos_de_productos";
    var rows=await pool.query(query);
    return rows;
}

async function getProd(){
    var query="SELECT * FROM productos";
    var rows=await pool.query(query);
    return rows;
}

async function insertProd(titulo, cuerpo, tipo, precio, imagen, destacado){
    try{
        var query="INSERT INTO productos (nombre, cuerpo, tipo_de_producto, imagen, precio, destacado) VALUES (?, ?, ?, ?, ?, ?)";
        var rows=await pool.query(query,[titulo, cuerpo, tipo, imagen, precio, destacado]);
        return rows;
    }catch(e){
        console.log(e);
        throw e;
    }
}

async function destacarProd(id){
    try{
        var query="UPDATE productos SET destacado = case when destacado=0 then 1 else 0 end  WHERE id=?";
        var rows=await pool.query(query,[id]);
        return rows;
    }catch(e){
        console.log(e);
        throw e;
    }
}

async function deleteProd(id){
    var query="delete FROM productos where id=?";
    var rows=await pool.query(query, [id]);
    return rows;
}

async function getProdById(id){
    var query="SELECT * FROM productos where id=?";
    var rows=await pool.query(query, [id]);
    return rows[0];
}

async function updateProd(obj, id){
    try{
        var query="update productos set ? where id=?";
        var rows=await pool.query(query,[obj, id]);
        return rows;
    }catch(e){
        console.log(e);
        throw e;
    }
}

module.exports={getProdType, getProd, insertProd, destacarProd, deleteProd, getProdById, updateProd};