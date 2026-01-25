# Next.js DevOps Projesi

Bu proje, DevOps best practices ile yapılandırılmış bir Next.js uygulamasıdır.
Pizza zamanı geldiği için artık yarıda bırakıyorum.

## 🚀 Özellikler

- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Kod kalitesi kontrolü
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **Docker Compose** - Yerel geliştirme ortamı

## 📋 Gereksinimler

- Node.js 20.x veya üzeri
- npm veya yarn
- Docker (opsiyonel)
- Docker Compose (opsiyonel)

## 🛠️ Kurulum

### Yerel Geliştirme

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

### Docker ile Çalıştırma

1. Docker image'ını build edin:
```bash
docker build -t nextjs-devops-project .
```

2. Container'ı çalıştırın:
```bash
docker run -p 3000:3000 nextjs-devops-project
```

### Docker Compose ile Çalıştırma

```bash
docker-compose up -d
```

## 🏗️ Build ve Production

### Production Build

```bash
npm run build
npm start
```

### Docker Production Build

```bash
docker build -t nextjs-devops-project:latest .
docker run -p 3000:3000 nextjs-devops-project:latest
```

## 🔄 CI/CD Pipeline

Proje GitHub Actions ile CI/CD pipeline'ı içerir:

### Test ve Build Pipeline (`.github/workflows/ci-cd.yml`)
- Her push ve pull request'te çalışır
- Linter kontrolü yapar
- Uygulamayı build eder
- Main branch'e push edildiğinde Docker image oluşturur

### Deploy Pipeline (`.github/workflows/deploy.yml`)
- Main branch'e push edildiğinde çalışır
- Vercel'e otomatik deploy yapar

### GitHub Secrets Yapılandırması

Aşağıdaki secrets'ları GitHub repository ayarlarına eklemeniz gerekir:

**Docker Hub için:**
- `DOCKER_USERNAME` - Docker Hub kullanıcı adı
- `DOCKER_PASSWORD` - Docker Hub şifresi veya access token

**Vercel için:**
- `VERCEL_TOKEN` - Vercel API token
- `VERCEL_ORG_ID` - Vercel organizasyon ID
- `VERCEL_PROJECT_ID` - Vercel proje ID

## 📁 Proje Yapısı

```
nextjs-devops-project/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml      # CI/CD pipeline
│       └── deploy.yml     # Deploy pipeline
├── src/
│   └── app/
│       ├── layout.tsx     # Root layout
│       ├── page.tsx       # Ana sayfa
│       └── globals.css    # Global stiller
├── Dockerfile             # Docker image tanımı
├── docker-compose.yml     # Docker Compose yapılandırması
├── next.config.js         # Next.js yapılandırması
├── package.json           # Proje bağımlılıkları
└── tsconfig.json          # TypeScript yapılandırması
```

## 🐳 Docker Detayları

### Multi-stage Build

Dockerfile iki aşamalı build kullanır:
1. **Builder**: Bağımlılıkları yükler ve uygulamayı build eder
2. **Runner**: Production için optimize edilmiş minimal image

### Standalone Output

Next.js `standalone` output modu kullanılır, bu sayede:
- Daha küçük Docker image boyutu
- Daha hızlı container başlatma
- Sadece gerekli dosyaların kopyalanması

## 🔧 Geliştirme Komutları

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm start

# Linter çalıştır
npm run lint
```

## 📝 Notlar

- Docker image'ı production için optimize edilmiştir
- Health check Docker Compose'da yapılandırılmıştır
- CI/CD pipeline'ı otomatik test ve deploy yapar
- Environment variables için `.env.local` dosyası kullanılabilir

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.
