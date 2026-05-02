describe("API Testing httpbin", () => {

    it("POST isteği_1", () => {

    const rq = {

        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false,
        body: {
            name: "Olga",
            age: "26",
            role: "student"
        }
    
    }

    

 cy.request(rq).then((response) => {
    assert.equal(response.status, 200);
    expect(response.headers['content-type']).to.be.equal('application/json')
    assert.equal(response.body.json.name, "Olga")
    expect(response.duration).to.be.lessThan(2000)
 })
})




it("POST isteği_2", () => {


      const rq = {

        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false,
        body: {
            name: "Pamuk",
            type: "cat",
            age: "7",
            color: "white"

        }
    
    }

    

 cy.request(rq).then((response) => {
    assert.equal(response.status, 200);
    expect(response.headers['content-type']).to.be.equal('application/json')
    assert.equal(response.body.json.color, "white")
    expect(response.duration).to.be.lessThan(2000)



 })
})




it("POST isteği_3", () => {


    const rq = {

        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false,
        body: {

            phonenumber: "05318624032",
            city: "Mugla",
            zipcode: "48050"

        }
    }

     cy.request(rq).then((response) => {
    assert.equal(response.status, 200);
    expect(response.headers['content-type']).to.be.equal('application/json')
    expect(response.body.json).to.deep.equal(
        {
            phonenumber: "05318624032",
            city: "Mugla",
            zipcode: "48050"
        })
    expect(response.duration).to.be.lessThan(3000)

     })
    })



    it("POST isteği_4", () => {

        const rq = {
            method: 'POST',
            url: 'https://httpbin.org/post',
            failOnStatusCode: false,
            body: {

                id: "123456789",
                limit: "20",
                date: "22/02/2000"
            }
  }



   cy.request(rq).then((response) => {
    assert.equal(response.status, 200);
    expect(response.headers['content-type']).to.be.equal('application/json')
    expect(response.body.json).to.deep.equal(
        {
            id: "123456789",
            limit: "20",
            date: "22/02/2000"
        })
    expect(response.duration).to.be.lessThan(3000)

     })
    })



    it("POST isteği_5", () => {

    const rq = {
        method: 'POST',
         url: 'https://httpbin.org/post',
         failOnStatusCode: false,
         body: {

            class: "10A",
            name: "Pakize",
            age: "16",
            grade: "85"
         }
    }


     cy.request(rq).then((response) => {
    assert.equal(response.status, 200);
    expect(response.headers['content-type']).to.be.equal('application/json')
    expect(response.body.json).to.deep.equal(
        {
            class: "10A",
            name: "Pakize",
            age: "16",
            grade: "85"
        })
    expect(response.duration).to.be.lessThan(3000)

     })
    })
})










 

    


