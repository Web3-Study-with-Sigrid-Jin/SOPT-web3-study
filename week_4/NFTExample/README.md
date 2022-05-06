# SOPT NFT 민팅 프로젝트 - 1

잊지 마세요! 반드시 `npm start` 하기 전에 다음의 사항을 준수했는지 꼭꼭 확인합시다.
컨트랙트에 새로운 변경사항이 있다고 해 봅시다. 그러면 아래 3가지를 동시에 진행해야 합니다.

1. `npx hardhat run scripts/deploy.js --network rinkeby` 를 실행하여 다시 배포해야 합니다.
2. 프론트엔드 페이지 (App.js) 에 다시 배포한 컨트랙트 주소를 업데이트 해야 합니다.
3. 프론트엔드 페이지 (App.js) 에 다시 배포한 ABI 파일을 업데이트 해야 합니다.
* `artifacts/contracts/MyEpicNFT.sol/MyEpicNFT.json` 을 `frontend/utils` 에 복사하셔야만 합니다.
* 이렇게 해야 하는 이유는? 스마트 컨트랙트는 immutable (불변) 하기 때문입니다.
* 즉, 컨트랙트를 새로 배포하면 기존의 NFT 데이터를 새 컨트랙트에서는 그대로 사용할 수 없게 됩니다.

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network rinkeby scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS
```
