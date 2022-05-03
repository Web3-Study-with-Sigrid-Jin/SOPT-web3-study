# Week 3: Bridge, Layer 2

## 학습 과제

#### 과제 목표

지인이 토큰을 활용하여 하나의 서비스를 구매하여 이용할 수 있도록 할 건데요.

잠깐! 그런데! 이 과제를 수행하기 전에 아래의 사항에 대해 공부해 봅시다.

지인에게 토큰을 사용하도록 하는 과제는 다음 주에 진행할 예정입니다.

----

## 과제 1. ERC20 토큰과 메인넷 코인은 무슨 차이인가요?

### 과제 1 요구 사항: 아래의 질문에 답을 내려주세요. 분량의 제한은 없습니다.

1. 왜 거래소는 메인넷 체인의 MATIC을 상장하지 않고, ERC20 규격의 MATIC을 상장했을까요?

   Upbit 는 Ethereum 체인 '만' 선택 가능함
   <img width="371" alt="image" src="https://user-images.githubusercontent.com/90569731/166416459-8de11a84-a7db-403b-9da0-b8f2de315eb4.png">
   
   [업비트 - [안내] 폴리곤(MATIC) 오입금에 대한 안내](https://upbit.com/service_center/notice?id=2223)
   
   [Beeblock - 5/4 국내 최초 폴리곤 메인넷 지원하는 거래소 라고 합니다. ](https://beeblock.co.kr/support/news/BN_BN/content/IOSSKIP_220503_1)

   Binance 는 Polygon 체인 선택이 가능함
   <img width="481" alt="image" src="https://user-images.githubusercontent.com/90569731/166416890-5b40a05f-9d1f-43de-b924-f4d18186532a.png">
   
   ```
   (https://www.asiatoday.co.kr/view.php?key=20211019010010313)

   업비트 관계자는 19일 “현재 폴리곤 메인넷으로 이전된 MATIC이 이더리움보다 현저히 적어 메인넷으로 지원할 경우 이용자들이 입금하고자 하는 수량을 적시에 충분히 지원하기 어려울 수 있다”며 “일대일 소각·발행 기능이 적용되지 않는 이더리움 기반 ERC20 네트워크로 초기 지원한 것”이라고 주장했다.
   ```

2. 검색을 통해 `ERC20 메인넷 차이` , `Mainnet MATIC vs ERC20 MATIC` 를 살펴보고, 무슨 차이가 있는지 정리해주세요.
   ```
   (https://www.coindesk.com/learn/polygon-and-matic-whats-the-difference/)

   수수료의 차이가 가장 큰 것 같습니다. (ERC20 을 사용하여 전송해본적은 없지만 속도도 polygon 체인이 빠를 것이라고 생각합니다.)
   ```
------

## 과제 2. ERC20 토큰을 메인넷 코인로 전환하는 Bridge

### 과제 2 요구 사항: 아래의 질문에 답을 내려주세요. 분량의 제한은 없습니다.

1. 아래 링크를 통해 학습한 내용을 바탕으로, Bridge가 무엇인지 본인의 언어를 활용하여 설명해주세요.

   ```
   Bridge 란 코인(토큰)을 다른 체인으로 이동시키는 것.
   
   크로스체인 기술
   ```

[비탈릭 부테린의 크로스체인에 대한 글](https://old.reddit.com/r/ethereum/comments/rwojtk/ama_we_are_the_efs_research_team_pt_7_07_january/hrngyk8/)

### 학습할 자료

* [What is a crypto bridge?](https://www.youtube.com/watch?v=nT26cIz8HjI)
* [바이낸스 브릿지 설명](https://academy.binance.com/ko/articles/an-introduction-to-binance-bridge)
* [오르빗 브리지](https://bridge.orbitchain.io/)
* [오르빗 브리지 문서](https://bridge-docs.orbitchain.io/faq/general-kr)

   
-----

## 과제 3. Layer 2

### 과제 3 요구 사항: 아래의 질문에 답을 내려주세요. 분량의 제한은 없습니다.

1. Layer 1과 Layer 2는 어떤 차이인지 본인만의 언어로 정리해주세요.
   ```
   Layer1: 기본 블록체인 아키텍처를 설명하는 데 사용되는 용어 (비트코인, 이더리움)
   Layer2: 기본 블록체인 위에 있는 오버레이 네트워크 (라이트닝 네트워크, 폴리곤)

   * side-chain | rollup(Zk, Optimism) | sharding | plasma
   ```

[참고했던 영상](https://youtu.be/3pyBoNCMQmg)

[이더리움 L2 관련 사이트](https://l2beat.com/)

1. MATIC (ERC20) <> MATIC (Mainnet) 처럼 ERC20 토큰 <> 메인넷 코인의 관계를 갖는 프로토콜이 여러 개 있습니다. 어떤 예시들이 있는지, 그리고 각 프로토콜의 ERC20의 컨트랙트 주소와 메인넷 컨트랙트 주소를 적어주세요.
   ```
   0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0 - erc20 (polygon)

   0x0000000000000000000000000000000000001010 - polygon (polygon)
   ```

2. ERC20 토큰을 활용해서 Mainnet 코인으로 Bridge로 바꿔보세요. 또는, Mainnet 코인을 ERC20 토큰으로 Bridge를 통해 바꿔보세요. 그리고 느낀 점을 알려주세요.

   주의! Bridge를 이용하는 메인넷 네트워크의 기축통화 코인 (예: ETH) 를 수수료로 지불해야 하기 때문에, Bridge 컨트랙트가 올라와 있는 메인넷 기축 코인이 있어야 합니다.

   ```
   이전에 terra bridge 를 이용하여 terra <-> bsc, terra <-> ethereum 간의 자산 이동을 진행해보았습니다.
   처음 해봤을 때 luna가 없어진 줄 알았었는데, wraped luna로 다른 토큰이 생겨서 깜짝놀랐던 경험이 있습니다.
   ```

-----

## 과제 4. 트레블 룰

![______________________2.png](https://upbitcs.zendesk.com/hc/article_attachments/5028853196569/______________________2.png)
[트래블룰 완벽 정리](https://za-ryong.tistory.com/entry/%EC%97%85%EB%B9%84%ED%8A%B8-%ED%8A%B8%EB%9E%98%EB%B8%94%EB%A3%B0)

### 과제 4 요구사항: MATIC (ERC20 토큰) 을 구매하고, 이를 활용해 Polygon Mainnet의 MATIC (Mainnet) 으로 전환하세요.

1. 본인이 사용하는 거래소로 원화를 보내서 Ethereum을 구매하고 메타마스크 지갑으로 ETH를 보내세요. (현재 거래소에서 원화를 입금했으면 암호화폐 출금이 24시간 필요하기 때문에.. 미리 해두셔야)
2. 그리고, Uniswap에서 ETH를 MATIC으로 스왑하세요.
3. 마지막으로, MATIC을 Polygon Mainnet으로 보내주세요. 이 때, [Umbria Network](https://bridge.umbria.network/) 를 사용하세요.
   * [Umbria Network 사용법 설명](https://www.youtube.com/watch?v=445PZnORsxo)


```
(생략)
```