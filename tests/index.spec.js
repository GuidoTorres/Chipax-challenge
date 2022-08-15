const app = require("../index");
const request = require("supertest");

describe("Get api/v1", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/v1").send();
    expect(response.statusCode).toBe(200)
  });

  test('should response with an array', async () => { 
    
    const response = await request(app).get("/api/v1").send();
    expect(response.body).toBeInstanceOf(Object)

   })

   test('should response in less than 3 seconds', async () => { 
    
    const response = await request(app).get("/api/v1").send();
    expect(response._body.data[0].time).toBeLessThan(3000)
    console.log(response);
   })


});