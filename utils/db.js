import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://anibal:Zz9xWxAUgWz3842k@cluster0.7x9lz.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongo;
