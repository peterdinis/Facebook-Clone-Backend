import request from "supertest";
import {app} from "../server";
import 'jest-extended';

describe("POST /register", () => {
    it("Create new user to app", async() => {
        const newUser = await request(app)
        .post("/auth/register")
        .send({
            username: "Tester",
            password: "STIOP", 
            firstname: "Mr.",
            lastname: "Test"
        })

        const expectedNewUser = {
            username: expect.any(String),
            password: expect.any(String),
            firstname: expect.any(String),
            lastname: expect.any(String),
            isAdmin: true,
            followers: [],
            following: [],
            _id: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            __v: 0
        }

        const data = newUser.body;
        expect(data).toBeObject();
        expect(data).toMatchObject(expectedNewUser)
    })
})