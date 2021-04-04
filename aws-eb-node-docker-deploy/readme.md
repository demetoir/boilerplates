# aws eb deploy with node docker

- EB CLI 3.19.4 (Python 3.9.1)
- node 14
- yarn 1.22.5
- platform branch: Docker running on 64bit Amazon Linux

# todo

- [ ] eb config 분리
- [ ] .ebignore 사용
- [ ] 환경변수 넘겨주는것


# 디렉토리 구조

최상위에서 EB 배포에만 사용하는 디렉토리를 만들어 그 안에서만 처리한다

다만 최상위 디렉토리에서 배포 실행시 필요한 모든 파일일 /elastic-beanstalk/bundle 에 옮길것

aws eb cli 사용시 /elastic-beanstalk 로 이동한뒤 사용할것

# AWS EB 배포 구성

수동 배포시 AWS eb cli 이용

platform branch: Docker running on 64bit Amazon Linux 2 platform version: 3.2.3

# EB 에 domain 설정하기

* name cheap 에서 도메인 하나 사기
* aws route 53 에서 도메인에 해당하는 호스팅 영역 생성
* name cheap 에서 만든 도메인에서 custom nameserver 지정하는 부분에 route 53 의 nameserver 를 추가
* route 53에서 A record로 www.expcloud.xyz를  eb의 ALB로 가르키도록 설정하면
* www.expcloud.xyz로 http은 연결된다

# AWS CM에서 도메인용 SSL 인증서 생성

* AWS CM 에서 인증서 만들고 바로 DNS 넣기 한다
* 그리고 하단 CNAME 등록으로 인증서 요청한다

# EB ALB https 설정하기

* aws console에서 eb 의 환경 ⇒ 구성 ⇒ 로드 밸런서 ⇒ 리스너 추가하기
    * 설정은 아래 처럼
        * 포트: 443
        * 프로토콜: https
        * SSL 인증서: 위에서 만든 AWS 인증서
        * SSL 정책: ELB security policy 2016 08
        * default process: default

* 이렇게 하고 저장하면 바로 https 연결 가능하다

# EB nginx 설정
/elastic-beanstalk/.ebextensions/nginx/nginx.conf 가 기본 설정파일

# AWS EB 배포 과정

1. install aws eb cli at local

```shell
# on mac 
brew update

brew install awsebcli

eb --version
```

eb cli 설치 참고 링크
https://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/eb-cli3-install-osx.html

2. 소스가 있는 리포 디렉토리로 이동

3. eb 초기화

/elasticbeanstalk/.elasticbeanstalk/config.yml 설정 파일이 이미 있는 경우 생략한다

```shell
eb init --profile eb-only
```

~/.aws/config 파일에 추가

```
[profile eb-only]
aws_access_key_id = key_id
aws_secret_access_key = access_key
```

이때 aws iam 계정의 권한은 AWSElasticBeanstalkFullAccess 정도가 있는 놈일것

4. eb bundling

```shell
yarn eb:bundle
```

5. 로컬 배포

```shell
yarn eb:bundle 
yarn eb:local:run
```

다른 터미널에서 status도 체크할것

```shell
eb local status
```

6. 배포

```shell
yarn eb:bundle
yarn eb:deploy
```

이렇게 하면 수동으로 로컬에서 배포는 가능하다


# [reference]

https://jeonghwan-kim.github.io/eb-cli-%ED%88%B4-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%95%EB%A6%AC/

