import { Sequelize } from 'sequelize';



export const sequelize = new Sequelize('assigment5', 'root', 'root', {
  host: '127.0.0.1',
  dialect: "mysql"
});
export const connecdb=async()=>{
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}
export const syncdb=async()=>{
        try {
            await sequelize.sync({alter:false,force:false})
              console.log('SYNC Connection has been established successfully.');

        } catch (error) {
  console.error('SYNC Unable to connect to the database:', error);
            
        }
}