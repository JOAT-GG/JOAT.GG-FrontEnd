# Node.js 20.5.0 버전을 베이스 이미지로 사용
FROM node:20.5.0

# 작업 디렉토리 생성
WORKDIR /app

# 앱 소스 코드를 Docker 이미지에 복사
COPY . .

# 필요한 의존성 설치
RUN npm install

# Next.js 프로덕션 빌드
RUN npm run build

# 앱 실행 포트 설정
EXPOSE 3000

# 앱 실행 명령
CMD ["npm", "start"]
