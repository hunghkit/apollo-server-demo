import mongoose from "mongoose";
import User from "./model";
import { IUserInput } from "./types";

describe("User model", () => {
  beforeAll( () => {
    process.env.MONGODB_URI && mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  it("getAll", (done) => {
    expect(true).toBe(true);
    done();
  });

  it("getBy", (done) => {
    expect(true).toBe(true);
    done();
  });

  it("createData", (done) => {
    expect(true).toBe(true);
    done();
  });

  it("updateData", (done) => {
    expect(true).toBe(true);
    done();
  });

  it("deleteData", (done) => {
    expect(true).toBe(true);
    done();
  });
});
