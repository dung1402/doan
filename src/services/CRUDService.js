import bcrypt from 'bcryptjs';
import db from '../models/index';

const  salt = bcrypt.genSaltSync(10);
let createNewUser=async(data)=>{
    return new Promise( async(resolve,reject)=>{
        try {
            let hashPasswordFromBcrypt= await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstname: data.firstname,
                lastname:data.lastname,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender ==='1'? true : false ,
                roleId:data.roleId,
            })
 resolve('ok');
        } catch (e) {
            reject(e);
        }
    })

}
let hashUserPassword=(password)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e)
        }
        
    })
}
let getAllUser = () =>{
return new Promise(async(resolve,reject) =>{
try {
    let users = db.User.findAll({
        raw:true,
    });
    resolve(users);
} catch (e) {
    reject(e)
}
})
}
let getUserInfoById = (userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where:{ id : userId},
                raw: true,
            })
            if(user){
                resolve(user)
            }
            else{
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}
let updateUserData =(data) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user =  await db.User.findOne({
                where:{ id:data.id}
            })
            if(user){
                user.firstname=data.firstname;
                user.lastname=data.lastname;
                user.address=data.address;
                user.phonenumber=data.phonenumber;
                user.gender=data.gender;
                user.roleId=data.roleId;

                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            }else{
                resolve();
            }
           
        } catch (e) {
            console.log(e);
        }
    })

}
let deleteUserById =(userId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where:{ id : userId }
                
            })
            if(user){
                await user.destroy();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}
module.exports={
    createNewUser:createNewUser,
    getAllUser:getAllUser,
    getUserInfoById:getUserInfoById,
    updateUserData:updateUserData,
    deleteUserById:deleteUserById
}