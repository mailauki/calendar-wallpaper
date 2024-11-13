import { Sizes } from ".";

export const sizes: Sizes = {
  "16:9": [
    { width: 3840, height: 2160 },
    { width: 2560, height: 1440 },
    { width: 1920, height: 1080 },
    { width: 1280, height: 720 },
    { width: 640, height: 480 },
  ],
  "9:16": [
    { width: 2160, height: 3840 },
    { width: 1400, height: 2560 },
    { width: 1080, height: 1920 },
    { width: 720, height: 1280 },
    { width: 480, height: 640 },
  ],
  "1:1": [
    { width: 3840, height: 3840 },
    { width: 2048, height: 2048 },
    { width: 1080, height: 1080 },
    { width: 600, height: 600 },
    { width: 400, height: 400 },
  ],
};
