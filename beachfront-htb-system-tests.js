'use strict';

function getPartnerId() {
    return 'BeachfrontHtb';
}

function getStatsId() {
    return 'BFT';
}

function getCallbackType() {
    return 'NONE';
}

function getArchitecture() {
    return 'SRA';
}

function getConfig() {
    return {
        xSlots: {
            1: {
                appId: '3b16770b-17af-4d22-daff-9606bdf2c9c3',
                bidfloor: 0.01,
                sizes: [[728, 90], [468, 60]]
            },
            2: {
                appId: '3b16770b-17af-4d22-daff-9606bdf2c9c3',
                bidfloor: 0.02,
                sizes: [[300, 250]]
            }
        }
    };
}

function getBidRequestRegex() {
    return {
        method: 'POST',
        urlRegex: /display\.bfmio\.com\/prebid_display/
    };
}

function validateBidRequest(request) {
    expect(request.query.cb).toBeDefined();
}

function getValidResponse(request, creative) {
    var response = [
        {
            slot: '1',
            w: 728,
            h: 90,
            price: 9.55,
            crid: 'crid_1',
            adm: creative || '<div id="1"></div>'
        },
        {
            slot: '2',
            w: 300,
            h: 250,
            price: 9.56,
            crid: 'crid_2',
            adm: creative || '<div id="2"></div>'
        }
    ];

    return JSON.stringify(response);
}

function validateTargeting(targetingMap) {
    expect(targetingMap).toEqual(
        jasmine.objectContaining({
            ix_bft_cpm: jasmine.arrayContaining(['728x90_955', '300x250_955']),
            ix_bft_id: jasmine.arrayContaining([jasmine.any(String), jasmine.any(String)])
        })
    );
}

function getPassResponse() {
    return JSON.stringify([]);
}

module.exports = {
    getPartnerId: getPartnerId,
    getStatsId: getStatsId,
    getCallbackType: getCallbackType,
    getArchitecture: getArchitecture,
    getConfig: getConfig,
    getBidRequestRegex: getBidRequestRegex,
    validateBidRequest: validateBidRequest,
    getValidResponse: getValidResponse,
    validateTargeting: validateTargeting,
    getPassResponse: getPassResponse
};
