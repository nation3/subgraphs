import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Attest } from "../generated/schema"
import { Attest as AttestEvent } from "../generated/PassportIssuer/PassportIssuer"
import { handleAttest } from "../src/passport-issuer"
import { createAttestEvent } from "./passport-issuer-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _to = Address.fromString("0x0000000000000000000000000000000000000001")
    let _tokenId = BigInt.fromI32(234)
    let newAttestEvent = createAttestEvent(_to, _tokenId)
    handleAttest(newAttestEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Attest created and stored", () => {
    assert.entityCount("Attest", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Attest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Attest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_tokenId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
