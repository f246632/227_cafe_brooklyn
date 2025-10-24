/**
 * Café Brooklyn - Gallery & Lightbox
 * Advanced image gallery with lightbox functionality
 */

class Gallery {
    constructor() {
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightboxImage');
        this.lightboxClose = document.getElementById('lightboxClose');
        this.lightboxPrev = document.getElementById('lightboxPrev');
        this.lightboxNext = document.getElementById('lightboxNext');
        this.currentIndex = 0;
        this.images = [];

        this.init();
    }

    init() {
        // Collect all gallery images
        this.galleryItems.forEach((item, index) => {
            const img = item.querySelector('img');
            if (img) {
                this.images.push({
                    src: img.src,
                    alt: img.alt
                });

                // Add click event
                item.addEventListener('click', () => this.openLightbox(index));
            }
        });

        // Lightbox controls
        if (this.lightboxClose) {
            this.lightboxClose.addEventListener('click', () => this.closeLightbox());
        }

        if (this.lightboxPrev) {
            this.lightboxPrev.addEventListener('click', () => this.prevImage());
        }

        if (this.lightboxNext) {
            this.lightboxNext.addEventListener('click', () => this.nextImage());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Close on background click
        if (this.lightbox) {
            this.lightbox.addEventListener('click', (e) => {
                if (e.target === this.lightbox) {
                    this.closeLightbox();
                }
            });
        }

        // Touch/swipe support
        this.addTouchSupport();
    }

    openLightbox(index) {
        this.currentIndex = index;
        this.showImage();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    showImage() {
        const image = this.images[this.currentIndex];
        this.lightboxImage.src = image.src;
        this.lightboxImage.alt = image.alt;

        // Add loading animation
        this.lightboxImage.style.opacity = '0';
        this.lightboxImage.onload = () => {
            this.lightboxImage.style.transition = 'opacity 0.3s ease';
            this.lightboxImage.style.opacity = '1';
        };

        // Update navigation button states
        this.updateNavigationButtons();
    }

    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showImage();
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.showImage();
    }

    updateNavigationButtons() {
        // Hide buttons if only one image
        if (this.images.length <= 1) {
            if (this.lightboxPrev) this.lightboxPrev.style.display = 'none';
            if (this.lightboxNext) this.lightboxNext.style.display = 'none';
        } else {
            if (this.lightboxPrev) this.lightboxPrev.style.display = 'flex';
            if (this.lightboxNext) this.lightboxNext.style.display = 'flex';
        }
    }

    handleKeyboard(e) {
        if (!this.lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                this.closeLightbox();
                break;
            case 'ArrowLeft':
                this.prevImage();
                break;
            case 'ArrowRight':
                this.nextImage();
                break;
        }
    }

    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;

        if (this.lightbox) {
            this.lightbox.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            this.lightbox.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe(touchStartX, touchEndX);
            }, { passive: true });
        }
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next image
                this.nextImage();
            } else {
                // Swipe right - previous image
                this.prevImage();
            }
        }
    }
}

// ==============================================
// Image Preloader
// ==============================================
class ImagePreloader {
    constructor() {
        this.images = [];
        this.init();
    }

    init() {
        // Collect all image sources
        const allImages = document.querySelectorAll('img');
        allImages.forEach(img => {
            if (img.dataset.src) {
                this.images.push(img.dataset.src);
            }
        });

        // Preload critical images
        this.preloadCritical();
    }

    preloadCritical() {
        const criticalImages = [
            'images/downloaded/streetview-1.jpg',
            'images/downloaded/streetview-2.jpg'
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
}

// ==============================================
// Gallery Filtering (for future expansion)
// ==============================================
class GalleryFilter {
    constructor() {
        this.filters = document.querySelectorAll('.gallery-filter');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.init();
    }

    init() {
        if (this.filters.length === 0) return;

        this.filters.forEach(filter => {
            filter.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleFilter(filter.dataset.filter);
                this.setActiveFilter(filter);
            });
        });
    }

    handleFilter(category) {
        this.galleryItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease';
            } else {
                item.style.display = 'none';
            }
        });
    }

    setActiveFilter(activeFilter) {
        this.filters.forEach(filter => {
            filter.classList.remove('active');
        });
        activeFilter.classList.add('active');
    }
}

// ==============================================
// Lazy Load Gallery Images
// ==============================================
class GalleryLazyLoad {
    constructor() {
        this.galleryImages = document.querySelectorAll('.gallery-item img');
        this.init();
    }

    init() {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.01
        };

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    imageObserver.unobserve(img);
                }
            });
        }, options);

        this.galleryImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    loadImage(img) {
        // Add loading effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';

        // Load image
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }

        img.onload = () => {
            img.style.opacity = '1';
            img.classList.add('loaded');
        };
    }
}

// ==============================================
// Gallery Analytics (Optional)
// ==============================================
class GalleryAnalytics {
    constructor() {
        this.init();
    }

    init() {
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.trackImageView(index);
            });
        });
    }

    trackImageView(index) {
        // Track which images are viewed most
        // In production, this would send data to analytics service
        console.log(`Image ${index + 1} viewed`);

        // Example: Google Analytics event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'image_view', {
                'event_category': 'gallery',
                'event_label': `image_${index + 1}`,
                'value': index + 1
            });
        }
    }
}

// ==============================================
// Image Zoom Feature
// ==============================================
class ImageZoom {
    constructor() {
        this.zoomLevel = 1;
        this.maxZoom = 3;
        this.minZoom = 1;
        this.init();
    }

    init() {
        const lightboxImage = document.getElementById('lightboxImage');

        if (lightboxImage) {
            // Double-click to zoom
            lightboxImage.addEventListener('dblclick', () => {
                this.toggleZoom(lightboxImage);
            });

            // Mouse wheel zoom
            lightboxImage.addEventListener('wheel', (e) => {
                e.preventDefault();
                this.handleWheel(e, lightboxImage);
            }, { passive: false });
        }
    }

    toggleZoom(img) {
        if (this.zoomLevel === 1) {
            this.zoomLevel = 2;
        } else {
            this.zoomLevel = 1;
        }
        this.applyZoom(img);
    }

    handleWheel(e, img) {
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        this.zoomLevel = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoomLevel + delta));
        this.applyZoom(img);
    }

    applyZoom(img) {
        img.style.transform = `scale(${this.zoomLevel})`;
        img.style.transition = 'transform 0.3s ease';
        img.style.cursor = this.zoomLevel > 1 ? 'zoom-out' : 'zoom-in';
    }
}

// ==============================================
// Initialize Gallery Components
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
    new ImagePreloader();
    new GalleryFilter();
    new GalleryLazyLoad();
    new GalleryAnalytics();
    new ImageZoom();

    console.log('Gallery initialized with advanced features! 📸');
});
