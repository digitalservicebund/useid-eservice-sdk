import axios from "axios";
import { UseIdAPI } from "./UseIdAPI";
import { Identity } from "./Identity";
import * as http from "node:http";
import type { AddressInfo } from "node:net";

let useIdAPI: UseIdAPI;
beforeEach(() => {
  useIdAPI = new UseIdAPI("test-api-key", "test-domain");
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('startSession()', () => {
  const tcTokenUrl = "mocked tc token url";
  let axiosPost: jest.SpyInstance;
  beforeEach(() => {
    axiosPost = jest.spyOn(useIdAPI.api, 'post').mockImplementation(jest.fn(() => Promise.resolve({ data: { tcTokenUrl } })) as jest.Mock);
  });

  it('should start session and return tcTokenUrl', async () => {
    const response = await useIdAPI.startSession();
    expect(response).toEqual({ tcTokenUrl });
    expect(useIdAPI.api.getUri()).toEqual(`${useIdAPI.domain}/api/v1/identification/sessions`);
    expect(axiosPost).toHaveBeenCalledWith('/');
  });
});

describe('getIdentity()', () => {
  const identityValues = { dg1: "dg1", dg2: "dg2" };
  let axiosGet: jest.SpyInstance;
  beforeEach(() => {
    axiosGet = jest.spyOn(useIdAPI.api, 'get').mockImplementation(jest.fn(() => Promise.resolve({ data: identityValues })) as jest.Mock);
  });

  it('should start session and return tcTokenUrl', async () => {
    const eIdSessionId = "mocked eIdSessionId";
    const response = await useIdAPI.getIdentity(eIdSessionId);
    expect(response).toEqual(new Identity(identityValues as any));
    expect(axiosGet).toHaveBeenCalledWith(`/${eIdSessionId}`);
  });
});

test('reproduction: axios global namespace pollution', async () => {
  let authHeader: string | undefined;
  const server = http
    .createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
      authHeader = req.headers.authorization;
      res.statusCode = 418;
      res.end();
    })
    .listen();

  console.log((server.address() as AddressInfo).port);

  await axios.get(
    `http://localhost:${(server.address() as AddressInfo).port}`,
    {
      validateStatus: (status) => status === 418,
    }
  );

  expect(authHeader).toBeUndefined();

  server.close();
});

