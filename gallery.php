<?php
$photesDir = __DIR__ . '/photes/';
if (!is_dir($photesDir)) mkdir($photesDir);
$files = array_diff(scandir($photesDir), ['.','..']);
$imgExt = ['jpg','jpeg','png','gif','webp'];
$vidExt = ['mp4','webm','ogg'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Gallery | Younes Tours</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <style>
        body { background: #fff; margin: 0; }
        .gallery-header { text-align: center; margin: 2.5rem 0 1.5rem 0; }
        .gallery-header h1 { color: #1a2341; font-size: 2.3rem; font-weight: 900; letter-spacing: 2px; }
        .gallery-header p { color: #7d8597; font-size: 1.1rem; margin-top: 0.7rem; }
        .gallery-filters { display: flex; flex-wrap: wrap; gap: 0.7rem; justify-content: center; margin-bottom: 2.2rem; }
        .gallery-filter-btn { background: #f8fbff; color: #134b70; border: 1.5px solid #b6e0fe; border-radius: 8px; padding: 0.5rem 1.3rem; font-size: 1.05rem; font-weight: 700; cursor: pointer; transition: background 0.18s, color 0.18s, border 0.18s; }
        .gallery-filter-btn.active, .gallery-filter-btn:hover { background: #ff9800; color: #fff; border: 1.5px solid #ff9800; }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; max-width: 1100px; margin: auto; padding: 0 2vw 2vw 2vw; }
        .gallery-card { aspect-ratio: 1/1; background: #fff; border-radius: 14px; box-shadow: 0 2px 12px #b6e0fe33; overflow: hidden; transition: box-shadow 0.18s, transform 0.18s; cursor: pointer; position: relative; display: flex; align-items: stretch; }
        .gallery-card img, .gallery-card video { width: 100%; height: 100%; object-fit: cover; transition: transform 0.22s, filter 0.18s; display: block; }
        .gallery-card:hover img, .gallery-card:hover video { transform: scale(1.07); filter: brightness(0.93) drop-shadow(0 0 16px #ff980055); }
        .lightbox { display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100vw; height: 100vh; background: rgba(19,75,112,0.85); align-items: center; justify-content: center; }
        .lightbox.active { display: flex; }
        .lightbox-content { max-width: 90vw; max-height: 80vh; border-radius: 18px; overflow: hidden; background: #fff; box-shadow: 0 8px 32px #134b7077; position: relative; display: flex; flex-direction: column; align-items: center; }
        .lightbox-content img, .lightbox-content video { max-width: 90vw; max-height: 70vh; border-radius: 18px 18px 0 0; background: #b6e0fe22; }
        .lightbox-caption { color: #134b70; font-size: 1.1rem; font-weight: 600; padding: 0.7rem 1.2rem 1.2rem 1.2rem; background: #f8fbff; width: 100%; text-align: center; border-radius: 0 0 18px 18px; }
        .lightbox-close { position: absolute; top: 10px; right: 18px; font-size: 2rem; color: #134b70; background: #fff; border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 8px #b6e0fe33; z-index: 2; border: none; }
        @media (max-width: 700px) { .gallery-header h1 { font-size: 1.3rem; } .gallery-grid { grid-template-columns: 1fr 1fr; gap: 10px; } .gallery-card { border-radius: 8px; } }
        @media (max-width: 500px) { .gallery-grid { grid-template-columns: 1fr; } }
        .active-nav {
          background: #ff9800;
          color: #fff !important;
          border-radius: 6px;
          font-weight: 700;
        }
        .menu .links .link a {
          color: #eeeeeea9 !important;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.5s;
        }
        .menu .links .link a:hover {
          letter-spacing: 1px;
        }
    </style>
</head>
<body>
    <!-- Navbar من الصفحة الرئيسية -->
    <header>
        <div class="nov-container">
            <div class="h_btn">
                <div></div><div></div><div></div>
            </div>
            <div class="logo">
                <h1>Younes <span>Tours</span></h1>
                <i class="fa-solid fa-plane"></i>
            </div>
            <div class="menu">
                <div class="links">
                    <div class="link"><a href="index.html">Home</a></div>
                    <div class="link" id="packages-link"><a href="tours/index.html">Destinations</a></div>
                    <div class="link" id="blog-link"><a href="blogs/index.html">Blog</a></div>
                    <div class="link"><a href="#w_us">About us</a></div>
                    <div class="link"><a href="gallery.php" class="active-nav">Photos</a></div>
                    <div class="link"><a href="#footer">Contact</a></div>
                </div>
                <div class="o-links">
                    <div class="email" id="email"><i class="fa-solid fa-envelope"></i></div>
                    <div class="face" id="face"><i class="fa-brands fa-facebook"></i></div>
                    <div class="insta" id="insta"><i class="fa-brands fa-instagram"></i></div>
                </div>
            </div>
        </div>
    </header>
    <!-- HERO SECTION -->
    <div class="gallery-hero" style="position:relative;min-height:320px;display:flex;align-items:center;justify-content:center;margin-bottom:2.5rem;">
        <div style="position:absolute;inset:0;z-index:1;background:url('IMG/Gallery_imgs/pexels-artem-krapivin-2149275329-30594279.jpg') center center/cover no-repeat;filter:blur(3px) brightness(0.7);"></div>
        <div style="position:absolute;inset:0;z-index:2;background:linear-gradient(120deg,rgba(30,30,30,0.18) 0%,rgba(255,152,0,0.10) 100%);"></div>
        <div style="position:relative;z-index:3;text-align:center;width:100%;max-width:700px;padding:3.5rem 1.5rem 3.5rem 1.5rem;">
            <h1 style="color:#fff;font-size:2.7rem;font-weight:900;letter-spacing:1.5px;margin-bottom:1.1rem;text-shadow:0 4px 32px rgba(0,0,0,0.25);font-family:'Raleway',sans-serif;">Discover the Journey in Pictures</h1>
            <div style="color:#fff;font-size:1.25rem;line-height:1.7;margin-bottom:2.2rem;text-shadow:0 2px 8px rgba(0,0,0,0.18);font-family:'Raleway',sans-serif;">Step into our world of adventure and memories. Explore breathtaking destinations, happy moments, and the spirit of travel through our curated gallery.</div>
            <a href="tours/index.html" style="display:inline-block;background:#ff9800;color:#fff;font-weight:700;font-size:1.1rem;padding:0.9rem 2.2rem;border-radius:8px;text-decoration:none;box-shadow:0 2px 12px #b6e0fe33;transition:background 0.2s;">Explore Destinations</a>
        </div>
    </div>
    <div class="gallery-grid" id="gallery-grid">
      <?php foreach ($files as $file): $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION)); ?>
        <div class="gallery-card">
          <?php if (in_array($ext, $imgExt)): ?>
            <img src="photes/<?=rawurlencode($file)?>" alt="gallery image">
          <?php elseif (in_array($ext, $vidExt)): ?>
            <video src="photes/<?=rawurlencode($file)?>" controls></video>
          <?php endif; ?>
        </div>
      <?php endforeach; ?>
    </div>
    <div class="lightbox" id="lightbox">
        <div class="lightbox-content" id="lightbox-content">
            <button class="lightbox-close" id="lightbox-close"><i class="fa-solid fa-xmark"></i></button>
        </div>
    </div>
    <footer id="footer">
    <div class="f-container">
        <div class="logo">
            <img src="./IMG/WhatsApp_Image_2025-04-24_at_00.43.15_b0a96fa9-removebg-preview (1).png" alt="">
           <div class="text">
                <h2>Younes </h2>
                <h2>tours</h2>
           </div>
        </div>
        <div class="inforamtion">
            <div class="info">
                <div class="i_info">
                    <i class="fa-solid fa-location-dot"></i>
                    <h3> Rua Manuel Rodrigues Abreu, 26, 3800-693 Aveiro, Portugal</h3>
                </div>
                <div class="i_info">
                    <i class="fa-solid fa-phone"></i>
                    <h3> +20 110 007 7315</h3>
                </div>
                <div class="i_info">
                    <i class="fa-solid fa-envelope"></i>
                    <h3> younestours7@gmail.com</h3>
            </div>
            </div>
            <div class="info">
                <h1>pages</h1>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="gallery.php">Gallery</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#w_us">About</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </div>
            <div class="info">
                <h1>Categories</h1>
                <ul>
                    <li><a href="tours/index.html">Egypt tours</a></li>
                    <li><a href="tours/index.html">Egypt tours packages</a></li>
                    <li><a href="tours/index.html">coastal tours</a></li>
                </ul>
            </div>
            <div class="info">
                <h1>follow us</h1>
                <ul>
                    <li><a href="#"><i class="fa-solid fa-share"></i></a></li>
                    <li><a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
                <div class="copyright">
                    <h3> Copyright  2022 Younes Tours. All Rights Reserved.</h3>
                </div>
            </div>
        </div>
    </div>
</footer>
</body>
</html> 