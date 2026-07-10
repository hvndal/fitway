const fs = require('fs');

const oldHtml = fs.readFileSync('old_code.html', 'utf8');
let html = fs.readFileSync('code.html', 'utf8');

// 1. Extract the old 'Our Arsenal' section from oldHtml
const arsenalStart = oldHtml.indexOf('<!-- Our Arsenal (Bento Grid) -->');
const arsenalEnd = oldHtml.indexOf('</section>', arsenalStart) + '</section>'.length;
const oldArsenal = oldHtml.substring(arsenalStart, arsenalEnd);

// 2. Define the new distinct 'Our Services' section
const newServices = `<!-- Our Services -->
<section class="py-section-gap px-gutter bg-surface-container-low" id="services">
<div class="max-w-container-max mx-auto">
    <div class="text-center mb-16">
        <h2 class="font-headline-lg text-headline-lg uppercase text-primary">Our <span class="text-primary-fixed">Services</span></h2>
        <p class="font-body-md text-body-md text-on-surface-variant mt-2 uppercase tracking-[0.2em]">World-class amenities for elite performance</p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Service 1 -->
        <div class="brutalist-border bg-background p-8 flex flex-col items-center text-center hover:bg-surface-container transition-colors group">
            <span class="material-symbols-outlined text-5xl text-primary-fixed mb-6 group-hover:scale-110 transition-transform">fitness_center</span>
            <h3 class="font-label-bold text-label-bold text-primary uppercase mb-3">Gym & Strength</h3>
            <p class="font-body-md text-body-md text-on-surface-variant text-sm">Heavy free weights & elite strength training zones.</p>
        </div>
        <!-- Service 2 -->
        <div class="brutalist-border bg-background p-8 flex flex-col items-center text-center hover:bg-surface-container transition-colors group">
            <span class="material-symbols-outlined text-5xl text-primary-fixed mb-6 group-hover:scale-110 transition-transform">monitor_heart</span>
            <h3 class="font-label-bold text-label-bold text-primary uppercase mb-3">Cardio & CrossFit</h3>
            <p class="font-body-md text-body-md text-on-surface-variant text-sm">High-energy zones for functional movements & HIIT.</p>
        </div>
        <!-- Service 3 -->
        <div class="brutalist-border bg-background p-8 flex flex-col items-center text-center hover:bg-surface-container transition-colors group">
            <span class="material-symbols-outlined text-5xl text-primary-fixed mb-6 group-hover:scale-110 transition-transform">self_improvement</span>
            <h3 class="font-label-bold text-label-bold text-primary uppercase mb-3">Yoga</h3>
            <p class="font-body-md text-body-md text-on-surface-variant text-sm">Find your balance and improve your flexibility.</p>
        </div>
        <!-- Service 4 -->
        <div class="brutalist-border bg-background p-8 flex flex-col items-center text-center hover:bg-surface-container transition-colors group">
            <span class="material-symbols-outlined text-5xl text-primary-fixed mb-6 group-hover:scale-110 transition-transform">spa</span>
            <h3 class="font-label-bold text-label-bold text-primary uppercase mb-3">Spa</h3>
            <p class="font-body-md text-body-md text-on-surface-variant text-sm">Premium recovery and relaxation amenities.</p>
        </div>
        <!-- Service 5 -->
        <div class="brutalist-border bg-background p-8 flex flex-col items-center text-center hover:bg-surface-container transition-colors group">
            <span class="material-symbols-outlined text-5xl text-primary-fixed mb-6 group-hover:scale-110 transition-transform">music_note</span>
            <h3 class="font-label-bold text-label-bold text-primary uppercase mb-3">Dance & Zumba</h3>
            <p class="font-body-md text-body-md text-on-surface-variant text-sm">Keep moving to the rhythm with dynamic classes.</p>
        </div>
        <!-- Service 6 -->
        <div class="brutalist-border bg-background p-8 flex flex-col items-center text-center hover:bg-surface-container transition-colors group">
            <span class="material-symbols-outlined text-5xl text-primary-fixed mb-6 group-hover:scale-110 transition-transform">groups</span>
            <h3 class="font-label-bold text-label-bold text-primary uppercase mb-3">Aerobics & Bhangra</h3>
            <p class="font-body-md text-body-md text-on-surface-variant text-sm">Including high-energy Bolly-X group sessions.</p>
        </div>
        <!-- Service 7 -->
        <div class="brutalist-border bg-background p-8 flex flex-col items-center text-center hover:bg-surface-container transition-colors group">
            <span class="material-symbols-outlined text-5xl text-primary-fixed mb-6 group-hover:scale-110 transition-transform">restaurant_menu</span>
            <h3 class="font-label-bold text-label-bold text-primary uppercase mb-3">Diet Charts</h3>
            <p class="font-body-md text-body-md text-on-surface-variant text-sm">Personalized nutrition plans for your goals.</p>
        </div>
        <!-- Service 8 -->
        <div class="brutalist-border bg-background p-8 flex flex-col items-center text-center hover:bg-surface-container transition-colors group">
            <span class="material-symbols-outlined text-5xl text-primary-fixed mb-6 group-hover:scale-110 transition-transform">sports_martial_arts</span>
            <h3 class="font-label-bold text-label-bold text-primary uppercase mb-3">Personal Training</h3>
            <p class="font-body-md text-body-md text-on-surface-variant text-sm">Expert guidance from certified professionals.</p>
        </div>
    </div>
</div>
</section>
`;

// 3. Find the currently modified "Our Services (Bento Grid)" in code.html and replace it with newServices + oldArsenal
const currentServicesStart = html.indexOf('<!-- Our Services (Bento Grid) -->');
const currentServicesEnd = html.indexOf('</section>', currentServicesStart) + '</section>'.length;

if (currentServicesStart !== -1 && currentServicesEnd !== -1) {
    const combined = newServices + '\n' + oldArsenal;
    html = html.substring(0, currentServicesStart) + combined + html.substring(currentServicesEnd);
    fs.writeFileSync('code.html', html, 'utf8');
    console.log("Successfully restored Arsenal and added new Services section");
} else {
    console.log("Could not find the current Services section to replace.");
}
