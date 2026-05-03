# Vercel Readiness Checklist

This project is configured as a static multi-page site for Vercel using `vercel.json`.

## Before deploying
1. Confirm your production domain is set in Vercel Project > Domains.
2. If your final domain is not `kanunkafc.com`, update canonical and Open Graph URLs in HTML files.
3. Verify all required environment variables (if any) are set in Vercel Project > Settings > Environment Variables.

## After each deployment
1. Open `/`, `/about`, `/matches`, `/players`, `/tickets`, `/news`, `/gallery`, and `/contact` to confirm rewrites and page loads.
2. Check DevTools > Network and confirm response headers include:
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Cache-Control` values from `vercel.json`
3. Verify `404.html` is served for unknown routes.
4. Run a Lighthouse test on the deployed URL and review Performance, SEO, and Best Practices.

## Ongoing optimization
1. Convert heavy JPG images in `img/` to modern formats (WebP/AVIF) where practical.
2. Keep static asset file names versioned when making major visual/JS updates for safer browser cache refreshes.
3. Re-run Lighthouse after large media or layout updates.