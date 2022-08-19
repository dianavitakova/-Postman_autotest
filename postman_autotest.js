//autotest for method https://swapi.dev/api//people/10/

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(3000);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("Obi-Wan Kenobi");
});

// autotest for method api.hh.ru/employers/5008932


pm.test("Мой первый автотест", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string Яндекс.Практикум", function () {
    pm.expect(pm.response.text()).to.include("Яндекс.Практикум");
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});


//autotest for method https://api.hh.ru/employers?text=яндекс+практикум

pm.test("Мой первый автотест", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string Яндекс.Практикум", function () {
    pm.expect(pm.response.text()).to.include("Яндекс.Практикум");
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});

