# GitHub'a Push Etme Talimatları

## ✅ Tamamlanan Adımlar
- [x] Git repository başlatıldı
- [x] Tüm dosyalar commit edildi
- [x] İlk commit yapıldı

## 📋 GitHub'a Push Etme Adımları

### 1. GitHub'da Yeni Repository Oluşturun

1. GitHub.com'a gidin ve giriş yapın
2. Sağ üstteki "+" butonuna tıklayın
3. "New repository" seçin
4. Repository bilgilerini doldurun:
   - **Repository name:** `nextjs-devops-project` (veya istediğiniz isim)
   - **Description:** "Next.js DevOps project with multi-step pizza order app"
   - **Visibility:** Public veya Private seçin
   - **Initialize repository:** ❌ TIKLAMAYIN (zaten dosyalarımız var)
5. "Create repository" butonuna tıklayın

### 2. Remote Repository Ekleyin

GitHub'da repository oluşturduktan sonra, size verilen URL'yi kullanın:

```bash
# HTTPS kullanarak (önerilen)
git remote add origin https://github.com/KULLANICI_ADINIZ/nextjs-devops-project.git

# VEYA SSH kullanarak
git remote add origin git@github.com:KULLANICI_ADINIZ/nextjs-devops-project.git
```

**Not:** `KULLANICI_ADINIZ` yerine kendi GitHub kullanıcı adınızı yazın.

### 3. Branch'i Main Olarak Ayarlayın

```bash
git branch -M main
```

### 4. GitHub'a Push Edin

```bash
git push -u origin main
```

Eğer ilk kez push ediyorsanız, GitHub kullanıcı adı ve şifre/token isteyebilir.

### 5. GitHub Authentication (Gerekirse)

Eğer iki faktörlü kimlik doğrulama aktifse, Personal Access Token kullanmanız gerekebilir:

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" tıklayın
3. İzinleri seçin (repo yetkisi yeterli)
4. Token'ı kopyalayın
5. Push sırasında şifre yerine bu token'ı kullanın

## 🚀 Hızlı Komutlar (Tek Seferde)

GitHub repository URL'nizi aldıktan sonra:

```bash
git remote add origin https://github.com/KULLANICI_ADINIZ/nextjs-devops-project.git
git branch -M main
git push -u origin main
```

## ✅ Kontrol

Push işlemi başarılı olduktan sonra:

1. GitHub repository sayfanızı yenileyin
2. Tüm dosyaların göründüğünü kontrol edin
3. README.md dosyasının düzgün göründüğünü kontrol edin

## 📝 Sonraki Adımlar

1. **GitHub Secrets Ekleme:**
   - Repository → Settings → Secrets and variables → Actions
   - Vercel secrets ekleyin (deployment için)

2. **GitHub Actions Test:**
   - Bir değişiklik yapıp push edin
   - Actions sekmesinde CI/CD pipeline'ın çalıştığını kontrol edin

3. **Vercel Deployment:**
   - Vercel.com'a gidin
   - GitHub repository'nizi import edin
   - Otomatik deployment yapılacak

## 🔗 Faydalı Linkler

- [GitHub Docs](https://docs.github.com/)
- [Git Authentication](https://docs.github.com/en/authentication)
- [Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
