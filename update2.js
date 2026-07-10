const fs = require('fs');

let html = fs.readFileSync('code.html', 'utf8');

// 1. Update Hero Subheadline
html = html.replace(
    `Calculated aggression meets digital precision. Join Fitway's elite performance sanctuary where we forge champions out of pure grit.`,
    `A certified, world-class luxury gym with all amenities. Join Fitway's elite performance sanctuary where we forge champions out of pure grit.`
);

// 2. Replace Arsenal with Services
const servicesSection = `<!-- Our Services (Bento Grid) -->
<section class="py-section-gap px-gutter max-w-container-max mx-auto" id="services">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 class="font-headline-lg text-headline-lg uppercase text-primary">Our <span class="text-primary-fixed">Services</span></h2>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">World-class machinery and premium amenities for elite performance.</p>
</div>
<div class="hidden md:block h-1 w-32 bg-primary-fixed mb-4"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[700px]">

<!-- Gym & Strength -->
<div class="md:col-span-7 relative group overflow-hidden brutalist-border bg-surface-container h-[350px] lg:h-auto">
<div class="absolute inset-0 z-0">
<div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('./images/weight_training.jpg')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90"></div>
</div>
<div class="relative z-10 h-full p-8 flex flex-col justify-end">
<h3 class="font-headline-md text-headline-md text-primary uppercase">Gym & Strength</h3>
<p class="font-body-md text-body-md text-on-surface-variant mt-2 max-w-md">30,000 sq ft of pure iron. Custom-built platforms and elite strength equipment.</p>
</div>
</div>

<!-- Cardio & Crossfit -->
<div class="md:col-span-5 relative group overflow-hidden brutalist-border bg-surface-container h-[350px] lg:h-auto">
<div class="absolute inset-0 z-0">
<div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('./images/cardio_zone.jpg')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90"></div>
</div>
<div class="relative z-10 h-full p-8 flex flex-col justify-end">
<h3 class="font-headline-md text-headline-md text-primary uppercase">Cardio & CrossFit</h3>
<p class="font-body-md text-body-md text-on-surface-variant mt-2">High-energy zones for functional movements, HIIT, and endurance.</p>
</div>
</div>

<!-- Studio Classes -->
<div class="md:col-span-7 relative group overflow-hidden brutalist-border bg-surface-container h-[350px] lg:h-auto">
<div class="absolute inset-0 z-0">
<div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('./images/gallery1.jpg')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90"></div>
</div>
<div class="relative z-10 h-full p-8 flex flex-col justify-end items-start">
<h3 class="font-headline-md text-headline-md text-primary uppercase">Studio Classes</h3>
<p class="font-body-md text-body-md text-on-surface-variant mt-2 mb-6 max-w-xl">Dynamic group sessions to keep you moving to the rhythm.</p>
<div class="flex flex-wrap gap-2">
    <span class="bg-primary/10 text-primary border border-primary/50 px-3 py-1 font-label-bold text-xs uppercase backdrop-blur-md">Yoga</span>
    <span class="bg-primary/10 text-primary border border-primary/50 px-3 py-1 font-label-bold text-xs uppercase backdrop-blur-md">Zumba</span>
    <span class="bg-primary/10 text-primary border border-primary/50 px-3 py-1 font-label-bold text-xs uppercase backdrop-blur-md">Aerobics</span>
    <span class="bg-primary/10 text-primary border border-primary/50 px-3 py-1 font-label-bold text-xs uppercase backdrop-blur-md">Dance</span>
    <span class="bg-primary/10 text-primary border border-primary/50 px-3 py-1 font-label-bold text-xs uppercase backdrop-blur-md">Bhangra</span>
    <span class="bg-primary/10 text-primary border border-primary/50 px-3 py-1 font-label-bold text-xs uppercase backdrop-blur-md">Bolly-X</span>
</div>
</div>
</div>

<!-- Premium Amenities -->
<div class="md:col-span-5 relative group overflow-hidden brutalist-border bg-surface-container h-[350px] lg:h-auto">
<div class="absolute inset-0 z-0">
<div class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('./images/gallery4.jpg')"></div>
<div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90"></div>
</div>
<div class="relative z-10 h-full p-8 flex flex-col justify-end items-start md:items-end md:text-right">
<h3 class="font-headline-md text-headline-md text-primary uppercase">Premium Amenities</h3>
<p class="font-body-md text-body-md text-on-surface-variant mt-2 mb-6 max-w-xl">Everything you need for recovery and personalized progress.</p>
<div class="flex flex-wrap gap-2 md:justify-end">
    <span class="bg-primary-fixed text-on-primary-fixed border border-primary-fixed px-3 py-1 font-label-bold text-xs uppercase">Spa</span>
    <span class="bg-primary-fixed text-on-primary-fixed border border-primary-fixed px-3 py-1 font-label-bold text-xs uppercase">Diet Charts</span>
    <span class="bg-primary-fixed text-on-primary-fixed border border-primary-fixed px-3 py-1 font-label-bold text-xs uppercase">Personal Training</span>
</div>
</div>
</div>

</div>
</section>
`;

