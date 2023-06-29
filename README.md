# UseID eService SDK
Javascript SDK to easily embed the UseId eService.

## UseId project
> **Important:  This project has been discontinued**
​
This repository is part of the UseId project, that provided the BundesIdent mobile app.  You can find other repositories related to this project in the following list:
​
- Architecture
	- [Architecture](https://github.com/digitalservicebund/useid-architecture/tree/main): Documentation and overview of the UseId architecture
- Backend
	- [Backend](https://github.com/digitalservicebund/useid-backend-service): Kotlin service that acts as the backend for the mobile apps and eID-Service integration for eServices.
- eService
	- [eService-example](https://github.com/digitalservicebund/useid-eservice-example): An example application for an eService integrating with the UseId identity solution.
	- [eService-SDK](https://github.com/digitalservicebund/useid-eservice-sdk): Javascript SDK to easily integrate with the UseId identity solution.
- eID client (mobile app)
	- [iOS client for BundesIdent](https://github.com/digitalservicebund/useid-app-ios)
	- [Android client for BundesIdent](https://github.com/digitalservicebund/useid-app-android)
	- [AusweisApp2 Wrapper iOS](https://github.com/digitalservicebund/AusweisApp2Wrapper-iOS-SPM): Forked repository of the Governikus AusweisApp2 Wrapper for iOS

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
By submitting the patch, you agree that your contributions are licensed under [MIT](LICENSE).

Please make sure that your changes have been tested before submitting a pull request.
