import mongoose from "mongoose";
const { connection, connect } = mongoose;

export const connectToDB = async () => {
  try {
    if (connection.readyState === 1) return;
    const db = await connect(process.env.MONGO); //This line show error:
    //   Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
    // Type 'undefined' is not assignable to type 'string'.
    // I add environment.d.ts file and the error solved.

    // ******** IN MEANWHILE I installed types/node => npm i @types/node
  } catch (error) {
    throw new Error(`${error}`);
  }
};
