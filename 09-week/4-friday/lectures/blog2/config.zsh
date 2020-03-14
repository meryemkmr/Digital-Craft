# sequelize model:generate --name author \
#   --attributes name:string,bio:string,imageURL:string

# sequelize model:generate --name categories \
#   --attributes name:string

# sequelize model:generate --name blogs \
#   --attributes title:string,body:string


# sequelize model:generate --name test \
#   --attributes title:string,count:integer,firstname:string,lastname:string

sequelize model:generate --name person \
  --attributes title:string

sequelize model:generate --name octopus \
  --attributes title:string

sequelize model:generate --name kids \
  --attributes title:string
sequelize model:generate --name tooth \
  --attributes title:string