import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Attest,
  Initialized,
  OwnershipTransferred,
  Revoke,
  UpdateRequirements
} from "../generated/PassportIssuer/PassportIssuer"

export function createAttestEvent(_to: Address, _tokenId: BigInt): Attest {
  let attestEvent = changetype<Attest>(newMockEvent())

  attestEvent.parameters = new Array()

  attestEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  attestEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return attestEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRevokeEvent(_to: Address, _tokenId: BigInt): Revoke {
  let revokeEvent = changetype<Revoke>(newMockEvent())

  revokeEvent.parameters = new Array()

  revokeEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  revokeEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return revokeEvent
}

export function createUpdateRequirementsEvent(
  claimRequiredBalance: BigInt,
  revokeUnderBalance: BigInt
): UpdateRequirements {
  let updateRequirementsEvent = changetype<UpdateRequirements>(newMockEvent())

  updateRequirementsEvent.parameters = new Array()

  updateRequirementsEvent.parameters.push(
    new ethereum.EventParam(
      "claimRequiredBalance",
      ethereum.Value.fromUnsignedBigInt(claimRequiredBalance)
    )
  )
  updateRequirementsEvent.parameters.push(
    new ethereum.EventParam(
      "revokeUnderBalance",
      ethereum.Value.fromUnsignedBigInt(revokeUnderBalance)
    )
  )

  return updateRequirementsEvent
}
