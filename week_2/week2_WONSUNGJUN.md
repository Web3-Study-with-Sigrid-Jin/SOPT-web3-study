# Week 2

## 사전 과제 1

### 학습 목표

* Solidity의 기초 문법에 익숙해진다.
* Solidity를 활용하는 Ethereum Virtual Machine 기반 개발 환경을 이해한다.
* Remix IDE 사용을 통해 기초적인 컨트랙트 배포 과정을 이해한다.

### 구현 과제 (필수)

* 간단한 Counter Example을 구현한다. 배포 환경은 JavaScript VM이어야 한다.
* `counter` 변수를 설정하고, 해당 변수는 정수 타입이어야 한다. 이 때, 적합한 접근 제한자를 사용해야 한다.
* `incrementCounter()` 함수를 구현하여, 해당 함수에 요청을 보낼 때 `counter` 변수를 1씩 올리도록 한다. 이 때, 적합한 접근 제한자를 사용해야 한다.
* `decrementCounter()` 함수를 구현하여, 해당 함수에 요청을 보낼 때 `counter` 변수를 1씩 내리도록 한다. 이 때, 적합한 접근 제한자를 사용해야 한다.
* `getCount()` 함수를 구현하여, 해당 함수에 요청을 보내 `counter` 변수의 값을 반환하도록 한다. 이 때, 적합한 접근 제한자를 사용해야 한다. 
* Remix IDE에서 구현한 함수를 실행하고, 함수 실행결과를 캡처하여 스크린샷으로 첨부하여 코드와 함께 Pull Request를 보낸다.

  ``` 
  // SPDX-License-Identifier: GPL-3.0

  pragma solidity ^0.8.7;

  contract Counter{

    int256 counter;

    function getCount() public view returns (int256){
        return counter;
    }

    function increaseCount() public {
        counter += 1;
    }

    function decreaseCount() public {
        counter -= 1;
    }
  }
  ```
  ![ezgif-5-858fbccf63](https://user-images.githubusercontent.com/90569731/166191600-a2c48190-3b37-44a5-98a6-1132423ee3f4.gif)
  

### 도전 과제 2 (선택) : 프론트엔드 개발 가능자

* 구현 과제의 컨트랙트를 호출할 수 있는 프론트엔드 정적 페이지를 제작한다.
* 해당 페이지에서 button을 `onClick()` 시 컨트랙트 호출 함수를 실행하고자 한다. 어떻게 구현할 수 있을까?
* 학습 키워드: `web3.js`, `ethers.js`

  ```
  import Web3 from 'web3';
  const web3 = new Web3("http://localhost:8545");
  ...
  ```
  [Ethereum JavaScript 라이브러리 : web3.js와 ethers.js 비교](https://ko.0xzx.com/20201208139978.html)

  [Web3.js vs Ethers.js – Guide to ETH JavaScript Libraries](https://moralis.io/web3-js-vs-ethers-js-guide-to-eth-javascript-libraries/)



### 생각해보기

* 간단한 Counter Example을 스마트 컨트랙트로 구현해보며, 컨트랙트 배포 과정이 어떤 단계로 구성되어 있는지 본인만의 언어로 설명해보자.

## 사전 과제 2

### 학습 목표

* 다음 시간에 진행할 ERC20 토큰 발행에는 본인의 코인을 발행할 예정이다.
* 실제 본인의 코인을 활용하여 무엇을 할 수 있을 지 구상하는 사전 기획과정이다.

### 기획 과제 (필수)

* 코인의 이름 및 티커
  ```
  제가 발행할 코인의 이름은 BIRTHDAY 으로, 티커는 $HBD🎂 입니다.
  ``` 

* 코인의 발행량, 그리고 어디에 줄 지를 생각해보세요.
  ```
  발행량은 710 개입니다. (7월 10일이 제 생일이기 때문입니다....)
  우선적으로 제 주변친구들에게 대략 10명(?) 10개씩, 260개는 제가 보유할 예정입니다.
  ```

* 코인의 쓰임새를 기획해주세요. 모든 코인은 쓰임새가 있어야 해요. 그래야 코인을 사려는 사람이 생기고, 가치가 생기겠죠?
  ```
  - 저의 생일을 축하해주기 위한 토큰입니다 😄

  - 구매인증을 남겨주신다면, 감사에 의미로 저의 사진과 덕담과 함께 인스타 스토리에 올려드립니다 ^^..

  - 토큰 n개를 사용하여 저와의 밥약속, 커피챗을 잡으실수있습니다.
  ```

