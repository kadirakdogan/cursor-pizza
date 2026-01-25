# GitHub'a Proje Yükleme Rehberi

## ✅ Hazır Olanlar
- [x] Git repository başlatıldı
- [x] Tüm dosyalar commit edildi (3 commit)
- [x] Remote repository ayarlandı: `https://github.com/Kadirakd0/cursor-pizza.git`
- [x] Git yapılandırması: `akdoganadir@gmail.com`

## ❌ Sorun
Terminal'den push yapılamıyor (bağlantı hatası). Alternatif yöntemler:

---

## 🚀 Yöntem 1: GitHub Desktop (EN KOLAY - ÖNERİLEN)

### Adımlar:
1. **GitHub Desktop İndirin:**
   - https://desktop.github.com/ adresine gidin
   - "Download for Windows" tıklayın
   - Kurulumu tamamlayın

2. **GitHub Hesabınıza Giriş Yapın:**
   - GitHub Desktop'u açın
   - "Sign in to GitHub.com" tıklayın
   - Kullanıcı adı: `Kadirakd0`
   - Şifrenizi girin

3. **Repository'yi Ekleyin:**
   - "File" → "Add Local Repository"
   - "Choose..." tıklayın
   - Klasörü seçin: `C:\Users\kadir\nextjs-devops-project`
   - "Add repository" tıklayın

4. **Push Edin:**
   - Sol üstte "Publish repository" butonunu göreceksiniz
   - Repository adı: `cursor-pizza` (zaten ayarlı)
   - "Publish repository" tıklayın
   - ✅ Tüm dosyalar GitHub'a yüklenecek!

---

## 🌐 Yöntem 2: GitHub Web Arayüzü (Manuel)

### Adımlar:
1. **GitHub'da Repository'yi Açın:**
   - https://github.com/Kadirakd0/cursor-pizza adresine gidin
   - Repository boş olmalı

2. **Dosyaları Yükleyin:**
   - "uploading an existing file" linkine tıklayın
   - VEYA "Add file" → "Upload files"

3. **Dosyaları Sürükle-Bırak:**
   - `C:\Users\kadir\nextjs-devops-project` klasöründeki tüm dosyaları seçin
   - (node_modules hariç - zaten .gitignore'da)
   - Sürükle-bırak ile yükleyin
   - "Commit changes" tıklayın

**Not:** Bu yöntem uzun sürebilir çünkü her dosyayı manuel yüklemeniz gerekir.

---

## 🔧 Yöntem 3: SSH ile Push (SSH Key Varsa)

Eğer GitHub'da SSH key kuruluysa:

```bash
# Remote URL'yi SSH'a çevirin
git remote set-url origin git@github.com:Kadirakd0/cursor-pizza.git

# Push edin
git push -u origin main
```

---

## 📋 Yöntem 4: ZIP Dosyası Olarak Yükleme

1. **Projeyi ZIP'leyin:**
   - `C:\Users\kadir\nextjs-devops-project` klasörüne sağ tıklayın
   - "Send to" → "Compressed (zipped) folder"

2. **GitHub'a Yükleyin:**
   - GitHub repository'de "Add file" → "Upload files"
   - ZIP dosyasını yükleyin
   - GitHub otomatik olarak açacak

---

## ✅ Önerilen Yöntem

**GitHub Desktop** en kolay ve güvenilir yöntemdir. Otomatik olarak:
- Authentication yapar
- Tüm dosyaları yükler
- Commit geçmişini korur
- Gelecekteki push'ları kolaylaştırır

---

## 🔍 Push Sonrası Kontrol

Yükleme başarılı olduktan sonra:
1. https://github.com/Kadirakd0/cursor-pizza adresine gidin
2. Tüm dosyaların göründüğünü kontrol edin
3. README.md dosyasının düzgün göründüğünü kontrol edin
4. Commit geçmişini kontrol edin (3 commit olmalı)

---

## 📝 Not

Terminal'den push yapılamıyor çünkü:
- Network/proxy sorunu var
- GitHub'a doğrudan bağlantı kurulamıyor

GitHub Desktop bu sorunları otomatik çözer ve daha kolay kullanım sağlar.
