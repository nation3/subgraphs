// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Attest extends ethereum.Event {
  get params(): Attest__Params {
    return new Attest__Params(this);
  }
}

export class Attest__Params {
  _event: Attest;

  constructor(event: Attest) {
    this._event = event;
  }

  get _to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Revoke extends ethereum.Event {
  get params(): Revoke__Params {
    return new Revoke__Params(this);
  }
}

export class Revoke__Params {
  _event: Revoke;

  constructor(event: Revoke) {
    this._event = event;
  }

  get _to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UpdateRequirements extends ethereum.Event {
  get params(): UpdateRequirements__Params {
    return new UpdateRequirements__Params(this);
  }
}

export class UpdateRequirements__Params {
  _event: UpdateRequirements;

  constructor(event: UpdateRequirements) {
    this._event = event;
  }

  get claimRequiredBalance(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get revokeUnderBalance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PassportIssuer extends ethereum.SmartContract {
  static bind(address: Address): PassportIssuer {
    return new PassportIssuer("PassportIssuer", address);
  }

  DOMAIN_SEPARATOR(): Bytes {
    let result = super.call(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_DOMAIN_SEPARATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  claimRequiredBalance(): BigInt {
    let result = super.call(
      "claimRequiredBalance",
      "claimRequiredBalance():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_claimRequiredBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimRequiredBalance",
      "claimRequiredBalance():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  enabled(): boolean {
    let result = super.call("enabled", "enabled():(bool)", []);

    return result[0].toBoolean();
  }

  try_enabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall("enabled", "enabled():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxIssuances(): BigInt {
    let result = super.call("maxIssuances", "maxIssuances():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxIssuances(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxIssuances", "maxIssuances():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  passToken(): Address {
    let result = super.call("passToken", "passToken():(address)", []);

    return result[0].toAddress();
  }

  try_passToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("passToken", "passToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  passportId(account: Address): BigInt {
    let result = super.call("passportId", "passportId(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBigInt();
  }

  try_passportId(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("passportId", "passportId(address):(uint256)", [
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  passportStatus(account: Address): i32 {
    let result = super.call(
      "passportStatus",
      "passportStatus(address):(uint8)",
      [ethereum.Value.fromAddress(account)],
    );

    return result[0].toI32();
  }

  try_passportStatus(account: Address): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "passportStatus",
      "passportStatus(address):(uint8)",
      [ethereum.Value.fromAddress(account)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  recoverTokens(token: Address, to: Address): BigInt {
    let result = super.call(
      "recoverTokens",
      "recoverTokens(address,address):(uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(to)],
    );

    return result[0].toBigInt();
  }

  try_recoverTokens(token: Address, to: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "recoverTokens",
      "recoverTokens(address,address):(uint256)",
      [ethereum.Value.fromAddress(token), ethereum.Value.fromAddress(to)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  revokeUnderBalance(): BigInt {
    let result = super.call(
      "revokeUnderBalance",
      "revokeUnderBalance():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_revokeUnderBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "revokeUnderBalance",
      "revokeUnderBalance():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  statement(): string {
    let result = super.call("statement", "statement():(string)", []);

    return result[0].toString();
  }

  try_statement(): ethereum.CallResult<string> {
    let result = super.tryCall("statement", "statement():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  termsURI(): string {
    let result = super.call("termsURI", "termsURI():(string)", []);

    return result[0].toString();
  }

  try_termsURI(): ethereum.CallResult<string> {
    let result = super.tryCall("termsURI", "termsURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalIssued(): BigInt {
    let result = super.call("totalIssued", "totalIssued():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalIssued(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalIssued", "totalIssued():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  veToken(): Address {
    let result = super.call("veToken", "veToken():(address)", []);

    return result[0].toAddress();
  }

  try_veToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("veToken", "veToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AdminRevokeCall extends ethereum.Call {
  get inputs(): AdminRevokeCall__Inputs {
    return new AdminRevokeCall__Inputs(this);
  }

  get outputs(): AdminRevokeCall__Outputs {
    return new AdminRevokeCall__Outputs(this);
  }
}

export class AdminRevokeCall__Inputs {
  _call: AdminRevokeCall;

  constructor(call: AdminRevokeCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AdminRevokeCall__Outputs {
  _call: AdminRevokeCall;

  constructor(call: AdminRevokeCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get v(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _veToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _passToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _maxIssuances(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RecoverTokensCall extends ethereum.Call {
  get inputs(): RecoverTokensCall__Inputs {
    return new RecoverTokensCall__Inputs(this);
  }

  get outputs(): RecoverTokensCall__Outputs {
    return new RecoverTokensCall__Outputs(this);
  }
}

export class RecoverTokensCall__Inputs {
  _call: RecoverTokensCall;

  constructor(call: RecoverTokensCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RecoverTokensCall__Outputs {
  _call: RecoverTokensCall;

  constructor(call: RecoverTokensCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RenounceCall extends ethereum.Call {
  get inputs(): RenounceCall__Inputs {
    return new RenounceCall__Inputs(this);
  }

  get outputs(): RenounceCall__Outputs {
    return new RenounceCall__Outputs(this);
  }
}

export class RenounceCall__Inputs {
  _call: RenounceCall;

  constructor(call: RenounceCall) {
    this._call = call;
  }
}

export class RenounceCall__Outputs {
  _call: RenounceCall;

  constructor(call: RenounceCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RevokeCall extends ethereum.Call {
  get inputs(): RevokeCall__Inputs {
    return new RevokeCall__Inputs(this);
  }

  get outputs(): RevokeCall__Outputs {
    return new RevokeCall__Outputs(this);
  }
}

export class RevokeCall__Inputs {
  _call: RevokeCall;

  constructor(call: RevokeCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RevokeCall__Outputs {
  _call: RevokeCall;

  constructor(call: RevokeCall) {
    this._call = call;
  }
}

export class SetEnabledCall extends ethereum.Call {
  get inputs(): SetEnabledCall__Inputs {
    return new SetEnabledCall__Inputs(this);
  }

  get outputs(): SetEnabledCall__Outputs {
    return new SetEnabledCall__Outputs(this);
  }
}

export class SetEnabledCall__Inputs {
  _call: SetEnabledCall;

  constructor(call: SetEnabledCall) {
    this._call = call;
  }

  get status(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetEnabledCall__Outputs {
  _call: SetEnabledCall;

  constructor(call: SetEnabledCall) {
    this._call = call;
  }
}

export class SetParamsCall extends ethereum.Call {
  get inputs(): SetParamsCall__Inputs {
    return new SetParamsCall__Inputs(this);
  }

  get outputs(): SetParamsCall__Outputs {
    return new SetParamsCall__Outputs(this);
  }
}

export class SetParamsCall__Inputs {
  _call: SetParamsCall;

  constructor(call: SetParamsCall) {
    this._call = call;
  }

  get _claimRequiredBalance(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _revokeUnderBalance(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetParamsCall__Outputs {
  _call: SetParamsCall;

  constructor(call: SetParamsCall) {
    this._call = call;
  }
}

export class SetStatementCall extends ethereum.Call {
  get inputs(): SetStatementCall__Inputs {
    return new SetStatementCall__Inputs(this);
  }

  get outputs(): SetStatementCall__Outputs {
    return new SetStatementCall__Outputs(this);
  }
}

export class SetStatementCall__Inputs {
  _call: SetStatementCall;

  constructor(call: SetStatementCall) {
    this._call = call;
  }

  get _statement(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetStatementCall__Outputs {
  _call: SetStatementCall;

  constructor(call: SetStatementCall) {
    this._call = call;
  }
}

export class SetTermsURICall extends ethereum.Call {
  get inputs(): SetTermsURICall__Inputs {
    return new SetTermsURICall__Inputs(this);
  }

  get outputs(): SetTermsURICall__Outputs {
    return new SetTermsURICall__Outputs(this);
  }
}

export class SetTermsURICall__Inputs {
  _call: SetTermsURICall;

  constructor(call: SetTermsURICall) {
    this._call = call;
  }

  get _termsURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetTermsURICall__Outputs {
  _call: SetTermsURICall;

  constructor(call: SetTermsURICall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class VerifySignatureCall extends ethereum.Call {
  get inputs(): VerifySignatureCall__Inputs {
    return new VerifySignatureCall__Inputs(this);
  }

  get outputs(): VerifySignatureCall__Outputs {
    return new VerifySignatureCall__Outputs(this);
  }
}

export class VerifySignatureCall__Inputs {
  _call: VerifySignatureCall;

  constructor(call: VerifySignatureCall) {
    this._call = call;
  }

  get v(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class VerifySignatureCall__Outputs {
  _call: VerifySignatureCall;

  constructor(call: VerifySignatureCall) {
    this._call = call;
  }
}
