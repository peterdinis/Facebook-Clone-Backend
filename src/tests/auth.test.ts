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

        const data = newUser.body;
        
    })
})