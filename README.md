# UseID eService SDK
Javascript SDK to easily embed the UseId eService.

## Usage

```javascript
const { UseIdAPI, DataGroup } = require("useid-eservice-sdk");
// or
import { UseIdAPI, DataGroup } from "useid-eservice-sdk";
```

Create instance with API key received from UseID service:

```javascript
const useIdAPI = new UseIdAPI(process.env.USEID_API_KEY);
```

### Step 1: Embed widget

- Start session with UseID backend (call `startSession()`)
- Embed widget using `tcTokenUrl` in response of that backend call and `UseIdAPI.widgetSrc`

### Step 2: Fetch identity data

- Listen on refresh address endpoint
- Fetch data from UseID backend (call `getIdentity(eIdSessionId: string)` with `eIdSessionId` being the query parameter `sessionId` at the refresh address)
- Get the values by calling `get(dataGroup: DataGroup)` on that result
  - see [TR-03110](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03110/BSI_TR-03110_Part-4_V2-2.pdf) and [DataGroup.ts](src/DataGroup.ts) for more info on data groups
  - those need to be defined and fixed beforehand when registering for the UseID service

## Contributing

Everyone is welcome to contribute the development of this project. You can contribute by opening pull request,
providing documentation or answering questions or giving feedback. Please always follow the guidelines and our
[Code of Conduct](CODE_OF_CONDUCT.md).

## Contributing code

Open a pull request with your changes and it will be reviewed by someone from the team. When you submit a pull request,
you declare that you have the right to license your contribution to the DigitalService and the community.
By submitting the patch, you agree that your contributions are licensed under the EUPL license.

Please make sure that your changes have been tested before submitting a pull request.
