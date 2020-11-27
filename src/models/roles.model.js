module.exports=(sequelize,Sequelize)=>{
    
    const Rols=sequelize.define('roles',{
        id:{type:Sequelize.INTEGER,primaryKey:true},
        descripcion:{type:Sequelize.STRING},
        
    })
    return Rols
}