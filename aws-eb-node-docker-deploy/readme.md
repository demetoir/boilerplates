# aws eb deploy with node docker

- EB CLI 3.19.4 (Python 3.9.1)
- node 14 
- yarn 1.22.5
  platform branch: Docker running on 64bit Amazon Linux 2 platform version: 3.2.3

# todo

- [ ] eb config 분리
- [ ] .ebignore 사용
- [ ] 환경변수 넘겨주는것
- [ ] nginx config inject하도록 스크립트 추가
- [ ] 빌드한 파일 inject 하도록 스크립트 추가

# 디렉토리 구조

최상위에서 EB 배포에만 사용하는 디렉토리를 만들어 그 안에서만 처리한다

다만 최상위 디렉토리에서 배포 실행시 필요한 모든 파일일 /elastic-beanstalk/bundle 에 옮길것

aws eb cli 사용시 /elastic-beanstalk 로 이동한뒤 사용할것

# AWS EB 배포 구성

수동 배포시 AWS eb cli 이용

platform branch: Docker running on 64bit Amazon Linux 2 platform version: 3.2.3

## SSL 인증서 및 도메인 설정

환경에서 ALB 설정 들어가서 리스너에서 https, 443, 인증서, SSL 정책은 첫번째것 선택

보안 그룹에서 http/https 용 80,443 열어놓을것

route53에 연결시 DNS는 A 타입에 eb ALB를 가르키도록 설정한다

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

eb deploy 시 도커 이미지를 빌드하므로 도커 이미지를 빌드하는데 최적화가 필요하다 Dockerfile에서 문법인

```dockerfile
FROM node:14-alpine AS BUILD_IMAGE
```

이거 쓰면 local에서는 되지만 deploy시에는 터진다

디폴트값으로 아무것도 설정하지 않으면 프로젝트 폴더 전체를 번들링해서 업로드한다

# nginx proxy setting

.platform/nginx/conf.d 디렉토레이 지정하면 돌아가긴한다 다만 이경우 도메인 연결시 nginx 상에서 upstream server connection error 발생한다.

https://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/platforms-linux-extend.html

# [reference]

https://jeonghwan-kim.github.io/eb-cli-%ED%88%B4-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%95%EB%A6%AC/

