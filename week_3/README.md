# Week 3: Bridge, Layer 2

## 학습 과제

#### 과제 목표

지인이 토큰을 활용하여 하나의 서비스를 구매하여 이용할 수 있도록 할 건데요.

잠깐! 그런데! 이 과제를 수행하기 전에 아래의 사항에 대해 공부해 봅시다.

### ERC20 토큰과 메인넷 코인은 무슨 차이인가요?

**배경**

<img src="https://blog.kakaocdn.net/dn/KxCor/btqDxvBSkQb/eq39XN9USpJNgV5g6BRJIK/img.jpg" alt="img=250x" style="zoom:60%;" />

중앙화 거래소 (업비트 등) 에서 MATIC을 구매해서 Polygon Mainnet 메타마스크 지갑으로 송금하면 안됩니다. 그러면 MATIC 을 잃어버립니다. 왜 그럴까요? 아래 링크를 참고해보세요.

* [**업비트, 폴리곤 메인넷 체인 오입금 구제 완료**](https://www.ajunews.com/view/20211210140916051)
* [**업비트, 메인넷 있는 폴리곤 ERC20으로 상장…왜?**](https://www.asiatoday.co.kr/view.php?key=20211019010010313)

이더리움은 메인 체인의 기축통화인 코인입니다. 그런데, 폴리곤도 메인 체인의 기축통화인 코인입니다. 그런데 거래소에서 구매할 수 있는 MATIC 은 ERC20의 '토큰' 입니다. 즉, 이더리움 상에 올라와 있는 토큰이라는 뜻입니다.

**요구 사항: 아래의 질문에 답을 내려주세요.**

1. 왜 거래소는 메인넷 체인의 MATIC을 상장하지 않고, ERC20 규격의 MATIC을 상장했을까요?

2. 검색을 통해 `ERC20 메인넷 차이` , `Mainnet MATIC vs ERC20 MATIC` 를 살펴보고, 무슨 차이가 있는지 정리해주세요.

### ERC20 토큰을 메인넷 코인로 전환하는 Bridge

**배경**

우리는 거래소에 상장된 MATIC 이 Polygon 메인 블록체인에서 사용할 수 있는 코인이 아니고, Ethereum 네트워크 상에서 ERC20의 규격으로, 스마트 컨트랙트에서 장부거래 관리되고 있는 토큰이라는 사실을 알았습니다.

만약, ERC20 MATIC을 Mainnet MATIC으로 옮기기 위해서는 어떻게 해야 할까요? 이럴 때 우리는 Bridge를 사용합니다. 브릿지란, ERC20 으로 발행되어 있는 토큰을 Mainnet의 코인으로 바꾸는 '연결 다리' 를 의미합니다.

예를 들어, 카카오 클레이튼의 Klay 코인을 이더리움 네트워크 위의 탈중앙화 거래소 (Uniswap 등)에서 거래하기 위해서는 이더리움 네트워크 상에 ERC20에 클레이튼 '토큰' 을 활용해야 합니다. 이더리움 네트워크 위의 Uniswap을 통해 구매한 Klay 토큰을 카카오 클레이튼 네트워크의 Klay 코인으로 바꾸기 위해서는 Bridge를 사용해야 합니다.

**요구 사항: 아래의 질문에 답을 내려주세요.**

아래 링크를 통해 학습한 내용을 바탕으로, Bridge가 무엇인지 본인의 언어를 활용하여 설명해주세요.

**학습할 자료**

* [What is a crypto bridge?](https://www.youtube.com/watch?v=nT26cIz8HjI)
* [바이낸스 브릿지 설명](https://academy.binance.com/ko/articles/an-introduction-to-binance-bridge)

### Layer 2

**배경**

Ethereum Mainnet과 Polygon Mainnet은 어떤 관계일까요? Ethereum은 Layer 1 이라고 하고, Polygon은 Layer 2 라고 합니다. 아래 [기사](https://www.mk.co.kr/economy/view.php?sc=50000001&year=2022&no=102392)를 읽어보세요.

![img](https://file.mk.co.kr/meet/neds/2022/02/image_readtop_2022_102392_16444105114937024.jpg)



> 최근에는 블록체인 생태계가 급성장하면서 이더리움 거래 처리량 또한 빠른 속도로 늘어나고 있다. NFT, 디파이, 메타버스 등 이더리움을 기반으로 한 새로운 플랫폼의 거래 수요가 폭발적으로 증가하고 있기 때문이다.
>
> 이더리움 데이터 분석 플랫폼 ‘이더스캔’에 따르면 2월 2일 기준 이더리움 하루 거래 처리량은 115만2665건에 달한다. 6년 전인 2016년 2월(1만4274건)과 비교하면 100배 가까이 처리량이 늘었다.
>
> 여기서 문제가 발생한다. 이더리움의 태생적인 한계, 바로 ‘느리고 비싸다’는 점 때문이다.
>
> 처리해야 할 거래량은 점점 늘어만 가는데 처리 속도는 느리고 발생하는 수수료는 너무 비싸다. 그렇다고 이더리움을 외면하고 다른 블록체인으로 갈아타는 것도 현실적으로 불가능하다. 2015년 탄생부터 지금까지, 이더리움이 7년 넘게 쌓아온 생태계가 워낙 공고한 탓이다. 블록체인을 기반으로 운영되는 애플리케이션을 뜻하는 ‘디앱(dApp)’ 개수만 봐도 다른 코인과 비교 불가다. 현재 전 세계에서 운영 중인 디앱 개수는 약 3920개. 그중에서 이더리움 기반 디앱이 2900개가 넘는다. 접근성·인지도·범용성 면에서 다른 코인이 넘볼 수 없는 지위를 보유한 셈이다.
>
> 고민 끝에 등장한 솔루션이 바로 ‘레이어2(Layer2)’ 플랫폼이다. 이더리움의 장점인 대중성은 그대로 살리면서 한계로 지목돼온 느린 속도와 비싼 수수료 문제도 해결할 수 있는 솔루션이다. 차세대 플랫폼으로 각광받는 레이어2 플랫폼, 이른바 ‘L2 코인’에 대해 살펴본다.

> ▶레이어1: 독자적인 블록체인
>
> ▷이더리움·에이다·솔라나는 레이어1
>
> 레이어는 영단어 그대로 ‘층’이라는 의미를 갖는다. 쉽게 말하면 레이어1은 1층, 레이어2가 2층이다. 2층을 살펴보기 전에 당연히 1층인 레이어1이 무엇인지부터 이해할 필요가 있다.
>
> 레이어1은 우리가 흔히 알고 있는 블록체인이라고 생각하면 된다. 블록에 거래를 기록하고 승인하고 처리한다. 독자적인 블록체인을 보유했다면 모두 레이어1 코인이다. 이더리움이 레이어1 코인의 대표 주자다.
>
> 하지만 앞서 살펴봤듯 이더리움이 지닌 단점은 명확하다. 그 유명한 ‘블록체인 트릴레마’다. 이상적인 블록체인은 다음 세 가지를 모두 충족해야 한다. ‘확장성’과 ‘보안성’ 그리고 ‘탈중앙화’다. 하지만 이 세 가지를 모두 갖추는 것은 쉽지 않다.
>
> 블록 생성과 합의에 참여하는 이가 많으면 많을수록 ‘보안성’과 ‘탈중앙화’ 정도는 높아진다. 여러 명이 검증하는 만큼 보다 신뢰도가 높아지고 중앙 집권 문제도 해결된다. 하지만 이렇게 되면 처리 속도는 느려질 수밖에 없다. 즉 ‘확장성’이 줄어드는 것이다. 그렇다고 속도를 높이기 위해 인원수를 줄이면 반대로 보안과 탈중앙화에 문제가 발생한다. 그야말로 딜레마, 아니 ‘트릴레마’인 셈이다.
>
> 이런 한계를 극복하기 위해 여러 블록체인 프로젝트가 출범했다. 이더리움과는 다른, 아예 별개의 블록체인을 새로 만들어냄으로써 이더리움이 지닌 문제를 개선하려 한 시도들이다. 2월 3일 기준 코인 시총 5위에 위치한 ‘에이다(ADA)’, 6위 ‘솔라나(SOL)’, 9위 ‘테라(LUNA)’ 등이 대표적이다. 하지만 이들 코인 역시 블록체인 트릴레마에서 완벽히 자유롭지는 못하다. 저마다 속도와 보안성 면에서 이더리움보다 개선됐다는 평가를 받기는 하지만, 블록체인 3요소를 동시에 충족시키는 것은 마찬가지로 불가능하다.

> ▶레이어2: 폴리곤·오미세고
>
> ▷ETH 장점은 살리고 속도는 개선
>
> 레이어2 코인은 레이어1 코인의 ‘확장팩’이라고 보면 된다. 레이어1 코인처럼 별도의 블록체인을 운영하지는 않는다. 블록 생성과 합의, 거래 승인 같은 절차는 1층에 맡긴다. 대신 2층에서는 ‘거래 처리’를 전문으로 한다. 보안성과 탈중앙화를 기존 블록체인에 위탁하는 대신 최대한 빠르고 저렴하게 거래를 처리할 수 있도록 돕는 것이 레이어2 솔루션의 목표다. 거래 처리를 2층에서 하기 때문에 그만큼 레이어1 코인의 블록체인 업무량(?)은 줄어든다. 현존하는 대부분의 레이어2 솔루션은 이더리움의 처리 속도 개선을 위해 만들어졌다. 폴리곤(MATIC, 14위), 오미세고(OMG, 99위), 이뮤터블X(IMX, 104위), 보바네트워크(BOBA, 183위) 같은 코인이 잘 알려진 레이어2 코인이다.
>
> 레이어1 코인과 레이어2 코인의 이해를 돕기 위해 ‘편의점’으로 예를 들어본다. 이더리움은 전 세계 편의점 업계를 독식하는 절대적 1위다. 다른 편의점도 있기는 있다. 이더리움보다 결제 속도가 빠른 ‘솔라나’, 보안성이 검증된 ‘에이다’ 같은 편의점도 성업 중이기는 하다. 하지만 제품 판매자와 구매 희망자 모두, 꼭 이더리움을 찾는다. 이더리움이 그만큼 절대적인 편의점 1위기 때문이다. 전국 도처에 깔려 있어 매출도 잘 나오는 데다 소비자 입장에서는 접근성도 좋다.
>
> 다만 이더리움 편의점이 지닌 문제도 명확하다. 점심시간 맛집처럼 이용자가 몰려들어 길게 줄을 서는 탓에 구매까지 시간이 오래 걸리는 것이다. 심지어 결제 확인도 너무 꼼꼼히 한다. 이더리움 직원 수백 명이 검증 절차를 거친다. 액수는 딱 맞는지, 위조지폐는 아닌지, 받은 신용카드가 불량은 아닌지 하나하나 검사를 받아야 겨우 구매에 성공할 수 있다. 게다가 이더리움의 세계에서는 합법적인 새치기도 가능하다. 이더리움 직원에게 돈(수수료)을 쥐어주면 앞사람보다 먼저 물건을 살 수 있다. 액수가 정해져 있는 게 아니기 때문에, 수수료는 계속 올라간다.
>
> 골치를 썩이던 이더리움 매장 앞에, 어느 날 작은 매장 하나가 더 생겼다. 매장 이름은 ‘레이어2’다. 레이어2 매장에서는 구매 속도를 높이기 위한 여러 서비스를 제공한다. 이를테면 구매를 기다리는 손님 수십 명의 주문을 뭉텅이로 받은 후, 이더리움에 들어가 한 번에 주문하는 식이다. 복잡한 확인 절차도 모두 뒤로 미룬다. 지폐든 위조지폐든 일단 받아서 결제를 한다. 그리고 사후 확인을 거쳐 나중에 문제가 발생하면 레이어2 직원을 처벌하는 식이다.
>
> 어떤 레이어2 매장에서는 이더리움 제품을 떼어다가 소규모로 장사를 하기도 한다.
>
> 방법이 어찌 됐든 레이어2 매장을 이용하면 소비자 이용 시간과 수수료는 확 줄어들게 된다. 이게 바로 레이어2 코인이 지닌 효과다. 다만 레이어2를 별도의 편의점 브랜드라고 보기는 어렵다. 어디까지나 이더리움과 협업해 업무를 대신 처리하는 ‘구매 대행’ 정도로 볼 수 있다.

**요구 사항**

1. Layer 1과 Layer 2는 어떤 차이인지 본인만의 언어로 정리해주세요.

2. MATIC (ERC20) <> MATIC (Mainnet) 처럼 ERC20 토큰 <> 메인넷 코인의 관계를 갖는 프로토콜이 여러 개 있습니다. 어떤 예시들이 있는지, 그리고 각 프로토콜의 ERC20의 컨트랙트 주소와 메인넷 컨트랙트 주소를 적어주세요.

3. ERC20 토큰을 활용해서 Mainnet 코인으로 Bridge로 바꿔보세요. 또는, Mainnet 코인을 ERC20 토큰으로 Bridge를 통해 바꿔보세요. 그리고 느낀 점을 알려주세요.

   주의! Bridge를 이용하는 메인넷 네트워크의 기축통화 코인 (예: ETH) 를 수수료로 지불해야 하기 때문에, Bridge 컨트랙트가 올라와 있는 메인넷 기축 코인이 있어야 합니다.