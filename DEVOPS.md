# DevOps Dokümantasyonu

Bu dokümantasyon, projenin DevOps yapılandırması ve deployment süreçleri hakkında detaylı bilgi içerir.

## 🏗️ Mimari

### Containerization
- **Docker**: Multi-stage build ile optimize edilmiş production image
- **Docker Compose**: Yerel geliştirme ve test ortamı

### CI/CD Pipeline
- **GitHub Actions**: Otomatik test, build ve deploy
- **Vercel**: Production hosting (opsiyonel)

## 📦 Docker Yapılandırması

### Dockerfile Stratejisi

1. **Builder Stage**:
   - Node.js 20 Alpine (küçük image boyutu)
   - Bağımlılıkları yükler
   - Uygulamayı build eder

2. **Runner Stage**:
   - Sadece production gereksinimleri
   - Non-root kullanıcı (güvenlik)
   - Standalone output kullanımı

### Image Optimizasyonu

- Alpine Linux kullanımı (küçük base image)
- Multi-stage build (sadece gerekli dosyalar)
- Layer caching (daha hızlı rebuild)
- Standalone output (minimal dosya seti)

## 🔄 CI/CD Pipeline Detayları

### Test Pipeline

**Trigger**: Her push ve pull request

**Adımlar**:
1. Code checkout
2. Node.js setup (cache ile)
3. Dependencies install
4. Linter çalıştırma
5. Build test

### Docker Build Pipeline

**Trigger**: Main branch'e push

**Adımlar**:
1. Test pipeline'ı bekle
2. Docker Buildx setup
3. Docker Hub login
4. Image build ve push
5. Cache kullanımı (hızlandırma)

### Deploy Pipeline

**Trigger**: Main branch'e push veya version tag

**Adımlar**:
1. Code checkout
2. Node.js setup
3. Dependencies install
4. Build
5. Vercel'e deploy

## 🔐 Secrets Yönetimi

### GitHub Secrets

Repository Settings > Secrets and variables > Actions bölümünden eklenir:

#### Docker Hub
```
DOCKER_USERNAME=your-username
DOCKER_PASSWORD=your-password-or-token
```

#### Vercel
```
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-org-id
VERCEL_PROJECT_ID=your-project-id
```

### Environment Variables

Production için gerekli environment variables:
- `.env.production` - Production değişkenleri
- `.env.local` - Yerel geliştirme (gitignore'da)

## 🚀 Deployment Stratejileri

### 1. Docker ile Deployment

```bash
# Image build
docker build -t nextjs-devops-project:latest .

# Container çalıştır
docker run -d -p 3000:3000 --name nextjs-app nextjs-devops-project:latest

# Docker Compose ile
docker-compose up -d
```

### 2. Vercel Deployment

Otomatik olarak GitHub Actions ile yapılır veya manuel:

```bash
npm install -g vercel
vercel --prod
```

### 3. Cloud Platform Deployment

#### AWS (ECS/Fargate)
1. Docker image'ı ECR'ye push et
2. ECS task definition oluştur
3. Service oluştur ve deploy et

#### Google Cloud (Cloud Run)
```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/nextjs-devops-project
gcloud run deploy --image gcr.io/PROJECT_ID/nextjs-devops-project
```

#### Azure (Container Instances)
```bash
az acr build --registry REGISTRY_NAME --image nextjs-devops-project .
az container create --resource-group RESOURCE_GROUP --name nextjs-app --image REGISTRY_NAME.azurecr.io/nextjs-devops-project
```

## 📊 Monitoring ve Logging

### Health Checks

Docker Compose'da health check yapılandırılmıştır:
- Interval: 30 saniye
- Timeout: 10 saniye
- Retries: 3
- Start period: 40 saniye

### Logging

Production'da logging için:
- Container logs: `docker logs nextjs-app`
- Application logs: Next.js built-in logging
- External services: Sentry, LogRocket, vb.

## 🔒 Güvenlik Best Practices

1. **Non-root User**: Container'da nextjs kullanıcısı kullanılır
2. **Minimal Base Image**: Alpine Linux kullanımı
3. **Secrets Management**: GitHub Secrets kullanımı
4. **Dependency Updates**: Düzenli güvenlik güncellemeleri
5. **Image Scanning**: Docker image'larını tarama

## 📈 Performans Optimizasyonu

1. **Multi-stage Build**: Küçük final image
2. **Layer Caching**: Build hızlandırma
3. **Standalone Output**: Minimal dosya seti
4. **CDN**: Static asset'ler için CDN kullanımı
5. **Image Optimization**: Next.js built-in image optimization

## 🧪 Testing Stratejisi

### Unit Tests (Eklenecek)
```bash
npm test
```

### Integration Tests (Eklenecek)
```bash
npm run test:integration
```

### E2E Tests (Eklenecek)
```bash
npm run test:e2e
```

## 🔄 Rollback Stratejisi

### Docker
```bash
# Önceki versiyona dön
docker pull nextjs-devops-project:previous-tag
docker stop nextjs-app
docker run -d -p 3000:3000 --name nextjs-app nextjs-devops-project:previous-tag
```

### Vercel
Vercel dashboard'dan önceki deployment'a rollback yapılabilir.

## 📝 Checklist

### İlk Kurulum
- [ ] GitHub repository oluştur
- [ ] GitHub Secrets ekle
- [ ] Vercel projesi oluştur (opsiyonel)
- [ ] Docker Hub repository oluştur
- [ ] Environment variables yapılandır

### Her Deployment Öncesi
- [ ] Tests geçiyor mu?
- [ ] Linter hataları var mı?
- [ ] Build başarılı mı?
- [ ] Environment variables güncel mi?
- [ ] Documentation güncel mi?

## 🆘 Troubleshooting

### Docker Build Hatası
```bash
# Cache'i temizle
docker builder prune

# Yeniden build et
docker build --no-cache -t nextjs-devops-project .
```

### CI/CD Pipeline Hatası
- GitHub Actions logs'u kontrol et
- Secrets'ların doğru olduğundan emin ol
- Node.js versiyonunu kontrol et

### Deployment Hatası
- Environment variables kontrol et
- Network bağlantısını kontrol et
- Container logs'u incele

## 📚 Ek Kaynaklar

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Vercel Documentation](https://vercel.com/docs)