const arsenalStart = html.indexOf('<!-- Our Arsenal (Bento Grid) -->');
const arsenalEnd = html.indexOf('</section>', arsenalStart) + '</section>'.length;
if (arsenalStart !== -1 && arsenalEnd !== -1) {
    html = html.substring(0, arsenalStart) + servicesSection + html.substring(arsenalEnd);
}

// 3. Replace Footer content
const newFooterContent = `<div class="md:col-span-1">
<div class="font-headline-lg text-headline-lg text-primary uppercase mb-6">FITWAY</div>
<p class="font-body-md text-body-md text-on-surface-variant">A certified, world-class luxury gym with all amenities.</p>
</div>
<div class="md:col-span-1">
<h4 class="font-label-bold text-label-bold text-primary mb-6 uppercase">Timing</h4>
<ul class="space-y-4">
<li><p class="font-body-md text-body-md text-on-surface-variant"><strong class="text-primary-fixed">Mon - Sat:</strong> 5:30 AM - 10:00 PM</p></li>
<li><p class="font-body-md text-body-md text-on-surface-variant"><strong class="text-primary-fixed">Sun:</strong> 5:00 PM - 10:00 PM</p></li>
</ul>
</div>
<div class="md:col-span-1">
<h4 class="font-label-bold text-label-bold text-primary mb-6 uppercase">Follow Us</h4>
<div class="flex gap-4">
    <a href="#" class="text-on-surface-variant hover:text-primary-fixed transition-colors flex items-center justify-center w-12 h-12 border border-outline rounded-full">
        <!-- SVG for Facebook -->
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
    </a>
    <a href="#" class="text-on-surface-variant hover:text-primary-fixed transition-colors flex items-center justify-center w-12 h-12 border border-outline rounded-full">
        <!-- SVG for Instagram -->
        <svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
    </a>
</div>
</div>
<div class="md:col-span-1">
<h4 class="font-label-bold text-label-bold text-primary mb-6 uppercase">Contact</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-4">SCO 34-35, Sector 67, Sahibzada Ajit Singh Nagar, Punjab.</p>
<p class="font-label-bold text-label-bold text-primary-fixed text-lg">+91 6239613249</p>
</div>`;

const footerStart = html.indexOf('<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-gutter py-section-gap max-w-container-max mx-auto">');
const footerEnd = html.indexOf('</div>\n<div class="border-t border-outline-variant/30 py-8 px-gutter">', footerStart);

if (footerStart !== -1 && footerEnd !== -1) {
    const prefix = '<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-gutter py-section-gap max-w-container-max mx-auto">\n';
    html = html.substring(0, footerStart) + prefix + newFooterContent + "\n" + html.substring(footerEnd);
}

fs.writeFileSync('code.html', html, 'utf8');
console.log("Updated services and footer");
