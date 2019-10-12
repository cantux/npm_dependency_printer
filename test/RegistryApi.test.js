const testData = require('./testData/RegistryApiTestData');

const getPackageDetails = require('../src/RegistryApiWrapper');

test('Npm registry api, single request', () => {
    let callback = function(data) {
        expect(data).toEqual(testData);
        done();
    }

    getPackageDetails('is-sorted', callback, '1.0.0');
});