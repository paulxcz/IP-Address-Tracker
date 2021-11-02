import { getIpInfo } from "../../helpers/getIpInfo"


describe('tests on getIpInfo Fetch', () => {
    

    test('should return information about your Ip', async () => {
        const ipToTest = '200.121.230.99';

        const ipInfo = await getIpInfo(ipToTest);

        const ispExpected = 'PE-TDPERX4-LACNIC';

        expect( ipInfo.isp ).toBe( ispExpected );
    })
    
})
