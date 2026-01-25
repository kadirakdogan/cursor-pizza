# Push Sorun Giderme Rehberi

## ❌ Hata
```
fatal: unable to access 'https://github.com/kadirakdogan/cursor-pizza.git/': 
Failed to connect to github.com port 443 via 127.0.0.1
```

## 🔍 Olası Nedenler

1. **İnternet Bağlantısı Sorunu**
2. **Proxy/Firewall Ayarları**
3. **GitHub Erişim Sorunu**
4. **VPN/Proxy Kullanımı**

## ✅ Çözümler

### Çözüm 1: İnternet Bağlantısını Kontrol Edin

```bash
# GitHub'a erişimi test edin
ping github.com
```

### Çözüm 2: Proxy Ayarlarını Kontrol Edin

Eğer proxy kullanıyorsanız:

```bash
# Proxy ayarlarını kontrol edin
git config --global http.proxy
git config --global https.proxy

# Proxy ayarlarını temizleyin (gerekirse)
git config --global --unset http.proxy
git config --global --unset https.proxy
```

### Çözüm 3: SSH Kullanarak Push (Alternatif)

SSH key kuruluysa:

```bash
# Remote URL'yi SSH'a çevirin
git remote set-url origin git@github.com:kadirakdogan/cursor-pizza.git

# Push edin
git push -u origin main
```

### Çözüm 4: GitHub Desktop Kullanın

1. GitHub Desktop uygulamasını indirin
2. Repository'yi açın: `C:\Users\kadir\nextjs-devops-project`
3. "Publish repository" butonuna tıklayın

### Çözüm 5: Manuel Push (Tarayıcı Üzerinden)

1. GitHub'da repository'yi açın: https://github.com/kadirakdogan/cursor-pizza
2. "uploading an existing file" seçeneğini kullanın
3. Dosyaları sürükle-bırak ile yükleyin

## 🔧 Hızlı Test

```bash
# GitHub'a bağlantıyı test edin
curl -I https://github.com

# Git bağlantısını test edin
git ls-remote https://github.com/kadirakdogan/cursor-pizza.git
```

## 📝 Not

Remote repository doğru yapılandırılmış. Sadece bağlantı sorunu var. 
Yukarıdaki çözümlerden birini deneyin.
