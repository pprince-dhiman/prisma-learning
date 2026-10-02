import { prisma } from "./lib/prisma.js";

const main = async () => {
  try{
    const user = await prisma.user.create({
      data: {
        username: "Prince",
        password: "123"
      }
    });
  
    console.log("User created: ", user);
  }
  catch(err){
    console.log(err);
  }
  finally{
    await prisma.$disconnect();
  }
}

main();