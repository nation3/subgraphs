# 🌐 subgraphs

Subgraphs for Nation3 smart contracts

## Deployed Subgraphs

### 🛂 [Passport Issuance](./passportissuance/)

This subgraph tracks the following events from the Nation3 [`PassportIssuer`](https://github.com/nation3/foundations/blob/main/src/passport/PassportIssuer.sol) contract:

`event Attest(address indexed _to, uint256 indexed _tokenId);`

Tracks Passport issuance. Initiated by [`claim(uint8, bytes32, bytes32)`](https://github.com/nation3/foundations/blob/main/src/passport/PassportIssuer.sol#L131)

`event Revoke(address indexed _to, uint256 indexed _tokenId);`

Tracks Passport revocations. Initiated by [`revoke(address)`](https://github.com/nation3/foundations/blob/main/src/passport/PassportIssuer.sol#L150).

`event UpdateRequirements(uint256 claimRequiredBalance, uint256 revokeUnderBalance);`

Tracks changes to Passport issuance params. Initiated by [`setParams(uint256, uin256)`](https://github.com/nation3/foundations/blob/main/src/passport/PassportIssuer.sol#L162)

## Querying Subgraphs

Refer to the latest deployment's query URL on the following N3 subgraph pages:

### 🛂 PassportIssuer

https://thegraph.com/hosted-service/subgraph/nation3/passportissuance

---

Refer to the following guide from [The Graph's docs](https://thegraph.com/docs/en/querying/querying-the-graph/) on how to execute a query remotely.

## Contributing

Refer to [this document from The Graph's docs](https://thegraph.com/docs/en/developing/creating-a-subgraph/) on how to set up your development environment for making changes to, and deploying new, subgraphs.
