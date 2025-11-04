# วิธีอัพโหลดโฟลเดอร์ `react-component` ขึ้น GitHub (PowerShell)

ไฟล์นี้อธิบายคำสั่งที่ต้องรันบนเครื่อง Windows (PowerShell) เพื่ออัพไฟล์ในโฟลเดอร์ `react-component` ขึ้น GitHub.

หมายเหตุสั้น ๆ ก่อนเริ่ม:
- หากยังไม่ได้ติดตั้ง Git ให้ดาวน์โหลดและติดตั้งจาก: https://git-scm.com/downloads
- หากต้องการใช้ `gh` (GitHub CLI) ให้ติดตั้งจาก: https://cli.github.com/
- ตรวจสอบว่าคุณอยู่ในโฟลเดอร์ที่ต้องการ (ตัวอย่างด้านล่างจะใช้ `c:\Users\132\Documents\Apiwat_it_16\react-component`). ถ้ามีโฟลเดอร์ซ้อนกัน (เช่น `react-component/react-component`) ให้ cd เข้าไปยังโฟลเดอร์ที่ต้องการจริง ๆ ก่อนรันคำสั่ง

1) ตรวจสอบว่า Git ติดตั้งแล้ว

```powershell
git --version
```

ถ้ายังไม่มี ให้ติดตั้งก่อน แล้วตั้งค่าเบื้องต้น:

```powershell
git config --global user.name "ชื่อของคุณ"
git config --global user.email "you@example.com"
```

2) สร้าง repository ใหม่บน GitHub (สองวิธี)

- ทางเว็บ: ไปที่ https://github.com -> New repository -> ตั้งชื่อ (เช่น `react-component`) -> สร้าง repo
- ใช้ GitHub CLI (`gh`):

```powershell
gh auth login
gh repo create <USERNAME>/<REPO> --public --source=. --remote=origin --push
```

3) คำสั่ง PowerShell เพื่ออัพโค้ด (ใช้ถ้าจะทำจากเครื่องและเพิ่ม remote ด้วยตนเอง)

ก่อนอื่นให้อยู่ในโฟลเดอร์ที่ต้องการ (ตัวอย่าง):

```powershell
cd "c:\Users\132\Documents\Apiwat_it_16\react-component"
```

แล้วรันคำสั่งต่อไปนี้ (แก้ `https://github.com/<USERNAME>/<REPO>.git` เป็น URL ของ repo จริง):

```powershell
# เริ่มต้น repo ในเครื่อง (ถ้ายังไม่มี)
git init

# เพิ่มทุกไฟล์ (หรือระบุไฟล์ที่ต้องการ)
git add .

# คอมมิตครั้งแรก
git commit -m "Initial commit"

# ตั้งชื่อ branch หลักเป็น main
git branch -M main

# เพิ่ม remote (เปลี่ยน URL เป็นของคุณ)
git remote add origin https://github.com/<USERNAME>/<REPO>.git

# ดันขึ้น GitHub
git push -u origin main
```

4) หมายเหตุสำคัญ / ปัญหาที่พบบ่อย
- ถ้าขึ้น error ว่า `git` ไม่รู้จัก คือต้องติดตั้ง Git ก่อน
- หากต้องการผลักเฉพาะโฟลเดอร์ย่อย ให้ cd เข้าไปยังโฟลเดอร์นั้นก่อนรันคำสั่ง (เช่น ถ้าโค้ดอยู่ใน `react-component\react-component` ให้ cd เข้าไปก่อน)
- ถ้าต้องการเปลี่ยน URL ของ remote ใช้:

```powershell
git remote set-url origin https://github.com/<USERNAME>/<REPO>.git
```

5) ติดต่อกลับ
- เมื่อคุณมี URL ของ GitHub repo หรือเมื่อติดตั้ง Git เรียบร้อย แจ้งผมมาได้เลย ผมจะช่วยรันคำสั่งที่เหลือ หรือช่วยแก้ปัญหา error ที่ขึ้นให้

---

ไฟล์นี้ถูกสร้างโดยผู้ช่วยเพื่อให้คุณรันขั้นตอนด้วยตัวเองในเครื่อง Windows (PowerShell)
