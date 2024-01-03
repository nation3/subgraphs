import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { handleAttest, handleRevoke } from "../src/passport-issuer"
import { createAttestEvent, createRevokeEvent } from "./passport-issuer-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Test `Attest` Event Handling", () => {

  beforeAll(() => {
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Attest created and stored", () => {
    let _to = Address.fromString("0x0000000000000000000000000000000000000001")
    let _tokenId = BigInt.fromI32(234)
    let newAttestEvent = createAttestEvent(_to, _tokenId)
    handleAttest(newAttestEvent)
    
    assert.entityCount("Attest", 1)
    
    let event_id = newAttestEvent.transaction.hash.concatI32(newAttestEvent.logIndex.toI32())
    assert.fieldEquals(
      "Attest",
      event_id.toHexString(),
      "_to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Attest",
      event_id.toHexString(),
      "_tokenId",
      "234"
    )

  })

  test("Revoke invocation created and stored", () => {
    let _to = Address.fromString("0x0000000000000000000000000000000000000001")
    let _tokenId = BigInt.fromI32(234)
    let newRevokeEvent = createRevokeEvent(_to, _tokenId)
    handleRevoke(newRevokeEvent)
    
    assert.entityCount("Revoke", 1)
    
    let event_id = newRevokeEvent.transaction.hash.concatI32(newRevokeEvent.logIndex.toI32())
    assert.fieldEquals(
      "Revoke",
      event_id.toHexString(),
      "_to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Revoke",
      event_id.toHexString(),
      "_tokenId",
      "234"
    )

  })
})
