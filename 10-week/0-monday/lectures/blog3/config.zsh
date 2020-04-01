sequelize model:generate --name author \
  --attributes name:string,bio:string,imgURL:string

sequelize model:generate --name categories \
  --attributes name:string

sequelize model:generate --name blogs \
  --attributes title:string,body:string