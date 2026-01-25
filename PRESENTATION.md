# Sunum Materyalleri - Pizza Order App

## 🎯 Demo Senaryosu

### 1. Giriş (30 saniye)
- "Merhaba GDG" ekranı
- Proje tanıtımı
- Multi-step flow gösterimi

### 2. Pizza Seçimi (1 dakika)
- Pizza kartlarını göster
- Bir pizza seç
- Seçim animasyonu
- "Sipariş Ver" butonu

### 3. Sipariş Onayı (30 saniye)
- Seçilen pizza bilgisi
- Onay mesajı
- "Tamamla" butonu

### 4. Tamamlanma (20 saniye)
- Başarı mesajı
- "Başa Dön" butonu
- Döngüyü göster

**Toplam Demo Süresi:** ~2.5 dakika

## 📸 Screenshot Noktaları

1. **Ana Sayfa**
   - Progress indicator
   - Başlık ve açıklama
   - "Devam Et" butonu

2. **Pizza Seçimi**
   - 4 pizza kartı
   - Seçili pizza (kırmızı border)
   - Fiyatlar ve açıklamalar

3. **Sipariş Onayı**
   - Seçilen pizza bilgisi
   - Yeşil onay kutusu
   - "Tamamla" butonu

4. **Tamamlanma**
   - "✓ Tamamlandı!" mesajı
   - Yeşil "Başa Dön" butonu

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────┐
│         Next.js Application             │
├─────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐            │
│  │   App    │  │  Pages  │            │
│  │  Router  │→ │  (TSX)  │            │
│  └──────────┘  └──────────┘            │
│       │                                 │
│       ↓                                 │
│  ┌──────────┐  ┌──────────┐            │
│  │ React    │  │ Tailwind │            │
│  │ State    │  │   CSS    │            │
│  └──────────┘  └──────────┘            │
└─────────────────────────────────────────┘
           │
           ↓
┌─────────────────────────────────────────┐
│         DevOps Pipeline                 │
├─────────────────────────────────────────┤
│  GitHub Actions → Docker → Vercel      │
└─────────────────────────────────────────┘
```

## 🎨 Özellikler Listesi

### Frontend
- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Responsive Design
- ✅ Smooth Animations
- ✅ Progress Indicator

### Backend/DevOps
- ✅ Docker Containerization
- ✅ Docker Compose
- ✅ GitHub Actions CI/CD
- ✅ Vercel Deployment
- ✅ Multi-stage Build

### Python Alternative
- ✅ FastAPI Backend
- ✅ Jinja2 Templates
- ✅ Same Functionality

## 📊 Teknik Detaylar

### Stack
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Container:** Docker
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel

### Performance
- Standalone output mode
- Optimized Docker image
- Fast page transitions
- Minimal bundle size

### Best Practices
- TypeScript strict mode
- ESLint configuration
- Component-based architecture
- Clean code principles

## 🚀 Deployment

### Vercel
- Otomatik deployment
- GitHub Actions integration
- Environment variables
- Production ready

### Docker
- Multi-stage build
- Alpine Linux base
- Non-root user
- Health checks

## 💡 Öne Çıkan Özellikler

1. **Multi-step Flow**
   - Smooth transitions
   - Progress tracking
   - State management

2. **Pizza Selection**
   - Interactive cards
   - Visual feedback
   - Validation

3. **DevOps Ready**
   - CI/CD pipeline
   - Docker support
   - Auto deployment

4. **Dual Implementation**
   - Next.js version
   - Python version
   - Same UX

## 📝 Sunum Notları

### Başlangıç
- "Bugün size modern bir web uygulaması ve DevOps yapılandırması göstereceğim"

### Ana Bölümler
1. **Uygulama Demo** (2-3 dakika)
2. **Teknik Detaylar** (2 dakika)
3. **DevOps Pipeline** (2 dakika)
4. **Python Versiyonu** (1 dakika)

### Kapanış
- "Sorularınız var mı?"
- "GitHub repository linki: [link]"

## 🔗 Linkler

- GitHub Repository: [eklenecek]
- Live Demo: [Vercel URL - eklenecek]
- Documentation: README.md

## 📋 Checklist

- [ ] Demo senaryosu hazır
- [ ] Screenshot'lar alındı
- [ ] Architecture diagram hazır
- [ ] Live demo test edildi
- [ ] Sorular için hazırlık
- [ ] Backup plan (offline demo)
