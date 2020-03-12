

sequelize model:generate --name blogs \
  --attributes title:string,authorID:integer,categoryID:integer,body:string


sequelize model:generate --name authors \
  --attributes name:string,biography:string

sequelize model:generate --name categories \
  --attributes title:string