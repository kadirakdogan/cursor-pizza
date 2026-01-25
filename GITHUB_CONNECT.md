# GitHub Bağlantı Rehberi

## ✅ Mevcut Durum
- Git kullanıcı adı: **Kadir AKDOĞAN**
- Git email: **akdogankadir07@gmail.com**
- Git repository: Hazır ve commit edilmiş
- Remote repository: Henüz eklenmedi

## 🚀 GitHub'a Bağlanma Adımları

### Yöntem 1: GitHub Web Arayüzü (Önerilen)

#### Adım 1: GitHub'da Repository Oluşturun

1. **https://github.com** adresine gidin ve giriş yapın
2. Sağ üstteki **"+"** butonuna tıklayın → **"New repository"**
3. Repository bilgilerini doldurun:
   - **Repository name:** `nextjs-devops-project`
   - **Description:** `Next.js DevOps project with multi-step pizza order app`
   - **Visibility:** Public veya Private (istediğinizi seçin)
   - ⚠️ **ÖNEMLİ:** "Add a README file", "Add .gitignore", "Choose a license" seçeneklerini **İŞARETLEMEYİN** (zaten dosyalarımız var)
4. **"Create repository"** butonuna tıklayın

#### Adım 2: Terminal'de Remote Ekleyin ve Push Edin

GitHub'da repository oluşturduktan sonra, size gösterilen sayfada şu komutları göreceksiniz. Terminal'de çalıştırın:

```bash
# Proje dizinine gidin (zaten oradasınız)
cd C:\Users\kadir\nextjs-devops-project

# Remote repository ekleyin (GitHub kullanıcı adınızı yazın)
git remote add origin https://github.com/KULLANICI_ADINIZ/nextjs-devops-project.git

# Branch'i main olarak ayarlayın
git branch -M main

# GitHub'a push edin
git push -u origin main
```

**Örnek:** Eğer GitHub kullanıcı adınız `kadirakdoğan` ise:
```bash
git remote add origin https://github.com/kadirakdoğan/nextjs-devops-project.git
git branch -M main
git push -u origin main
```

#### Adım 3: Authentication

İlk push sırasında GitHub kullanıcı adı ve şifre isteyebilir:
- **Username:** GitHub kullanıcı adınız
- **Password:** GitHub şifreniz (veya Personal Access Token)

**İki faktörlü kimlik doğrulama aktifse:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)" tıklayın
3. Token adı: `nextjs-devops-push`
4. İzinler: `repo` seçin
5. "Generate token" tıklayın
6. Token'ı kopyalayın (bir daha gösterilmeyecek!)
7. Push sırasında şifre yerine bu token'ı kullanın

---

### Yöntem 2: GitHub CLI ile (Alternatif)

GitHub CLI kurulu değil. Eğer kurmak isterseniz:

#### GitHub CLI Kurulumu (Windows)

```powershell
# Winget ile kurulum
winget install --id GitHub.cli

# Veya Chocolatey ile
choco install gh
```

#### GitHub CLI ile Bağlanma

```bash
# GitHub'a giriş yapın
gh auth login

# Repository oluştur ve push et (otomatik)
gh repo create nextjs-devops-project --public --source=. --remote=origin --push
```

---

## ✅ Bağlantı Kontrolü

Push işlemi başarılı olduktan sonra:

```bash
# Remote repository'yi kontrol edin
git remote -v

# Son commit'leri kontrol edin
git log --oneline -5
```

GitHub'da repository sayfanızı açın ve tüm dosyaların göründüğünü kontrol edin.

---

## 🔧 Sorun Giderme

### "remote origin already exists" Hatası
```bash
# Mevcut remote'u silin
git remote remove origin

# Tekrar ekleyin
git remote add origin https://github.com/KULLANICI_ADINIZ/nextjs-devops-project.git
```

### Authentication Hatası
- Personal Access Token kullanın (şifre yerine)
- Token'ın `repo` yetkisi olduğundan emin olun

### "Permission denied" Hatası
- GitHub kullanıcı adınızı ve token'ı kontrol edin
- Repository'nin size ait olduğundan emin olun

---

## 📝 Sonraki Adımlar

1. ✅ GitHub'a push edildi
2. ⏭️ GitHub Secrets ekleyin (Vercel deployment için)
3. ⏭️ GitHub Actions'ı test edin
4. ⏭️ Vercel'e deploy edin

---

## 🔗 Faydalı Linkler

- [GitHub Docs](https://docs.github.com/)
- [Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Git Authentication](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)
