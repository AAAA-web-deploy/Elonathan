export type DisplayVariant = { path: string; w: number; h: number };
export type DisplayRecord = { src: string; width: number; height: number; variants: DisplayVariant[] };
export const displayImages: Record<string, DisplayRecord> = {
  "/assets/ai/friends.webp": {
    "src": "/assets/display/ai/friends-512.webp",
    "width": 512,
    "height": 512,
    "variants": [
      {
        "path": "/assets/display/ai/friends-480.webp",
        "w": 480,
        "h": 480
      },
      {
        "path": "/assets/display/ai/friends-512.webp",
        "w": 512,
        "h": 512
      }
    ]
  },
  "/assets/ai/roadster.webp": {
    "src": "/assets/display/ai/roadster-960.webp",
    "width": 1672,
    "height": 941,
    "variants": [
      {
        "path": "/assets/display/ai/roadster-480.webp",
        "w": 480,
        "h": 270
      },
      {
        "path": "/assets/display/ai/roadster-960.webp",
        "w": 960,
        "h": 540
      }
    ]
  },
  "/assets/ai/solo-rocket.webp": {
    "src": "/assets/display/ai/solo-rocket-512.webp",
    "width": 512,
    "height": 512,
    "variants": [
      {
        "path": "/assets/display/ai/solo-rocket-480.webp",
        "w": 480,
        "h": 480
      },
      {
        "path": "/assets/display/ai/solo-rocket-512.webp",
        "w": 512,
        "h": 512
      }
    ]
  },
  "/assets/ai/solo.webp": {
    "src": "/assets/display/ai/solo-960.webp",
    "width": 1254,
    "height": 1254,
    "variants": [
      {
        "path": "/assets/display/ai/solo-480.webp",
        "w": 480,
        "h": 480
      },
      {
        "path": "/assets/display/ai/solo-960.webp",
        "w": 960,
        "h": 960
      }
    ]
  },
  "/assets/ai/sunrise.webp": {
    "src": "/assets/display/ai/sunrise-512.webp",
    "width": 512,
    "height": 512,
    "variants": [
      {
        "path": "/assets/display/ai/sunrise-480.webp",
        "w": 480,
        "h": 480
      },
      {
        "path": "/assets/display/ai/sunrise-512.webp",
        "w": 512,
        "h": 512
      }
    ]
  },
  "/assets/brand/duo.webp": {
    "src": "/assets/display/brand/duo-960.webp",
    "width": 1536,
    "height": 1024,
    "variants": [
      {
        "path": "/assets/display/brand/duo-480.webp",
        "w": 480,
        "h": 320
      },
      {
        "path": "/assets/display/brand/duo-960.webp",
        "w": 960,
        "h": 640
      }
    ]
  },
  "/assets/brand/logo.png": {
    "src": "/assets/display/brand/logo-960.webp",
    "width": 1254,
    "height": 1254,
    "variants": [
      {
        "path": "/assets/display/brand/logo-480.webp",
        "w": 480,
        "h": 480
      },
      {
        "path": "/assets/display/brand/logo-960.webp",
        "w": 960,
        "h": 960
      }
    ]
  },
  "/assets/brand/solo-alt.webp": {
    "src": "/assets/display/brand/solo-alt-960.webp",
    "width": 1385,
    "height": 1136,
    "variants": [
      {
        "path": "/assets/display/brand/solo-alt-480.webp",
        "w": 480,
        "h": 394
      },
      {
        "path": "/assets/display/brand/solo-alt-960.webp",
        "w": 960,
        "h": 787
      }
    ]
  },
  "/assets/brand/solo.webp": {
    "src": "/assets/display/brand/solo-960.webp",
    "width": 1254,
    "height": 1254,
    "variants": [
      {
        "path": "/assets/display/brand/solo-480.webp",
        "w": 480,
        "h": 480
      },
      {
        "path": "/assets/display/brand/solo-960.webp",
        "w": 960,
        "h": 960
      }
    ]
  },
  "/assets/meme-real/2014-bw-detail.webp": {
    "src": "/assets/display/meme-real/2014-bw-detail-492.webp",
    "width": 492,
    "height": 476,
    "variants": [
      {
        "path": "/assets/display/meme-real/2014-bw-detail-480.webp",
        "w": 480,
        "h": 464
      },
      {
        "path": "/assets/display/meme-real/2014-bw-detail-492.webp",
        "w": 492,
        "h": 476
      }
    ]
  },
  "/assets/meme-real/2014-bw.webp": {
    "src": "/assets/display/meme-real/2014-bw-960.webp",
    "width": 1400,
    "height": 1050,
    "variants": [
      {
        "path": "/assets/display/meme-real/2014-bw-480.webp",
        "w": 480,
        "h": 360
      },
      {
        "path": "/assets/display/meme-real/2014-bw-960.webp",
        "w": 960,
        "h": 720
      }
    ]
  },
  "/assets/meme-real/2020-bw.webp": {
    "src": "/assets/display/meme-real/2020-bw-960.webp",
    "width": 1400,
    "height": 1050,
    "variants": [
      {
        "path": "/assets/display/meme-real/2020-bw-480.webp",
        "w": 480,
        "h": 360
      },
      {
        "path": "/assets/display/meme-real/2020-bw-960.webp",
        "w": 960,
        "h": 720
      }
    ]
  },
  "/assets/meme-real/2022-bw.webp": {
    "src": "/assets/display/meme-real/2022-bw-960.webp",
    "width": 1400,
    "height": 1050,
    "variants": [
      {
        "path": "/assets/display/meme-real/2022-bw-480.webp",
        "w": 480,
        "h": 360
      },
      {
        "path": "/assets/display/meme-real/2022-bw-960.webp",
        "w": 960,
        "h": 720
      }
    ]
  },
  "/assets/meme-real/2022-color.webp": {
    "src": "/assets/display/meme-real/2022-color-960.webp",
    "width": 1400,
    "height": 1050,
    "variants": [
      {
        "path": "/assets/display/meme-real/2022-color-480.webp",
        "w": 480,
        "h": 360
      },
      {
        "path": "/assets/display/meme-real/2022-color-960.webp",
        "w": 960,
        "h": 720
      }
    ]
  },
  "/assets/real/1886.png": {
    "src": "/assets/display/real/1886-732.webp",
    "width": 732,
    "height": 548,
    "variants": [
      {
        "path": "/assets/display/real/1886-480.webp",
        "w": 480,
        "h": 359
      },
      {
        "path": "/assets/display/real/1886-732.webp",
        "w": 732,
        "h": 548
      }
    ]
  },
  "/assets/real/2014.jpg": {
    "src": "/assets/display/real/2014-960.webp",
    "width": 1024,
    "height": 768,
    "variants": [
      {
        "path": "/assets/display/real/2014-480.webp",
        "w": 480,
        "h": 360
      },
      {
        "path": "/assets/display/real/2014-960.webp",
        "w": 960,
        "h": 720
      }
    ]
  },
  "/assets/real/2020.jpg": {
    "src": "/assets/display/real/2020-960.webp",
    "width": 5312,
    "height": 2988,
    "variants": [
      {
        "path": "/assets/display/real/2020-480.webp",
        "w": 480,
        "h": 270
      },
      {
        "path": "/assets/display/real/2020-960.webp",
        "w": 960,
        "h": 540
      }
    ]
  },
  "/assets/real/2022.jpg": {
    "src": "/assets/display/real/2022-960.webp",
    "width": 8368,
    "height": 5584,
    "variants": [
      {
        "path": "/assets/display/real/2022-480.webp",
        "w": 480,
        "h": 320
      },
      {
        "path": "/assets/display/real/2022-960.webp",
        "w": 960,
        "h": 641
      }
    ]
  },
  "/assets/timeline/2026.webp": {
    "src": "/assets/display/timeline/2026-960.webp",
    "width": 1672,
    "height": 941,
    "variants": [
      {
        "path": "/assets/display/timeline/2026-480.webp",
        "w": 480,
        "h": 270
      },
      {
        "path": "/assets/display/timeline/2026-960.webp",
        "w": 960,
        "h": 540
      }
    ]
  },
  "/assets/timeline/2032.webp": {
    "src": "/assets/display/timeline/2032-960.webp",
    "width": 1672,
    "height": 941,
    "variants": [
      {
        "path": "/assets/display/timeline/2032-480.webp",
        "w": 480,
        "h": 270
      },
      {
        "path": "/assets/display/timeline/2032-960.webp",
        "w": 960,
        "h": 540
      }
    ]
  }
};
