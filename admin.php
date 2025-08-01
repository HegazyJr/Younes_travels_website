<?php
// إعدادات المسار
$photesDir = __DIR__ . '/photes/';
if (!is_dir($photesDir)) mkdir($photesDir);

// رسائل العمليات
$msg = '';

// حذف ملف
if (isset($_GET['delete'])) {
    $file = basename($_GET['delete']);
    $filePath = $photesDir . $file;
    if (file_exists($filePath)) {
        unlink($filePath);
        $msg = 'تم حذف الملف بنجاح.';
    } else {
        $msg = 'الملف غير موجود.';
    }
}

// رفع ملفات
if (isset($_FILES['files'])) {
    $uploaded = 0;
    foreach ($_FILES['files']['tmp_name'] as $i => $tmp) {
        $name = basename($_FILES['files']['name'][$i]);
        if ($tmp && $name && move_uploaded_file($tmp, $photesDir . $name)) $uploaded++;
    }
    $msg = $uploaded ? "تم رفع $uploaded ملف بنجاح." : "لم يتم رفع أي ملف.";
}

// جلب كل الملفات
$files = array_diff(scandir($photesDir), ['.','..']);
$imgExt = ['jpg','jpeg','png','gif','webp'];
$vidExt = ['mp4','webm','ogg'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery Control Panel</title>
  <link rel="stylesheet" href="style.css">
  <style>
    body { background: #f8fbff; font-family: 'Raleway', sans-serif; }
    .admin-container { max-width: 900px; margin: 40px auto; background: #fff; border-radius: 14px; box-shadow: 0 2px 16px #b6e0fe55; padding: 2.5rem 2rem; }
    h1 { color: #134b70; text-align: center; margin-bottom: 1.2rem; }
    .msg { background: #e0f7fa; color: #134b70; border-radius: 8px; padding: 0.7rem 1.2rem; margin-bottom: 1.5rem; text-align: center; font-weight: 700; }
    .upload-form { display: flex; gap: 1rem; margin-bottom: 2.5rem; }
    .upload-form input[type="file"] { flex: 1; }
    .upload-form button { background: #ff9800; color: #fff; border: none; border-radius: 8px; padding: 0.7rem 2rem; font-size: 1.1rem; font-weight: 700; cursor: pointer; transition: background 0.18s; }
    .upload-form button:hover { background: #134b70; }
    .gallery-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 22px; }
    .gallery-item { background: #f8fbff; border-radius: 12px; box-shadow: 0 1px 8px #b6e0fe33; padding: 0.7rem; display: flex; flex-direction: column; align-items: center; position: relative; transition: box-shadow 0.18s; }
    .gallery-item img, .gallery-item video { width: 100%; max-height: 180px; object-fit: cover; border-radius: 8px; margin-bottom: 0.7rem; cursor: pointer; transition: box-shadow 0.18s, transform 0.18s; }
    .gallery-item img:hover, .gallery-item video:hover { box-shadow: 0 2px 16px #ff980055; transform: scale(1.04); }
    .delete-btn { background: #e53935; color: #fff; border: none; border-radius: 6px; padding: 0.3rem 1.1rem; font-size: 1rem; font-weight: 700; cursor: pointer; position: absolute; top: 10px; right: 10px; transition: background 0.18s; z-index: 2; }
    .delete-btn:hover { background: #b71c1c; }
    .filename { font-size: 0.97rem; color: #134b70; word-break: break-all; text-align: center; margin-bottom: 0.3rem; }
    .file-count { color: #ff9800; font-size: 1.1rem; font-weight: 700; text-align: center; margin-bottom: 1.2rem; }
    @media (max-width: 600px) { .admin-container { padding: 1rem 0.3rem; } .gallery-list { grid-template-columns: 1fr 1fr; } }
    /* Lightbox */
    .lightbox { display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100vw; height: 100vh; background: rgba(19,75,112,0.85); align-items: center; justify-content: center; }
    .lightbox.active { display: flex; }
    .lightbox-content { max-width: 90vw; max-height: 80vh; border-radius: 18px; overflow: hidden; background: #fff; box-shadow: 0 8px 32px #134b7077; position: relative; display: flex; flex-direction: column; align-items: center; }
    .lightbox-content img, .lightbox-content video { max-width: 90vw; max-height: 70vh; border-radius: 18px 18px 0 0; background: #b6e0fe22; }
    .lightbox-close { position: absolute; top: 10px; right: 18px; font-size: 2rem; color: #134b70; background: #fff; border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 8px #b6e0fe33; z-index: 2; border: none; }
  </style>
</head>
<body>
  <div class="admin-container">
    <h1>Gallery Control Panel</h1>
    <?php if ($msg): ?><div class="msg"><?=$msg?></div><?php endif; ?>
    <div class="file-count">عدد الملفات: <?=count($files)?></div>
    <form class="upload-form" method="post" enctype="multipart/form-data">
      <input type="file" name="files[]" multiple accept="image/*,video/*">
      <button type="submit">Upload</button>
    </form>
    <div class="gallery-list">
      <?php foreach ($files as $file): $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION)); ?>
        <div class="gallery-item">
          <?php if (in_array($ext, $imgExt)): ?>
            <img src="photes/<?=rawurlencode($file)?>" alt="gallery image" onclick="openLightbox('photes/<?=rawurlencode($file)?>', 'img')">
          <?php elseif (in_array($ext, $vidExt)): ?>
            <video src="photes/<?=rawurlencode($file)?>" controls onclick="openLightbox('photes/<?=rawurlencode($file)?>', 'video')"></video>
          <?php endif; ?>
          <div class="filename"><?=htmlspecialchars($file)?></div>
          <a href="?delete=<?=urlencode($file)?>" class="delete-btn" onclick="return confirm('هل أنت متأكد أنك تريد حذف هذا الملف؟')">حذف</a>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
  <!-- Lightbox -->
  <div class="lightbox" id="lightbox">
    <div class="lightbox-content" id="lightbox-content">
      <button class="lightbox-close" id="lightbox-close" onclick="closeLightbox()">&times;</button>
    </div>
  </div>
  <script>
    function openLightbox(src, type) {
      var lb = document.getElementById('lightbox');
      var content = document.getElementById('lightbox-content');
      content.innerHTML = '<button class="lightbox-close" id="lightbox-close" onclick="closeLightbox()">&times;</button>';
      if(type === 'img') {
        content.innerHTML += '<img src="'+src+'" style="max-width:90vw;max-height:70vh;">';
      } else {
        content.innerHTML += '<video src="'+src+'" controls autoplay style="max-width:90vw;max-height:70vh;"></video>';
      }
      lb.classList.add('active');
    }
    function closeLightbox() {
      document.getElementById('lightbox').classList.remove('active');
    }
    // إغلاق الليت بوكس عند الضغط خارج المحتوى
    document.getElementById('lightbox').onclick = function(e) {
      if(e.target === this) closeLightbox();
    }
  </script>
</body>
</html> 