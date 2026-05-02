describe("API Testing Marketstack", () => {

    it("GET isteği EOD Data", () => {

        const rq = {
            method: 'GET',
            url: 'https://api.marketstack.com/v2/eod',
            headers: {
    
            'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
            },
            
            qs: {
                access_key: "9f0e7ea2b8f9915ab28d7ba9919db651",
          symbols: "AAPL",
                limit: 10
            },
            failOnStatusCode: false
        };

        const startTime = Date.now();

        cy.request(rq).then((response) => {
           assert.equal(response.status, 200);
           assert.equal(response.headers['content-type'], 'application/json');
           expect(response.duration).to.be.lessThan(2000)
           });
        });
    

        it("Get isteği EOD Latest Data", () => {

            const rq = {
                method: 'GET',
                url: 'https://api.marketstack.com/v2/eod/latest',
                headers: {
                'user-agent':  'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
            },

            qs: {
        access_key:
         "9f0e7ea2b8f9915ab28d7ba9919db651",
         symbols:
          "AAPL",
         limit: 10
     },
            failOnStatusCode: false
        };

         const startTime = Date.now();

        cy.request(rq).then((response) => {
           assert.equal(response.status, 200);
           assert.equal(response.headers['content-type'], 'application/json');
           expect(response.duration).to.be.lessThan(2000)

        });
    });



    it("GET isteği Splits Data", () => {

        const rq = {
            method: 'GET',
            url: 'https://api.marketstack.com/v2/splits',
            headers: {
                 'user-agent':  'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
            },

               qs: {
        access_key:
         "9f0e7ea2b8f9915ab28d7ba9919db651",
         symbols:
          "AAPL",
         limit: 10
     },
            failOnStatusCode: false
        };

         const startTime = Date.now();

        cy.request(rq).then((response) => {
           assert.equal(response.status, 200);
           assert.equal(response.headers['content-type'], 'application/json');
           expect(response.duration).to.be.lessThan(2000)

        });
    });



    it("GET isteği Dividends Data", () => {


        const rq = {

            method: 'GET',
            url: 'https://api.marketstack.com/v2/dividends',

         headers: {
                 'user-agent':  'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
            },

               qs: {
        access_key:
         "9f0e7ea2b8f9915ab28d7ba9919db651",
         symbols:
          "AAPL",
         limit: 10,
         date_from: "2024-02-22"
     },

       failOnStatusCode: false
        };

         const startTime = Date.now();

        cy.request(rq).then((response) => {
           assert.equal(response.status, 200);
           assert.equal(response.headers['content-type'], 'application/json');
           expect(response.duration).to.be.lessThan(2000)

        });
    });



    it("GET isteği Currencies", () => {

        const rq = {
            method: 'GET',
            url: 'https://api.marketstack.com/v2/currencies',
            headers: {
                 'user-agent':  'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
            },

              qs: {
        access_key:
         "9f0e7ea2b8f9915ab28d7ba9919db651",
         limit: 15
              },
              failOnStatusCode: false
        };

         const startTime = Date.now();

        cy.request(rq).then((response) => {
           assert.equal(response.status, 200);
           assert.equal(response.headers['content-type'], 'application/json');
           expect(response.duration).to.be.lessThan(2000)
    });
    });
});


    



        
    
