$(function() {
    jasmine.getFixtures().fixturesPath = '/';// 読み込みパスはroot
    jasmine.getFixtures().load('index.html');// 対象ページ
    describe("index.html", function() {
        console.log(document.readyState)
        it("HTMLがロードできている", function() {
            console.log($('#main').text())
        })
    })
})